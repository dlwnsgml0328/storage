documentReady(function(){
    let wrapper = document.querySelector('.is-wrapper');

    let scrollArrow = document.querySelectorAll('.is-arrow-down a');
    scrollArrow.forEach(function(btn){
        btn.addEventListener('click', function(e){
            let currentSection = parentsHasClass(e.target, 'is-section');
            if(currentSection) {
                let nextSection = currentSection.nextElementSibling;
                if(nextSection) {
                    // nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' }); // this affects skrollr translateX
                    scrollIt(nextSection, 1000, 'easeInQuad'); // stable
                }
            }
            e.preventDefault();
            e.stopImmediatePropagation();
        });
    });
    
    if(wrapper) if(!hasClass(wrapper,'is-edit')) { // run this only if not in edit mode
        let links = wrapper.querySelectorAll('a');
        links.forEach(function(link){
            link.addEventListener('click', function(e){
    
                let url = link.getAttribute('href');
                if(url) {
                    // Will go to the link
                    if(url.indexOf('#')===0) {
                        if(url.indexOf('#section')===0) {
                            let num = url.replace('#section','');
                            if(!isNaN(parseInt(num))) {

                                // let section = document.querySelector(`.is-section:nth-child(${num})`);
                                // if(section) scrollIt(section, 1000, 'easeInQuad');

                                let sections = document.querySelectorAll('.is-section');
                                let gotoSection;
                                let x = 0;
                                sections.forEach(function(section){
                                    if(!hasClass(section, 'is-section-navbar')) {
                                        if(x===num-1) {
                                            gotoSection = section;
                                        }
                                        x++;
                                    }
                                });
                                if(gotoSection) scrollIt(gotoSection, 1000, 'easeInQuad');

                                e.preventDefault();
                            }
                        } else {
                            try{
                                let bookmark = document.querySelector(url);
                                if(bookmark) {
                                    scrollIt(bookmark, 1000, 'easeInQuad');
                                    e.preventDefault();
                                }
                            } catch(e) {
                                // Do Nothing
                            }
                        }
    
                    } 
    
                }
                        
            });
        });
    }
    
    if(document.querySelector('.is-scale-animated')) {
        enterView({
            selector: '.is-scale-animated',
            enter: function (elm) {
                addClass(elm, 'is-appeared');
            },
            exit: function (elm) {
                removeClass(elm, 'is-appeared');
            },
            offset: 0,
            once: false,
        });
    }

    // Hide all animated elements first
    let animElms = document.querySelectorAll('.is-animated');
    animElms.forEach(function(elm){
        addClass(elm, 'animated');
        //addClass(elm, 'fadeOut');
    });

    // Animate Section/Boxes
    if(document.querySelector('.is-section')) enterView({
        selector: '.is-section',
        enter: function (elm) {
            applyAnimationSection(elm);
        },
        exit: function (elm) {
            removeAnimationSection(elm);
        },
        offset: 0.4,
        once: false,
    });

    // Animate Content/Container
    if(document.querySelector('.is-container')) enterView({
        selector: '.is-container',
        enter: function (elm) {
            applyAnimation(elm);
        },
        exit: function (elm) {
            removeAnimation(elm);
        },
        offset: 0.5,
        once: false,
    });

    if(wrapper) if(!hasClass(wrapper,'is-edit')) { // run this only if not in edit mode
        window.lightbox.init();
    }

    window.addEventListener('resize',debounce(function(e){
        try {
            if (window.skrollr) {
                let obj = window.skrollr.get();
                if(obj) obj.refresh();
            }
        } catch (e) {
            // Do Nothing
        }
    }));

});

function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,100,event);
    };
}

