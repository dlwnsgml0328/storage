import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addExternalScripts, addExternalStyles, renderHtml, renderStyles } from '../utils';
import './Home.css';

function Home() {
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    // This is for viewing content demonstration.
    // We recommend using server side rendering (eg. Node.js, Next.js) for better SEO

    // Add required styles for viewing the content
    addExternalStyles(
      [
        '/assets/minimalist-blocks/content.css',
        '/box/box-flex.css',
        '/assets/scripts/glide/css/glide.core.css',
        '/assets/scripts/glide/css/glide.theme.css',
        '/assets/scripts/navbar/navbar.css',
      ],
      () => {
        console.log('done loading content');
      }
    );

    // Load content from server
    fetch('/load')
      .then((response) => response.json())
      .then((response) => {
        const html =
          response.html ||
          `
          <div class="is-section is-section-100 is-box box-space type-opensans">
          <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
          <div class="is-boxes">
              <div class="is-box-centered is-opacity-95">
                  <div class="is-container v2 container is-content-1600">
                      <div class="row clearfix">
                          <div class="column full">
                              <div class="embed-responsive embed-responsive-16by9">
                                  <iframe width="560" height="315" src="https://eazel.net/show_vr/d12892c66983?fullscreen=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <!---OTHERS--->
      <link data-name="contentstyle" data-class="type-opensans" href="assets/styles/type-opensans.css" rel="stylesheet">
`;
        const mainCss = response.mainCss || '';
        const sectionCss = response.sectionCss || '';

        // Render html content
        renderHtml(html);

        // Render Styles
        renderStyles(mainCss, sectionCss); // this appends the styles into head

        // Add required scripts for viewing the content
        addExternalScripts([
          '/box/box-flex.js',
          '/assets/scripts/glide/glide.js',
          '/assets/scripts/navbar/navbar.min.js',
        ]);

        // Show
        const wrapper = document.querySelector('.is-wrapper');
        wrapper.style.opacity = 1;
      });
  }

  return (
    <>
      <div className='panel-home is-cms' style={{ zIndex: '10' }}>
        <section>
          <Link className='is-btn' to={'/edit'}>
            Edit
          </Link>
        </section>
      </div>

      <div>
        <h3>Home 입니다</h3>
      </div>
      <div className='is-wrapper' style={{ opacity: 0 }}></div>
    </>
  );
}

export default Home;
