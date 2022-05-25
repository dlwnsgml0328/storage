import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addExternalScripts, addExternalStyles, renderHtml, renderStyles } from './util';
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
                <div class="is-section is-section-100 is-shadow-1 is-bg-grey">
                    <div class="is-boxes">
                        <div class="is-box-img is-box is-box-6" style="background-color: rgb(247, 247, 247); background-image: linear-gradient(0deg, rgb(255, 208, 100), rgb(239, 98, 159));">
                            <div class="is-boxes ">
                                <div class="is-overlay">
                                    <div class="is-overlay-bg" style="background-image: url(&quot;uploads/travel.png&quot;); background-position: 50% 60%; transform: translateY(-0.0631912px) scale(1.05);" data-bottom-top="transform:translateY(-120px) scale(1.05);" data-top-bottom="transform:translateY(120px) scale(1.05)"></div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-dark-text is-bg-light is-box-6">
                            <div class="is-boxes">
                                <div class="is-box-centered">
                                    <div class="is-container container" style="max-width: 480px;">
                                        <div class="row clearfix">
                                            <div class="column full right">
                                                <div class="display">
                                                    <h1 class="size-72">A Little Story</h1>
                                                </div>
                                                <p style="border-bottom: 3px solid #333; width: 80px; display: inline-block;"></p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <div class="spacer height-40"></div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