function _scrollTo(el, yOffset = 0){
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function scrollIt(destination, duration = 200, easing = 'linear', callback) {
    _scrollTo(destination);
}

function applyAnimation(root) {
    let n = 0;
    let animElms = root.querySelectorAll('.is-animated');
    animElms.forEach(function(elm){
        if (elm.getAttribute('data-animated') !== 'done') {

            elm.style.animationDelay = n + 's';
            n = n + 0.2;

            removeClass(elm, 'fadeOut');

            if(hasClass(elm, 'is-pulse')) addClass(elm, 'pulse');
            if(hasClass(elm, 'is-bounceIn')) addClass(elm, 'bounceIn');
            if(hasClass(elm, 'is-fadeIn')) addClass(elm, 'fadeIn');
            if(hasClass(elm, 'is-fadeInDown')) addClass(elm, 'fadeInDown');
            if(hasClass(elm, 'is-fadeInLeft')) addClass(elm, 'fadeInLeft');
            if(hasClass(elm, 'is-fadeInRight')) addClass(elm, 'fadeInRight');
            if(hasClass(elm, 'is-fadeInUp')) addClass(elm, 'fadeInUp');
            if(hasClass(elm, 'is-flipInX')) addClass(elm, 'flipInX');
            if(hasClass(elm, 'is-flipInY')) addClass(elm, 'flipInY');
            if(hasClass(elm, 'is-slideInUp')) addClass(elm, 'slideInUp');
            if(hasClass(elm, 'is-slideInDown')) addClass(elm, 'slideInDown');
            if(hasClass(elm, 'is-slideInLeft')) addClass(elm, 'slideInLeft');
            if(hasClass(elm, 'is-slideInRight')) addClass(elm, 'slideInRight');
            if(hasClass(elm, 'is-zoomIn')) addClass(elm, 'zoomIn');

            if(hasClass(elm, 'once')) elm.setAttribute('data-animated', 'done');
        }
    });
}

function removeAnimation(root) {
    let animElms = root.querySelectorAll('.is-animated');
    animElms.forEach(function(elm){

        removeClass(elm, 'pulse');
        removeClass(elm, 'bounceIn');
        removeClass(elm, 'fadeIn');
        removeClass(elm, 'fadeInDown');
        removeClass(elm, 'fadeInLeft');
        removeClass(elm, 'fadeInRight');
        removeClass(elm, 'fadeInUp');
        removeClass(elm, 'flipInX');
        removeClass(elm, 'flipInY');
        removeClass(elm, 'slideInUp');
        removeClass(elm, 'slideInDown');
        removeClass(elm, 'slideInLeft');
        removeClass(elm, 'slideInRight');
        removeClass(elm, 'zoomIn');

        if(!hasClass(elm, 'once')) addClass(elm, 'fadeOut');

    });
}

function applyAnimationSection(elm) {

    let n = 0;
    if(hasClass(elm, 'is-animated')) {
        if (elm.getAttribute('data-animated') !== 'done') {

            elm.style.animationDelay = n + 's';
            n = n + 0.2;

            removeClass(elm, 'fadeOut');

            if(hasClass(elm, 'is-pulse')) addClass(elm, 'pulse');
            if(hasClass(elm, 'is-bounceIn')) addClass(elm, 'bounceIn');
            if(hasClass(elm, 'is-fadeIn')) addClass(elm, 'fadeIn');
            if(hasClass(elm, 'is-fadeInDown')) addClass(elm, 'fadeInDown');
            if(hasClass(elm, 'is-fadeInLeft')) addClass(elm, 'fadeInLeft');
            if(hasClass(elm, 'is-fadeInRight')) addClass(elm, 'fadeInRight');
            if(hasClass(elm, 'is-fadeInUp')) addClass(elm, 'fadeInUp');
            if(hasClass(elm, 'is-flipInX')) addClass(elm, 'flipInX');
            if(hasClass(elm, 'is-flipInY')) addClass(elm, 'flipInY');
            if(hasClass(elm, 'is-slideInUp')) addClass(elm, 'slideInUp');
            if(hasClass(elm, 'is-slideInDown')) addClass(elm, 'slideInDown');
            if(hasClass(elm, 'is-slideInLeft')) addClass(elm, 'slideInLeft');
            if(hasClass(elm, 'is-slideInRight')) addClass(elm, 'slideInRight');
            if(hasClass(elm, 'is-zoomIn')) addClass(elm, 'zoomIn');

            if(hasClass(elm, 'once')) elm.setAttribute('data-animated', 'done');
        }
    }

    let section = elm;
    let animElms = section.querySelectorAll('.is-box.is-animated');
    animElms.forEach(function(elm){
        if (elm.getAttribute('data-animated') !== 'done') {

            elm.style.animationDelay = n + 's';
            n = n + 0.2;

            removeClass(elm, 'fadeOut');

            if(hasClass(elm, 'is-pulse')) addClass(elm, 'pulse');
            if(hasClass(elm, 'is-bounceIn')) addClass(elm, 'bounceIn');
            if(hasClass(elm, 'is-fadeIn')) addClass(elm, 'fadeIn');
            if(hasClass(elm, 'is-fadeInDown')) addClass(elm, 'fadeInDown');
            if(hasClass(elm, 'is-fadeInLeft')) addClass(elm, 'fadeInLeft');
            if(hasClass(elm, 'is-fadeInRight')) addClass(elm, 'fadeInRight');
            if(hasClass(elm, 'is-fadeInUp')) addClass(elm, 'fadeInUp');
            if(hasClass(elm, 'is-flipInX')) addClass(elm, 'flipInX');
            if(hasClass(elm, 'is-flipInY')) addClass(elm, 'flipInY');
            if(hasClass(elm, 'is-slideInUp')) addClass(elm, 'slideInUp');
            if(hasClass(elm, 'is-slideInDown')) addClass(elm, 'slideInDown');
            if(hasClass(elm, 'is-slideInLeft')) addClass(elm, 'slideInLeft');
            if(hasClass(elm, 'is-slideInRight')) addClass(elm, 'slideInRight');
            if(hasClass(elm, 'is-zoomIn')) addClass(elm, 'zoomIn');
            if(hasClass(elm, 'once')) elm.setAttribute('data-animated', 'done');
            
        }
    });
}

function removeAnimationSection(elm) {

    if(hasClass(elm, 'is-animated')) {

        removeClass(elm, 'pulse');
        removeClass(elm, 'bounceIn');
        removeClass(elm, 'fadeIn');
        removeClass(elm, 'fadeInDown');
        removeClass(elm, 'fadeInLeft');
        removeClass(elm, 'fadeInRight');
        removeClass(elm, 'fadeInUp');
        removeClass(elm, 'flipInX');
        removeClass(elm, 'flipInY');
        removeClass(elm, 'slideInUp');
        removeClass(elm, 'slideInDown');
        removeClass(elm, 'slideInLeft');
        removeClass(elm, 'slideInRight');
        removeClass(elm, 'zoomIn');

        if(!hasClass(elm, 'once')) addClass(elm, 'fadeOut');

    }

    let section = elm;
    let animElms = section.querySelectorAll('.is-animated');
    animElms.forEach(function(elm){

        removeClass(elm, 'pulse');
        removeClass(elm, 'bounceIn');
        removeClass(elm, 'fadeIn');
        removeClass(elm, 'fadeInDown');
        removeClass(elm, 'fadeInLeft');
        removeClass(elm, 'fadeInRight');
        removeClass(elm, 'fadeInUp');
        removeClass(elm, 'flipInX');
        removeClass(elm, 'flipInY');
        removeClass(elm, 'slideInUp');
        removeClass(elm, 'slideInDown');
        removeClass(elm, 'slideInLeft');
        removeClass(elm, 'slideInRight');
        removeClass(elm, 'zoomIn');

        if(!hasClass(elm, 'once')) addClass(elm, 'fadeOut');

    });
}

function parentsHasClass(element, classname) {
    while (element) {
        if(!element.tagName) return false;
        if(element.tagName === 'BODY' || element.tagName === 'HTML') return false;
        if(this.hasClass(element, classname)) {
            return element;
        }
        element = element.parentNode;
    }
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function addClass(element, classname) {
    if(!element) return;
    if(hasClass(element,classname)) return;
    if(element.classList.length===0) element.className = classname;
    else element.className = element.className + ' ' + classname;
    element.className = element.className.replace(/  +/g, ' ');
}

function removeClass(element, classname) {
    if(!element) return;
    if(element.classList.length>0) {
        let i, j, imax, jmax;
        let classesToDel = classname.split(' ');
        for (i=0, imax=classesToDel.length; i<imax; ++i) {
            if (!classesToDel[i]) continue;
            let classtoDel = classesToDel[i];
            let sClassName = ''; 
            let currentClasses = element.className.split(' ');
            for (j=0, jmax=currentClasses.length; j<jmax; ++j) {
                if (!currentClasses[j]) continue;
                if (currentClasses[j]!==classtoDel) sClassName += currentClasses[j] + ' ';
            }
            element.className = sClassName.trim();
        }
        if(element.className==='') element.removeAttribute('class');
    }
}

function documentReady(fn) {
    var stateCheck = setInterval(function () {
        if (document.readyState !== "complete") return;
        clearInterval(stateCheck);
        try { fn() } catch (e) { }
    }, 1);
};

/* enter-view | Copyright (c) 2015 Russell Goldenberg - https://github.com/russellgoldenberg/enter-view | The MIT License (MIT) */
(function (factory) { if (typeof define === "function" && define.amd) { define(factory) } else if (typeof module !== "undefined" && module.exports) { module.exports = factory() } else { window.enterView = factory.call(this) } })((() => { const lib = ({ selector: selector, enter: enter = (() => { }), exit: exit = (() => { }), progress: progress = (() => { }), offset: offset = 0, once: once = false }) => { let raf = null; let ticking = false; let elements = []; let height = 0; function setupRaf() { raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { return setTimeout(callback, 1e3 / 60) } } function getOffsetHeight() { if (offset && typeof offset === "number") { const fraction = Math.min(Math.max(0, offset), 1); return height - fraction * height } return height } function updateHeight() { const cH = document.documentElement.clientHeight; const wH = window.innerHeight || 0; height = Math.max(cH, wH) } function updateScroll() { ticking = false; const targetFromTop = getOffsetHeight(); elements = elements.filter((el => { const { top: top, bottom: bottom, height: height } = el.getBoundingClientRect(); const entered = top < targetFromTop; const exited = bottom < targetFromTop; if (entered && !el.__ev_entered) { enter(el); el.__ev_progress = 0; progress(el, el.__ev_progress); if (once) return false } else if (!entered && el.__ev_entered) { el.__ev_progress = 0; progress(el, el.__ev_progress); exit(el) } if (entered && !exited) { const delta = (targetFromTop - top) / height; el.__ev_progress = Math.min(1, Math.max(0, delta)); progress(el, el.__ev_progress) } if (entered && exited && el.__ev_progress !== 1) { el.__ev_progress = 1; progress(el, el.__ev_progress) } el.__ev_entered = entered; return true })); if (!elements.length) { window.removeEventListener("scroll", onScroll, true); window.removeEventListener("resize", onResize, true); window.removeEventListener("load", onLoad, true) } } function onScroll() { if (!ticking) { ticking = true; raf(updateScroll) } } function onResize() { updateHeight(); updateScroll() } function onLoad() { updateHeight(); updateScroll() } function selectionToArray(selection) { const len = selection.length; const result = []; for (let i = 0; i < len; i += 1) { result.push(selection[i]) } return result } function selectAll(selector, parent = document) { if (typeof selector === "string") { return selectionToArray(parent.querySelectorAll(selector)) } else if (selector instanceof NodeList) { return selectionToArray(selector) } else if (selector instanceof Array) { return selector } } function setupElements() { elements = selectAll(selector) } function setupEvents() { window.addEventListener("resize", onResize, true); window.addEventListener("scroll", onScroll, true); window.addEventListener("load", onLoad, true); onResize() } function init() { if (!selector) { console.error("must pass a selector"); return false } setupElements(); if (!elements || !elements.length) { console.error("no selector elements found"); return false } setupRaf(); setupEvents(); updateScroll() } init() }; return lib }));

/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function (a, b, c) { "use strict"; function d(c) { if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing) for (var d in c.easing) W[d] = c.easing[d]; ta = c.edgeStrategy || "set", ka = { beforerender: c.beforerender, render: c.render, keyframe: c.keyframe }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = { targetTop: ha.getScrollTop() }, Sa = (c.mobileCheck || function () { return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera) })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function () { var a = e.clientWidth, b = e.clientHeight; (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0) }); var g = U(); return function h() { $(), va = g(h) } (), ha } var e, f, g = { get: function () { return ha }, init: function (a) { return ha || new d(a) }, VERSION: "0.6.29" }, h = Object.prototype.hasOwnProperty, i = a.Math, j = a.getComputedStyle, k = "touchstart", l = "touchmove", m = "touchcancel", n = "touchend", o = "skrollable", p = o + "-before", q = o + "-between", r = o + "-after", s = "skrollr", t = "no-" + s, u = s + "-desktop", v = s + "-mobile", w = "linear", x = 1e3, y = .004, z = "skrollr-body", A = 200, B = "start", C = "end", D = "center", E = "bottom", F = "___skrollable_id", G = /^(?:input|textarea|button|select)$/i, H = /^\s+|\s+$/g, I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, K = /^(@?[a-z\-]+)\[(\w+)\]$/, L = /-([a-z0-9_])/g, M = function (a, b) { return b.toUpperCase() }, N = /[\-+]?[\d]*\.?[\d]+/g, O = /\{\?\}/g, P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, Q = /[a-z\-]+-gradient/g, R = "", S = "", T = function () { var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; if (j) { var b = j(f, null); for (var c in b) if (R = c.match(a) || +c == c && b[c].match(a)) break; if (!R) return void (R = S = ""); R = R[0], "-" === R.slice(0, 1) ? (S = R, R = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O"}[R]) : S = "-" + R.toLowerCase() + "-" } }, U = function () { var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"], c = Ha(); return (Sa || !b) && (b = function (b) { var d = Ha() - c, e = i.max(0, 1e3 / 60 - d); return a.setTimeout(function () { c = Ha(), b() }, e) }), b }, V = function () { var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"]; return (Sa || !b) && (b = function (b) { return a.clearTimeout(b) }), b }, W = { begin: function () { return 0 }, end: function () { return 1 }, linear: function (a) { return a }, quadratic: function (a) { return a * a }, cubic: function (a) { return a * a * a }, swing: function (a) { return -i.cos(a * i.PI) / 2 + .5 }, sqrt: function (a) { return i.sqrt(a) }, outCubic: function (a) { return i.pow(a - 1, 3) + 1 }, bounce: function (a) { var b; if (.5083 >= a) b = 3; else if (.8489 >= a) b = 9; else if (.96208 >= a) b = 27; else { if (!(.99981 >= a)) return 1; b = 91 } return 1 - i.abs(3 * i.cos(a * b * 1.028) / b) } }; d.prototype.refresh = function (a) { var d, e, f = !1; for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) { var g = a[d], h = g, i = [], j = pa, k = ta, l = !1; if (f && F in g && delete g[F], g.attributes) { for (var m = 0, n = g.attributes.length; n > m; m++) { var p = g.attributes[m]; if ("data-anchor-target" !== p.name) if ("data-smooth-scrolling" !== p.name) if ("data-edge-strategy" !== p.name) if ("data-emit-events" !== p.name) { var q = p.name.match(I); if (null !== q) { var r = { props: p.value, element: g, eventType: p.name.replace(L, M) }; i.push(r); var s = q[1]; s && (r.constant = s.substr(1)); var t = q[2]; /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t; var u = q[3], v = q[4] || u; u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka)) } } else l = !0; else k = p.value; else j = "off" !== p.value; else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"' } if (i.length) { var w, x, y; !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = { element: g, styleAttr: w, classAttr: x, anchorTarget: h, keyFrames: i, smoothScrolling: j, edgeStrategy: k, emitEvents: l, lastFrameIndex: -1 }, Ea(g, [o], []) } } } for (Aa(), d = 0, e = a.length; e > d; d++) { var z = ia[a[d][F]]; z !== c && (_(z), ba(z)) } return ha }, d.prototype.relativeToAbsolute = function (a, b, c) { var d = e.clientHeight, f = a.getBoundingClientRect(), g = f.top, h = f.bottom - f.top; return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0 }, d.prototype.animateTo = function (a, b) { b = b || {}; var d = Ha(), e = ha.getScrollTop(), f = b.duration === c ? x : b.duration; return oa = { startTop: e, topDiff: a - e, targetTop: a, duration: f, startTime: d, endTime: d + f, easing: W[b.easing || w], done: b.done }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha }, d.prototype.stopAnimateTo = function () { oa && oa.done && oa.done.call(ha, !0), oa = c }, d.prototype.isAnimatingTo = function () { return !!oa }, d.prototype.isMobile = function () { return Sa }, d.prototype.setScrollTop = function (b, c) { return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha }, d.prototype.getScrollTop = function () { return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0 }, d.prototype.getMaxScrollTop = function () { return Ja }, d.prototype.on = function (a, b) { return ka[a] = b, ha }, d.prototype.off = function (a) { return delete ka[a], ha }, d.prototype.destroy = function () { var a = V(); a(va), ya(), Ea(e, [t], [s, u, v]); for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element); e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c }; var X = function () { var d, g, h, j, o, p, q, r, s, t, u, v; wa(e, [k, l, m, n].join(" "), function (a) { var e = a.changedTouches[0]; for (j = a.target; 3 === j.nodeType; ) j = j.parentNode; switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) { case k: d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t; break; case l: G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t; break; default: case m: case n: var f = g - o, w = h - p, x = w * w + f * f; if (49 > x) { if (!G.test(d.tagName)) { d.focus(); var y = b.createEvent("MouseEvents"); y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y) } return } d = c; var z = r / v; z = i.max(i.min(z, 3), -3); var A = i.abs(z / na), B = z * A + .5 * na * A * A, C = ha.getScrollTop() - B, D = 0; C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, { easing: "outCubic", duration: A }) } }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden" }, Y = function () { var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight, o = Ba(); for (j = 0, k = ia.length; k > j; j++) for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame); for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) { for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m); a.keyFrames.sort(Ia) } }, Z = function (a, b) { for (var c = 0, d = ia.length; d > c; c++) { var e, f, i = ia[c], j = i.element, k = i.smoothScrolling ? a : b, l = i.keyFrames, m = l.length, n = l[0], s = l[l.length - 1], t = k < n.frame, u = k > s.frame, v = t ? n : s, w = i.emitEvents, x = i.lastFrameIndex; if (t || u) { if (t && -1 === i.edge || u && 1 === i.edge) continue; switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) { case "reset": fa(j); continue; case "ease": k = v.frame; break; default: case "set": var y = v.props; for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)); continue } } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0); for (var z = 0; m - 1 > z; z++) if (k >= l[z].frame && k <= l[z + 1].frame) { var A = l[z], B = l[z + 1]; for (e in A.props) if (h.call(A.props, e)) { var C = (k - A.frame) / (B.frame - A.frame); C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f) } w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z); break } } }, $ = function () { Qa && (Qa = !1, Aa()); var a, b, d = ha.getScrollTop(), e = Ha(); if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0); else if (!sa) { var f = ra.targetTop - d; f && (ra = { startTop: Ma, topDiff: d - Ma, targetTop: d, startTime: Na, endTime: Na + qa }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0) } if (sa || Ma !== d) { La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1; var h = { curTop: d, lastTop: Ma, maxTop: Ja, direction: La }, i = ka.beforerender && ka.beforerender.call(ha, h); i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1) } Na = e }, _ = function (a) { for (var b = 0, c = a.keyFrames.length; c > b; b++) { for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props)); ) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = { value: e, easing: W[d] }; h.props = i } }, aa = function (a) { var b = []; return P.lastIndex = 0, a = a.replace(P, function (a) { return a.replace(N, function (a) { return a / 255 * 100 + "%" }) }), S && (Q.lastIndex = 0, a = a.replace(Q, function (a) { return S + a })), a = a.replace(N, function (a) { return b.push(+a), "{?}" }), b.unshift(a), b }, ba = function (a) { var b, c, d = {}; for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d); for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d) }, ca = function (a, b) { var c; for (c in b) h.call(a.props, c) || (a.props[c] = b[c]); for (c in a.props) b[c] = a.props[c] }, da = function (a, b, c) { var d, e = a.length; if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"'; var f = [a[0]]; for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c; return f }, ea = function (a) { var b = 1; return O.lastIndex = 0, a[0].replace(O, function () { return a[b++] }) }, fa = function (a, b) { a = [].concat(a); for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr))) }, ga = function () { ua = "translateZ(0)", g.setStyle(ja, "transform", ua); var a = j(ja), b = a.getPropertyValue("transform"), c = a.getPropertyValue(S + "transform"), d = b && "none" !== b || c && "none" !== c; d || (ua = "") }; g.setStyle = function (a, b, c) { var d = a.style; if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c); else if ("float" === b) d.styleFloat = d.cssFloat = c; else try { R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c } catch (e) { } }; var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function (b, c, d) { var e = function (b) { return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function () { b.returnValue = !1, b.defaultPrevented = !0 }), d.call(this, b) }; c = c.split(" "); for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({ element: b, name: f, listener: d }) }, xa = g.removeEvent = function (a, b, c) { b = b.split(" "); for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c) }, ya = function () { for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener); Ua = [] }, za = function (a, b, c) { ka.keyframe && ka.keyframe.call(ha, a, b, c) }, Aa = function () { var a = ha.getScrollTop(); Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0 }, Ba = function () { var a, b, c = e.clientHeight, d = {}; for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b; return d }, Ca = function () { var a, b = 0; return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight }, Da = function (b) { var c = "className"; return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c] }, Ea = function (b, d, e) { var f = "className"; if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void (b[f] = d); for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " "); g = Fa(g); for (var j = 0, k = d.length; k > j; j++)-1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]); b[f] = Fa(g) }, Fa = function (a) { return a.replace(H, "") }, Ga = function (a) { return " " + a + " " }, Ha = Date.now || function () { return +new Date }, Ia = function (a, b) { return a.frame - b.frame }, Ja = 0, Ka = 1, La = "down", Ma = -1, Na = Ha(), Oa = 0, Pa = 0, Qa = !1, Ra = 0, Sa = !1, Ta = 0, Ua = []; "function" == typeof define && define.amd ? define([], function () { return g }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g } (window, document);
setTimeout(function () {
    // var viewportWidth = window.innerWidth; // option to not run skrollr on mobile
    // if(viewportWidth>760) 
    skrollr.init({
        forceHeight: false,
        mobileCheck: function () { return false; },
        smoothScrolling: true,
        smoothScrollingDuration: 400
    }).refresh();
}, 100);

