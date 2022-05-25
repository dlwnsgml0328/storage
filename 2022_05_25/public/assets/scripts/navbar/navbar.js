var NavBar = (function () {
    'use strict';

    class Dom {
      addClass(element, classname) {
        if (!element) return;
        if (this.hasClass(element, classname)) return;
        if (element.classList.length === 0) element.className = classname;else element.className = element.className + ' ' + classname;
        element.className = element.className.replace(/  +/g, ' ');
      }

      removeClass(element, classname) {
        if (!element) return;

        if (element.classList.length > 0) {
          let i, j, imax, jmax;
          let classesToDel = classname.split(' ');

          for (i = 0, imax = classesToDel.length; i < imax; ++i) {
            if (!classesToDel[i]) continue;
            let classtoDel = classesToDel[i];
            let sClassName = '';
            let currentClasses = element.className.split(' ');

            for (j = 0, jmax = currentClasses.length; j < jmax; ++j) {
              if (!currentClasses[j]) continue;
              if (currentClasses[j] !== classtoDel) sClassName += currentClasses[j] + ' ';
            }

            element.className = sClassName.trim();
          }

          if (element.className === '') element.removeAttribute('class');
        }
      }

      hasClass(element, classname) {
        if (!element) return false;

        try {
          let s = element.getAttribute('class');
          return new RegExp('\\b' + classname + '\\b').test(s);
        } catch (e) {// Do Nothing
        }
      }

    }

    const dom = new Dom();

    class NavBar {
      constructor(settings = {}) {
        const defaults = {// onSearch: (keywords)=>{
          //     alert(keywords)
          // }
        };
        this.settings = Object.assign(this, defaults, settings);
      }

      init() {
        let menuLIs = document.querySelectorAll('.is-menu li');
        menuLIs.forEach(menuLI => {
          const more = menuLI.querySelector('span');
          if (more) more.addEventListener('click', e => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth >= 1024) return;
            const subMenu = menuLI.querySelector('ul');

            if (subMenu) {
              if (dom.hasClass(subMenu, 'active')) {
                dom.removeClass(subMenu, 'active');
                subMenu.style.display = '';
              } else {
                dom.addClass(subMenu, 'active'); // setTimeout(()=>{

                subMenu.style.display = 'block'; //slide down
                // }, 300);
              }
            }

            e.preventDefault();
            e.stopImmediatePropagation();
          });

          if (menuLI.querySelector('a').getAttribute('href') === 'javascript:' || menuLI.querySelector('a').getAttribute('href') === '') {
            menuLI.addEventListener('click', e => {

              const subMenu = menuLI.querySelector('ul');
              const viewportWidth = window.innerWidth;

              if (viewportWidth >= 1024) {
                // desktop
                // if(subMenu) if(subMenu.querySelector('li')) {
                //     // has child
                //     // Ex. share menu, has: fb, twitter, etc as sub menu. the menu itself should not clickable on desktop.
                //     // hover will opens the sub menu.
                //     e.preventDefault();
                //     e.stopImmediatePropagation();
                // }
                e.preventDefault();
                e.stopImmediatePropagation();
                return;
              } // mobile


              if (subMenu) {
                if (dom.hasClass(subMenu, 'active')) {
                  dom.removeClass(subMenu, 'active');
                  subMenu.style.display = '';
                } else {
                  dom.addClass(subMenu, 'active');
                  setTimeout(() => {
                    subMenu.style.display = 'block'; //slide down
                  }, 0);
                }
              }

              e.preventDefault();
              e.stopImmediatePropagation();
            });
          } else {
            // Close navbar on mobile after menu click
            menuLI.addEventListener('click', () => {
              const viewportWidth = window.innerWidth;
              if (viewportWidth < 1024) {
                const toggle = document.querySelector('#is-menu-toggle');
                toggle.click();
              }
            });
          }

          menuLI.addEventListener('mouseleave', e => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 1024) return;
            this.timer = setTimeout(() => {
              const subMenu = menuLI.querySelector('ul');
              if (subMenu) dom.removeClass(subMenu, 'active');
            }, 200);
            e.preventDefault();
            e.stopImmediatePropagation();
          });
          menuLI.addEventListener('mouseenter', e => {
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 1024) return;
            if (this.staticClose) return;
            const div = document.querySelector('.is-menu-search-input');
            if (dom.hasClass(div, 'active')) return; // don't continue if search bar active

            clearTimeout(this.timer);
            const parentUL = menuLI.closest('ul');

            if (!menuLI.querySelector('ul')) {
              // don't have sub menu
              let elms = parentUL.querySelectorAll('li');
              elms.forEach(elm => {
                const subMenu = elm.querySelector('ul');
                dom.removeClass(subMenu, 'active'); //close all submenu
              });
              return true;
            }

            if (dom.hasClass(parentUL, 'is-menu-links')) {
              //1st (top) level
              let elms = parentUL.querySelectorAll('li');
              elms.forEach(elm => {
                if (elm !== menuLI) {
                  //close siblings, except current
                  const subMenu = elm.querySelector('ul');
                  dom.removeClass(subMenu, 'active');
                }
              }); //close all submenu

              elms = document.querySelectorAll('.is-menu > ul > li ul');
              elms.forEach(elm => {
                const subMenu = elm.querySelector('ul');
                dom.removeClass(subMenu, 'active');
              });
            }

            if (dom.hasClass(parentUL, 'active') && !dom.hasClass(parentUL, 'is-menu-links')) {
              //other levels
              const elms = parentUL.querySelectorAll('li');
              elms.forEach(elm => {
                //close siblings, except current
                if (elm !== menuLI) {
                  const subMenu = elm.querySelector('ul');
                  dom.removeClass(subMenu, 'active');
                }
              });
            }

            const subMenu = menuLI.querySelector('ul');
            if (subMenu) dom.addClass(subMenu, 'active');
            e.preventDefault();
            e.stopImmediatePropagation();
          });
        });
        const toggle = document.querySelector('#is-menu-toggle');
        toggle.addEventListener('click', e => {
          const menu = document.querySelector('.is-menu');

          if (menu.style.right === '0px') {
            dom.removeClass(toggle, 'active');
            menu.style.right = '-1000px';
            const overlay = document.querySelector('.is-menu-overlay');
            dom.removeClass(overlay, 'active');
            document.querySelector('.is-topbar-menu').style.paddingRight = '0px'; // normalize after scrollbar is displayed again, so that hamburger menu position not changed

            document.body.style.overflowY = 'auto';
          } else {
            dom.addClass(toggle, 'active'); // Check if search exists

            const btnSearch = document.querySelector('.is-menu-links .is-menu-search');

            if (!btnSearch) {
              // Hide search on mobile
              document.querySelector('.is-menu-search-input').style.display = 'none';
              document.querySelector('.is-menu-links').style.marginTop = '70px';
            } else {
              document.querySelector('.is-menu-search-input').style.display = '';
              document.querySelector('.is-menu-links').style.marginTop = '';
            }

            menu.style.right = '0px';
            const overlay = document.querySelector('.is-menu-overlay');
            dom.addClass(overlay, 'active');
            document.querySelector('.is-topbar-menu').style.paddingRight = this.getScrollbarWidth() + 'px'; // so that hamburger menu position not changed after scrollbar is hidden

            document.body.style.overflowY = 'hidden';
          }

          e.stopImmediatePropagation();
          e.preventDefault();
        });
        const overlay = document.querySelector('.is-menu-overlay');
        overlay.addEventListener('click', e => {
          const toggle = document.querySelector('#is-menu-toggle');
          toggle.click();
          e.stopImmediatePropagation();
          e.preventDefault();
        });
        window.addEventListener('resize', () => {
          document.body.style.overflowY = 'auto';
          document.querySelector('.is-topbar-menu').style.paddingRight = '0px'; // normalize after scrollbar is displayed again, so that hamburger menu position not changed

          const toggle = document.querySelector('#is-menu-toggle');
          dom.removeClass(toggle, 'active');
          let ULs = document.querySelectorAll('.is-menu li ul');
          ULs.forEach(elm => {
            dom.removeClass(elm, 'active'); // close all opened submenu
          });
          const viewportWidth = window.innerWidth;

          if (viewportWidth >= 1024) {
            const menu = document.querySelector('.is-menu');
            menu.style.right = '0px';
            let ULs = document.querySelectorAll('.is-menu li ul');
            ULs.forEach(elm => {
              elm.style.display = '';
            });
            const overlay = document.querySelector('.is-menu-overlay');
            dom.removeClass(overlay, 'active');
            document.querySelector('.is-menu-search-input').style.display = '';
            document.querySelector('.is-menu-links').style.marginTop = '';
          } else {
            const menu = document.querySelector('.is-menu');
            menu.style.right = '-1000px';
          }
        }); // shrink

        window.addEventListener('scroll', () => {
          var shrinkHeader = 100;
          var scroll = this.getCurrentScroll();

          if (scroll >= shrinkHeader) {
            dom.addClass(document.querySelector('.is-topbar'), 'shrink');
          } else {
            dom.removeClass(document.querySelector('.is-topbar'), 'shrink');
          }

          const viewportWidth = window.innerWidth;

          if (viewportWidth >= 1024) {
            if (document.querySelector('.is-topbar.static')) {
              if (scroll > 30) {
                // Close submenu on scroll for static menu
                if (!this.staticClose) {
                  let ULs = document.querySelectorAll('.is-menu li ul');
                  ULs.forEach(elm => {
                    dom.removeClass(elm, 'active'); // close all opened submenu
                  });
                  this.staticClose = true;
                }
              } else {
                this.staticClose = false;
              }
            }
          }
        });
        const menuSearch = document.querySelector('.is-menu-search');
        menuSearch.addEventListener('click', e => {
          const div = document.querySelector('.is-menu-search-input');
          dom.addClass(div, 'active');
          const inpSearch = div.querySelector('input');
          inpSearch.focus();
          let ULs = document.querySelectorAll('.is-menu li ul');
          ULs.forEach(elm => {
            dom.removeClass(elm, 'active'); // close all opened submenu
          });
          e.preventDefault();
          e.stopImmediatePropagation();
        }); // Add document Click event

        document.addEventListener('click', e => {
          const target = e.target;

          if (!dom.hasClass(target, 'is-menu-search') && target.getAttribute('id') !== 'is_btnSearch' && target.getAttribute('id') !== 'is_txtSearch') {
            const div = document.querySelector('.is-menu-search-input');
            dom.removeClass(div, 'active');
          }
        });
        const inpSearch = document.querySelector('#is_txtSearch');
        inpSearch.addEventListener('keydown', e => {
          if (e.which == 13) this.settings.onSearch(inpSearch.value);
        });
        const btnSearch = document.querySelector('#is_btnSearch');
        btnSearch.addEventListener('click', () => {
          this.settings.onSearch(inpSearch.value);
        });
      }

      getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
      }

      getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
      }

    }

    return NavBar;

})();
