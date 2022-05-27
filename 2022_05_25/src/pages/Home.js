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
          <div class="is-section is-box is-section-100 is-content-top is-dark-text type-opensans">
          <div class="is-overlay" style="background-color: rgb(223, 243, 224)">
            <div
              class="is-overlay-bg"
              style="
                background-image: url('/uploads/AnyConv.com__melting_logo.webp');
                background-position: 50% 60%;
                transform: translateY(-33.0933px) scale(1.20449);
                background-size: 100%;
              "
              data-bottom-top="transform:translateY(-120px) scale(1);"
              data-top-bottom="transform:translateY(50px) scale(1.4)"
            ></div>
          </div>
          <div class="is-boxes">
            <div class="is-box-centered is-opacity-95 is-content-top edge-y-3">
              <div
                class="is-container v2 container is-content-left is-content-580"
                data-bottom-top="transform:translateY(-20%)"
                data-top-bottom="transform:translateY(20%)"
              >
                <div class="row clearfix">
                  <div class="column full">
                    <div class="display">
                      <p class="size-21">Our Studio</p>
                      <h1 class="size-42">We build and design highly-crafted brands and websites</h1>
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="flex justify-center flex-col items-center column full">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-target="border,svgfill"
            class="is-arrow-down bounce"
            data-scroll-preset="7"
            style="width: 30px; margin-left: -15px; height: 40px"
          >
            <a href="#" style="border: #fff 2px solid; border-radius: 5px; background: none">
              <svg
                style="width: 17px; height: 17px; fill: #fff"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="is-section is-box is-section-100 type-opensans">
          <div class="is-overlay" style="background-color: rgb(239, 247, 233)"></div>
          <div class="is-boxes">
            <div class="is-box-centered is-opacity-95">
              <div class="is-container v2 container is-content-760">
                <div class="row clearfix">
                  <div class="column full">
                    <div class="display">
                      <h1 class="size-54 font-semibold text-left normal-case leading-14">
                        Designing and building highly-crafted brands and websites.
                      </h1>
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
                    <p class="text-justify">
                      80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s
                      ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the
                      wind. 80 days around the world, no we won’t say a word before the ship is really back.
                      Round, round, all around the world. Round, all around the world.
                    </p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column full">
                    <img src="assets/minimalist-blocks/images/person2.png" alt="" />
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column third">
                    <img
                      src="assets/minimalist-blocks/images/chuttersnap-413002-unsplash-83HqE1.jpg"
                      alt=""
                      style="margin: 0; float: left"
                    />
                  </div>
                  <div class="column third">
                    <img
                      src="assets/minimalist-blocks/images/caroline-bertolini-270870-unsplash-1j5FB2.jpg"
                      alt=""
                      style="margin: 0; float: left"
                    />
                  </div>
                  <div class="column third">
                    <img
                      src="assets/minimalist-blocks/images/theo-roland-740436-unsplash-WqnWJ3.jpg"
                      alt=""
                      style="margin: 0; float: left"
                    />
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column third">
                    <i class="icon ion-map size-64" style="color: #e74c3c"></i>
                    <p class="size-14" style="color: rgb(136, 136, 136)">OUR LOCATION</p>
                    <p>
                      Your Company Name<br />
                      12345 Street Name, City. P: (123) 456 7890
                    </p>
                  </div>
                  <div class="column third">
                    <i class="icon ion-clock size-64" style="color: #e74c3c"></i>
                    <p class="size-14" style="color: rgb(136, 136, 136)">OPENING HOURS</p>
                    <p>
                      Monday - Friday: 9:00 AM - 10:00 PM<br />
                      Sat: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                  <div class="column third">
                    <i class="icon ion-chatbox-working size-64" style="color: #e74c3c"></i>
                    <p class="size-14" style="color: rgb(136, 136, 136)">STAY UPDATED</p>
                    <p>
                      Follow us on:<br />
                      Facebook: <a href="#" style="color: #333">Company Name</a><br />
                      Twitter: <a href="#" style="color: #333">@companyname</a>
                    </p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column full">
                    <h4 class="size-28 display-font2">Discover</h4>
                    <h1 class="size-48 is-title1-48 is-title-lite is-upper">Why Choose Our Products</h1>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column full">
                    <div class="spacer height-40"></div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column half">
                    <img src="assets/minimalist-blocks/images/imac-Bz83W1.png" alt="" />
                  </div>
                  <div class="column half">
                    <div class="list">
                      <i class="icon ion-checkmark"></i>
                      <h3 class="size-24" style="margin: 0 0 0 50px">Feature Item</h3>
                      <p style="margin: 5px 0 0 50px">Lorem Ipsum is simply dummy text</p>
                    </div>
                    <div class="list">
                      <i class="icon ion-checkmark"></i>
                      <h3 class="size-24" style="margin: 0 0 0 50px">Feature Item</h3>
                      <p style="margin: 5px 0 0 50px">Lorem Ipsum is simply dummy text</p>
                    </div>
                    <div class="list">
                      <i class="icon ion-checkmark"></i>
                      <h3 class="size-24" style="margin: 0 0 0 50px">Feature Item</h3>
                      <p style="margin: 5px 0 0 50px">Lorem Ipsum is simply dummy text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="is-section is-section-100 is-shadow-1" data-anim-end="" data-anim-start="">
          <div class="is-boxes">
            <div class="is-box is-box-7 is-dark-text" style="background-color: rgb(248, 248, 248)">
              <div class="is-overlay" style="background-color: rgb(233, 247, 234)"></div>
              <div class="is-boxes">
                <div class="is-box-centered is-opacity-95">
                  <div class="is-container container is-content-left edge-x-2" style="max-width: 639px">
                    <div class="row clearfix">
                      <div class="column full">
                        <h1 class="size-38 text-center" style="letter-spacing: 2px">OUR SERVICES</h1>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column full">
                        <div class="spacer height-40"></div>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column half">
                        <i class="icon ion-ios-compose-outline size-32"></i>
                        <h3 class="size-24">Creative Designs</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                      </div>
                      <div class="column half">
                        <i class="icon ion-ios-gear-outline size-32"></i>
                        <h3 class="size-24">Development</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column half">
                        <i class="icon ion-ios-monitor-outline size-32"></i>
                        <h3 class="size-24">Brand Building</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                      </div>
                      <div class="column half">
                        <i class="icon ion-ios-heart-outline size-32"></i>
                        <h3 class="size-24">SEO &amp; Marketing</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="is-box is-box-5 is-dark-text" style="background-color: rgb(248, 248, 248)">
              <div class="is-overlay" style="background-color: rgb(222, 243, 224)"></div>
              <div class="is-boxes" style="min-height: auto">
                <div class="is-box-centered">
                  <div class="is-container container" nogrid="" style="margin-top: 0px; max-width: 560px">
                    <div class="row clearfix" data-protected="">
                      <div class="column full" data-protected="" data-image-allowed="">
                        <div style="position: relative; height: 26vw">
                          <div
                            style="
                              position: absolute;
                              z-index: 100;
                              width: 23vw;
                              left: -10vw;
                              top: 12vw;
                              transform: perspective(200px) skewX(1deg) skewY(6deg);
                            "
                          >
                            <img
                              src="assets/designs/images/header-54-sS9WN1.jpg"
                              alt=""
                              style="
                                box-shadow: rgba(22, 22, 22, 0.3) 2em 1em 5em;
                                width: 100%;
                                transform: translateX(-100px);
                              "
                              data-bottom-top="transform:translateX(-100px);"
                              data-center-top="transform:translateX(0px);"
                            />
                          </div>
                          <div
                            style="
                              position: absolute;
                              z-index: 70;
                              width: 23vw;
                              left: -4vw;
                              top: 8vw;
                              transform: perspective(200px) skewX(1deg) skewY(6deg);
                            "
                          >
                            <img
                              src="assets/designs/images/header-45-AAzPa2.jpg"
                              alt=""
                              style="
                                box-shadow: rgba(22, 22, 22, 0.3) 2em 1em 5em;
                                width: 100%;
                                transform: translateX(80px);
                                height: auto;
                              "
                              data-bottom-top="transform:translateX(80px);"
                              data-center-top="transform:translateX(0px);"
                            />
                          </div>
                          <div
                            style="
                              position: absolute;
                              z-index: 0;
                              width: 23vw;
                              left: 8vw;
                              top: -0.2vw;
                              transform: perspective(200px) skewX(1deg) skewY(6deg);
                            "
                          >
                            <img
                              src="assets/designs/images/018b-Ffs9L1.jpg"
                              alt=""
                              style="
                                box-shadow: rgba(22, 22, 22, 0.3) 2em 1em 5em;
                                width: 100%;
                                transform: translateX(90px);
                              "
                              data-bottom-top="transform:translateX(90px);"
                              data-center="transform:translateX(0px);"
                            />
                          </div>
                          <div
                            style="
                              position: absolute;
                              z-index: 50;
                              width: 23vw;
                              left: 2vw;
                              top: 4vw;
                              transform: perspective(200px) skewX(1deg) skewY(6deg);
                            "
                          >
                            <img
                              src="assets/designs/images/header-52-dtFSu4.jpg"
                              alt=""
                              style="
                                box-shadow: rgba(22, 22, 22, 0.3) 2em 1em 5em;
                                width: 100%;
                                transform: translateX(-130px);
                                height: auto;
                              "
                              data-bottom-top="transform:translateX(-130px);"
                              data-center="transform:translateX(0px);"
                            />
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
        
        <div class="is-section is-box is-section-100 type-opensans" data-anim-start="">
          <div class="is-overlay" style="background-color: rgb(233, 247, 234)"></div>
          <div class="is-boxes">
            <div class="is-box-centered is-opacity-95">
              <div class="is-container v2 container is-content-760">
                <div class="row clearfix">
                  <div class="column full">
                    <div class="display">
                      <h1 class="size-54 font-semibold text-left normal-case leading-14">
                        Designing and building highly-crafted brands and websites.
                      </h1>
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
                    <p class="text-justify">
                      80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s
                      ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the
                      wind. 80 days around the world, no we won’t say a word before the ship is really back.
                      Round, round, all around the world. Round, all around the world.
                    </p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column full center">
                    <h1 class="size-54" style="letter-spacing: 6px">GALLERY</h1>
                    <p style="border-bottom: 2.5px solid #b5b5b5; width: 60px; display: inline-block"></p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column full">
                    <div class="spacer height-60"></div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column third center">
                    <div class="img-circular">
                      <img
                        src="assets/minimalist-blocks/images/art-materials-close-up-color-pencils-1484263-jT5E21.jpg"
                        alt=""
                      />
                    </div>
                    <p class="size-14">Lorem Ipsum is dummy text</p>
                  </div>
                  <div class="column third center">
                    <div class="img-circular">
                      <img
                        src="assets/minimalist-blocks/images/oleg-laptev-546607-unsplash-SKGb82.jpg"
                        alt=""
                      />
                    </div>
                    <p class="size-14">Lorem Ipsum is dummy text</p>
                  </div>
                  <div class="column third center">
                    <div class="img-circular">
                      <img src="assets/minimalist-blocks/images/michal-grosicki-XG2yA3.jpg" alt="" />
                    </div>
                    <p class="size-14">Lorem Ipsum is dummy text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="is-section is-section-100 is-box is-dark-text type-teko-muktamahee" data-anim-start="">
          <div class="is-overlay" style="background-color: rgb(233, 247, 234)">
            <div
              class="is-overlay-bg"
              style="
                background-image: url('assets/designs/images/K25uP224852.jpg');
                background-position: 60% 100%;
                transform: translateY(-120px) scale(1.05);
              "
              data-bottom-top="transform:translateY(-120px) scale(1.05);"
              data-top-bottom="transform:translateY(120px) scale(1.05)"
            ></div>
          </div>
          <div class="is-boxes">
            <div class="is-box-centered">
              <div class="is-container container" style="max-width: 980px">
                <div class="row clearfix">
                  <div class="column full center">
                    <h1 class="size-64 is-title1-64 is-title-lite">Flying High</h1>
                    <p
                      style="
                        border-bottom: 2px solid #e74c3c;
                        width: 60px;
                        display: inline-block;
                        margin-top: 0;
                      "
                    ></p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column full">
                    <div class="spacer height-40"></div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column half">
                    <p class="text-justify">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type.
                    </p>
                    <p class="text-justify">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <div class="column half">
                    <p class="text-justify">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type.
                    </p>
                    <p class="text-justify">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="is-section is-section-100 is-shadow-1" data-anim-end="">
          <div class="is-boxes">
            <div class="is-box-img is-box is-box-7">
              <div class="is-boxes">
                <div class="is-overlay">
                  <div
                    class="is-overlay-bg"
                    style="
                      background-image: url('assets/designs/images/boJNv2475.jpg');
                      background-position: 50% 70%;
                      transform: translateY(-120px) scale(1.05);
                    "
                    data-bottom-top="transform:translateY(-120px) scale(1.05);"
                    data-top-bottom="transform:translateY(120px) scale(1.05)"
                  ></div>
                </div>
              </div>
            </div>
            <div class="is-box is-dark-text type-ubuntumono-sourcecodepro is-box-5">
              <div class="is-overlay" style="background-color: rgb(233, 247, 234)"></div>
              <div class="is-boxes">
                <div class="is-box-centered">
                  <div class="is-container container" style="max-width: 400px">
                    <div class="row clearfix">
                      <div class="column full">
                        <p class="size-16" style="color: rgb(136, 136, 136)">WORDS FROM ANDREW JONES</p>
                        <h1 class="size-48">Home is wherever I'm with you.</h1>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column full">
                        <div class="spacer height-40"></div>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column full">
                        <p class="text-justify">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="is-section is-section-100 is-shadow-1">
          <div class="is-boxes">
            <div class="is-box-img is-box is-box-5">
              <div class="is-boxes">
                <div class="is-overlay">
                  <div
                    class="is-overlay-bg"
                    style="
                      background-image: url('assets/designs/images/1eSR611115.jpg');
                      background-position: 50% 60%;
                      transform: translateY(-120px) scale(1.05);
                    "
                    data-bottom-top="transform:translateY(-120px) scale(1.05);"
                    data-top-bottom="transform:translateY(120px) scale(1.05)"
                  ></div>
                </div>
              </div>
            </div>
            <div class="is-box is-bg-light is-dark-text is-box-7 type-sixcaps-robotomono">
              <div class="is-overlay" style="background-color: rgb(233, 247, 234)"></div>
              <div class="is-boxes">
                <div class="is-box-centered">
                  <div class="is-container container is-content-500 is-content-right edge-x-4">
                    <div class="row clearfix">
                      <div class="column full right">
                        <div class="display">
                          <h1 class="size-96">A Little Story</h1>
                        </div>
                        <p style="border-bottom: 3px solid #333; width: 80px; display: inline-block"></p>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column full">
                        <div class="spacer height-40"></div>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column full">
                        <p class="text-justify">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it to make a type specimen
                          book. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div class="row clearfix">
                      <div class="column full">
                        <p class="text-right">JOHN ANDERSON</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          class="is-section is-box is-section-100 is-dark-text box-space type-opensans"
          style="background-color: rgb(233, 247, 234)"
        >
          <div class="is-overlay" style="background-color: rgb(233, 247, 234)"></div>
          <div class="is-boxes">
            <div class="is-box-centered is-opacity-95 edge-y-0-5">
              <div class="is-container v2 container is-content-1200">
                <div class="row clearfix">
                  <div class="column third">
                    <h3 style="letter-spacing: 3px" class="size-28 font-semibold">Words</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-17 text-justify">
                      80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s
                      ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the
                      wind. 80 days around the world, no we won’t say a word before the ship is really back.
                    </p>
                  </div>
                  <div class="column third">
                    <h3 style="letter-spacing: 3px" class="size-28 font-semibold">Illustrations</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-17 text-justify">
                      80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s
                      ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the
                      wind. 80 days around the world, no we won’t say a word before the ship is really back.
                    </p>
                  </div>
                  <div class="column third">
                    <h3 style="letter-spacing: 3px" class="size-28 font-semibold">Photography</h3>
                    <div class="spacer height-20"></div>
                    <p class="size-17 text-justify">
                      80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s
                      ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the
                      wind. 80 days around the world, no we won’t say a word before the ship is really back.
                    </p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="column third">
                    <img
                      src="/uploads/AnyConv.com__melting_logo.webp"
                      alt=""
                      style="margin: 0; float: left"
                      data-filename="AnyConv.com__melting_logo.webp"
                    />
                  </div>
                  <div class="column third">
                    <img
                      src="/uploads/melting_logo.png"
                      alt=""
                      style="margin: 0; float: left"
                      data-filename="melting_logo.png"
                    />
                  </div>
                  <div class="column third">
                    <img
                      src="/uploads/9b4f2aaa23.jpeg"
                      alt=""
                      style="margin: 0px; float: left; width: 100%; height: auto"
                      data-filename="9b4f2aaa23.jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div
          class="is-section is-section-50 box-space is-box is-align-left is-light-text type-opensans"
          style="background-color: rgb(233, 247, 234)"
        >
          <div class="is-overlay">
            <div
              class="is-overlay-content content-selectable"
              data-module="slider-box"
              data-module-desc="Slider"
              data-html="%3Csvg%20width%3D%220%22%20height%3D%220%22%20style%3D%22position%3Aabsolute%3Bdisplay%3Anone%3B%22%3E%3Cdefs%3E%3Csymbol%20viewBox%3D%220%200%20512%20512%22%20id%3D%22ion-ios-arrow-left%22%3E%3Cpath%20d%3D%22M352%20115.4L331.3%2096%20160%20256l171.3%20160%2020.7-19.3L201.5%20256z%22%3E%3C%2Fpath%3E%3C%2Fsymbol%3E%3Csymbol%20viewBox%3D%220%200%20512%20512%22%20id%3D%22ion-ios-arrow-right%22%3E%3Cpath%20d%3D%22M160%20115.4L180.7%2096%20352%20256%20180.7%20416%20160%20396.7%20310.5%20256z%22%3E%3C%2Fpath%3E%3C%2Fsymbol%3E%3C%2Fdefs%3E%3C%2Fsvg%3E%3Cdiv%20id%3D%22mhr7oI8%22%20class%3D%22glide%20cover%22%3E%3Cdiv%20data-glide-el%3D%22track%22%20class%3D%22glide__track%22%3E%3Cul%20class%3D%22glide__slides%22%3E%3Cli%20class%3D%22glide__slide%22%20style%3D%22height%3A100%25%3B%22%3E%3Cdiv%3E%3Cimg%20src%3D%22%2Fuploads%2F9b4f2aaa23.jpeg%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%3C%2Fli%3E%3Cli%20class%3D%22glide__slide%22%20style%3D%22height%3A100%25%3B%22%3E%3Cdiv%3E%3Cimg%20src%3D%22%2Fuploads%2FBC_5_2_22_INSTALL_10_f.jpeg%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%3C%2Fli%3E%3Cli%20class%3D%22glide__slide%22%20style%3D%22height%3A100%25%3B%22%3E%3Cdiv%3E%3Cimg%20src%3D%22%2Fuploads%2FSurrealism_2.jpg%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%3C%2Fli%3E%3Cli%20class%3D%22glide__slide%22%20style%3D%22height%3A100%25%3B%22%3E%3Cdiv%3E%3Cimg%20src%3D%22%2Fuploads%2FSurrealism.jpg%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%3C%2Fli%3E%3Cli%20class%3D%22glide__slide%22%20style%3D%22height%3A100%25%3B%22%3E%3Cdiv%3E%3Cimg%20src%3D%22%2Fuploads%2FSurrealism_1.jpg%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22glide__arrows%22%20data-glide-el%3D%22controls%22%3E%3Cbutton%20class%3D%22glide__arrow%20glide__arrow--left%22%20data-glide-dir%3D%22%3C%22%3E%3Csvg%20style%3D%22width%3A2.3vw%3Bheight%3A2.3vw%3B%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M352%20115.4L331.3%2096%20160%20256l171.3%20160%2020.7-19.3L201.5%20256z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E%3C%2Fbutton%3E%3Cbutton%20class%3D%22glide__arrow%20glide__arrow--right%22%20data-glide-dir%3D%22%3E%22%3E%3Csvg%20style%3D%22width%3A2.3vw%3Bheight%3A2.3vw%3B%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M160%20115.4L180.7%2096%20352%20256%20180.7%20416%20160%20396.7%20310.5%20256z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E%3C%2Fbutton%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cscript%3Evar%20docReady%20%3D%20function%20(fn)%20%7Bvar%20stateCheck%20%3D%20setInterval(function%20()%20%7Bif(typeof%20Glide%20%3D%3D%3D%20'undefined')%20return%3BclearInterval(stateCheck)%3Btry%20%7B%20fn()%20%7D%20catch%20(e)%20%7B%20%7D%7D%2C%201)%3B%7D%3BdocReady(function%20()%20%7Bvar%20_mhr7oI8%20%3D%20new%20Glide(%22%23mhr7oI8%22%2C%20%7Btype%3A%20%22carousel%22%2Cautoplay%3A%204000%2CanimationDuration%3A%201000%2Cgap%3A%2030%2CperView%3A%201%2Choverpause%3A%20false%2Carrow%3A%20true%2Cdots%3A%20false%2Cbreakpoints%3A%20%7B970%3A%20%7B%20perView%3A%201%2C%20gap%3A%200%20%7D%7D%2C%7D).mount()%3B_cleanClonedItems()%3B%7D)%3Bfunction%20_cleanClonedItems()%20%7Bvar%20clones%20%3D%20document.querySelectorAll(%22.glide__slide--clone%22)%3BArray.prototype.forEach.call(clones%2C%20function(clone)%7Bclone.removeAttribute(%22data-subblock%22)%3Bclone.childNodes%5B0%5D.removeAttribute(%22data-subblock%22)%3B%7D)%3B%7D%3C%2Fscript%3E"
              data-settings="%7B%22type%22%3A%20%22carousel%22%2C%22autoplay%22%3A%20%224000%22%2C%22animationDuration%22%3A1000%2C%22gap%22%3A%2030%2C%22perView%22%3A1%2C%22hoverpause%22%3Atrue%2C%22arrow%22%3Atrue%2C%22arrowPreset%22%3A1%2C%22dots%22%3Afalse%2C%22fit%22%3A%20%22cover%22%2C%22images%22%3A%5B%7B%22src%22%3A%20%22%2Fuploads%2F9b4f2aaa23.jpeg%22%2C%20%22caption%22%3A%20%22%22%2C%20%22style%22%3A%20%22%22%7D%2C%7B%22src%22%3A%20%22%2Fuploads%2FBC_5_2_22_INSTALL_10_f.jpeg%22%2C%20%22caption%22%3A%20%22%22%2C%20%22style%22%3A%20%22%22%7D%2C%7B%22src%22%3A%20%22%2Fuploads%2FSurrealism_2.jpg%22%2C%20%22caption%22%3A%20%22%22%2C%20%22style%22%3A%20%22%22%7D%2C%7B%22src%22%3A%20%22%2Fuploads%2FSurrealism.jpg%22%2C%20%22caption%22%3A%20%22%22%2C%20%22style%22%3A%20%22%22%7D%2C%7B%22src%22%3A%20%22%2Fuploads%2FSurrealism_1.jpg%22%2C%20%22caption%22%3A%20%22%22%2C%20%22style%22%3A%20%22%22%7D%5D%7D"
            >
              <svg width="0" height="0" style="position: absolute; display: none">
                <defs>
                  <symbol viewBox="0 0 512 512" id="ion-ios-arrow-left">
                    <path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
                  </symbol>
                  <symbol viewBox="0 0 512 512" id="ion-ios-arrow-right">
                    <path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
                  </symbol>
                </defs>
              </svg>
              <div id="mhr7oI8" class="glide cover">
                <div data-glide-el="track" class="glide__track">
                  <ul class="glide__slides">
                    <li class="glide__slide" style="height: 100%">
                      <div><img src="/uploads/9b4f2aaa23.jpeg" alt="" /></div>
                    </li>
                    <li class="glide__slide" style="height: 100%">
                      <div><img src="/uploads/BC_5_2_22_INSTALL_10_f.jpeg" alt="" /></div>
                    </li>
                    <li class="glide__slide" style="height: 100%">
                      <div><img src="/uploads/Surrealism_2.jpg" alt="" /></div>
                    </li>
                    <li class="glide__slide" style="height: 100%">
                      <div><img src="/uploads/Surrealism.jpg" alt="" /></div>
                    </li>
                    <li class="glide__slide" style="height: 100%">
                      <div><img src="/uploads/Surrealism_1.jpg" alt="" /></div>
                    </li>
                  </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                  <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <svg
                      style="width: 2.3vw; height: 2.3vw"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"></path>
                    </svg></button
                  ><button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                    <svg
                      style="width: 2.3vw; height: 2.3vw"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <script>
                var docReady = function (fn) {
                  var stateCheck = setInterval(function () {
                    if (typeof Glide === 'undefined') return;
                    clearInterval(stateCheck);
                    try {
                      fn();
                    } catch (e) {}
                  }, 1);
                };
                docReady(function () {
                  var _mhr7oI8 = new Glide('#mhr7oI8', {
                    type: 'carousel',
                    autoplay: 4000,
                    animationDuration: 1000,
                    gap: 30,
                    perView: 1,
                    hoverpause: false,
                    arrow: true,
                    dots: false,
                    breakpoints: {
                      970: {
                        perView: 1,
                        gap: 0,
                      },
                    },
                  }).mount();
                  _cleanClonedItems();
                });
        
                function _cleanClonedItems() {
                  var clones = document.querySelectorAll('.glide__slide--clone');
                  Array.prototype.forEach.call(clones, function (clone) {
                    clone.removeAttribute('data-subblock');
                    clone.childNodes[0].removeAttribute('data-subblock');
                  });
                }
              </script>
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
