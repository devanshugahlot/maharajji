import React, { useState } from "react";
import { FaPlay, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate("");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const [activeFilter, setActiveFilter] = useState("social");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  const initiatives = [
    {
      title: "Manthan",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl: "https://www.djjs.org/images/new/initiatives/manthan.jpg",
      link: "manthan/index.html",
    },
    {
      title: "Kamdhenu",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl: "https://www.djjs.org/images/new/initiatives/kamdhenu.jpg",
      link: "kamdhenu.html",
    },
  ];

  const spiritualinitiatives = [
    {
      title: "Kamdhenu",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl: "https://www.djjs.org/images/new/initiatives/kamdhenu.jpg",
      link: "kamdhenu.html",
    },
    {
      title: "Manthan",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl: "https://www.djjs.org/images/new/initiatives/manthan.jpg",
      link: "manthan/index.html",
    },
  ];
  const filteredInitiatives = initiatives.filter(
    (initiative) => initiative.category === activeFilter
  );

  const [socialtab, setSocialtab] = useState(true);
  const [spiritualtab, setSpiritualtab] = useState(false);
  const [developmenttab, setDevelopmenttab] = useState(false);

  const handlesocialbutton = () => {
    setSocialtab(true);
    setSpiritualtab(false);
    setDevelopmenttab(false);
  };

  const handlespiritualbutton = () => {
    setSocialtab(false);
    setSpiritualtab(true);
    setDevelopmenttab(false);
  };

  const handledevelopmentbutton = () => {
    setSocialtab(false);
    setSpiritualtab(false);
    setDevelopmenttab(true);
  };

  return (
    <div>
      <main id="" className="">
        <section
          id="bg-cover"
          className="bg-contain bg-center d-flex align-items-center py-5 home-bg-img"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center !important",
            width: "100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Your content here */}
        </section>
        <section
          id="topsection"
          className="container"
          style={{ background: 'url("images/new/bg-79.svg")' }}
        >
          <div
            className="clearfix intro mt-20"
            style={{ maxWidth: 1920, margin: "0 auto" }}
          >
            <div className="row d-flex flex-wrap align-items-center pb-50">
              <div className="lqd-column col-md-6 mb-20 mx-xs-15">
                <div
                  className="liquid-img-group-single"
                  data-shadow-style={0}
                  data-roundness={4}
                  data-inview="true"
                  data-animate-shadow="false"
                  data-reveal="true"
                  data-reveal-options='{"direction":"lr"}'
                >
                  <div className="liquid-img-group-img-container">
                    <div className="liquid-img-container-inner">
                      <figure>
                        <picture>
                          <source
                            type=""
                            data-srcset="https://bhurijanadasa.com/wp-content/uploads/2020/12/bhurijan-prabhu-lecture.jpg"
                          />
                          <img
                            style={{ width: "450px" }}
                            alt="Brahm gyan DJJS"
                            className="ld-lazyload"
                            src="https://bhurijanadasa.com/wp-content/uploads/2020/12/bhurijan-prabhu-lecture.jpg"
                            data-src="https://bhurijanadasa.com/wp-content/uploads/2020/12/bhurijan-prabhu-lecture.jpg"
                          />
                        </picture>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-6">
                <div
                  className="px-3"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1600", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":30, "opacity":0}, "animations":{"translateY":0, "opacity":1}}'
                >
                  <header className="fancy-title mb-50">
                    <h2
                      className="lh-115 mb-0"
                      data-fittext="true"
                      data-fittext-options='{"compressor":1, "maxFontSize":"maxFontSize", "minFontSize":"25"}'
                    >
                      <span className="text-gradient">
                        <span className="t600">GOD</span> CAN BE SEEN
                      </span>
                    </h2>
                  </header>
                  <p className="font-size-22 lh-105">
                    <i>
                      Discover yourself through Brahm Gyan (Eternal Science of
                      God-Realization)
                    </i>
                  </p>
                  <p className="font-size-24 lh-15 mb-55">
                    Today, there is a strong perception that seeing God is
                    practically impossible. And, this thick barricade in our
                    minds tends to swell up gaining support from traditional
                    thoughts and prejudices. Verily, this just needs a strong
                    blow, and the impossible itself is compelled to say: I’m
                    possible! This powerful smash is set forth by the Perfect
                    Spiritual Masters (Satgurus), who descend on the Earth to
                    tear apart the mental barriers among mankind about
                    experiencing God! This happens in every Era. And, this is
                    happening today as well!
                    <strong>
                      Divya Guru Shri Ashutosh Maharaj Ji, founder &amp; head of
                      Divya Jyoti Jagrati Sansthan is benevolently transmitting
                      to mankind, the practical experience of God through Brahm
                      Gyan (Eternal Science of God-Realization), while upholding
                      the spirit of eternal message that GOD CAN BE SEEN!
                    </strong>
                  </p>
                  <a
                    style={{ fontSize: 13 }}
                    onClick={() => navigate("/brahmgyan")}
                    className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn"
                  >
                    <span>
                      <span className="btn-gradient-bg" />
                      <span className="btn-txt">Read More</span>
                      <span className="btn-gradient-bg btn-gradient-bg-hover" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      
        <section className="vc_row pt-80 pb-70 pb-xs-0 bg-athens-gray">
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-12 text-center">
                <h2 className="h1 mt-0 mb-3 text-gradient">Featured Videos</h2>
                <p className="font-size-16">Top Picks from video gallery</p>
              </div>
              <div className="lqd-column col-md-12">
                <div className="tabs tabs-nav-side tabs-nav-side-alt tabs-nav-side-block">
                  <ul className="nav tabs-nav hidden-xs" role="tablist">
                    <li
                      role="presentation"
                      className={activeTab === 0 ? "active" : ""}
                    >
                      <a
                        // href="#ld-tab-pane-0"
                        aria-controls="ld-tab-pane-0"
                        role="tab"
                        onClick={() => handleTabChange(0)}vay
                      >
                        Om Namah Shivay | Glory of Adi Guru | Shiv Stuti |
                        Mahashivratri 2022 | DJJS Bhajan
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={activeTab === 1 ? "active" : ""}
                    >
                      <a
                        // href="#ld-tab-pane-1"
                        aria-controls="ld-tab-pane-1"
                        role="tab"
                        onClick={() => handleTabChange(1)}
                      >
                        Shrimad Devi Bhagwat Katha 2021 | TEASER | DJJS Katha |
                        Sadhvi Aditi Bharti Ji
                      </a>
                    </li>
                  </ul>
                  <div className="tabs-content">
                    <div
                      role="tabpanel"
                      className={`tabs-pane fade ${
                        activeTab === 0 ? "active in" : ""
                      }`}
                      id="ld-tab-pane-0"
                    >
                      <div
                        className="fancy-box fancy-box-case-study scheme-light"
                        data-hover3d="true"
                      >
                        <div
                          className="fancy-box-contents border-radius-5"
                          data-stacking-factor="0.5"
                        >
                          <div className="cb-img-container border-radius-5">
                            <figure
                              className="fancy-box-image border-radius-5"
                              data-responsive-bg="true"
                            >
                              <img
                                className="  ld-lazyload"
                                data-src="https://bhurijanadasa.com/wp-content/uploads/2021/08/Mustard_wuna-495x400.jpg"
                                src="https://bhurijanadasa.com/wp-content/uploads/2021/08/Mustard_wuna-495x400.jpg"
                                alt="Om Namah Shivay | Glory of Adi Guru | Shiv Stuti | Mahashivratri 2022 | DJJS Bhajan"
                              />
                            </figure>
                            <div className="liquid-img-group-content content-floated-mid">
                              <a
                                // href="https://youtu.be/Vlp7zC1YxQk"
                                className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-lg btn-icon-circle btn-icon-solid btn-icon-ripple"
                              >
                                <span>
                                  <span className="btn-icon font-size-26">
                                  <FaPlay />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="fancy-box-header">
                            <span className="ld-cb-cat font-weight-medium text-uppercase ltr-sp-15">
                              spiritual
                            </span>
                            <h3>
                              Om Namah Shivay | Glory of Adi Guru | Shiv Stuti |
                              Mahashivratri 2022 | DJJS Bhajan
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className={`tabs-pane fade ${
                        activeTab === 1 ? "active in" : ""
                      }`}
                      id="ld-tab-pane-1"
                    >
                      <div
                        className="fancy-box fancy-box-case-study scheme-light"
                        data-hover3d="true"
                      >
                        <div
                          className="fancy-box-contents border-radius-5"
                          data-stacking-factor="0.5"
                        >
                          <div className="cb-img-container border-radius-5">
                            <figure
                              className="fancy-box-image border-radius-5"
                              data-responsive-bg="true"
                            >
                              <img
                                className="  ld-lazyload"
                                data-src="https://bhurijanadasa.com/wp-content/uploads/2021/08/sadhu_enterfrs001-495x400.jpg"
                                src="https://bhurijanadasa.com/wp-content/uploads/2021/08/sadhu_enterfrs001-495x400.jpg"
                                alt="Shrimad Devi Bhagwat Katha 2021 | TEASER | DJJS Katha | Sadhvi Aditi Bharti Ji"
                              />
                            </figure>
                            <div className="liquid-img-group-content content-floated-mid">
                              <a
                                // href="https://youtu.be/xtclpuBy6cE"
                                className="btn btn-naked fresco btn-icon-block btn-icon-top btn-icon-lg btn-icon-circle btn-icon-solid btn-icon-ripple"
                              >
                                <span>
                                  <span className="btn-icon font-size-26">
                                  <FaPlay />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="fancy-box-header">
                            <span className="ld-cb-cat font-weight-medium text-uppercase ltr-sp-15">
                              spiritual
                            </span>
                            <h3>
                              Shrimad Devi Bhagwat Katha 2021 | TEASER | DJJS
                              Katha | Sadhvi Aditi Bharti Ji
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a
                  onClick={() => navigate("/video-gallery")}
                  className="btn btn-solid text-uppercase btn-lg semi-round btn-bordered border-thin font-size-12 font-weight-bold ltr-sp-2 px-2 p-xs-0"
                >
                  <span>
                    <span className="btn-txt">See All</span>
                    <span className="btn-icon">
                      <FaPlay />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_row pt-50 pb-50">
          <div className="container">
            <span className="ld-sf-spinner">
              <span>Loading </span>
            </span>
            <div className="w-overlay" />
            <div className="row">
              <div className="lqd-column col-md-12">
                <div className="liquid-filter-items justify-content-between align-items-center mb-5 m-xs-0">
                  <div className="liquid-filter-items-inner">
                    <a >
                      <h3 className="m-0 text-gradient font-size-40 t600">
                        DJJS Initiatives
                      </h3>
                    </a>
                    <ul className="filter-list filter-list-inline size-md mb-0 m-xs-0">
                      <li
                        data-filter="social"
                        className={activeFilter === "social" ? "active" : ""}
                        onClick={handlesocialbutton}
                      >
                        <button className="btn btn-default btn-solid text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span style={{color:"#FFB09F"}} className="btn-txt">Social Initiatives</span>
                        </button>
                      </li>
                      <li
                        data-filter="spiritual"
                        className={activeFilter === "spiritual" ? "active" : ""}
                        onClick={handlespiritualbutton}
                      >
                        <button className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span className="btn-txt">Spiritual Initiatives</span>
                        </button>
                      </li>
                      <li
                        data-filter="workshop"
                        className={activeFilter === "workshop" ? "active" : ""}
                        onClick={handledevelopmentbutton}
                      >
                        <button className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span className="btn-txt">
                            Developmental Workshops
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="loadinitiatives">
              {socialtab && (
                <div className="row d-flex flex-wrap">
                  {initiatives.map((initiative, index) => (
                    <div key={index} className="lqd-column col-sm-6 col-md-6">
                      <div
                        className="fancy-box fancy-box-travel fancy-box-big"
                        data-slideelement-onhover="true"
                        data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      >
                        <figure
                          className="fancy-box-image ld-lazyload"
                          style={{
                            backgroundImage: `url(${initiative.imageUrl})`,
                          }}
                        >
                          <img
                            className="ld-lazyload"
                            data-src={initiative.imageUrl}
                            alt={initiative.title}
                          />
                        </figure>
                        <div className="fancy-box-contents">
                          <div className="fancy-box-header">
                            <span className="fancy-box-time lh-2">
                              {initiative.category}
                            </span>
                            <h3>{initiative.title}</h3>
                          </div>
                          <div className="fancy-box-info">
                            <p>{initiative.description}</p>
                            <div className="fancy-box-footer">
                              <a
                                target="_blank"
                                href={initiative.link}
                                className="btn btn-naked text-uppercase text-white"
                              >
                                <span>
                                  <span className="btn-txt">Read more</span>
                                  <span className="btn-icon">
                                    <i className="icon-liquid_arrow_right" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="liquid-overlay-link z-index-3"
                          target="_blank"
                          href={initiative.link}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {spiritualtab && (
                <div className="row d-flex flex-wrap">
                  {spiritualinitiatives.map((initiative, index) => (
                    <div key={index} className="lqd-column col-sm-6 col-md-6">
                      <div
                        className="fancy-box fancy-box-travel fancy-box-big"
                        data-slideelement-onhover="true"
                        data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      >
                        <figure
                          className="fancy-box-image ld-lazyload"
                          style={{
                            backgroundImage: `url(${initiative.imageUrl})`,
                          }}
                        >
                          <img
                            className="ld-lazyload"
                            data-src={initiative.imageUrl}
                            alt={initiative.title}
                          />
                        </figure>
                        <div className="fancy-box-contents">
                          <div className="fancy-box-header">
                            <span className="fancy-box-time lh-2">
                              {initiative.category}
                            </span>
                            <h3>{initiative.title}</h3>
                          </div>
                          <div className="fancy-box-info">
                            <p>{initiative.description}</p>
                            <div className="fancy-box-footer">
                              <a
                                target="_blank"
                                href={initiative.link}
                                className="btn btn-naked text-uppercase text-white"
                              >
                                <span>
                                  <span className="btn-txt">Read more</span>
                                  <span className="btn-icon">
                                    <i className="icon-liquid_arrow_right" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="liquid-overlay-link z-index-3"
                          target="_blank"
                          href={initiative.link}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {developmenttab && (
                <div className="row d-flex flex-wrap">
                  {initiatives.map((initiative, index) => (
                    <div key={index} className="lqd-column col-sm-6 col-md-6">
                      <div
                        className="fancy-box fancy-box-travel fancy-box-big"
                        data-slideelement-onhover="true"
                        data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      >
                        <figure
                          className="fancy-box-image ld-lazyload"
                          style={{
                            backgroundImage: `url(${initiative.imageUrl})`,
                          }}
                        >
                          <img
                            className="ld-lazyload"
                            data-src={initiative.imageUrl}
                            alt={initiative.title}
                          />
                        </figure>
                        <div className="fancy-box-contents">
                          <div className="fancy-box-header">
                            <span className="fancy-box-time lh-2">
                              {initiative.category}
                            </span>
                            <h3>{initiative.title}</h3>
                          </div>
                          <div className="fancy-box-info">
                            <p>{initiative.description}</p>
                            <div className="fancy-box-footer">
                              <a
                                target="_blank"
                                href={initiative.link}
                                className="btn btn-naked text-uppercase text-white"
                              >
                                <span>
                                  <span className="btn-txt">Read more</span>
                                  <span className="btn-icon">
                                    <i className="icon-liquid_arrow_right" />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="liquid-overlay-link z-index-3"
                          target="_blank"
                          href={initiative.link}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-center">
              <a
                id="seeallinitiatives"
                onClick={() => navigate("/initiatives")}
                className="btn btn-solid text-uppercase btn-lg semi-round btn-bordered border-thin font-size-12 font-weight-bold ltr-sp-2 px-2 p-xs-0"
              >
                <span>
                  <span className="btn-txt">See All</span>
                  <span className="btn-icon">
                    <i className="icon-ion-ios-arrow-forward" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="vc_row pt-60 pb-90">
          <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
              <div
                className="lqd-column col-lg-5 col-md-6 mb-5 mb-md-0"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
              >
                <header className="fancy-title mb-60">
                  <h6 className="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-primary">
                    Akhand Gyan - Monthly Publication
                  </h6>
                  <h2 className="h1 mt-4 mb-4">
                    Provide complete nourishment to your body-mind-soul !
                  </h2>
                  <p>
                    <a className="nocolor" >
                      <strong>AKHAND GYAN</strong>
                    </a>
                    is a revolutionary monthly magazine of DJJS. Raising voice
                    against ill practices prevailing in the society &amp; wiping
                    off the plethora of misconceptions.
                  </p>
                </header>
                <a
                  // href="akhandgyan.html"
                  className="btn text-uppercase btn-lg semi-round btn-bordered border-thin font-size-12 font-weight-bold ltr-sp-2 px-2 p-xs-0"
                >
                  <span>
                    <span className="btn-txt">Read More</span>
                    <span className="btn-icon">
                      <i className="icon-ion-ios-arrow-forward" />
                    </span>
                  </span>
                </a>
                <a
                  // href="akhandgyan/subscribe.html"
                  className="btn btn-solid text-uppercase btn-lg semi-round btn-bordered border-thin font-size-12 font-weight-bold ltr-sp-2 px-2 p-xs-0"
                  data-localscroll="true"
                  data-localscroll-options="{ 'scrollBelowSection': true }"
                  style={{ opacity: 1 }}
                >
                  <span>
                    <span className="btn-txt">Subscribe</span>
                    <span className="btn-icon">
                      <i className="icon-ion-ios-arrow-forward" />
                    </span>
                  </span>
                </a>
              </div>
              <div className="lqd-column col-lg-6 col-md-5 col-md-offset-1">
                <div
                  className="liquid-img-group-single stretch-to-right"
                  data-shadow-style={4}
                  data-roundness={4}
                  data-inview="true"
                  data-animate-shadow="true"
                  data-reveal="true"
                  data-reveal-options='{"direction":"rl"}'
                >
                  <div className="liquid-img-group-img-container">
                    <div className="liquid-img-group-content content-floated-mid-left">
                      <a
                        href="https://www.youtube.com/watch?v=hnvuY1VYyPI"
                        className="btn btn-naked text-uppercase btn-gradient fresco btn-icon-block btn-icon-top btn-icon-xlg btn-icon-circle btn-icon-solid font-size-13 text-dark"
                      >
                        <span>
                          <span className="btn-txt">
                            Watch Promotional Video
                          </span>
                          <span className="btn-icon font-size-24">
                            {/* <span className="btn-gradient-bg bg-gradient-primary-lr" />
                            <span className="btn-gradient-bg btn-gradient-bg-hover" /> */}
                            <FaPlay />                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="liquid-img-container-inner">
                      <figure>
                        <img
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/images/new/akhandgyan.jpg"
                          alt="Akhand Gyan Monthly Magazine DJJS"
                          src="https://www.djjs.org/images/new/akhandgyan.jpg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="vc_row pt-40 pb-40 section-news"
          data-custom-animations="true"
          data-ca-options='{"triggerHandler":"inview","animationTarget":".ipost","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":55,"rotateX":-1,"opacity":0},"animations":{"translateY":0,"rotateX":0,"opacity":1}}'
        >
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-6 col-md-offset-3">
                <header className="fancy-title mb-70 text-center">
                  <h2 className="h1 mt-0">
                    <span className="text-secondary ld-fh-txt text-gradient">
                      News &amp; Events
                    </span>
                  </h2>
                  <p className="font-size-18">
                    Get in touch with our activities
                  </p>
                </header>
              </div>
            </div>
            <div className="row">
              <div
                className="section-news"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":55,"rotateX":-1,"opacity":0},"animations":{"translateY":0,"rotateX":0,"opacity":1}}'
              >
                <div className="ipost col-md-4 mb-xs clearfix">
                  <div>
                    <div className="entry-image m-0 liquid-lp">
                      <figure className="mb-3">
                        <a
                          className="img_scale"
                          // href="news/shri-ram-katha-reinvigorated-the-spiritual-legacy-of-lord-ram-at-rewari-haryana.html"
                        >
                          <img
                            className="ld-lazyload"
                            data-src="https://www.djjs.org/uploads/news/im_660a0a1b1991f.jpg"
                            src="https://www.djjs.org/uploads/news/im_6617513a2c5f7.jpg"
                            alt="Shri Ram Katha reinvigorated the spiritual legacy of Lord Ram at Rewari, Haryana"
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="entry-title px-3">
                      <h2
                        className="liquid-lp-title"
                        data-split-text="true"
                        data-split-options='{"type":"lines"}'
                      >
                        <a >
                          Shri Ram Katha reinvigorated the spiritual legacy of
                          Lord Ram at Rewari, Haryana
                        </a>
                      </h2>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime="2024-04-01"
                      >
                        1 April, 2024
                      </time>
                    </div>
                  </div>
                </div>
                <div className="ipost col-md-4 mb-xs clearfix">
                  <div>
                    <div className="entry-image m-0 liquid-lp">
                      <figure className="mb-3">
                        <a
                          className="img_scale"
                          // href="news/shri-ram-katha-satiated-the-thirst-for-spiritual-knowledge-in-kurukshetra-haryana.html"
                        >
                          <img
                            className="ld-lazyload"
                            data-src="https://www.djjs.org/uploads/news/im_660a098258abb.jpg"
                            src="https://www.djjs.org/uploads/news/im_66174c67e2a73.jpg"
                            alt="Shri Ram Katha satiated the thirst for Spiritual Knowledge in Kurukshetra, Haryana"
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="entry-title px-3">
                      <h2
                        className="liquid-lp-title"
                        data-split-text="true"
                        data-split-options='{"type":"lines"}'
                      >
                        <a >
                          Shri Ram Katha satiated the thirst for Spiritual
                          Knowledge in Kurukshetra, Haryana
                        </a>
                      </h2>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime="2024-04-01"
                      >
                        1 April, 2024
                      </time>
                    </div>
                  </div>
                </div>
                <div className="ipost col-md-4 mb-xs clearfix">
                  <div>
                    <div className="entry-image m-0 liquid-lp">
                      <figure className="mb-3">
                        <a
                          className="img_scale"
                          // href="news/djjs-celebrated-national-youth-day-with-an-awakening-call-to-the-youth-at-rudrapur-uttarakhand.html"
                        >
                          <img
                            className="ld-lazyload"
                            data-src="https://www.djjs.org/uploads/news/im_65d5d58e376cd.jpg"
                            src="https://www.djjs.org/uploads/news/im_6614f9f67e48b.jpg"
                            alt="DJJS Celebrated National Youth Day with an Awakening Call to the Youth at Rudrapur, Uttarakhand"
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="entry-title px-3">
                      <h2
                        className="liquid-lp-title"
                        data-split-text="true"
                        data-split-options='{"type":"lines"}'
                      >
                        <a >
                          DJJS Celebrated National Youth Day with an Awakening
                          Call to the Youth at Rudrapur, Uttarakhand
                        </a>
                      </h2>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime="2024-02-21"
                      >
                        21 February, 2024
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop:"20px"}} className="lqd-column row">
              <div className="col-md-12 text-center">
                <p>
                  <a
                    style={{ fontSize: 13 }}
                    onClick={() => navigate("/events")}
                    className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn"
                  >
                    <span >
                      <span className="btn-gradient-bg" />
                      <span  className="btn-txt">See all News</span>
                      <span className="btn-gradient-bg btn-gradient-bg-hover" />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="vc_row overflow-hidden">
          <div className="lqd-particles-bg-wrap" style={{ height: 400 }}>
            <div className="ld-particles-container">
              <div
                className="ld-particles-inner"
                id="ld-1527244273759"
                data-particles="false"
                data-particles-options='{"particles":{"shape":{"type":["circle"]},"move":{"enable":true,"direction":"right","out_mode":"out"}},"interactivity":[]}'
              />
            </div>
          </div>
          <section
          className="vc_row pt-50 pb-50 pb-xs-0 weekly_insights"
          data-custom-animations="true"
          data-ca-options='{"triggerHandler":"inview","animationTarget":".lqd-column","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":55,"rotateX":-1,"opacity":0},"animations":{"translateY":0,"rotateX":0,"opacity":1}}'
        >
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-12">
                <header className="fancy-title mb-70 text-center">
                  <h2 className="mt-0 h1">
                    <span className="text-secondary ld-fh-txt text-gradient">
                      Weekly Insights
                    </span>
                  </h2>
                  <p className="font-size-16">
                    Keep you connected with your innerself
                  </p>
                </header>
              </div>
              <div className="lqd-column col-md-12">
                <div className="liquid-blog-posts">
                  <div
                    className="liquid-blog-grid row"
                    data-liquid-masonry="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlSpace="preserve"
                      className="liquid-lp-gradient"
                      width={0}
                      height={0}
                    >
                      <defs>
                        <linearGradient
                          id="liquid-lp-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" />
                          <stop offset="100%" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="lqd-column col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-0 masonry-item">
                      <article className=" liquid-lp-sp-block liquid-lp-featured">
                        <figure
                          data-bg="url(https://www.djjs.org/uploads/blog/99ad5ffb1fc78d7d4603cf51290a9eb6.png)"
                          className="liquid-lp-media ld-lazyload"
                        >
                          <img
                            data-src="https://www.djjs.org/uploads/blog/99ad5ffb1fc78d7d4603cf51290a9eb6.png"
                            src="https://www.djjs.org/uploads/blog/99ad5ffb1fc78d7d4603cf51290a9eb6.png"
                            alt="Om Namah Shivay | Glory of Adi Guru | Shiv Stuti | Mahashivratri 2022 | DJJS Bhajan"
                          />
                        </figure>
                        <div className="liquid-lp-inner justify-content-end">
                          <a
                            className="liquid-overlay-link"
                          />
                          <header className="liquid-lp-header">
                            <a
                              className="btn btn-solid text-uppercase btn-xsm small semi-round btn-bordered border-none btn-gradient font-size-12 font-weight-bold lh-2 ltr-sp-05 mb-2"
                            >
                              <span>
                                <span className="btn-gradient-bg" />
                                <span className="btn-txt">BLOG</span>
                                <span className="btn-gradient-bg btn-gradient-bg-hover bg-gradient-secondary-rl" />
                              </span>
                            </a>
                            <h2 className="liquid-lp-title h5 font-weight-bold">
                              <a >
                                Winning the Devils Bargain: Fight against
                                Substance Abuse
                              </a>
                            </h2>
                          </header>
                        </div>
                      </article>
                    </div>
                    <div className="lqd-column col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-0 masonry-item">
                      <article className="liquid-lp liquid-lp-sp-block shadow-1">
                        <figure
                          data-bg="url(https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg)"
                          className="liquid-lp-media ld-lazyload"
                        >
                          <a >
                            <img
                              className="ld-lazyload"
                              data-src="https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg"
                              alt="FOMO to JOMO"
                              src="https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg"
                            />
                          </a>
                        </figure>
                        <div className="liquid-lp-inner">
                          <header className="liquid-lp-header">
                            <ul className="liquid-lp-category bordered square">
                              <li>
                                <a >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlSpace="preserve"
                                    className="liquid-lp-gradient-border"
                                    width="100%"
                                    height="100%"
                                  >
                                    <rect
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      width="100%"
                                      height="100%"
                                      stroke="url(#btn-grad-1)"
                                    />
                                  </svg>
                                  <span>Blog</span>
                                </a>
                              </li>
                            </ul>
                            <h2 className="liquid-lp-title h5 font-weight-bold">
                              <a >FOMO to JOMO</a>
                            </h2>
                          </header>
                          <div className="liquid-lp-excerpt">
                            <p />
                          </div>
                          <footer className="liquid-lp-footer">
                            <time
                              className="liquid-lp-date text-uppercase ltr-sp-1"
                              dateTime="2023-05-13"
                            >
                              May 13 2023
                            </time>
                          </footer>
                        </div>
                      </article>
                    </div>
                    <div className="lqd-column col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-0 masonry-item">
                      <article className="liquid-lp liquid-lp-sp-block liquid-lp-reverse shadow-1">
                        <figure
                          data-bg="url(https://www.djjs.org/uploads/blog/021ebc5eae8b8b02d1295f0ae8b7c511.jpg)"
                          className="liquid-lp-media ld-lazyload"
                        >
                          <a >
                            <img
                              className="ld-lazyload"
                              data-src="https://www.djjs.org/uploads/blog/021ebc5eae8b8b02d1295f0ae8b7c511.jpg"
                              alt="FOMO to JOMO"
                              src="https://www.djjs.org/uploads/blog/021ebc5eae8b8b02d1295f0ae8b7c511.jpg"
                            />
                          </a>
                        </figure>
                        <div className="liquid-lp-inner">
                          <header className="liquid-lp-header">
                            <ul className="liquid-lp-category bordered square">
                              <li>
                                <a >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlSpace="preserve"
                                    className="liquid-lp-gradient-border"
                                    width="100%"
                                    height="100%"
                                  >
                                    <rect
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      width="100%"
                                      height="100%"
                                      stroke="url(#btn-grad-1)"
                                    />
                                  </svg>
                                  <span>Blog</span>
                                </a>
                              </li>
                            </ul>
                            <h2 className="liquid-lp-title h5 font-weight-bold">
                              <a >
                                Conquering Corporate’s Unknown Battlegrounds
                              </a>
                            </h2>
                          </header>
                          <div className="liquid-lp-excerpt">
                            <p />
                          </div>
                          <footer className="liquid-lp-footer">
                            <time
                              className="liquid-lp-date text-uppercase ltr-sp-1"
                              dateTime="2023-02-12"
                            >
                              February 12 2023
                            </time>
                          </footer>
                        </div>
                      </article>
                    </div>
                    <div className="lqd-column col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-0 masonry-item">
                      <article className="liquid-lp liquid-lp-sp-block liquid-lp-sp-instagram">
                        <figure
                          data-bg="url(https://www.djjs.org/uploads/blog/83089aa08151b3241de96636b5d9eaa0.jpg)"
                          className="liquid-lp-media ld-lazyload"
                        >
                          <img
                            // className="ld-lazyload"
                            data-src="https://www.djjs.org/uploads/blog/83089aa08151b3241de96636b5d9eaa0.jpg"
                            alt="Shrimad Devi Bhagwat Katha 2021 | TEASER | DJJS Katha | Sadhvi Aditi Bharti Ji"
                            src="https://www.djjs.org/uploads/blog/83089aa08151b3241de96636b5d9eaa0.jpg"
                          />
                        </figure>
                        <div className="liquid-lp-inner">
                          <a
                            
                            className="liquid-overlay-link"
                          />
                          <header className="liquid-lp-header">
                            <ul className="liquid-lp-category bordered square">
                              <li>
                                <a >Blog</a>
                              </li>
                            </ul>
                          </header>
                          <h3 className="font-weight-semibold">
                            <a >
                              Body Positivity
                            </a>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-8 col-md-offset-2 text-center bg-white white-box-shadow pt-70 pb-50">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <header className="fancy-title mb-40 px-3">
                      <h2 className="h1 mt-4 text-gradient">
                        Subscribe Newsletter
                      </h2>
                      <p className="font-size-18">
                        All our latest News &amp; Events delivered to your inbox
                        once a month.
                      </p>
                    </header>
                    <div className="ld-sf ld-sf--input-solid ld-sf--button-solid ld-sf--size-lg ld-sf--circle ld-sf--border-thin ld-sf--input-shadow ld-sf--button-show">
                      <form
                        id="ld_subscribe_form"
                        action="https://www.djjs.org/news/subscribe"
                        name="mc-embedded-subscribe-form"
                        method="post"
                      >
                        <p className="ld_sf_paragraph pr-2">
                          <input
                            type="email"
                            className="ld_sf_text"
                            id="home-email"
                            name="EMAIL"
                            placeholder="Enter your email address"
                          />
                        </p>
                        <button
                          id="home-subscribe"
                          type="submit"
                          className="ld_sf_submit font-weight-semibold bg-gradient-secondary-lr"
                        >
                          <span className="submit-icon font-size-26">
                          <FaPlay />                          </span>
                          <span className="submit-text">Subscribe</span>
                          <span className="ld-sf-spinner">
                            <span>Sending </span>
                          </span>
                        </button>
                      </form>
                      <div id="home-response" className="ld_sf_response" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content of the section */}
        {/* <span className="row-bg-loader" /> */}
      </main>
    </div>
  );
};

export default Home;
