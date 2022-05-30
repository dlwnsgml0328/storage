import React, { Component } from 'react';
import ContentBox from '@dlwnsgml0328/studio_v2/package/public/contentbox/contentbox.esm';

import './contentbox.css';
import './contentbuilder.css';
// import '../../../public/box/box-flex.css'; 알다시피 import 구조로는 src 디렉토리 외부의 리소스를 받아오지 못한다
import { addExternalScripts, addExternalStyles } from '../../utils';

class BuilderControl extends Component {
  constructor(props) {
    super(props);

    this.saveContent = this.saveContent.bind(this);
    this.saveContentAndFinish = this.saveContentAndFinish.bind(this);
  }

  componentDidMount() {
    console.log('this.props: ', this.props);
    addExternalStyles([
      '/assets/minimalist-blocks/content.css',
      '/box/box-flex.css',
      '/assets/scripts/glide/css/glide.core.css',
      '/assets/scripts/glide/css/glide.theme.css',
      '/assets/scripts/navbar/navbar.css',
    ]);

    // Load language file first
    this.loadLanguageFile('contentbox/lang/en.js', () => {
      // Then init the ContentBox
      this.obj = new ContentBox({
        wrapper: '.is-wrapper',

        imageSelect: '/assets.html',
        fileSelect: '/assets.html',
        videoSelect: '/assets.html',

        slider: 'glide',
        navbar: true,

        onUploadCoverImage: (e) => {
          this.uploadFile(e, (response) => {
            // console.log('onUploadCoverImage response:', response);
            const uploadedImageUrl = response.url; // get saved image url
            this.obj.boxImage(uploadedImageUrl); // change cover image
          });
        },
        onMediaUpload: (e) => {
          this.uploadFile(e, (response) => {
            const uploadedImageUrl = response.url; // get saved file url
            this.obj.returnUrl(uploadedImageUrl);
          });
        },
        onVideoUpload: (e) => {
          this.uploadFile(e, (response) => {
            const uploadedFileUrl = response.url; // get saved file url
            this.obj.returnUrl(uploadedFileUrl);
          });
        },

        onChange: () => {
          //Auto Save
          clearTimeout(this.timeoutId);
          this.timeoutId = setTimeout(() => {
            this.saveContent();
          }, 1000);
        },

        /* ContentBox settings */
        // designUrl1: 'assets/designs/basic.js',
        // designUrl2: 'assets/designs/examples.js',
        // designPath: 'assets/designs/',
        // contentStylePath: 'assets/styles/',

        /* ContentBuilder settings */
        // modulePath: 'assets/modules/',
        // fontAssetPath: 'assets/fonts/',
        // assetPath: 'assets/',
        // snippetUrl: 'assets/minimalist-blocks/content.js',
        // snippetPath: 'assets/minimalist-blocks/',
        // pluginPath: 'contentbuilder/',
        // useLightbox: true,
      });

      // Example of adding buttons on the sidebar
      this.obj.addButton({
        pos: 2, // button position
        title: 'Undo', // title
        html: '<svg class="is-icon-flex" style="width:14px;height:14px;"><use xlink:href="#ion-ios-undo"></use></svg>', // icon
        onClick: () => {
          this.obj.undo();
        },
      });

      this.obj.addButton({
        pos: 3, // button position
        title: 'Redo', // title
        html: '<svg class="is-icon-flex" style="width:14px;height:14px;"><use xlink:href="#ion-ios-redo"></use></svg>', // icon
        onClick: () => {
          this.obj.redo();
        },
      });

      this.obj.addButton({
        pos: 5, // button position
        title: 'Preview', // title
        html: '<svg class="is-icon-flex" style="width:16px;height:16px;"><use xlink:href="#ion-eye"></use></svg>', // icon
        onClick: () => {
          let html = this.obj.html();
          localStorage.setItem('preview-html', html);
          let mainCss = this.obj.mainCss();
          localStorage.setItem('preview-maincss', mainCss);
          let sectionCss = this.obj.sectionCss();
          localStorage.setItem('preview-sectioncss', sectionCss);

          window.open('/preview.html', '_blank').focus();
        },
      });

      this.obj.addButton({
        pos: 6, // button position
        title: 'Scroll Up button', // title
        html: '<div><span>▵</span></div>', // icon
        onClick: () => {
          if (document.querySelector('.upper_btn') === null) {
            console.log('버튼이 없으므로 만듭니다');

            const wrapper = document.querySelector('.is-wrapper');

            const upperBtn = document.createElement('div');
            upperBtn.className = 'is-section upper_btn';
            upperBtn.style = 'background: transparent; height: 1px; min-height: 0;';
            upperBtn.innerHTML = `  <div style="position: fixed; bottom: 50px; right: 50px; z-index:9999;" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              style="width: 24px; height: 24px; cursor: pointer"
              onclick="window.scrollTo(0,0);"
            >
              <polyline
                points="2.5 36.25 25 13.75 47.5 36.25"
                fill="none"
                stroke="#000"
                stroke-width="1.5"
                stroke-miterlimit="10"
              ></polyline>
              <rect width="50" height="50" fill="none"></rect>
            </svg>
          </div>`;

            wrapper.appendChild(upperBtn);
          } else {
            console.log('버튼이 있으므로 제거합니다');

            const wrapper = document.querySelector('.is-wrapper');

            wrapper.removeChild(document.querySelector('.upper_btn'));
          }
        },
      });

      // Load content from server
      fetch('/load')
        .then((response) => response.json())
        .then((response) => {
          const html =
            response.html ||
            `
            `;
          const mainCss = response.mainCss || '';
          const sectionCss = response.sectionCss || '';

          this.obj.loadHtml(html); // Load html
          this.obj.loadStyles(mainCss, sectionCss); // Load styles

          // Add required scripts for viewing the content
          addExternalScripts([
            '/box/box-flex.js',
            '/assets/scripts/glide/glide.js',
            '/assets/scripts/navbar/navbar.min.js',
          ]);
        });
    });

    // https://stackoverflow.com/questions/37949981/call-child-method-from-parent
    if (this.props.doSave) this.props.doSave(this.saveContent); // Make it available to be called using doSave
    if (this.props.doSaveAndFinish) this.props.doSaveAndFinish(this.saveContentAndFinish);
  }

