function _tabs(n) {
  var html = '';
  for (var i = 1; i <= n; i++) {
    html += '\t';
  }
  return '\n' + html;
}

var data_basic = {
  designs: [
    {
      thumbnail: 'preview/basic-01.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text is-content-bottom type-opensans">
                    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
                        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/person5.png&quot;); background-position: 0% 7%; filter: grayscale(1); background-size: 121%; " data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                    </div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-bottom edge-y-5">
                            <div class="is-container v2 container is-content-left edge-x-4 is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <p class="size-21">Our Studio</p>
                                            <h1 class="size-42">We build and design highly-crafted brands and websites</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp;
                                        <a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); border-color: rgb(53, 53, 53); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px; color: rgb(53, 53, 53);">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-target="border,svgfill" class="is-arrow-down bounce" data-scroll-preset="7" style="width: 30px;margin-left: -15px;height: 40px;">
                        <a href="#" style="border:#fff 2px solid;border-radius: 5px;background:none;">
                            <svg style="width:17px;height:17px;fill:#fff;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-02.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 is-box type-opensans">
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-680">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h2 class="size-38">80 Days Around the World</h2>
                                        <div class="spacer height-40"></div>
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-03.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-box-6">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered">
                                    <div class="is-container v2 container is-content-440">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-35">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                        <div class="is-box is-dark-text is-box-6">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-440">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-04.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-box-6 is-content-top">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%;  filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                        <div class="is-box is-dark-text is-box-6">
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-400">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <div class="spacer height-60"></div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-05.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-dark-text is-box-6">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-400">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <div class="spacer height-60"></div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-box-6">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-06.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 is-shadow-1 type-opensans">
                    <div class="is-boxes">
                        <div class="is-box-4 is-box is-dark-text is-content-top">
                            <div class="is-overlay" style="background-color: rgb(243, 243, 243);">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-top">
                                    <div class="is-container v2 container is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box-4 is-box is-dark-text is-content-bottom">
                            <div class="is-overlay" style="background-color: rgb(250, 250, 250);">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-bottom">
                                    <div class="is-container v2 container is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box-4 is-box is-dark-text is-content-top">
                            <div class="is-overlay">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 46% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-top">
                                    <div class="is-container v2 container is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-21">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-07.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text is-content-bottom type-opensans box-space">
                    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
                        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/person5.png&quot;); background-position: 0% 7%; background-size: 121%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                    </div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-bottom edge-y-5">
                            <div class="is-container v2 container is-content-left edge-x-4 is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <p class="size-21">Our Studio</p>
                                            <h1 class="size-42">We build and design highly-crafted brands and websites</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp;
                                        <a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); border-color: rgb(53, 53, 53); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px; color: rgb(53, 53, 53);">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-target="border,svgfill" class="is-arrow-down bounce" data-scroll-preset="7" style="width: 30px;margin-left: -15px;height: 40px;">
                        <a href="#" style="border:#fff 2px solid;border-radius: 5px;background:none;">
                            <svg style="width:17px;height:17px;fill:#fff;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-08.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 is-box box-space type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-680">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h2 class="size-38">80 Days Around the World</h2>
                                        <div class="spacer height-40"></div>
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-09.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 type-opensans box-space">
                    <div class="is-boxes">
                        <div class="is-box is-box-6">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered">
                                    <div class="is-container v2 container is-content-440">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-35">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-dark-text is-box-6">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-440">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-10.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 box-space type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-box-6">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                        <div class="is-box is-dark-text is-box-6">
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-400">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <div class="spacer height-60"></div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-11.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 box-space type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-dark-text is-box-6">
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-400">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <div class="spacer height-60"></div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-box-6">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-12.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 is-shadow-1 box-space no-space-between type-opensans">
                    <div class="is-boxes">
                        <div class="is-box-4 is-box is-dark-text is-content-top">
                            <div class="is-overlay" style="background-color: rgb(243, 243, 243);">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-top">
                                    <div class="is-container v2 container is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box-4 is-box is-dark-text is-content-bottom">
                            <div class="is-overlay" style="background-color: rgb(250, 250, 250);">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-bottom">
                                    <div class="is-container v2 container is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                
                                                <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box-4 is-box is-dark-text is-content-top">
                            <div class="is-overlay">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-top">
                                    <div class="is-container v2 container is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-21">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/basic-13.gif',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
      <div class="is-section is-section-100 box-space type-opensans">
        <div class="is-boxes">
            <div class="is-box is-box-6">
                <div class="is-overlay" style="background-color: rgb(233, 247, 234);"></div>
                <div class="is-boxes">
                    <div class="is-box-centered is-opacity-90 edge-y--1">
                        <div class="is-container container is-content-700 v2">
                            <div class="row clearfix">
                                <div class="column full">
                                    <h3 class="size-32">Hello Eazel!</h3>
                                    <p class="size-21 text-left" style="color: rgb(116, 116, 116);">— junhee lee&nbsp;</p>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="column full">
                                    <div class="spacer height-60"></div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="column full">
                                    <p class="text-justify">어서오세요 이젤의 에디터입니다</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="is-box is-box-6">
                <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
    
                    <div class="is-overlay-bg" style="background-image: url(&quot;assets/designs/images/oa5VK05847.jpg&quot;); background-position: 50% 60%;"></div>
                </div>
            </div>
        </div>
    </div>
            `,
    },

    {
      thumbnail: 'preview/basic-14.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
      <div class="is-section is-section-100">
      <div class="is-boxes">
          <div class="is-box box-autofit is-box-7 is-light-text type-poppins" style="background-color: rgb(239, 108, 0);background-image: linear-gradient(0deg, rgb(244, 74, 9), rgb(255, 121, 7));">
              <div class="is-overlay" style="background-color: rgb(160, 160, 160);"></div>
              <div class="is-boxes">
                  <div class="is-box-centered is-opacity-95">
                      <div class="is-container container v2 is-content-700" style="max-width: 700px;">
                          <div class="row clearfix">
                              <div class="column full center">
                                  <div class="display">
                                      <p class="size-16">We Are Creative Agency in New York</p>
                                      <h1 class="size-136 leading-12" style="letter-spacing: 8px;">BOLD. BETTER.</h1>
                                      <div class="spacer height-20"></div>
                                  </div>
                              </div>
                          </div>
                          <div class="row clearfix">
                              <div class="column full center">
                                  <a href="#" class="is-btn is-btn-ghost1 is-upper">Get A Quote</a>
                                  <div class="spacer height-40"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="is-box box-autofit is-dark-text is-box-5" style="background-color: rgb(239, 108, 0);background-image: linear-gradient(0deg, rgb(244, 74, 9), rgb(255, 121, 7));">
              <div class="is-overlay" style="background-color: rgb(158, 158, 158);"></div>
              <div class="is-boxes" style="min-height:auto">
                  <div class="is-box-centered is-opacity-95">
                      <div class="is-container is-content-500 container" nogrid="" style="margin-top:0;margin-bottom:0;">
                          <div class="row clearfix" data-protected="">
                              <div class="column full" data-protected="" data-image-allowed="">
                                  <div style="position: relative;min-height: 450px;width: 21vw;min-width: 400px;">
                                      <div style="position: absolute;z-index: 100;width: 100%;left: 22vw;top: -11vw;transform: rotateX(10deg) rotateZ(-30deg);">
                                          <img alt="" src="assets/designs/images/iphone1c-42jmv1-Tv0es1.png" style="width: 100%; transform: translateY(34.9501px);" data-bottom-top="transform:translateY(250px);" data-center="transform:translateY(0px);">
                                      </div>
                                      <div style="position: absolute;z-index: 50;width: 100%;left: 5.4vw;top: -8vw;transform: rotateX(10deg) rotateZ(-30deg);">
                                          <img alt="" src="assets/designs/images/iphone003-FYNX11.png" style="width: 100%; transform: translateY(14.7857px);" data-bottom-top="transform:translateY(150px);" data-center="transform:translateY(0px);">
                                      </div>
                                      <div style="position: absolute;z-index: 0;width: 100%;left: -6vw;top: 4vw;transform: rotateX(10deg) rotateZ(-30deg);">
                                          <img alt="" src="assets/designs/images/iphone001-oENHc3.png" style="width: 100%; transform: translateY(0px);" data-bottom-top="transform:translateY(200px);" data-center-top="transform:translateY(0px);">
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
              `,
    },

    {
      thumbnail: 'preview/basic-15.png',
      category: '1',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
        <div class="is-section is-section-100 is-box" style="background-color: rgb(248, 248, 248);">
            <div class="is-overlay" style="background-color: rgb(233, 247, 234);"></div>
            <div class="is-boxes">
                <div class="is-box-centered">
                    <div class="is-container container is-content-1500">
                        <div class="row clearfix">
                            <div class="column full">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe width="100%" height="100%" src="https://eazel.net/show_vr/d12892c66983?fullscreen=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                `,
    },

    /* GLIDE SLIDER */
    {
      thumbnail: 'preview/slider-01.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-02.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-03.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-04.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-05.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-06.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* with box-space */

    {
      thumbnail: 'preview/slider-07.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-08.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-09.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-10.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-11.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-12.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 1,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":1,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-13.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-75 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 2,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            'breakpoints: {' +
            '970: { perView: 1, gap: 0 }' +
            '},' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":2,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-14.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-60 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 3,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            'breakpoints: {' +
            '1280: { perView: 2 },' +
            '970: { perView: 1, gap: 0 }' +
            '},' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":3,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-15.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-50 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 0,' +
            'perView: 4,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            'breakpoints: {' +
            '1440: { perView: 3 }, 1280: { perView: 2 },' +
            '1280: { perView: 2 },' +
            '970: { perView: 1, gap: 0 }' +
            '},' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":0,' +
            '"perView":4,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-16.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-75 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 30,' +
            'perView: 2,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            'breakpoints: {' +
            '970: { perView: 1, gap: 0 }' +
            '},' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":30,' +
            '"perView":2,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-17.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-60 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 30,' +
            'perView: 3,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            'breakpoints: {' +
            '1280: { perView: 2 },' +
            '970: { perView: 1, gap: 0 }' +
            '},' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":30,' +
            '"perView":3,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-18.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'glide',
      html:
        '<div class="is-section is-section-50 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider-box" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '' +
            '<svg width="0" height="0" style="position:absolute;display:none;">' +
            '<defs>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-left"><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path></symbol>' +
            '<symbol viewBox="0 0 512 512" id="ion-ios-arrow-right"><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path></symbol>' +
            '</defs>' +
            '</svg>' +
            '<div id="{id}" class="glide cover" style="display:none">' +
            '<div data-glide-el="track" class="glide__track">' +
            '<ul class="glide__slides">' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg1.png" alt="" /></div>' +
            '</li>' +
            '<li class="glide__slide">' +
            '<div data-subblock><img data-image-embed data-noresize data-sync src="[%IMAGE_PATH%]images/bg2.png" alt="" /></div>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '' +
            '<div class="glide__arrows" data-glide-el="controls">' +
            '<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-left"></use></svg></button>' +
            '<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg class="is-icon-flex"><use xlink:href="#ion-ios-arrow-right"></use></svg></button>' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'document.querySelector("#{id}").style.display="";' +
            'var _{id} = new Glide("#{id}", {' +
            'type: "carousel",' +
            'autoplay: 3000,' +
            'animationDuration: 1000,' +
            'gap: 30,' +
            'perView: 4,' +
            'hoverpause: false,' +
            'arrow: true,' +
            'dots: false,' +
            'breakpoints: {' +
            '1440: { perView: 3 }, 1280: { perView: 2 },' +
            '1280: { perView: 2 },' +
            '970: { perView: 1, gap: 0 }' +
            '},' +
            '}).mount();' +
            '_cleanClonedItems();' +
            '});' +
            'function _cleanClonedItems() {' +
            'var clones = document.querySelectorAll(".glide__slide--clone");' +
            'Array.prototype.forEach.call(clones, function(clone){' +
            'clone.removeAttribute("data-subblock");' +
            'clone.childNodes[0].removeAttribute("data-subblock");' +
            '});' +
            '}' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"type": "carousel",' +
            '"autoplay": 3000,' +
            '"animationDuration":1000,' +
            '"gap":30,' +
            '"perView":4,' +
            '"hoverpause": false,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fit":"cover",' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "style": ""' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "style": ""' +
            '}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* SLICK SLIDER */

    {
      thumbnail: 'preview/slider-01.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-02.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-03.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-04.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-05.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-06.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* with box-space */

    {
      thumbnail: 'preview/slider-07.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(72, 72, 72); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-08.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-09.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-10.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 box-space is-box is-align-left is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-11.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/slider-12.png',
      category: '2',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'slick',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-35">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-align-left is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="slider" data-module-desc="Slider" data-html="' +
        encodeURIComponent(
          '<div id="{id}" class="slider-on-box" style="width:100%;height:100%;">' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg1.png\');">' +
            '</div>' +
            '<div class="is-boxes slider-image" style="background-image: url(\'[%IMAGE_PATH%]images/bg2.png\');">' +
            '</div>' +
            '</div>' +
            '' +
            '<scr' +
            'ipt>' +
            'var docReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (document.readyState !== "complete") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'docReady(function () {' +
            'jQuery("#{id}").slick({' +
            'dots: false,' +
            'arrows: true,' +
            'infinite: true,' +
            'speed: 500,' +
            'cssEase: "linear",' +
            'slidesToShow: 1,' +
            'autoplay: true,' +
            'autoplaySpeed: 3000,' +
            'fade: false,' +
            'adaptiveHeight: true' +
            '});' +
            '});' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '[' +
            '{' +
            '"auto":true,' +
            '"arrow":true,' +
            '"dots":false,' +
            '"fade":false,' +
            '"images":' +
            '[' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg1.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '},' +
            '{' +
            '"src": "[%IMAGE_PATH%]images/bg2.png", ' +
            '"caption": "", "link": "", "width": "450", "align": "", "position": "bottom left"' +
            '}' +
            ']' +
            '}]'
        ) +
        '"' +
        '>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* VIDEO */

    {
      thumbnail: 'preview/video-01.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-box is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-02.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-03.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-04.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-box is-dark-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-05.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-06.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* with box-space */

    {
      thumbnail: 'preview/video-07.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space is-box is-light-text type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-08.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-09.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-10.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space is-box type-opensans">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-11.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/video-12.png',
      category: '3',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content" data-module="video-bg" data-module-desc="Video Background" data-dialog-width="600px" data-dialog-height="350px" ' +
        'data-html="' +
        encodeURIComponent(
          '' +
            '<video class="is-video-bg" playsinline autoplay muted loop>' +
            '<source src="[%IMAGE_PATH%]videos/example1.mp4" type="video/mp4">' +
            '</video>' +
            '<div class="is-overlay-video"></div>'
        ) +
        '"' +
        'data-settings="' +
        encodeURIComponent(
          '[{ "mp4": "[%IMAGE_PATH%]videos/example1.mp4", "poster": "", "overlay": 0.25}]'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* CUSTOM CODE */

    {
      thumbnail: 'preview/code-01.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-box is-light-text type-opensans">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-02.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-03.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-04.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-box is-dark-text type-opensans">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-05.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-06.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    /* with box-space */

    {
      thumbnail: 'preview/code-07.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space is-box is-light-text type-opensans">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="display">' +
        '<p class="size-21">Our Studio</p>' +
        '<h1 class="size-42">We build and design highly-crafted brands and websites</h1>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-40"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full"><a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(247, 247, 247); color: rgb(0, 0, 0); border-color: rgb(247, 247, 247); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 1.5; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Read More</a> &nbsp; ' +
        '<a href="#" style="display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 600; font-size: 14px; letter-spacing: 3px;">Get Started</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-08.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-09.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space is-shadow-1 type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-440">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-light-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-380">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left;">— The Author</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-10.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space is-box is-dark-text type-opensans">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-11.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/code-12.png',
      category: '4',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html:
        '<div class="is-section is-section-100 box-space type-opensans">' +
        '<div class="is-boxes">' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-boxes">' +
        '<div class="is-box-centered">' +
        '<div class="is-container v2 container is-content-400">' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<h3 class="size-32">One for all and all for one, helping everybody.</h3>' +
        '<p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<div class="spacer height-60"></div>' +
        '</div>' +
        '</div>' +
        '<div class="row clearfix">' +
        '<div class="column full">' +
        '<p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="is-box-6 is-box is-dark-text">' +
        '<div class="is-overlay" style="background-image: linear-gradient(0deg, rgb(90, 103, 197), rgb(0, 184, 201));">' +
        '<div class="is-overlay-content" data-module="code" data-module-desc="Custom HTML or Javascript " data-html="' +
        encodeURIComponent(
          '' +
            '<div style="overflow:hidden;width:100%;height:100%;position:absolute;">' +
            '<canvas id="{id}" style="width:100%;height:100%;position:absolute;"></canvas>' +
            '</div>' +
            '<script>' +
            '(function() {' +
            "var canvas = document.getElementById('{id}');" +
            "var ctx = canvas.getContext('2d');" +
            'var ww = window.innerWidth;' +
            'var wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'var partCount = 100;' +
            'var particles = [];' +
            "window.addEventListener('resize', function(){" +
            'ww = window.innerWidth;' +
            'wh = window.innerHeight;' +
            'canvas.width = ww;' +
            'canvas.height= wh;' +
            'clearCanvas();' +
            'particles = [];' +
            'init();' +
            '});' +
            'particle = function(){' +
            "this.color = 'rgba(255,255,255," +
            Math.random() +
            ")';" +
            'this.x = randomInt(0,ww);' +
            'this.y = randomInt(0,wh);' +
            'this.direction = {' +
            "'x': -1 + Math.random() * 12," +
            "'y': -1 + Math.random() * 12" +
            '};' +
            'this.vx = 0.3 * Math.random();' +
            'this.vy = 0.3 * Math.random();' +
            'this.radius = randomInt(2,3);' +
            'this.float = function(){' +
            'this.x += this.vx * this.direction.x;' +
            'this.y += this.vy * this.direction.y;' +
            '};' +
            'this.changeDirection = function (axis) {' +
            'this.direction[axis] *= -1;' +
            '};' +
            'this.boundaryCheck = function () {' +
            'if (this.x >= ww) {' +
            'this.x = ww;' +
            'this.changeDirection("x");' +
            '} else if (this.x <= 0) {' +
            'this.x = 0;' +
            'this.changeDirection("x");' +
            '}' +
            'if (this.y >= wh) {' +
            'this.y = wh;' +
            'this.changeDirection("y");' +
            '} else if (this.y <= 0) {' +
            'this.y = 0;' +
            'this.changeDirection("y");' +
            '}' +
            '};' +
            'this.draw = function () {' +
            'ctx.beginPath();' +
            'ctx.fillStyle = this.color;' +
            'ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);' +
            'ctx.fill();' +
            '};' +
            '};' +
            'function init () {' +
            'createParticles();' +
            'drawParticles();' +
            '}' +
            'function animate() {' +
            'clearCanvas();' +
            'drawParticles();' +
            'updateParticles();' +
            'requestAnimationFrame(animate);' +
            '}' +
            'function clearCanvas() {' +
            'ctx.clearRect(0, 0, ww, wh);' +
            '}' +
            'function createParticles(){' +
            'for (i=0;i<partCount;i++){' +
            'var p = new particle();' +
            'particles.push(p);' +
            '}' +
            '}' +
            'function drawParticles() {' +
            'for (i=0;i<particles.length;i++) {' +
            'p = particles[i];' +
            'p.draw();' +
            '}' +
            '}' +
            'function updateParticles() {' +
            'for (var i = particles.length - 1; i >= 0; i--) {' +
            'p = particles[i];' +
            'p.float();' +
            'p.boundaryCheck();' +
            '}' +
            '}' +
            'function randomInt(min,max) {' +
            'return Math.floor(Math.random()*(max-min+1)+min);' +
            '}' +
            'init();' +
            'animate();' +
            '}).call(this);' +
            '</script>' +
            ''
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/idea-001.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-content-top is-dark-text type-opensans">
                    <div class="is-overlay" style="background-color: rgb(225, 225, 225);">
                        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/person5.png&quot;); background-position: 50% 0%; transform: translateY(-36.7347px) scale(1.19592); filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                    </div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-top edge-y-3">
                            <div class="is-container v2 container is-content-left is-content-580" data-bottom-top="transform:translateY(-20%)" data-top-bottom="transform:translateY(20%)">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <p class="size-21">Our Studio</p>
                                            <h1 class="size-42">We build and design highly-crafted brands and websites</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-target="border,svgfill" class="is-arrow-down bounce" data-scroll-preset="7" style="width: 30px;margin-left: -15px;height: 40px;">
                        <a href="#" style="border:#fff 2px solid;border-radius: 5px;background:none;">
                            <svg style="width:17px;height:17px;fill:#fff;" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-002.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-760">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <h1 class="size-54" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Designing and building highly-crafted brands and websites.</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-60"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/navbar-01.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      type: 'navbar',
      html:
        '<div class="is-section is-section-navbar is-section-sticky is-section-auto is-box type-opensans" style="height:90px;background:transparent;">' +
        '<div class="is-overlay">' +
        '<div class="is-overlay-content content-selectable" data-module="navbar-builder" data-module-desc="Navigation Bar" data-dialog-width="570px" data-dialog-height="640px" data-html="' +
        encodeURIComponent(
          '' +
            '<div class="is-topbar">' +
            '<div class="is-topbar-container" style="max-width:980px;">' +
            '<div class="is-topbar-logo">' +
            '<a class="is-logo-link" href="." title="Your Name">' +
            // '<img class="is-photo-profile circle" src="uploads/innova-logo.png" alt="Your Name">' +
            '<span class="is-sitename">Your Name</span>' +
            '</a>' +
            '</div>' +
            '<div class="is-topbar-menu">' +
            '<a id="is-menu-toggle" href="javascript:void(0)" title="Menu"><span class="line line-1"></span><span class="line line-2"></span><span class="line line-3"></span></a>' +
            '<div class="is-menu-overlay"></div>' +
            '<div class="is-menu">' +
            '<div class="is-menu-search-input"><input id="is_txtSearch" type="text" placeholder="Search" /><button id="is_btnSearch"><i class="icon-menu-search"></i></button></div>' +
            '<ul class="is-menu-links">' +
            '<li><a href="#section1"><i class="icon ion-android-home"></i></a></li>' +
            '<li><a href="portfolio">Portfolio</a></li>' +
            '<li><a href="about">About</a></li>' +
            '<li><a href=""><i class="icon ion-android-share-alt"></i></a>' +
            '<ul>' +
            '<li><a href="https://twitter.com">Twitter</a></li>' +
            '<li><a href="https://facebook">Facebook</a></li>' +
            '<li><a href="https://youtube.com">Youtube</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<scr' +
            'ipt>' +
            'var navbarReady = function (fn) {' +
            'var stateCheck = setInterval(function () {' +
            'if (typeof NavBar === "undefined") return;' +
            'clearInterval(stateCheck);' +
            'try { fn() } catch (e) { }' +
            '}, 1);' +
            '};' +
            'navbarReady(function () {' +
            'var obj = new NavBar({' +
            'onSearch: (keywords)=>{' +
            'alert(keywords)' +
            '}' +
            '});' +
            'obj.init();' +
            '});' +
            '' +
            '</scr' +
            'ipt>' +
            ''
        ) +
        '" data-settings="' +
        encodeURIComponent(
          '' +
            '{' +
            '"logotext": "Your Name",' +
            '"logolink": "",' +
            '"logocircle": true,' +
            '"topbar": "",' +
            '"maxwidth": 980,' +
            '"menu":' +
            '[' +
            '{"name": "Home", "link": "#section1", "html": "' +
            encodeURIComponent('<i class="icon ion-android-home"></i>') +
            '", "class": "", "sub": []},' +
            '{"name": "Portfolio", "link": "portfolio", "class": "","sub": []},' +
            '{"name": "About", "link": "about", "class": "","sub": []},' +
            '{"name": "Share", "link": "", "html": "' +
            encodeURIComponent('<i class="icon ion-android-share-alt"></i>') +
            '", "class": "", "sub": [' +
            '{"name": "Twitter","link": "https://twitter.com", "class": "", "sub": []},' +
            '{"name": "Facebook","link": "https://facebook", "class": "", "sub": []},' +
            '{"name": "Youtube","link": "https://youtube.com", "class": "", "sub": []}' +
            ']}' +
            ']' +
            '}'
        ) +
        '">' +
        '</div>' +
        '</div>' +
        '\n</div>',
    },

    {
      thumbnail: 'preview/idea-003.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 box-space type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="display">
                                            <h1 class="size-46" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">One.</h1>
                                            <div class="spacer height-80"></div>
                                        </div>
                                        <p style="text-align: left; color: rgb(109, 109, 109); line-height: 1.4;" class="size-21">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
                                    </div>
                                    <div class="column third">
                                        <div class="display">
                                            <h1 class="size-46" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Two.</h1>
                                            <div class="spacer height-80"></div>
                                        </div>
                                        <p style="text-align: left; color: rgb(109, 109, 109); line-height: 1.4;" class="size-21">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
                                    </div>
                                    <div class="column third">
                                        <div class="display">
                                            <h1 class="size-46" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Three.</h1>
                                            <div class="spacer height-80"></div>
                                        </div>
                                        <p style="text-align: left; color: rgb(109, 109, 109); line-height: 1.4;" class="size-21">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-004.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box box-space is-section-100 type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-980">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <h1 class="size-160" style="line-height: 1; text-transform: uppercase; text-align: left; letter-spacing: 2px; font-weight: 800;">Love It</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column two-third">
                                        <p style="text-align: justify;">Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-005.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text type-opensans is-section-20 is-content-bottom">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-bottom edge-y-0">
                            <div class="is-container v2 container is-content-left edge-x-0 is-content-540">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-20"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="display">
                                            <h1 class="size-19" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">Behind the Scene</h1>
                                            <h1 class="size-60" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">2001-2022</h1>
                                        </div>
                                    </div>
                                    <div class="column half">
                                        <h2 class="size-14" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-section is-box box-space type-opensans is-section-80">
                    <div class="is-overlay">
                        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; transform: translateY(-33.2256px) scale(1.20417); filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-006.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 type-opensans">
                    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-900">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p style="text-transform: uppercase; font-weight: 600; letter-spacing: 2px; text-align: right;">Services</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="display">
                                            <h1 class="size-54" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Branding</h1>
                                        </div>
                                    </div>
                                    <div class="column half">
                                        <p class="size-16">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time.</p>
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="display">
                                            <h1 class="size-54" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">UI/UX</h1>
                                        </div>
                                    </div>
                                    <div class="column half">
                                        <p class="size-16">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time.</p>
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="display">
                                            <h1 class="size-54" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Front-end</h1>
                                        </div>
                                    </div>
                                    <div class="column half">
                                        <p class="size-16">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-007.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 box-space no-space-between type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-dark-text is-box-4 is-content-top box-autofit">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-top edge-y-0">
                                    <div class="is-container v2 container is-content-left edge-x--0-5 is-content-800">
                                        <div class="row clearfix">
                                            <div class="column half">
                                                <h2 class="size-12" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h2>
                                            </div>
                                            <div class="column half">
                                                <div class="display">
                                                    <h1 class="size-18" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">Behind the Scene</h1>
                                                    <h1 class="size-60" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">2001-2022</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-box-8">
                            <div class="is-overlay">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 0% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-008.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-740">
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="display" style="border-bottom:#000 2px solid">
                                            <p class="size-54" style="line-height: 1; text-transform: none; text-align: right; font-weight: normal;">01</p>
                                        </div>
                                        <p class="size-16" style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div class="column half">
                                        <div class="display" style="border-bottom:#000 2px solid">
                                            <p class="size-54" style="line-height: 1; text-transform: none; text-align: right; font-weight: normal;">02</p>
                                        </div>
                                        <p class="size-16" style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="display" style="border-bottom:#000 2px solid">
                                            <p class="size-54" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">03</p>
                                        </div>
                                        <p class="size-16" style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div class="column half">
                                        <div class="display" style="border-bottom:#000 2px solid">
                                            <p class="size-54" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">04</p>
                                        </div>
                                        <p class="size-16" style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-009.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 box-space type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-dark-text is-box-4">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-440">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                                <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-box-8">
                            <div class="is-overlay">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-010.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 type-opensans">
                    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-640">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h3 class="size-32">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <p class="size-21" style="text-align: right; color: rgb(116, 116, 116);">— Your Name Here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-011.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 box-space is-dark-text type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-760">
                
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <h1 class="size-72" style="line-height: 1.4; text-transform: none; text-align: left; font-weight: normal;">Introduction</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-60"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h2 class="size-16" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h2>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-60"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-012.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-1160">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-20"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <p style="text-transform: uppercase; letter-spacing: 3px; font-weight: 600;" class="size-14">your name here</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <h1 class="size-116" style="line-height: 1; text-transform: none; font-weight: 600; text-align: left; letter-spacing: -6px;">Hi there, I design &amp; build highly-crafted brands &amp; websites</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-60"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <p style="text-align: justify;">Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                    <div class="column third">
                                        <p style="text-align: justify;">Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                    <div class="column third">
                                        <p style="text-align: justify;">Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-013.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-dark-text is-box-4">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered edge-y-6">
                                    <div class="is-container v2 container is-content-right edge-x-0 is-content-380">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                                <p class="size-18" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <div class="spacer height-20"></div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-box is-dark-text is-box-8">
                            <div class="is-overlay">
                            </div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90">
                                    <div class="is-container v2 container is-content-left edge-x-0 is-content-820">
                                        <div class="row clearfix">
                                            <div class="column full"><img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="" style="margin: 0px; float: left;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-014.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column half">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column half">
                                        <h3 class="size-32">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                        <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div class="column third">
                                        <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                        <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-015.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 box-space is-content-top is-dark-text type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-top">
                            <div class="is-container v2 container is-content-right edge-x-1 is-content-580">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <h1 class="size-64" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">Behind the Scene</h1>
                                            <p class="size-64" style="line-height: 0.7; text-transform: none; text-align: left; font-weight: normal;">2001-2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h2 class="size-14" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h2>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-016.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 box-space is-dark-text type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-640">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="display">
                                            <h1 class="size-68" style="line-height: 1; text-transform: none; text-align: left; font-weight: normal;">Behind the Scene</h1>
                                            <p class="size-68" style="line-height: 0.7; text-transform: none; text-align: left; font-weight: normal;">2001-2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-60"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column fourth">
                                        <p class="size-24" style="line-height: 0.9; font-weight: 600; text-align: right;">1.</p>
                                    </div>
                                    <div class="column two-fourth">
                                        <h2 class="size-14" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px; line-height: 1.675;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</h2>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column fourth">
                                        <p class="size-24" style="line-height: 0.9; font-weight: 600; text-align: right;">2.</p>
                                    </div>
                                    <div class="column two-fourth">
                                        <h2 class="size-14" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px; line-height: 1.675;">Time — we’ll fight against the time, and we’ll fly on the white wings of the wind.</h2>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column fourth">
                                        <p class="size-24" style="line-height: 0.9; font-weight: 600; text-align: right;">3.</p>
                                    </div>
                                    <div class="column two-fourth">
                                        <h2 class="size-14" style="text-transform: uppercase; font-weight: 600; letter-spacing: 1px; line-height: 1.675;">Round, round, all around the world. Round, all around the world. Round, all around the world.</h2>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-017.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-section-100 box-space type-opensans">
                    <div class="is-boxes">
                        <div class="is-box is-box-7">
                            <div class="is-overlay" style="background-color: rgb(247, 247, 247);">
                                <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                            </div>
                        </div>
                        <div class="is-box is-dark-text is-box-5 is-content-bottom box-autofit">
                            <div class="is-overlay"></div>
                            <div class="is-boxes">
                                <div class="is-box-centered is-opacity-90 is-content-bottom edge-y-0-75">
                                    <div class="is-container v2 container is-content-left edge-x-0 is-content-660">
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <h3 style="font-weight: 600; text-align: left;" class="size-32">About</h3>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="column full">
                                                <p style="text-align: justify;">Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-018.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-700">
                                <div class="row clearfix">
                                    <div class="column two-third">
                                        <h3 class="size-28">One for all and all for one, helping everybody.</h3>
                                        <p class="size-19" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix" style="margin-left: -100px; margin-right: -100px; border: none;">
                                    <div class="column full"><img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="" style="margin: 0px; float: left;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-019.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95">
                            <div class="is-container v2 container is-content-800">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p style="text-transform: uppercase; font-weight: 600; letter-spacing: 2px; text-align: right;">Product Info</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="display">
                                            <h1 class="size-21" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Overview</h1>
                                        </div>
                                    </div>
                                    <div class="column two-third">
                                        <p>80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="display">
                                            <h1 class="size-21" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Details</h1>
                                        </div>
                                    </div>
                                    <div class="column two-third">
                                        <table class="default" style="border-collapse:collapse;width:100%;">
                                            <thead>
                                                <tr>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);" valign="top">Author</td>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);" valign="top">Your Name</td>
                                                </tr>
                                                <tr>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);">Format</td>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);">Hard Cover</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);">Dimension</td>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);">27cm x 30cm</td>
                                                </tr>
                                                <tr>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);" valign="top">Pages</td>
                                                    <td style="border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);" valign="top">300</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="spacer height-60"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="display">
                                            <h1 class="size-21" style="line-height: 1.4; text-transform: none; font-weight: 600; text-align: left;">Order</h1>
                                        </div>
                                    </div>
                                    <div class="column two-third">
                                        <a href="#" style="margin-top: ;margin-right: ;margin-bottom: ;margin-left: ;display: inline-block; text-decoration: none; transition: all 0.16s ease 0s; border-style: solid; cursor: pointer; background-color: rgb(220, 220, 220); color: rgb(0, 0, 0); border-color: rgb(220, 220, 220); border-width: 2px; border-radius: 0px; padding: 13px 28px; line-height: 21px; text-transform: uppercase; font-weight: 400; font-size: 14px; letter-spacing: 3px;">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-020.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 box-space is-dark-text type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-820">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h3 class="size-38">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-20"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column two-third">
                                        <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                
                                <div class="row clearfix">
                                    <div class="column two-third">
                                        <p style="text-align: justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                        <p class="size-28" style="text-align: right; font-weight: 600; text-transform: uppercase; letter-spacing: 4px; line-height: 2;">Dec 12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-021.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-880">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column two-third">
                                        <h3 class="size-32">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-022.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box box-space is-section-70 type-opensans">
                    <div class="is-overlay">
                        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; transform: translateY(-9.43018px) scale(1.26016); filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                    </div>
                </div>
                
                <div class="is-section is-box is-dark-text is-content-top is-section-30 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-top edge-y-0-25">
                            <div class="is-container v2 container is-content-940">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h3 style="font-weight: 600; line-height: 1.2;text-align: center;" class="size-32">Words</h3>
                                        <p class="size-19" style="text-align: center; line-height: 1.8; color: rgb(116, 116, 116);">— The Author —</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <p class="size-16" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-023.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-25">
                            <div class="is-container v2 container is-content-1220">
                                <div class="row clearfix">
                                    <div class="column two-fourth">
                                        <h3 style="font-weight: 600; text-align: left;" class="size-160">About:</h3>
                                        <h3 class="size-24">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                        <p class="size-19" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                    <div class="column fourth">
                                        <div class="spacer height-80"></div>
                                    </div>
                
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-160"></div>
                                    </div>
                                </div>
                
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-024.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-25">
                            <div class="is-container v2 container is-content-1260">
                                <div class="row clearfix">
                                    <div class="column full" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                        <h3 style="font-weight: 600; text-align: center;" class="size-160">About:</h3>
                                        <h3 style="font-weight: 600; text-align: center; max-width: 1000px;" class="size-24">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                        <p class="size-19" style="text-align: center; color: rgb(116, 116, 116);">— The Author —</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-160"></div>
                                    </div>
                                </div>
                
                                <div class="row clearfix">
                
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-025.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-25">
                            <div class="is-container v2 container is-content-900">
                                <div class="row clearfix">
                                    <div class="column full" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                        <h3 style="font-weight: 600; text-align: center;" class="size-152">Welcome</h3>
                                        <h3 style="font-weight: 600; text-align: center; max-width: 1000px;" class="size-24">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                        <p class="size-19" style="text-align: center; color: rgb(116, 116, 116);">— The Author —</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-160"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                        <p class="size-17" style="text-align: justify; max-width: 800px;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-026.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box box-space is-section-70 type-opensans">
                    <div class="is-overlay">
                        <div class="is-overlay-bg" style="background-image: url(&quot;[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2.jpg&quot;); background-position: 50% 60%; transform: translateY(6.01587px) scale(1.29651); filter: grayscale(1);" data-bottom-top="transform:translateY(-120px) scale(1);" data-top-bottom="transform:translateY(50px) scale(1.4)"></div>
                    </div>
                </div>
                <div class="is-section is-box is-dark-text is-section-30 is-content-top type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 is-content-top edge-y-0">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column third">
                                        <p class="size-16" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-16" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-027.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-25">
                            <div class="is-container v2 container is-content-1160">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <h3 style="font-weight: 600; text-align: left;" class="size-28">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                    </div>
                                    <div class="column two-third">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column third">
                                        <p class="size-16" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-16"style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-028.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-25">
                            <div class="is-container v2 container is-content-1320">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <h3 style="font-weight: 600; text-align: left;" class="size-38">Fascinating Places, Great Journey.</h3>
                                        <p class="size-18" style="color: rgb(145, 145, 145);">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
                                    </div>
                                    <div class="column two-third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-180"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-029.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text box-space type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <h3 style="font-weight: 600; letter-spacing: 3px;" class="size-28">Words</h3>
                                        <div class="spacer height-20"></div>
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <h3 style="font-weight: 600; letter-spacing: 3px;" class="size-28">Illustrations</h3>
                                        <div class="spacer height-20"></div>
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                    <div class="column third">
                                        <h3 style="font-weight: 600; letter-spacing: 3px;" class="size-28">Photography</h3>
                                        <div class="spacer height-20"></div>
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-030.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-dark-text is-section-100 type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-25">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column third">
                                        <h3 style="font-weight: 600; text-align: left; max-width: 860px; line-height: 1.29583;" class="size-35">Fascinating Places, Great Journey.</h3>
                                        <p class="size-19" style="line-height:1.5;color: rgb(145, 145, 145);">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                    </div>
                                    <div class="column third">
                                        <p class="size-17" style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-031.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text box-space type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column half">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                    <div class="column half padding-20" style="display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
                                        <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-032.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text box-space type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column two-fifth">
                                        <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                    <div class="column fifth">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                    <div class="column half">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-033.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text box-space type-opensans">
                    <div class="is-overlay" style="background-color: rgb(247, 247, 247);"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-1200">
                                <div class="row clearfix">
                                    <div class="column two-fifth">
                                        <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                    <div class="column fifth">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                    <div class="column third">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                    <div class="column third">
                                        <img src="[%IMAGE_PATH%]images/oleg-laptev-545268-unsplash-VD7ll2-bw.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-034.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-860">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h3 class="size-32">One for all and all for one, helping everybody. Sharing everything with fun, that’s the way to be.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column third">
                                        <div class="spacer height-80"></div>
                                    </div>
                                    <div class="column two-third">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-035.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-840">
                                <div class="row clearfix">
                                    <div class="column full">
                                        <h3 style="text-align: center;" class="size-35">Welcome</h3>
                                        <p class="size-21" style="text-align: center; color: rgb(116, 116, 116);">— The Author —</p>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-40"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                    <div class="column half">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },

    {
      thumbnail: 'preview/idea-036.png',
      category: '5',
      googleFonts: [],
      contentCss: 'type-opensans.css',
      contentClass: 'type-opensans',
      html: `
                <div class="is-section is-box is-section-100 is-dark-text type-opensans">
                    <div class="is-overlay"></div>
                    <div class="is-boxes">
                        <div class="is-box-centered is-opacity-95 edge-y-0-5">
                            <div class="is-container v2 container is-content-880">
                                <div class="row clearfix">
                                    <div class="column half">
                                        <h3 class="size-32">One for all and all for one, helping everybody.</h3>
                                        <p class="size-21" style="text-align: left; color: rgb(116, 116, 116);">— The Author</p>
                                    </div>
                                    <div class="column half">
                                        <div class="spacer height-80"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column full">
                                        <div class="spacer height-120"></div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="column half">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
                                    </div>
                                    <div class="column half">
                                        <p style="text-align: justify;">80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    },
  ],
};
