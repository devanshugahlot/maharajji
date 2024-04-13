import React from "react";
import { useNavigate } from "react-router-dom";
const Workshop = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section id="content">
        <div className="content-wrap pt-4">
          <div className="container">
            <div className="col_three_fifth">
              <div
                className="heading-block"
                data-custom-animations="true"
                data-ca-options='{ "triggerHandler":"inview", "animationTarget":".split-inner", "duration":"1200", "delay":"150", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":60, "translateZ":-160, "rotateX":-84, "opacity":0}, "animations":{"translateY":0, "translateZ":0, "rotateX":0, "opacity":1} }'
              >
                <h1 className="t600 text-gradient">
                  <span>DJJS Initiatives</span>
                </h1>
                <p
                  className="lead mt-15"
                  data-split-text="true"
                  data-split-options='{"type":"lines"}'
                >
                  The spiritually charged transformed individuals arousing
                  higher collective consciousness can only pave way for a
                  positive reformed society and consequently the world peace at
                  large.{" "}
                </p>
                <p
                  className="lead"
                  data-split-text="true"
                  data-split-options='{"type":"lines"}'
                >
                  Hence, to chisel such noble individuals through Self
                  realization - <a href="../brahmgyan.html">Brahm Gyan</a> and
                  to achieve the objective of World Peace based on equality,
                  fraternity, and dignity, DJJS undertakes multi farious and
                  multi directional activities targeting all groups of society.
                </p>
              </div>
            </div>
            <div className="col_two_fifth col_last">
              <div
                className="lqd-frickin-img"
                data-inview="true"
                data-inview-options='{ "delayTime": 250, "threshold": 0.75 }'
              >
                <div className="lqd-frickin-img-inner">
                  <span className="lqd-frickin-img-bg bg-gradient-primary-tl rounded" />
                  <div className="lqd-frickin-img-holder">
                    <figure data-responsive-bg="true" className="rounded">
                      <img
                        className="ld-lazyload"
                        data-src="https://www.djjs.org/images/new/initiatives/djjs-initiatives.jpg"
                        alt="DJJS Initiatives"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="container" id="sinitiatives">
            <div className="clearfix" />
            <div className="liquid-portfolio-list">
              <div className="row">
                <div className="lqd-column col-md-12">
                  <div className="liquid-filter-items justify-content-center align-items-center ">
                    <div className="liquid-filter-items-inner">
                      <ul
                        className="filter-list text-uppercase ltr-sp-1 filter-list-inline mb-0"
                        id="pf-grid-1"
                      >
                        <li
                          onClick={() => navigate("/initiatives")}
                          data-filter=".social"
                          className="active"
                        >
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span className="btn-txt">
                                Social Initiatives
                              </span>
                            </span>
                          </a>
                        </li>
                        <li data-filter=".spiritual">
                          <a
                            onClick={() => navigate("/initiatives-spiritual")}
                            className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2"
                          >
                            <span>
                              <span className="btn-txt">
                                Spiritual Initiatives
                              </span>
                            </span>
                          </a>
                        </li>
                        <li
                          onClick={() => navigate("/initiatives-workshop")}
                          data-filter=".workshop"
                        >
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin btn-solid font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span className="btn-txt">
                                Developmental Workshops
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row d-flex flex-wrap"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":".lqd-column", "animateTargetsWhenVisible": true, "duration":1000,"delay":100,"easing":"easeOutQuint","initValues":{"translateY":55, "opacity": 0},"animations":{"translateY":0, "opacity": 1	}}'
              >
                <div className="lqd-column col-md-4 col-sm-6 workshop">
                  <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                    <figure className="fancy-box-image">
                      <img
                        src="../images/new/initiatives/sam.jpg"
                        alt="SAM Workshop"
                      />
                    </figure>
                    <div className="fancy-box-contents">
                      <div className="fancy-box-header">
                        <h3 className="t500 font-size-26 lh-125">
                          SAM Workshop
                        </h3>
                      </div>
                      <ul className="liquid-lp-category mt-10">
                        <li>
                          <a className="btn btn-solid text-uppercase btn-xsm small circle btn-bordered border-thin font-weight-thin font-size-11 lh-15 ltr-sp-05 mb-2">
                            <span>
                              <span className="btn-txt text-white">
                                workshop
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="fancy-box-info">
                        <p className="lh-175">
                          SAM is a powerful youth engagement program of Divya
                          Jyoti Jagrati Sansthan which aims to awaken, inspire
                          and transform young minds.
                        </p>
                      </div>
                    </div>
                    <div className="fancy-box-footer">
                      <h6 className="text-uppercase">Know More</h6>
                      <span className="fancy-box-icon">
                        <i className="icon-liquid_arrow_right" />
                      </span>
                    </div>
                    <a
                      target="_blank"
                      href="http://www.samworkshops.com/"
                      className="liquid-overlay-link"
                    />
                  </div>
                </div>
                <div className="lqd-column col-md-4 col-sm-6 workshop">
                  <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                    <figure className="fancy-box-image">
                      <img
                        src="../images/new/initiatives/peace.jpg"
                        alt="PEACE Workshop"
                      />
                    </figure>
                    <div className="fancy-box-contents">
                      <div className="fancy-box-header">
                        <h3 className="t500 font-size-26 lh-125">
                          PEACE Workshop
                        </h3>
                      </div>
                      <ul className="liquid-lp-category mt-10">
                        <li>
                          <a className="btn btn-solid text-uppercase btn-xsm small circle btn-bordered border-thin font-weight-thin font-size-11 lh-15 ltr-sp-05 mb-2">
                            <span>
                              <span className="btn-txt text-white">
                                workshop
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="fancy-box-info">
                        <p className="lh-175">
                          PEACE is holistic self-development program of DJJS
                          designed to address work &amp; life related issues for
                          the working professionals.
                        </p>
                      </div>
                    </div>
                    <div className="fancy-box-footer">
                      <h6 className="text-uppercase">Know More</h6>
                      <span className="fancy-box-icon">
                        <i className="icon-liquid_arrow_right" />
                      </span>
                    </div>
                    <a
                      target="_blank"
                      href="http://www.peaceprogram.org/"
                      className="liquid-overlay-link"
                    />
                  </div>
                </div>
                <div className="lqd-column col-md-4 col-sm-6 workshop">
                  <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                    <figure className="fancy-box-image">
                      <img
                        src="../images/new/initiatives/way.jpg"
                        alt="WAY Workshop"
                      />
                    </figure>
                    <div className="fancy-box-contents">
                      <div className="fancy-box-header">
                        <h3 className="t500 font-size-26 lh-125">
                          WAY Workshop
                        </h3>
                      </div>
                      <ul className="liquid-lp-category mt-10">
                        <li>
                          <a className="btn btn-solid text-uppercase btn-xsm small circle btn-bordered border-thin font-weight-thin font-size-11 lh-15 ltr-sp-05 mb-2">
                            <span>
                              <span className="btn-txt text-white">
                                workshop
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="fancy-box-info">
                        <p className="lh-175">
                          WAY is an exclusive program to awaken dynamism and
                          unleash the dormant potentials in teenagers, college
                          students and young professionals through Inspiring
                          Camps, Seminars &amp; Symposiums etc.
                        </p>
                      </div>
                    </div>
                    <div className="fancy-box-footer">
                      <h6 className="text-uppercase">Know More</h6>
                      <span className="fancy-box-icon">
                        <i className="icon-liquid_arrow_right" />
                      </span>
                    </div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/WAYprogram"
                      className="liquid-overlay-link"
                    />
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

export default Workshop;