  // did mount done

  loadLanguageFile = (languageFile, callback) => {
    if (!this.isScriptAlreadyIncluded(languageFile)) {
      const script = document.createElement('script');
      script.src = languageFile;
      script.async = true;
      script.onload = () => {
        if (callback) callback();
      };
      document.body.appendChild(script);
    } else {
      if (callback) callback();
    }
  };

  isScriptAlreadyIncluded = (src) => {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute('src') === src) return true;
    }
    return false;
  };

  // upload 폴더에 없는 새로운 파일을 업로드할 때
  uploadFile(e, callback) {
    // console.log('uploadFile!');
    const selectedFile = e.target.files[0];

    const formData = new FormData();
    formData.append('file', selectedFile);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)
        if (callback) {
          // console.log('upload file callback', callback);
          // console.log('upload file response', response);
          callback(response);
        }
      });
  }

  save = (callback) => {
    // Save all embedded base64 images first
    console.log('save file!');
    this.obj.saveImages(
      '',
      () => {
        if (!this.obj) return; //in case destroyed during autosave, cancel the saving

        // Then save the content

        let html = this.obj.html();
        let mainCss = this.obj.mainCss(); // Returns the default typography style for the page
        let sectionCss = this.obj.sectionCss(); // Returns the typography styles for specific sections on the page

        const data = {
          html: html,
          mainCss: mainCss,
          sectionCss: sectionCss,
        };

        fetch('/save', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (!response.error) {
              callback(html, mainCss, sectionCss);
            }
          });
      },
      (img, base64, filename) => {
        if (!this.obj) return; //in case destroyed during autosave, cancel the saving

        // Upload base64 images
        const reqBody = { image: base64, filename: filename };
        fetch('/uploadbase64', {
          method: 'POST',
          body: JSON.stringify(reqBody),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (!response.error) {
              const uploadedImageUrl = response.url;
              img.setAttribute('src', uploadedImageUrl); // Update image src
            }
          });
      }
    );
  };

  saveContent = () => {
    this.save((html, mainCss, sectionCss) => {
      this.props.onSave(html, mainCss, sectionCss);
    });
  };

  saveContentAndFinish = () => {
    this.save((html, mainCss, sectionCss) => {
      this.props.onSaveAndFinish(html, mainCss, sectionCss);
    });
  };

  render() {
    return <div className='is-wrapper'></div>;
  }

  componentWillUnmount() {
    this.obj.destroy();
    this.obj = null;
  }
}

export default BuilderControl;