/* AOS (Animate on scroll) | Copyright (c) 2015 Michał Sajnóg | The MIT License (MIT) */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});
AOS.init({
    duration: 1200
});

/* Lightbox */
var Lightbox=function(){"use strict";const e=new class{createElement(e){return document.createElement(e)}appendChild(e,t){e&&e.appendChild(t)}appendHtml(e,t){e&&e.insertAdjacentHTML("beforeend",t)}addEventListener(e,t,o){e&&e.addEventListener(t,o)}addClass(e,t){e&&(this.hasClass(e,t)||(0===e.classList.length?e.className=t:e.className=e.className+" "+t,e.className=e.className.replace(/  +/g," ")))}removeClass(e,t){if(e&&e.classList.length>0){let o,i,l,a,r=t.split(" ");for(o=0,l=r.length;o<l;++o){if(!r[o])continue;let t=r[o],l="",s=e.className.split(" ");for(i=0,a=s.length;i<a;++i)s[i]&&s[i]!==t&&(l+=s[i]+" ");e.className=l.trim()}""===e.className&&e.removeAttribute("class")}}hasClass(e,t){if(!e)return!1;try{let o=e.getAttribute("class");return new RegExp("\\b"+t+"\\b").test(o)}catch(e){}}moveAfter(e,t){t.parentNode.insertBefore(e,t),t.parentNode.insertBefore(t,t.previousElementSibling)}elementChildren(e){const t=e.childNodes;let o=[],i=t.length;for(;i--;)1===t[i].nodeType&&o.unshift(t[i]);return o}parentsHasClass(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(this.hasClass(e,t))return!0;e=e.parentNode}}parentsHasId(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(e.id===t)return!0;e=e.parentNode}}parentsHasTag(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(e.tagName.toLowerCase()===t.toLowerCase())return!0;e=e.parentNode}}parentsHasAttribute(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;try{if(e.hasAttribute(t))return!0}catch(e){}e=e.parentNode}}parentsHasElement(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(!(e=e.parentNode))return!1;if(!e.tagName)return!1;if(e.tagName.toLowerCase()===t)return!0}}removeClasses(e,t){for(let o=0;o<e.length;o++)e[o].classList.remove(t)}removeAttributes(e,t){for(let o=0;o<e.length;o++)e[o].removeAttribute(t)}removeElements(e){Array.prototype.forEach.call(e,(e=>{e.parentNode.removeChild(e)}))}getStyle(e,t){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))]}};class t{constructor(){let t=document.querySelector("#_cbhtml");if(t||(t=e.createElement("div"),t.id="_cbhtml",t.className="is-ui",e.appendChild(document.body,t)),this.builderStuff=t,!this.builderStuff.querySelector("#_lightbox")){let t='\n                <div class="is-lightbox lightbox-externalvideo">\n                    <button class="cmd-lightbox-close" title="Close" type="button" style="flex:none;position:absolute;top:0;right:0;background:none;z-index:1;">\n                        <svg><use xlink:href="#icon-close"></use></svg>\n                    </button>\n                    <div class="lightbox-content" style="width:100%;">\n                        <div class="embed-responsive embed-responsive-16by9" style="width:100%;">\n                        <iframe width="560" height="315" src="about:blank" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </div>\n                <div class="is-lightbox lightbox-video light">\n                    <button class="cmd-lightbox-close" title="Close" type="button" style="flex:none;position:absolute;top:0;right:0;background:none;z-index:1;">\n                        <svg><use xlink:href="#icon-close"></use></svg>\n                    </button>\n                    <div class="lightbox-content" style="width:100%;"></div>\n                </div>\n                <div class="is-lightbox lightbox-image light">\n                    <button class="cmd-lightbox-close" title="Close" type="button" style="flex:none;position:absolute;top:0;right:0;background:none;z-index:1;">\n                        <svg><use xlink:href="#icon-close"></use></svg>\n                    </button>\n                    <div class="lightbox-content" style="width:100%;"></div>\n                </div>\n                <svg width="0" height="0" style="position:absolute;display:none;">\n                    <defs>\n                        <symbol viewBox="0 0 24 24" id="icon-close" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>\n                        </symbol>\n                    </defs>\n                </svg>\n            ';this.builderStuff.insertAdjacentHTML("afterbegin",t);this.builderStuff.querySelectorAll("div.is-lightbox").forEach((t=>{t.addEventListener("click",(o=>{if(e.parentsHasClass(o.target,"lightbox-content"))return;e.removeClass(t,"active");t.querySelector(".cmd-lightbox-close").style.opacity=0,document.body.style.overflowY="",setTimeout((()=>{let e=t.querySelector("iframe");e&&e.setAttribute("src","about:blank"),t.style.display=""}),300)}))}))}}init(){document.querySelectorAll(".block-click,.button-click,.is-lightbox").forEach((e=>{e.addEventListener("click",(t=>{let o,i;if("a"===e.tagName.toLowerCase())o=e.getAttribute("href"),i=o.split(".").pop();else if(e.getAttribute("data-modal-url"))o=e.getAttribute("data-modal-url"),i=o.split(".").pop();else if(!(e.getAttribute("data-modal-image")||e.getAttribute("data-modal-video")||e.getAttribute("data-modal-externalvideo")))return;let l=e.getAttribute("data-modal-theme");l||(l="light");const a=e.getAttribute("data-modal-color");"jpg"===i||"jpeg"===i||"png"===i||"gif"===i||"webm"===i?this.openImage(o,l,a):"mp4"===i?this.openVideo(o,"dark",a):-1!==o.toLowerCase().indexOf("youtube.com")||-1!==o.toLowerCase().indexOf("vimeo.com")?this.openExternalVideo(o,"dark",a):e.getAttribute("data-modal-image")?(o=e.getAttribute("data-modal-image"),this.openImage(o,l,a)):e.getAttribute("data-modal-video")?(o=e.getAttribute("data-modal-video"),this.openVideo(o,"dark",a)):e.getAttribute("data-modal-externalvideo")?(o=e.getAttribute("data-modal-externalvideo"),this.openExternalVideo(o,"dark",a)):window.location.href=o,t.preventDefault()}))}))}openImage(t,o,i){let l=this.builderStuff.querySelector("div.is-lightbox.lightbox-image");window.frameElement&&!l&&(l=parent.document.querySelector(".is-lightbox.lightbox-image"));const a=l.querySelector(".cmd-lightbox-close");a.style.opacity=0,i&&(l.style.backgroundColor=i);l.querySelector(".lightbox-content").innerHTML="<img src="+t+">","light"===o?(e.addClass(l,"light"),e.removeClass(l,"dark")):(e.addClass(l,"dark"),e.removeClass(l,"light")),l.style.display="flex",window.frameElement||(document.body.style.overflowY="hidden"),setTimeout((()=>{e.addClass(l,"active"),setTimeout((()=>{a.style.opacity=1}),450)}),10)}openVideo(t,o,i){let l=document.querySelector(".is-lightbox.lightbox-video");window.frameElement&&!l&&(l=parent.document.querySelector(".is-lightbox.lightbox-video"));const a=l.querySelector(".cmd-lightbox-close");a.style.opacity=0,i&&(l.style.backgroundColor=i);l.querySelector(".lightbox-content").innerHTML='<video class="is-video-bg" playsinline controls autoplay width="100%"><source src="'+t+'" type="video/mp4"></video>',"light"===o?(e.addClass(l,"light"),e.removeClass(l,"dark")):(e.addClass(l,"dark"),e.removeClass(l,"light")),l.style.display="flex",window.frameElement||(document.body.style.overflowY="hidden"),setTimeout((()=>{e.addClass(l,"active"),setTimeout((()=>{a.style.opacity=1}),450)}),10)}openExternalVideo(t,o,i){let l=document.querySelector(".is-lightbox.lightbox-externalvideo");window.frameElement&&!l&&(l=parent.document.querySelector(".is-lightbox.lightbox-externalvideo"));const a=l.querySelector(".cmd-lightbox-close");a.style.opacity=0,i&&(l.style.backgroundColor=i),"light"===o?(e.addClass(l,"light"),e.removeClass(l,"dark")):(e.addClass(l,"dark"),e.removeClass(l,"light"));const r=l.querySelector("iframe");""!==(t=this.getIframeVideoUrl(t))&&r.setAttribute("src",t),l.style.display="flex",window.frameElement||(document.body.style.overflowY="hidden");const s=l.querySelector(".lightbox-content");s.style.width=16*s.offsetHeight/9+"px",setTimeout((()=>{e.addClass(l,"active"),setTimeout((()=>{a.style.opacity=1}),450)}),10)}getIframeVideoUrl(e){let t=e.match(/^.*(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/\S*?[^\w\s-])((?!videoseries)[\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/),o=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|(video\/))?([0-9]+)\/?/.exec(e);if((null!==t||null!==o)&&-1===e.indexOf("player.vimeo.com")&&-1===e.indexOf("youtube.com/embed/")){if(null!==t){e="https://www.youtube.com/embed/"+t[1]+"?rel=0&autoplay=1&color=white"}if(null!==o&&o.length>=7){e="https://player.vimeo.com/video/"+o[6]}}return e}}return window.lightbox=new t,t}();

