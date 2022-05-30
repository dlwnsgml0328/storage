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
<div class="is-section is-section-100 is-shadow-1">
    <div class="is-boxes">
        <!-- 글 -->
        <div class="is-box is-bg-light is-dark-text is-box-8 type-oranienbaum-sourcesanspro">
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container container edge-x-5 is-content-right is-content-500">
                        <div class="row clearfix">
                            <div class="column full">
                                <h1 class="size-54 text-right">Fall in Love with Simplicity</h1>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="column full text-justify">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="column full">
                                <p class="size-16 text-right"><span class="italic">Written with love by Jane Smith</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 이미지 -->
        <div class="is-box-img is-box is-box-4">
            <div class="is-boxes">
                <!-- 이미지 오버레이 -->
                <div class="is-overlay">
                    <div class="is-overlay-bg" style="background-image: url(&quot;assets/designs/images/b9blf1321.jpg&quot;); background-position: 20% 60%; transform: translateY(1.32191px) scale(1.05);" data-bottom-top="transform:translateY(-120px) scale(1.05);" data-top-bottom="transform:translateY(120px) scale(1.05)"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-section-100 is-shadow-1">
    <div class="is-boxes">
        <div class="is-box-img is-box is-box-5">
            <div class="is-boxes ">
                <div class="is-overlay">
                    <div class="is-overlay-bg" style="background-image: url(&quot;assets/designs/images/GoAJE34920.jpg&quot;); background-position: 60% 70%; transform: translateY(-81.3709px) scale(1.05);" data-bottom-top="transform:translateY(-120px) scale(1.05);" data-top-bottom="transform:translateY(120px) scale(1.05)"></div>
                </div>
            </div>
        </div>
        <div class="is-box is-dark-text is-box-7 type-sixcaps-robotomono">
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container container is-content-500 is-content-right">
                        <div class="row clearfix">
                            <div class="column full">
                                <i class="icon ion-android-favorite-outline size-48 leading-18"></i>
                                <h1 class="size-50">Love Where You Live</h1>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="column full">
                                <div class="spacer height-40"></div>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="column full">
                                <p class="text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="column full">
                                <p class="size-16">— Dave Anderson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-section-100 is-box box-space type-opensans">
    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
    <div class="is-boxes">
        <div class="is-box-centered is-opacity-95">
            <div class="is-container v2 container is-content-680">
                <div class="row clearfix">
                    <div class="column full">
                        <h2 class="size-38">80 Days Around the World</h2>
                        <div class="spacer height-40"></div>
                        <p class="text-justify">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world.</p>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="column half">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="mg1" src="https://maps.google.com/maps?q=Melbourne,+Victoria,+Australia&amp;hl=en&amp;sll=-7.981898,112.626504&amp;sspn=0.009084,0.016512&amp;oq=melbourne&amp;hnear=Melbourne+Victoria,+Australia&amp;t=m&amp;z=10&amp;output=embed"></iframe>
                        </div>
                    </div>
                    <div class="column half">
                        <h1 class="size-32 is-title1-32 is-title-lite">FIND US HERE</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <div class="is-social edit size-18">
                            <a href="https://twitter.com/"><i class="icon ion-social-twitter" style="margin-right: 1em"></i></a>
                            <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="margin-right: 1em"></i></a>
                            <a href="mailto:you@example.com"><i class="icon ion-ios-email-outline"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section is-section-100 is-shadow-1">
    <div class="is-boxes">
        <div class="is-box box-autofit is-box-5 is-dark-text is-bg-light">
            <div class="is-boxes" style="min-height:auto">
                <div class="is-box-centered">
                    <div class="is-container is-content-500 container" nogrid="" style="margin-bottom:0;">
                        <div class="row clearfix" data-protected="">
                            <div class="column full" data-protected="" data-image-allowed="">
                                <div style="position: relative;height: 30vw;min-height: 450px;max-height:600px;">
                                    <div style="position: absolute;z-index: 100;width: 140%;left: -120%;top: -35%;max-width: 500px;transform:rotateX(-60deg) rotateZ(40deg);">
                                        <img alt="" src="assets/designs/images/products-14-EcY621.jpg" style="box-shadow: rgba(22, 22, 22, 0.4) 3em 3em 5em; width: 100%; transform: translateX(-200px); opacity: 0;" data-bottom-top="transform:translateX(-200px);opacity:0;" data-center="transform:translateX(0px);opacity:1;">
                                    </div>
                                    <div style="position: absolute;z-index: 70;width: 140%;left: 32%;top: -10%;max-width: 500px;transform:rotateX(-60deg) rotateZ(40deg);">
                                        <img alt="" src="assets/designs/images/partners-09-Ou4041.jpg" style="box-shadow: rgba(22, 22, 22, 0.4) 3em 3em 5em; width: 100%; transform: translateY(-120px); opacity: 0;" data-bottom-top="transform:translateY(-120px);opacity:0;" data-center="transform:translateY(0px);opacity:1;">
                                    </div>
                                    <div style="position: absolute;z-index: 50;width: 140%;left: -35%;top: 17%;max-width: 500px;transform:rotateX(-60deg) rotateZ(40deg);">
                                        <img alt="" src="assets/designs/images/header-24-PYTFr1.jpg" style="box-shadow: rgba(22, 22, 22, 0.4) 3em 3em 5em; width: 100%; transform: translateX(150px); opacity: 0;" data-bottom-top="transform:translateX(150px);opacity:0;" data-center-top="transform:translateX(0px);opacity:1;">
                                    </div>
                                    <div style="position: absolute;z-index: 0;width: 140%;left: -104%;top: 43%;max-width: 500px;transform:rotateX(-60deg) rotateZ(40deg);">
                                        <img alt="" src="assets/designs/images/header-57-zv5Rh2.jpg" style="box-shadow: rgba(22, 22, 22, 0.4) 3em 3em 5em; width: 100%; transform: translateY(100px); opacity: 0;" data-bottom-top="transform:translateY(100px);opacity:0;" data--100-bottom="transform:translateY(0px);opacity:1;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-box box-autofit is-box-7 is-dark-text is-bg-light type-lato">
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container container is-content-660" style="max-width: 660px;">
                        <div class="row clearfix">
                            <div class="column full center">
                                <h1 class="size-50 font-semibold" style="letter-spacing: 1px;">Everything you need to create beautiful pages and share your stories.</h1>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="column full">
                                <div class="center" style="margin: 20px 0"><a href="#" class="is-btn is-btn-ghost1 is-upper is-btn-small">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="is-section upper_btn" style="background: transparent; height: 1px; min-height: 0px;">
    <div style="position: fixed; bottom: 50px; right: 50px; z-index:9999;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style="width: 24px; height: 24px; cursor: pointer" onclick="window.scrollTo(0,0);">
            <polyline points="2.5 36.25 25 13.75 47.5 36.25" fill="none" stroke="#000" stroke-width="1.5" stroke-miterlimit="10"></polyline>
            <rect width="50" height="50" fill="none"></rect>
        </svg>
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
