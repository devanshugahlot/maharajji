import React from "react";
import "../Pages/brahmgyan.css";
import "./audio.css"
import { FaAngleUp } from "react-icons/fa";



const AudioGallery = () =>
{
  const bhajans = [
    {
      id: 1,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 2,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 3,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },

    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    // Add more items as needed
  ];

  const bhajanstwo = [
    {
      id: 1,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 2,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 3,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },

    {
      id: 4,
      imageUrl: 'https://images4.alphacoders.com/936/936378.jpg',
      length: '2:55',
      videoTitle: "Gokhan 'YokanJS' Yildiz",
      videoOwner: 'YokanJS'
    },
    // Add more items as needed
  ];
  return (
    <div>
      <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
        <div className="titlebar-inner py-5">
          <div className="container titlebar-container">
            <div className="row titlebar-container">
              <div className="titlebar-col col-md-6">
                <h1 className="font-size-26 mb-1">Audio Gallery</h1>
                <p className="font-size-14 text-fade-dark-06">
                  Swing with the divine melodies
                </p>
              </div>
              <div className="titlebar-col col-md-6 text-md-right">
                <ol className="breadcrumb reset-ul inline-nav">
                  <li>
                    <a href="../index.html">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <span>Audio Gallery</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="content"
        className="content toppadding-lg top"
        style={{ overflow: "visible" }}
      >
        <div className="content-wrap pb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="heading-block mb-0 noborder">
                  <h3 className="text-gradient m-0 t500 font-size-26">
                    Prerna Pravah
                  </h3>
                  <span>A dose of Motivational Discourses</span>
                </div>
              </div>
              <div className="col-md-3">
                <a
                  href="audio/prerna-pravah.html"
                  className="btn btn-xsm wide btn-solid btn-gradient circle text-uppercase font-weight-bold font-size-12 lh-2 pull-right"
                >
                  <span>
                    <span className="btn-txt">See all</span>
                    <span className="btn-gradient-bg btn-gradient-bg-hover bg-primary" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid clearfix">
            <div className="mt-4 carousel-container carousel-shadow-all carousel-nav-left carousel-nav-md carousel-dots-style4 ">
              <div
                className="carousel-items row"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":".carousel-item","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":-55,"rotateX":-1,"opacity":0},"animations":{"translateY":0,"rotateX":0,"opacity":1}}'
                data-lqd-flickity='{"cellAlign":"center","prevNextButtons":false,"buttonsAppendTo":"self","pageDots":false,"groupCells":true,"wrapAround":true,"pauseAutoPlayOnHover":false}'
              >
                <div className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12 ">
                  <div
                    className="amplitude-song-container amplitude-play-pause"
                    data-amplitude-song-index={0}
                    data-amplitude-playlist="prerna"
                  >
                    <div
                      className="fancy-box mb-0 fancy-box-travel"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    >
                      <figure
                        className="fancy-box-image"
                        style={{
                          backgroundImage:
                            "url(../../i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg)",
                        }}
                      >
                        <img
                          src="https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg"
                          alt="Content Box"
                        />
                      </figure>
                      <div
                        className="fancy-box-contents"
                        style={{ margin: 10 }}
                      >
                        <div className="fancy-box-header">
                          <span className="fancy-box-time">9:22</span>
                          <p className="text-white font-size-13 lh-15">
                            PP144-Prathana (Hindi)
                          </p>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              href="#"
                              className="play-icon track-list btn btn-naked text-uppercase"
                              data-track="https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                              data-poster="https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg"
                              data-title="PP144-Prathana (Hindi)"
                              data-singer="Prerna Pravah"
                            >
                              <span>
                                <span className="btn-txt">Listen</span>
                                <span className="btn-icon">
                                  <i className="fa fa-play" />
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className=" liquid-overlay-link z-index-3" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12 ">
                  <div
                    className="amplitude-song-container amplitude-play-pause"
                    data-amplitude-song-index={1}
                    data-amplitude-playlist="prerna"
                  >
                    <div
                      className="fancy-box mb-0 fancy-box-travel"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    >
                      <figure
                        className="fancy-box-image"
                        style={{
                          backgroundImage:
                            "url(../../i1.sndcdn.com/artworks-000190405270-m56359-t500x500.jpg)",
                        }}
                      >
                        <img
                          src="https://i1.sndcdn.com/artworks-000190405270-m56359-t500x500.jpg"
                          alt="Content Box"
                        />
                      </figure>
                      <div
                        className="fancy-box-contents"
                        style={{ margin: 10 }}
                      >
                        <div className="fancy-box-header">
                          <span className="fancy-box-time">6:59</span>
                          <p className="text-white font-size-13 lh-15">
                            PP143-Shreya Aur Preya Marg (Hindi)
                          </p>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              href="#"
                              className="play-icon track-list btn btn-naked text-uppercase"
                              data-track="https://www.djjs.org/feed/playtrack/289691449?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                              data-poster="https://i1.sndcdn.com/artworks-000190405270-m56359-t500x500.jpg"
                              data-title="PP143-Shreya Aur Preya Marg (Hindi)"
                              data-singer="Prerna Pravah"
                            >
                              <span>
                                <span className="btn-txt">Listen</span>
                                <span className="btn-icon">
                                  <i className="fa fa-play" />
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className=" liquid-overlay-link z-index-3" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12 ">
                  <div
                    className="amplitude-song-container amplitude-play-pause"
                    data-amplitude-song-index={2}
                    data-amplitude-playlist="prerna"
                  >
                    <div
                      className="fancy-box mb-0 fancy-box-travel"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    >
                      <figure
                        className="fancy-box-image"
                        style={{
                          backgroundImage: "url(../images/app/pp/pp42.webp)",
                        }}
                      >
                        <img
                          src="https://www.djjs.org/images/app/pp/pp42.webp"
                          alt="Content Box"
                        />
                      </figure>
                      <div
                        className="fancy-box-contents"
                        style={{ margin: 10 }}
                      >
                        <div className="fancy-box-header">
                          <span className="fancy-box-time">8:18</span>
                          <p className="text-white font-size-13 lh-15">
                            PP142-Guru Mahima (Hindi)
                          </p>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              href="#"
                              className="play-icon track-list btn btn-naked text-uppercase"
                              data-track="https://www.djjs.org/feed/playtrack/288199099?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                              data-poster="https://www.djjs.org/images/app/pp/pp42.webp"
                              data-title="PP142-Guru Mahima (Hindi)"
                              data-singer="Prerna Pravah"
                            >
                              <span>
                                <span className="btn-txt">Listen</span>
                                <span className="btn-icon">
                                  <i className="fa fa-play" />
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className=" liquid-overlay-link z-index-3" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12 ">
                  <div
                    className="amplitude-song-container amplitude-play-pause"
                    data-amplitude-song-index={2}
                    data-amplitude-playlist="prerna"
                  >
                    <div
                      className="fancy-box mb-0 fancy-box-travel"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    >
                      <figure
                        className="fancy-box-image"
                        style={{
                          backgroundImage: "url(../images/app/pp/pp42.webp)",
                        }}
                      >
                        <img
                          src="https://www.djjs.org/images/app/pp/pp42.webp"
                          alt="Content Box"
                        />
                      </figure>
                      <div
                        className="fancy-box-contents"
                        style={{ margin: 10 }}
                      >
                        <div className="fancy-box-header">
                          <span className="fancy-box-time">8:18</span>
                          <p className="text-white font-size-13 lh-15">
                            PP142-Guru Mahima (Hindi)
                          </p>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              href="#"
                              className="play-icon track-list btn btn-naked text-uppercase"
                              data-track="https://www.djjs.org/feed/playtrack/288199099?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                              data-poster="https://www.djjs.org/images/app/pp/pp42.webp"
                              data-title="PP142-Guru Mahima (Hindi)"
                              data-singer="Prerna Pravah"
                            >
                              <span>
                                <span className="btn-txt">Listen</span>
                                <span className="btn-icon">
                                  <i className="fa fa-play" />
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className=" liquid-overlay-link z-index-3" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12 ">
                  <div
                    className="amplitude-song-container amplitude-play-pause"
                    data-amplitude-song-index={2}
                    data-amplitude-playlist="prerna"
                  >
                    <div
                      className="fancy-box mb-0 fancy-box-travel"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    >
                      <figure
                        className="fancy-box-image"
                        style={{
                          backgroundImage: "url(../images/app/pp/pp42.webp)",
                        }}
                      >
                        <img
                          src="https://www.djjs.org/images/app/pp/pp42.webp"
                          alt="Content Box"
                        />
                      </figure>
                      <div
                        className="fancy-box-contents"
                        style={{ margin: 10 }}
                      >
                        <div className="fancy-box-header">
                          <span className="fancy-box-time">8:18</span>
                          <p className="text-white font-size-13 lh-15">
                            PP142-Guru Mahima (Hindi)
                          </p>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              href="#"
                              className="play-icon track-list btn btn-naked text-uppercase"
                              data-track="https://www.djjs.org/feed/playtrack/288199099?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                              data-poster="https://www.djjs.org/images/app/pp/pp42.webp"
                              data-title="PP142-Guru Mahima (Hindi)"
                              data-singer="Prerna Pravah"
                            >
                              <span>
                                <span className="btn-txt">Listen</span>
                                <span className="btn-icon">
                                  <i className="fa fa-play" />
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className=" liquid-overlay-link z-index-3" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12 ">
                  <div
                    className="amplitude-song-container amplitude-play-pause"
                    data-amplitude-song-index={2}
                    data-amplitude-playlist="prerna"
                  >
                    <div
                      className="fancy-box mb-0 fancy-box-travel"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    >
                      <figure
                        className="fancy-box-image"
                        style={{
                          backgroundImage: "url(../images/app/pp/pp42.webp)",
                        }}
                      >
                        <img
                          src="https://www.djjs.org/images/app/pp/pp42.webp"
                          alt="Content Box"
                        />
                      </figure>
                      <div
                        className="fancy-box-contents"
                        style={{ margin: 10 }}
                      >
                        <div className="fancy-box-header">
                          <span className="fancy-box-time">8:18</span>
                          <p className="text-white font-size-13 lh-15">
                            PP142-Guru Mahima (Hindi)
                          </p>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              href="#"
                              className="play-icon track-list btn btn-naked text-uppercase"
                              data-track="https://www.djjs.org/feed/playtrack/288199099?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                              data-poster="https://www.djjs.org/images/app/pp/pp42.webp"
                              data-title="PP142-Guru Mahima (Hindi)"
                              data-singer="Prerna Pravah"
                            >
                              <span>
                                <span className="btn-txt">Listen</span>
                                <span className="btn-icon">
                                  <i className="fa fa-play" />
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className=" liquid-overlay-link z-index-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="listContainer">
                <div>
      <div className="listHeader">
        <div className="listHeaderL">
          <p className="listTitle">Devotional Bhajans</p>
        </div>
      </div>
      <div className="listContent" id="playlist">
        {/* Iterate over the bhajans array using map */}
        {bhajans.map(bhajan => (
          <div key={bhajan.id} className="listItem">
            <div className="itemImage">
              <img src={bhajan.imageUrl} alt="" />
              <button className="itemLength">{bhajan.length}</button>
            </div>
            <div className="itemInfo">
              <p className="videoTitle">{bhajan.videoTitle}</p>
              <p className="videoOwner">{bhajan.videoOwner}</p>
            </div>
          </div>
        ))}
                  </div>
                </div>
                
                <div>
      <div className="listHeader">
        <div className="listHeaderL">
          <p className="listTitle">Spiritual Discourses</p>
        </div>
      </div>
      <div className="listContent" id="playlist">
        {/* Iterate over the bhajans array using map */}
        {bhajanstwo.map(bhajan => (
          <div key={bhajan.id} className="listItem">
            <div className="itemImage">
              <img src={bhajan.imageUrl} alt="" />
              <button className="itemLength">{bhajan.length}</button>
            </div>
            <div className="itemInfo">
              <p className="videoTitle">{bhajan.videoTitle}</p>
              <p className="videoOwner">{bhajan.videoOwner}</p>
            </div>
          </div>
        ))}
                  </div>
                  </div>
    </div>
              <div className="heading-block bottommargin-sm topmargin noborder">
                <h3 className="t500 font-size-26">
                  <span className="text-gradient">Featured Categories</span>
                </h3>
                <span>Browse by audio categories</span>
              </div>
              <div className="row clearfix albumcategory">
                <div className="col-md-6">
                  <img src="https://www.djjs.org/images/new/falsafe.jpg" alt />
                  <div className="overlay">
                    <div className="text-overlay">
                      <span className="font-primary text-white">
                        Akhand Gyan
                      </span>
                      <div className="text-overlay-title">
                        <h2>
                          <a href="audio/akhandgyan.html">Jeevan Ke Falsafe</a>
                        </h2>
                      </div>
                      <a
                        href="audio/akhandgyan.html"
                        className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn split-inner"
                      >
                        <span>
                          <span className="btn-gradient-bg bg-gradient-primary-rl" />
                          <span className="btn-txt">View All</span>
                          <span className="btn-gradient-bg btn-gradient-bg-hover" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <a
                    className="liquid-overlay-link z-index-3"
                    href="audio/akhandgyan.html"
                  />
                </div>
                <div className="row mx-0 px-0 mt-3 mt-md-0 col-md-6">
                  <div className="col-md-6">
                    <img src="https://www.djjs.org/images/new/bhajan.jpg" alt />
                    <div className="overlay">
                      <div className="text-overlay">
                        <span className="font-primary">divine melodies</span>
                        <div className="text-overlay-title">
                          <h2>
                            <a href="audio/bhajan.html">Bhajans</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <a
                      className="liquid-overlay-link z-index-3"
                      href="audio/bhajan.html"
                    />
                  </div>
                  <div className="col-md-6">
                    <img src="https://www.djjs.org/images/new/discourse.jpg" alt />
                    <div className="overlay">
                      <div className="text-overlay">
                        <span className="font-primary">Food for soul</span>
                        <div className="text-overlay-title">
                          <h2>
                            <a href="audio/discourses.html">Discourses</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <a
                      className="liquid-overlay-link z-index-3"
                      href="audio/discourses.html"
                    />
                  </div>
                  <div className="col-md-12 mt-3 amplitude-song-container">
                    <img src="https://www.djjs.org/images/new/naman.jpg" alt />
                    <div className="overlay">
                      <div className="text-overlay">
                        <span className="font-primary">Daily Mangal Aarti</span>
                        <div className="text-overlay-title">
                          <h2>
                            <a href="#">Naman &amp; Aarti</a>
                          </h2>
                        </div>
                        <a
                          data-amplitude-song-index={0}
                          data-amplitude-playlist="aarti"
                          className="amplitude-play-pause btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn split-inner track-list"
                          data-track="https://www.djjs.org/feed/playtrack/505856367?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf"
                          data-poster="demos/music/tracks/poster-images/something-about-love.jpg"
                          data-title="Naman & Aarti"
                          data-singer="DJJS"
                        >
                          <span>
                            <span className="btn-gradient-bg bg-gradient-primary-rl" />
                            <span className="btn-txt">Play Now</span>
                            <span className="btn-icon">
                              <i className="fa fa-play" />
                            </span>
                            <span className="btn-gradient-bg btn-gradient-bg-hover" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="row topmargin-lg clearfix">
                <div className="col-lg-4 col-md-6">
                  <h3>
                    <span className="text-gradient">DJJS Soundcloud</span>
                  </h3>
                  <iframe
                    width="100%"
                    height={130}
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346828388&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                  />
                  <br />
                  <br />
                  <iframe
                    width="100%"
                    height={130}
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/338998437&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                  />
                </div>
                <div className="col-lg-8 col-md-6 ohidden">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 order-lg-12">
                      <div className="d-block d-md-none d-lg-none d-xl-block  clear" />
                      <h3>
                        <span className="text-gradient">
                          Grab our Mobile app
                        </span>
                      </h3>
                      <p>Listend and download audios in DJJS mobile app.</p>
                      <p></p>
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="https://play.google.com/store/apps/details?id=org.djjs.djjsapp"
                            className="btn btn-default circle btn-bordered border-thin btn-icon-left btn-icon-circle btn-icon-bordered font-size-12 font-weight-bold text-uppercase ltr-sp-05 mb-2 w-100"
                          >
                            <span>
                              <span className="btn-txt">Android</span>
                              <span className="btn-icon">
                                <i className="fa fa-android" />
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://itunes.apple.com/us/app/djjs/id1189587046"
                            className="btn btn-default circle btn-bordered border-thin btn-icon-left btn-icon-circle btn-icon-bordered font-size-12 font-weight-bold text-uppercase ltr-sp-05 mb-2 w-100 col-md-6"
                          >
                            <span>
                              <span className="btn-txt">Ios</span>
                              <span className="btn-icon">
                                <i className="fa fa-apple" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 order-lg-1 d-sm-none d-md-none d-lg-block">
                      <img
                        src="../images/new/iphone.png"
                        alt="DJJS App"
                        data-animate="fadeInUp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AudioGallery;
