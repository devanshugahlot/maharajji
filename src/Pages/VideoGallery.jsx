import React, { useState } from "react";
import "./brahmgyan.css";
import Videogalleryslider from "./Videogalleryslider";
import Videoslideone from "./Videoslideone";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Divider } from "@mui/material";
import './video.css'
const VideoGallery = () => {
  const categories = [
    {
      name: "COVID19",
      subcategories: [
        {
          name: "Subcategory 1",
          subsubcategories: [
            {
              name: "Subsubcategory 1A",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ],
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ],
        },
        {
          name: "Subcategory 2",
          subsubcategories: [
            {
              name: "Subsubcategory 2A",
              subsubsubcategories: [
                "Subsubsubcategory 2AA",
                "Subsubsubcategory 2AB",
              ],
            },
            {
              name: "Subsubcategory 2B",
              subsubsubcategories: [
                "Subsubsubcategory 2BA",
                "Subsubsubcategory 2BB",
              ],
            },
          ],
        },
        // Add more subcategories with their respective subsubcategories as needed
      ],
    },
    {
      name: "meditation",
      subcategories: [
        {
          name: "Subcategory 1",
          subsubcategories: [
            {
              name: "Subsubcategory 1A",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ],
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ],
        },
        {
          name: "Subcategory 2",
          subsubcategories: [
            {
              name: "Subsubcategory 2A",
              subsubsubcategories: [
                "Subsubsubcategory 2AA",
                "Subsubsubcategory 2AB",
              ],
            },
            {
              name: "Subsubcategory 2B",
              subsubsubcategories: [
                "Subsubsubcategory 2BA",
                "Subsubsubcategory 2BB",
              ],
            },
          ],
        },
        // Add more subcategories with their respective subsubcategories as needed
      ],
    },
    {
      name: "SAMADHI",
      subcategories: [
        {
          name: "Subcategory 1",
          subsubcategories: [
            {
              name: "Subsubcategory 1A",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ],
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ],
        },
        {
          name: "Subcategory 2",
          subsubcategories: [
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ],
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ],
        },
      ],
    },
    // Add more main categories with their subcategories and subsubcategories as needed
  ];
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const [openSubSubCategory, setOpenSubSubCategory] = useState(null); // State to manage which subsubcategory is open

  const handleCategoryClick = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };
  const handleSubCategoryClick = (index) => {
    if (openSubCategory === index) {
      setOpenSubCategory(null);
    } else {
      setOpenSubCategory(index);
    }
  };
  const handleSubSubCategoryClick = (index) => {
    if (openSubSubCategory === index) {
      setOpenSubSubCategory(null);
    } else {
      setOpenSubSubCategory(index);
    }
  };
  return (
    <div>
       <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
        <div className="titlebar-inner py-5">
          <div className="container titlebar-container">
            <div className="row titlebar-container">
              <div className="titlebar-col col-md-6">
                <h1 className="font-size-26 mb-1">Video Gallery</h1>
                <p className="font-size-14 text-fade-dark-06">
                  Swing with the divine melodies
                </p>
              </div>
              <div className="titlebar-col col-md-6 text-md-right">
                <ol className="breadcrumb reset-ul inline-nav">
                  <li>
                    <a>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <span>Video Gallery</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="content" className="content">
        <div className="carousel-container carousel-shadow-active carousel-nav-floated carousel-nav-center carousel-nav-middle carousel-nav-md carousel-nav-square carousel-nav-solid carousel-dots-style4">
          <div
            className="carousel-items row"
            data-lqd-flickity='{"cellAlign":"center","prevNextButtons":false,"pageDots":false,"groupCells":false,"wrapAround":true,"pauseAutoPlayOnHover":false,"fullscreen":"true","fade":true}'
          >
            <div className="carousel-item col-md-12">
              {/* <section className="vc_row  bg-cover vlog-cover" style={{height: 500}} data-parallax="true" data-parallax-options="{&quot;parallaxBG&quot;: true}" data-row-bg="https://img.youtube.com/vi/ijNONfZI7_0/maxresdefault.jpg" data-row-bg-webp="https://img.youtube.com/vi_webp/ijNONfZI7_0/maxresdefault.webp" data-row-bg-device="https://img.youtube.com/vi/ijNONfZI7_0/maxresdefault.jpg" data-row-bg-webp-device="https://img.youtube.com/vi_webp/ijNONfZI7_0/maxresdefault.webp">
            <span className="row-bg-loader" />
            <div className="liquid-img-group-content content-floated-mid">
              <a href="https://www.youtube.com/watch?v=ijNONfZI7_0" className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-xxlg btn-icon-circle btn-icon-solid btn-icon-ripple">
                <span>
                  <span className="btn-icon font-size-18 text-white videoBtn shadow">
                    <i className="fa fa-play" />
                  </span>
                </span>
              </a>
            </div>
          </section> */}
              {/* <div className="container" style={{marginTop: '-36px', position: 'relative', zIndex: 2}} data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.split-inner&quot;,&quot;duration&quot;:700,&quot;delay&quot;:100,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:70,&quot;scaleX&quot;:1.5,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;scaleX&quot;:1,&quot;opacity&quot;:1}}">
            <div className="row bg-charade p-4 mx-0 shadow lqd-row ">
              <div className="col-md-9">
                <header className="fancy-title mb-35">
                  <h1 data-split-text="true" data-split-options="{&quot;type&quot;:&quot;words&quot;}" className="h3 mt-0 mb-4 pr-md-5 text-white">मस्ती का रंग चढ़वालो, लग जाये न रंग कोई दूजा | Reminiscences of Divine Holi | Special Video</h1>
                </header>
              </div>
              <div className="col-md-3">
                <span>
                  <span className="g-ytsubscribe pull-left" data-channel="DivyaJyotiNews" data-layout="default" data-count="default" data-theme="light" />
                </span>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>

        {/* <div className="container text-center mt-15">
      <div className="row visible-xs bottommargin-xs videocats">
        <div className="col-md-12">
          <div className="ld-dropdown-menu">
            <a href="javascript:void(0)" className="btn btn-default btn-naked border-thin btn-icon-left btn-icon-circle btn-icon-solid font-size-12 font-weight-bold text-uppercase ltr-sp-05 mb-2" data-ld-toggle="true" data-toggle="collapse" data-target="#video-submenu" aria-haspopup="true" aria-expanded="false">
              <span>
                <span className="btn-txt font-size-18">All Categories <i className="fa fa-angle-down" /></span>
                <span className="btn-icon"><i className="fa fa-list" /></span>
              </span>
            </a>
            <ul className="ld-module-dropdown left collapse" id="video-submenu" style={{width: '100%'}}>
              <li><a href="videos/category/devotional-bhajans.html">Devotional Bhajans</a></li>
              <li><a href="videos/category/discourses.html">Discourses</a></li>
              <li role="separator" className="divider" />
              <li><div><strong>SPIRITUAL PROGRAMS</strong></div></li>
              <li><a href="videos/category/shrimadbhagwatkatha.html">Shrimad Bhagwat Katha</a></li>
              <li><a href="videos/category/kumbh-prayagraj-2019.html">Kumbh Prayagraj 2019</a></li>
              <li><a href="videos/category/shriramkatha.html">Shri Ram Katha</a></li>
              <li><a href="videos/category/devibhagwatkatha.html">Devi Bhagwat Katha</a></li>
              <li><a href="videos/category/bhajansandhya.html">Bhajan Sandhya</a></li>
              <li><a href="videos/category/jagran-chowki.html">Jagran and Chowki</a></li>
              <li><a href="videos/category/divyajyotivedmandir.html">Divya Jyoti Ved Mandir</a></li>
              <li><a href="videos/category/divya-shanti-mahotsav.html">Divya Shanti Mahotsav</a></li>
              <li><a href="videos/category/guru-poornima.html">Guru Poornima</a></li>
              <li><a href="videos/category/spiritual-others.html">Others</a></li>
              <li role="separator" className="divider" />
              <li><div><strong>SOCIAL INITIATIVES</strong></div></li>
              <li><a href="videos/category/manthan.html">Manthan</a></li>
              <li><a href="videos/category/kamdhenu.html">Kamdhenu</a></li>
              <li><a href="videos/category/antardrishti.html">Antardrishti</a></li>
              <li><a href="videos/category/antarkranti.html">Antarkranti</a></li>
              <li><a href="videos/category/bodh.html">Bodh</a></li>
              <li><a href="videos/category/santulan.html">Santulan</a></li>
              <li><a href="videos/category/sanrakshan.html">Sanrakshan</a></li>
              <li><a href="videos/category/aarogya.html">Aarogya</a></li>
              <li><a href="videos/category/samadhan.html">Samadhan</a></li>
              <li role="separator" className="divider" />
              <li><div><strong>WORKSHOPS</strong></div></li>
              <li><a href="videos/category/sam.html">SAM Workshop</a></li>
              <li><a href="videos/category/peace.html">PEACE Workshop</a></li>
              <li><a href="videos/category/way.html">WAY Workshop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
        <div className="container topmargin clearfix">
          <div className>
            {/* <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
        <div className="titlebar-inner py-5">
          <div className="container titlebar-container">
            <div className="row titlebar-container">
              <div className="titlebar-col col-md-6">
                <h1 className="font-size-26 mb-1">Blog</h1>
                <p className="font-size-14 text-fade-dark-06">
                  Swing with the divine melodies
                </p>
              </div>
              <div className="titlebar-col col-md-6 text-md-right">
                <ol className="breadcrumb reset-ul inline-nav">
                  <li>
                    <a>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <span>Blogs</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            <div className="carousel-container carousel-nav-right carousel-nav-sm carousel-nav-bordered carousel-nav-circle carousel-dots-style1">
              <div
                className="carousel-items row"
                data-lqd-flickity='{"cellAlign":"left","prevNextButtons":true,"buttonsAppendTo":"#fancy-title-unlimited-classes","pageDots":false,"groupCells":false,"wrapAround":false,"pauseAutoPlayOnHover":false,"navArrow":6}'
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":".carousel-item","duration":"1200","delay":"150","easing":"easeOutQuint","initValues":{"translateX":36,"opacity":0},"animations":{"translateX":0,"opacity":1}}'
              >
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/XGLT_Q6fU_Y/hqdefault.jpg" alt="Sublime Essence of Holi Celebration | Discipleship Sutras | Sadhvi Parma Bharti Ji | DJJS Satsang" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/XGLT_Q6fU_Y/sublime-essence-of-holi-celebration-discipleship-sutras-sadhvi-parma-bharti-ji-djjs-satsang.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/XGLT_Q6fU_Y/sublime-essence-of-holi-celebration-discipleship-sutras-sadhvi-parma-bharti-ji-djjs-satsang.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/XGLT_Q6fU_Y/sublime-essence-of-holi-celebration-discipleship-sutras-sadhvi-parma-bharti-ji-djjs-satsang.html">Sublime Essence of Holi Celebration | Discipleship Sutras | Sadhvi Parma Bharti Ji | DJJS Satsang</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/NT3OixFzsvA/hqdefault.jpg" alt="Reminiscences of Divine Holi | Celebration with Divya Guru Shri Ashutosh Maharaj Ji | Special Video" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/NT3OixFzsvA/reminiscences-of-divine-holi-celebration-with-divya-guru-shri-ashutosh-maharaj-ji-special-video.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/NT3OixFzsvA/reminiscences-of-divine-holi-celebration-with-divya-guru-shri-ashutosh-maharaj-ji-special-video.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/NT3OixFzsvA/reminiscences-of-divine-holi-celebration-with-divya-guru-shri-ashutosh-maharaj-ji-special-video.html">Reminiscences of Divine Holi | Celebration with Divya Guru Shri Ashutosh Maharaj Ji | Special Video</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/ijNONfZI7_0/hqdefault.jpg" alt="मस्ती का रंग चढ़वालो, लग जाये न रंग कोई दूजा | Reminiscences of Divine Holi | Special Video" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/ijNONfZI7_0/reminiscences-of-divine-holi-special-video.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/ijNONfZI7_0/reminiscences-of-divine-holi-special-video.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/ijNONfZI7_0/reminiscences-of-divine-holi-special-video.html">मस्ती का रंग चढ़वालो, लग जाये न रंग कोई दूजा | Reminiscences of Divine Holi | Special Video</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/ZFtbln-Lyx8/hqdefault.jpg" alt="Shri Ram - Sakaar & Nirakaar Both | Divine Light | Let's Decode Ramayana | DJJS Katha Excerpts" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/ZFtbln-Lyx8/shri-ram-sakaar-nirakaar-both-divine-light-lets-decode-ramayana-djjs-katha-excerpts.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/ZFtbln-Lyx8/shri-ram-sakaar-nirakaar-both-divine-light-lets-decode-ramayana-djjs-katha-excerpts.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/ZFtbln-Lyx8/shri-ram-sakaar-nirakaar-both-divine-light-lets-decode-ramayana-djjs-katha-excerpts.html">Shri Ram - Sakaar &amp; Nirakaar Both | Divine Light | Let's Decode Ramayana | DJJS Katha Excerpts</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/YqLO9fqkWI0/hqdefault.jpg" alt="Bhaye Pragat Kripala | Descent of Lord Ram | Shri Ramcharitmanas Chaupais | DJJS #ShriRamBhajan" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/YqLO9fqkWI0/bhaye-pragat-kripala-descent-of-lord-ram-shri-ramcharitmanas-chaupais-djjs-shrirambhajan.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/YqLO9fqkWI0/bhaye-pragat-kripala-descent-of-lord-ram-shri-ramcharitmanas-chaupais-djjs-shrirambhajan.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/YqLO9fqkWI0/bhaye-pragat-kripala-descent-of-lord-ram-shri-ramcharitmanas-chaupais-djjs-shrirambhajan.html">Bhaye Pragat Kripala | Descent of Lord Ram | Shri Ramcharitmanas Chaupais | DJJS #ShriRamBhajan</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/CIJqqpuVEhA/hqdefault.jpg" alt="Ramastu Bhagwan Swayam | Glory of Lord Ram | Shri Ram Mandir Pran Pratishtha Special 4K #DJJSBhajan" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/CIJqqpuVEhA/ramastu-bhagwan-swayam-glory-of-lord-ram-shri-ram-mandir-pran-pratishtha-special-4k-djjsbhajan.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/CIJqqpuVEhA/ramastu-bhagwan-swayam-glory-of-lord-ram-shri-ram-mandir-pran-pratishtha-special-4k-djjsbhajan.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/CIJqqpuVEhA/ramastu-bhagwan-swayam-glory-of-lord-ram-shri-ram-mandir-pran-pratishtha-special-4k-djjsbhajan.html">Ramastu Bhagwan Swayam | Glory of Lord Ram | Shri Ram Mandir Pran Pratishtha Special 4K #DJJSBhajan</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/54R1-8kwBN0/hqdefault.jpg" alt="Glory of Ayodhya Dham | Shri Ram Mandir Pran Pratishtha | Sadhvi Shreya Bharti | DJJS Katha Excerpt" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/54R1-8kwBN0/glory-of-ayodhya-dham-shri-ram-mandir-pran-pratishtha-sadhvi-shreya-bharti-djjs-katha-excerpt.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/54R1-8kwBN0/glory-of-ayodhya-dham-shri-ram-mandir-pran-pratishtha-sadhvi-shreya-bharti-djjs-katha-excerpt.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/54R1-8kwBN0/glory-of-ayodhya-dham-shri-ram-mandir-pran-pratishtha-sadhvi-shreya-bharti-djjs-katha-excerpt.html">Glory of Ayodhya Dham | Shri Ram Mandir Pran Pratishtha | Sadhvi Shreya Bharti | DJJS Katha Excerpt</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                {/* <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/N9tvbLLcq3Y/hqdefault.jpg" alt="GOPA PURE BADA ANAND | Shri Krishna Janamotsav | Celebrations In Gokul | DJJS Bhajan [Odia]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/N9tvbLLcq3Y/gopa-pure-bada-anand-shri-krishna-janamotsav-celebrations-in-gokul-djjs-bhajan-odia.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/N9tvbLLcq3Y/gopa-pure-bada-anand-shri-krishna-janamotsav-celebrations-in-gokul-djjs-bhajan-odia.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/N9tvbLLcq3Y/gopa-pure-bada-anand-shri-krishna-janamotsav-celebrations-in-gokul-djjs-bhajan-odia.html">GOPA PURE BADA ANAND | Shri Krishna Janamotsav | Celebrations In Gokul | DJJS Bhajan [Odia]</a></h3>
                  </div>
                </div>
              </div>
            </div> */}
                <div>
                  <Videoslideone />
                </div>
                <div style={{ marginTop: "100px" }}>
                  <div>
                    <Videogalleryslider />
                  </div>
                </div>
                <div className="iframe-text"
                
                >
                  <div>
                    <iframe style={{padding:"10px"}}
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/2G4M5HLGysE?si=gXROxfavVOwsoLIr"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-md-3 col-md-offset-1 sidebar-container">
                    <aside className="main-sidebar">
                      <div className="widget widget_search mt-0">
                        <form
                          role="search"
                          method="post"
                          className="search-form"
                          action="https://www.djjs.org/blog/search"
                        >
                          <label>
                            <span className="screen-reader-text">
                              Search for:
                            </span>
                            <input
                              type="search"
                              className="search-field"
                              placeholder="Search…"
                            />
                          </label>
                          <input type="submit" className="search-submit" />
                        </form>
                      </div>
                      <div className="widget">
                        <h3 className="widget-title">Categories</h3>
                        <List>
                          {categories.map((category, index) => (
                            <React.Fragment key={index}>
                              <ListItemButton
                                onClick={() => handleCategoryClick(index)}
                                className={openCategory === index ? "open" : ""}
                              >
                                {openCategory === index ? (
                                  <ArrowDropUpIcon />
                                ) : (
                                  <ArrowDropDownIcon />
                                )}
                                <ListItemText primary={category.name} />
                              </ListItemButton>
                              {openCategory === index && (
                                <List component="div" disablePadding>
                                  {category.subcategories.map(
                                    (subcategory, subIndex) => (
                                      <React.Fragment key={subIndex}>
                                        <ListItemButton
                                          onClick={() =>
                                            handleSubCategoryClick(subIndex)
                                          }
                                          className={
                                            openSubCategory === subIndex
                                              ? "open"
                                              : ""
                                          }
                                        >
                                          {openSubCategory === subIndex ? (
                                            <ArrowDropUpIcon />
                                          ) : (
                                            <ArrowDropDownIcon />
                                          )}
                                          <ListItemText
                                            primary={subcategory.name}
                                          />
                                        </ListItemButton>
                                        {openSubCategory === subIndex &&
                                          subcategory.subsubcategories && (
                                            <List
                                              component="div"
                                              disablePadding
                                            >
                                              {subcategory.subsubcategories.map(
                                                (
                                                  subsubcategory,
                                                  subsubIndex
                                                ) => (
                                                  <React.Fragment
                                                    key={subsubIndex}
                                                  >
                                                    <ListItemButton
                                                      onClick={() =>
                                                        handleSubSubCategoryClick(
                                                          subsubIndex
                                                        )
                                                      }
                                                      className={
                                                        openSubSubCategory ===
                                                        subsubIndex
                                                          ? "open"
                                                          : ""
                                                      }
                                                    >
                                                      {openSubSubCategory ===
                                                      subsubIndex ? (
                                                        <ArrowDropUpIcon />
                                                      ) : (
                                                        <ArrowDropDownIcon />
                                                      )}
                                                      <ListItemText
                                                        primary={
                                                          subsubcategory.name
                                                        }
                                                      />
                                                    </ListItemButton>
                                                    {openSubSubCategory ===
                                                      subsubIndex &&
                                                      subsubcategory.subsubsubcategories && (
                                                        <List
                                                          component="div"
                                                          disablePadding
                                                        >
                                                          {subsubcategory.subsubsubcategories.map(
                                                            (
                                                              subsubsubcategory,
                                                              subsubsubIndex
                                                            ) => (
                                                              <ListItemButton
                                                                key={
                                                                  subsubsubIndex
                                                                }
                                                                className="sub-sub-sub-item"
                                                              >
                                                                <ListItemText
                                                                  primary={
                                                                    subsubsubcategory
                                                                  }
                                                                />
                                                              </ListItemButton>
                                                            )
                                                          )}
                                                        </List>
                                                      )}
                                                  </React.Fragment>
                                                )
                                              )}
                                            </List>
                                          )}
                                      </React.Fragment>
                                    )
                                  )}
                                </List>
                              )}
                              {index !== categories.length - 1 && <Divider />}
                            </React.Fragment>
                          ))}
                        </List>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row-fluid mt-3">
        <header className="fancy-title mb-10 d-flex" id="spiritual-discourses">
          <h3 className="ld-gradient-heading col-xs-8"><a className="text-gradient" href="videos/category/discourses.html">Spiritual Discourses</a>
            <a href="videos/category/discourses.html" className="btn btn-solid text-uppercase btn-xsm circle  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
              <span>
                <span className="btn-txt">View All</span>
              </span>
            </a>
          </h3>
        </header>
        <div className="carousel-container carousel-nav-right carousel-nav-sm carousel-nav-bordered carousel-nav-circle carousel-dots-style1">
          <div className="carousel-items row" data-lqd-flickity="{&quot;cellAlign&quot;:&quot;left&quot;,&quot;prevNextButtons&quot;:true,&quot;buttonsAppendTo&quot;:&quot;#spiritual-discourses&quot;,&quot;pageDots&quot;:false,&quot;groupCells&quot;:false,&quot;wrapAround&quot;:false,&quot;pauseAutoPlayOnHover&quot;:false,&quot;navArrow&quot;:6}" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.carousel-item&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:36,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/aXe8tpNowtY/hqdefault.jpg" alt="Eternal Method of Dhyaan [Meditation] - Brahmgyan | DJJS Satsang | Sadhvi Tapeshwari Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/aXe8tpNowtY/eternal-method-of-dhyaan-meditation-brahmgyan-djjs-satsang-sadhvi-tapeshwari-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/aXe8tpNowtY/eternal-method-of-dhyaan-meditation-brahmgyan-djjs-satsang-sadhvi-tapeshwari-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/aXe8tpNowtY/eternal-method-of-dhyaan-meditation-brahmgyan-djjs-satsang-sadhvi-tapeshwari-bharti-ji.html">Eternal Method of Dhyaan [Meditation] - Brahmgyan | DJJS Satsang | Sadhvi Tapeshwari Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/sW9NIMhNSDM/hqdefault.jpg" alt="From Ashtanga Yog to Kaivalya Moksh | Key to Enlightenment | DJJS Satsang | Sadhvi Deepika Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/sW9NIMhNSDM/from-ashtanga-yog-to-kaivalya-moksh-key-to-enlightenment-djjs-satsang-sadhvi-deepika-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/sW9NIMhNSDM/from-ashtanga-yog-to-kaivalya-moksh-key-to-enlightenment-djjs-satsang-sadhvi-deepika-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/sW9NIMhNSDM/from-ashtanga-yog-to-kaivalya-moksh-key-to-enlightenment-djjs-satsang-sadhvi-deepika-bharti-ji.html">From Ashtanga Yog to Kaivalya Moksh | Key to Enlightenment | DJJS Satsang | Sadhvi Deepika Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/inXyo3mNGHU/hqdefault.jpg" alt="Guru Se Bada Koi Teerth, Koi Pooja Nahi | Glory of Guru | DJJS Satsang | Sadhvi Tapeshwari Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/inXyo3mNGHU/guru-se-bada-koi-teerth-koi-pooja-nahi-glory-of-guru-djjs-satsang-sadhvi-tapeshwari-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/inXyo3mNGHU/guru-se-bada-koi-teerth-koi-pooja-nahi-glory-of-guru-djjs-satsang-sadhvi-tapeshwari-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/inXyo3mNGHU/guru-se-bada-koi-teerth-koi-pooja-nahi-glory-of-guru-djjs-satsang-sadhvi-tapeshwari-bharti-ji.html">Guru Se Bada Koi Teerth, Koi Pooja Nahi | Glory of Guru | DJJS Satsang | Sadhvi Tapeshwari Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/XNLJC6Gm2u0/hqdefault.jpg" alt="Divya Guru ke Vachno Ki Shakti | Power of Words | DJJS Satsang | Sadhvi Parma Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/XNLJC6Gm2u0/divya-guru-ke-vachno-ki-shakti-power-of-words-djjs-satsang-sadhvi-parma-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/XNLJC6Gm2u0/divya-guru-ke-vachno-ki-shakti-power-of-words-djjs-satsang-sadhvi-parma-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/XNLJC6Gm2u0/divya-guru-ke-vachno-ki-shakti-power-of-words-djjs-satsang-sadhvi-parma-bharti-ji.html">Divya Guru ke Vachno Ki Shakti | Power of Words | DJJS Satsang | Sadhvi Parma Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/fz4ozV8NOmE/hqdefault.jpg" alt="Jeevan Ka Sachcha Sahara | Guru's Selfless Love & Support | DJJS Satsang | Sadhvi Jaivani Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/fz4ozV8NOmE/jeevan-ka-sachcha-sahara-gurus-selfless-love-support-djjs-satsang-sadhvi-jaivani-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/fz4ozV8NOmE/jeevan-ka-sachcha-sahara-gurus-selfless-love-support-djjs-satsang-sadhvi-jaivani-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/fz4ozV8NOmE/jeevan-ka-sachcha-sahara-gurus-selfless-love-support-djjs-satsang-sadhvi-jaivani-bharti-ji.html">Jeevan Ka Sachcha Sahara | Guru's Selfless Love &amp; Support | DJJS Satsang | Sadhvi Jaivani Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/L22PMWaf__o/hqdefault.jpg" alt="Divya Guru’s Divine Mission- Divya Jyoti Jagrati Sansthan | DJJS Satsang | Sadhvi Manendra Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/L22PMWaf__o/divya-gurus-divine-mission-divya-jyoti-jagrati-sansthan-djjs-satsang-sadhvi-manendra-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/L22PMWaf__o/divya-gurus-divine-mission-divya-jyoti-jagrati-sansthan-djjs-satsang-sadhvi-manendra-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/L22PMWaf__o/divya-gurus-divine-mission-divya-jyoti-jagrati-sansthan-djjs-satsang-sadhvi-manendra-bharti-ji.html">Divya Guru’s Divine Mission- Divya Jyoti Jagrati Sansthan | DJJS Satsang | Sadhvi Manendra Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/ci0WbmVqehQ/hqdefault.jpg" alt="Prabhu Bhakt Kabhi Nirash Nahi Hote | Real Peace & Happiness | DJJS Satsang | Sadhvi Parma Bharti Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/ci0WbmVqehQ/prabhu-bhakt-kabhi-nirash-nahi-hote-real-peace-happiness-djjs-satsang-sadhvi-parma-bharti-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/ci0WbmVqehQ/prabhu-bhakt-kabhi-nirash-nahi-hote-real-peace-happiness-djjs-satsang-sadhvi-parma-bharti-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/ci0WbmVqehQ/prabhu-bhakt-kabhi-nirash-nahi-hote-real-peace-happiness-djjs-satsang-sadhvi-parma-bharti-ji.html">Prabhu Bhakt Kabhi Nirash Nahi Hote | Real Peace &amp; Happiness | DJJS Satsang | Sadhvi Parma Bharti Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image loaded">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/WzBOx2BUzwE/hqdefault.jpg" alt="अहंकार - साधक का सबसे बड़ा बाधक | Overcome Your Ego | DJJS Satsang | Swami Hariprakashanand Ji" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/WzBOx2BUzwE/overcome-your-ego-djjs-satsang-swami-hariprakashanand-ji.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/WzBOx2BUzwE/overcome-your-ego-djjs-satsang-swami-hariprakashanand-ji.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/WzBOx2BUzwE/overcome-your-ego-djjs-satsang-swami-hariprakashanand-ji.html">अहंकार - साधक का सबसे बड़ा बाधक | Overcome Your Ego | DJJS Satsang | Swami Hariprakashanand Ji</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div> */}
          {/* <div className="row-fluid mt-3">
        <header className="fancy-title mb-10 d-flex" id="devotional-bhajans">
          <h3 className="ld-gradient-heading col-xs-8"><a className="text-gradient" href="videos/category/devotional-bhajans.html">DJJS Bhajans</a>
            <a href="videos/category/devotional-bhajans.html" className="btn btn-solid text-uppercase btn-xsm circle  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
              <span>
                <span className="btn-txt">View All</span>
              </span>
            </a>
          </h3>
        </header>
        <div className="clearfix" />
        <div className="carousel-container carousel-nav-right carousel-nav-sm carousel-nav-bordered carousel-nav-circle carousel-dots-style1">
          <div className="carousel-items row" data-lqd-flickity="{&quot;cellAlign&quot;:&quot;left&quot;,&quot;prevNextButtons&quot;:true,&quot;buttonsAppendTo&quot;:&quot;#devotional-bhajans&quot;,&quot;pageDots&quot;:false,&quot;groupCells&quot;:false,&quot;wrapAround&quot;:false,&quot;pauseAutoPlayOnHover&quot;:false,&quot;navArrow&quot;:6}" data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.carousel-item&quot;,&quot;duration&quot;:&quot;1200&quot;,&quot;delay&quot;:&quot;150&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:36,&quot;opacity&quot;:0},&quot;animations&quot;:{&quot;translateY&quot;:0,&quot;opacity&quot;:1}}">
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/VxvtNiAjqq4/hqdefault.jpg" alt="Ganpati Bappa Morya | Hail to Lord Ganesha | Ganesha Chaturthi Special | 4K Video | DJJS Bhajan" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/VxvtNiAjqq4/ganpati-bappa-morya-hail-to-lord-ganesha-ganesha-chaturthi-special-4k-video-djjs-bhajan.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/VxvtNiAjqq4/ganpati-bappa-morya-hail-to-lord-ganesha-ganesha-chaturthi-special-4k-video-djjs-bhajan.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/VxvtNiAjqq4/ganpati-bappa-morya-hail-to-lord-ganesha-ganesha-chaturthi-special-4k-video-djjs-bhajan.html">Ganpati Bappa Morya | Hail to Lord Ganesha | Ganesha Chaturthi Special | 4K Video | DJJS Bhajan</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/XHSke_rWFTo/hqdefault.jpg" alt="Sarvoccha Parmarth | Dedicating Life for the Divine Mission | DJJS Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/XHSke_rWFTo/sarvoccha-parmarth-dedicating-life-for-the-divine-mission-djjs-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/XHSke_rWFTo/sarvoccha-parmarth-dedicating-life-for-the-divine-mission-djjs-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/XHSke_rWFTo/sarvoccha-parmarth-dedicating-life-for-the-divine-mission-djjs-bhajan-hindi.html">Sarvoccha Parmarth | Dedicating Life for the Divine Mission | DJJS Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/27nrLPMJr9I/hqdefault.jpg" alt="कर दो क्षमा | Prayer for a Sin-free Life | Song of Confession | DJJS Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/27nrLPMJr9I/prayer-for-a-sin-free-life-song-of-confession-djjs-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/27nrLPMJr9I/prayer-for-a-sin-free-life-song-of-confession-djjs-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/27nrLPMJr9I/prayer-for-a-sin-free-life-song-of-confession-djjs-bhajan-hindi.html">कर दो क्षमा | Prayer for a Sin-free Life | Song of Confession | DJJS Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/8nDtmGg9wiE/hqdefault.jpg" alt="Jalte Rehna Yuhin Charaagon | Keep Moving | Meditation Motivation | DJJS Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/8nDtmGg9wiE/jalte-rehna-yuhin-charaagon-keep-moving-meditation-motivation-djjs-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/8nDtmGg9wiE/jalte-rehna-yuhin-charaagon-keep-moving-meditation-motivation-djjs-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/8nDtmGg9wiE/jalte-rehna-yuhin-charaagon-keep-moving-meditation-motivation-djjs-bhajan-hindi.html">Jalte Rehna Yuhin Charaagon | Keep Moving | Meditation Motivation | DJJS Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/moZtzH8JM6c/hqdefault.jpg" alt="Yatra Vishwam Bhavati Ek Needam • Spiritual Revolution by Divya Guru • Motivational Song •  DJJS Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/moZtzH8JM6c/yatra-vishwam-bhavati-ek-needam-spiritual-revolution-by-divya-guru-motivational-song-djjs-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/moZtzH8JM6c/yatra-vishwam-bhavati-ek-needam-spiritual-revolution-by-divya-guru-motivational-song-djjs-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/moZtzH8JM6c/yatra-vishwam-bhavati-ek-needam-spiritual-revolution-by-divya-guru-motivational-song-djjs-bhajan-hindi.html">Yatra Vishwam Bhavati Ek Needam • Spiritual Revolution by Divya Guru • Motivational Song • DJJS Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/RNMfaGfKmyw/hqdefault.jpg" alt="Devon Ke Dev | Glory of Adiyogi Mahadev | Mahashivratri 2023 | DJJS Shiv Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/RNMfaGfKmyw/devon-ke-dev-glory-of-adiyogi-mahadev-mahashivratri-2023-djjs-shiv-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/RNMfaGfKmyw/devon-ke-dev-glory-of-adiyogi-mahadev-mahashivratri-2023-djjs-shiv-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/RNMfaGfKmyw/devon-ke-dev-glory-of-adiyogi-mahadev-mahashivratri-2023-djjs-shiv-bhajan-hindi.html">Devon Ke Dev | Glory of Adiyogi Mahadev | Mahashivratri 2023 | DJJS Shiv Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/9zKi3RuouJA/hqdefault.jpg" alt="Satsang Karle Manava | O Mind Engage Yourself in Satsang | Motivational Song | DJJS Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/9zKi3RuouJA/satsang-karle-manava-o-mind-engage-yourself-in-satsang-motivational-song-djjs-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/9zKi3RuouJA/satsang-karle-manava-o-mind-engage-yourself-in-satsang-motivational-song-djjs-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/9zKi3RuouJA/satsang-karle-manava-o-mind-engage-yourself-in-satsang-motivational-song-djjs-bhajan-hindi.html">Satsang Karle Manava | O Mind Engage Yourself in Satsang | Motivational Song | DJJS Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item col-md-3 col-xs-12">
              <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
                <div className="cb-img-container">
                  <figure className="fancy-box-image">
                    <img className="ld-lazyload" data-src="https://img.youtube.com/vi/sf8Y-7Vu9AY/hqdefault.jpg" alt="Guruvar! Kab Aaoge | Prayer for Divine Audience | Intense Longing of Disciples | DJJS Bhajan [Hindi]" />
                  </figure>
                  <div className="cb-img-btn">
                    <div className="cb-img-btn-bg" />
                    <a href="videos/sf8Y-7Vu9AY/guruvar-kab-aaoge-prayer-for-divine-audience-intense-longing-of-disciples-djjs-bhajan-hindi.html" className="liquid-overlay-link" />
                    <div className="cb-img-btn-inner">
                      <a href="videos/sf8Y-7Vu9AY/guruvar-kab-aaoge-prayer-for-divine-audience-intense-longing-of-disciples-djjs-bhajan-hindi.html" className="btn btn-naked ld_button_5c7fc49d34c89">
                        <span>
                          <span className="btn-icon"><i className="fa fa-play" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-contents">
                  <div className="fancy-box-info">
                    <h3 className="liquid-lp-title font-size-20-xs"><a href="videos/sf8Y-7Vu9AY/guruvar-kab-aaoge-prayer-for-divine-audience-intense-longing-of-disciples-djjs-bhajan-hindi.html">Guruvar! Kab Aaoge | Prayer for Divine Audience | Intense Longing of Disciples | DJJS Bhajan [Hindi]</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div> */}
          <div className="clearfix topmargin" />
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;
