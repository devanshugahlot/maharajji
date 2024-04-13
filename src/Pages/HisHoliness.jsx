import React from "react";
import Holinessslider from "./Holinessslider";
import "./Hisholiness.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HisHoliness = () => {
  const navigate = useNavigate("");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  return (
    <div>
      <section id="content" className="content">
        <section
          className="vc_row bg-cover bg-left fullheight d-flex align-items-center py-5 mb-60"
          data-row-bg="images/new/mjs1.jpg"
          data-row-bg-webp="images/new/mjs1.webp"
          data-row-bg-device="images/new/mjs-device.jpg"
          data-row-bg-webp-device="images/new/mjs-device.jpg"
        >
          <span className="row-bg-loader" />
          <h1 className="text-center h3">
            Shri Ashutosh Maharaj - Founder &amp; Head - Divya Jyoti Jagrati
            Sansthan
          </h1>
        </section>
        <section className="vc_row pb-50">
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-12">
                <div className="tabs tabs-nav-centered tabs-nav-underlined tabs-nav-active-underlined tabs-nav-lg tabs-nav-underlined-gradient">
                  <ul className="nav tabs-nav" role="tablist">
                    <li
                      role="presentation"
                      className={`font-size-17 ${
                        activeTab === 0 ? "active" : ""
                      }`}
                    >
                      <a
                        aria-expanded={activeTab === 0 ? "true" : "false"}
                        aria-controls="ld-tab-pane-33"
                        role="tab"
                        onClick={() => handleTabClick(0)}
                      >
                        <span className="tabs-nav-icon">
                          <i className="icon-et-profile-male" />
                        </span>{" "}
                        Introduction
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={`font-size-17 ${
                        activeTab === 1 ? "active" : ""
                      }`}
                    >
                      <a
                        aria-expanded={activeTab === 1 ? "true" : "false"}
                        aria-controls="ld-tab-pane-34"
                        role="tab"
                        onClick={() => handleTabClick(1)}
                      >
                        <span className="tabs-nav-icon">
                          <i className="icon-et-traget" />
                        </span>{" "}
                        His Mission
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className={`font-size-17 ${
                        activeTab === 2 ? "active" : ""
                      }`}
                    >
                      <a
                        aria-expanded={activeTab === 2 ? "true" : "false"}
                        aria-controls="ld-tab-pane-35"
                        role="tab"
                        onClick={() => handleTabClick(2)}
                      >
                        <span className="tabs-nav-icon">
                          <i className="icon-et-lightbulb" />
                        </span>{" "}
                        His Vision
                      </a>
                    </li>
                  </ul>
                  <div className="tabs-content">
                    {/* Introduction Tab Content */}
                    <div
                      id="ld-tab-pane-33"
                      role="tabpanel"
                      className={`tabs-pane fade ${
                        activeTab === 0 ? "active in" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="lqd-column col-md-8 col-md-offset-2 px-md-5">
                          <p className="font-size-24 lh-16 font-weight-light text-black">
                            His Holiness Ashutosh Maharaj ji is an epoch making
                            personality, a perfect Spiritual Master on the
                            world-stage who has mastered and subsequently
                            revealed the eternal science of Self-Realization–{" "}
                            <a className="dark" href="brahmgyan.html">
                              <strong>Brahm Gyan</strong>
                            </a>{" "}
                            to transform the torn and tormented humanity into a
                            peaceful "global family".
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* His Mission Tab Content */}
                    <div
                      id="ld-tab-pane-34"
                      role="tabpanel"
                      className={`tabs-pane fade ${
                        activeTab === 1 ? "active in" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="lqd-column col-md-8 col-md-offset-2 px-md-5">
                          <p className="font-size-24 lh-16 font-weight-light text-black">
                            To usher into a world wherein every individual
                            becomes an embodiment of truth, fraternity, and
                            justice through the eternal science of
                            Self-Realization–{" "}
                            <a className="dark" href="brahmgyan.html">
                              'Brahm Gyan'
                            </a>
                            , uprooting in its wake all social evils and threat.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* His Vision Tab Content */}
                    <div
                      id="ld-tab-pane-35"
                      role="tabpanel"
                      className={`tabs-pane fade ${
                        activeTab === 2 ? "active in" : ""
                      }`}
                    >
                      <div className="row">
                        <div className="lqd-column col-md-8 col-md-offset-2 px-md-5">
                          <p className="font-size-24 lh-16 font-weight-light text-black">
                            From Self Awakening to Global Peace
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vc_row pt-40 pb-0">
          <div className="container">
            <div className="row">
              <div
                className="lqd-column col-md-10 col-md-offset-1 text-center mb-4"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1800","delay":"180","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":35,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
              >
                <h2 className="px-md-5 mx-md-5 mt-4 text-gradient">
                  His Contributions to the World
                </h2>
                <div className="d-flex justify-content-end" id="buttons-nav" />
              </div>
            </div>
            <div className="row">
              <div className="lqd-column col-md-12">
                <div className="carousel-container carousel-nav-right px-md-5 mx-md-5">
                  <div className="row">             
                    <Holinessslider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vc_row pt-0 pb-60">
          <div className="container">
            <h2
              className="mt-4 text-gradient"
              data-custom-animations="true"
              data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1800","delay":"180","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":35,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
            >
              His Ideology
            </h2>
            <div className="row visible-xs">
              <div className="lqd-column col-md-12">
                <div
                  className="ld-tm-circ mb-5 mb-md-0"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler": "inview", "animationTarget": ".ld-tm-bg", "duration": 700, "delay": 100, "easing": "easeOutBack", "initValues": { "scale": 0 }, "animations": { "scale": 1 }}'
                >
                  <div
                    className="ld-tm-container"
                    data-custom-animations="true"
                    data-ca-options='{"triggerHandler": "inview", "animationTarget": ".ld-tm-avatar", "duration": 700, "delay": 150, "easing": "easeOutBack", "initValues": { "scale": 0 }, "animations": { "scale": 1 }}'
                  >
                    <div className="ld-tm-circ-inner">
                      <div className="ld-tm-bg" />
                      <div className="ld-tm-avatar">
                        <figure>
                          <span className="t600">SOUL</span>
                        </figure>
                      </div>
                      <div
                        className="ld-tm-avatar"
                        style={{ top: "-5%", right: "1%" }}
                      >
                        <figure>
                          <span className="caption">INTELLECT</span>
                        </figure>
                      </div>
                    </div>
                    <div className="ld-tm-circ-middle">
                      <div className="ld-tm-bg" />
                      <div
                        className="ld-tm-avatar"
                        style={{ top: "-5%", left: "20%" }}
                      >
                        <figure>
                          <span className="caption">MIND</span>
                        </figure>
                      </div>
                    </div>
                    <div className="ld-tm-circ-outer">
                      <div className="ld-tm-bg" />
                      <div
                        className="ld-tm-avatar"
                        style={{ bottom: "15%", right: "5%" }}
                      >
                        <figure>
                          <span className="caption">BODY</span>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="lqd-column col-md-12 mb-4">
                <p>
                  The spiritual saga undertaken by Shri Ashutosh Maharaj Ji is
                  greatest of the great for its strength, depth and vision. Like
                  the Perfect Masters in the past, the Master's outlook is
                  universal. And most of the universal systems are directly
                  managed or indirectly influenced by humans. Therefore, to
                  bring a change in the world, the change needs to be triggered
                  in its basic unit, i.e. human. A simple hierarchy underlies
                  this belief of the Master:{" "}
                </p>
                <p>Individual » Family » Society » Nation » World</p>
                <p>
                  However, an individual himself is an integrated unit of
                  multifarious dimensions, which can be delineated through the
                  following order oriented from, outside to within in terms of
                  subtlety and supremacy:
                </p>
                <div className="lqd-column col-md-5 pull-right hidden-xs">
                  <div
                    className="ld-tm-circ mb-5 mb-md-0"
                    data-custom-animations="true"
                    data-ca-options='{"triggerHandler": "inview", "animationTarget": ".ld-tm-bg", "duration": 700, "delay": 100, "easing": "easeOutBack", "initValues": { "scale": 0 }, "animations": { "scale": 1 }}'
                  >
                    <div
                      className="ld-tm-container"
                      data-custom-animations="true"
                      data-ca-options='{"triggerHandler": "inview", "animationTarget": ".ld-tm-avatar", "duration": 700, "delay": 150, "easing": "easeOutBack", "initValues": { "scale": 0 }, "animations": { "scale": 1 }}'
                    >
                      <div className="ld-tm-circ-inner">
                        <div className="ld-tm-bg" />
                        <div className="ld-tm-avatar">
                          <figure>
                            <span className="t600">SOUL</span>
                          </figure>
                        </div>
                        <div
                          className="ld-tm-avatar"
                          style={{ top: "-5%", right: "1%" }}
                        >
                          <figure>
                            <span className="caption">INTELLECT</span>
                          </figure>
                        </div>
                      </div>
                      <div className="ld-tm-circ-middle">
                        <div className="ld-tm-bg" />
                        <div
                          className="ld-tm-avatar"
                          style={{ top: "-5%", left: "20%" }}
                        >
                          <figure>
                            <span className="caption">MIND</span>
                          </figure>
                        </div>
                      </div>
                      <div className="ld-tm-circ-outer">
                        <div className="ld-tm-bg" />
                        <div
                          className="ld-tm-avatar"
                          style={{ bottom: "15%", right: "5%" }}
                        >
                          <figure>
                            <span className="caption">BODY</span>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  On this basis, for a change to be wholesome and non-relapsing,
                  it has to sprout at the root level of complete human
                  personality – Inner Self (Soul).{" "}
                </p>
                <p>
                  No intellectual knowledge or outside methodologies suffice in
                  bringing a transformation in individual's action and
                  behavioural pattern. Human action is the result of human
                  thought. Therefore, to control human action, human thoughts
                  have to be gauged. A bundle of thoughts make up human mind
                  which can only be altered through the superior faculty of the
                  Soul. For that, the soul must be awakened.{" "}
                </p>
                <p>
                  As has been proclaimed by all our Scriptures in unison, this
                  awakening is possible only through the Divine Knowledge -
                  eternal science of Brahm Gyan. Divine in itself is something
                  out the world, hence, the knowledge – Brahm Gyan is a rare and
                  difficult to master technique. But this epoch is fortunate to
                  have revered perfect spiritual master - Shri Ashutosh Maharaj
                  Ji who has not just mastered this rare science of{" "}
                  <a className="dark" href="brahmgyan.html">
                    <strong>Brahm Gyan</strong>
                  </a>{" "}
                  but has also revealed it. And who has not just revealed it but
                  made it reachable to masses which is again rare or may be
                  first time in the history of mankind. The master is using this
                  technique of self-awakening through divine knowledge as a
                  unique tool to realize the vision of global peace.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container clearfix intro">
            <div className="row d-flex flex-wrap align-items-center">
              <div
                className="lqd-column col-md-8  brahmgyan-intro"
                data-custom-animations="true"
                data-ca-options='{ "triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1200", "delay":"150", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":60,  "opacity":0}, "animations":{"translateY":0, "opacity":1} }'
              >
                <div className="ld-fancy-heading">
                  <h2
                    className="lh-125 "
                    data-fittext="true"
                    data-fittext-options='{"compressor":0.85,"maxFontSize":"36","minFontSize":"22"}'
                  >
                    <span className="ld-fh-txt text-gradient sltr-sp--01">
                      Brahmgyan: The Genesis of Transformation
                    </span>
                  </h2>
                </div>
                <p className="font-size-18">
                  When a person gets initiated into the eternal science of Self
                  Realisation, Brahm Gyan, he becomes equipped with the art of
                  practically perceiving the light of his inner conscience. This
                  results in a total transformation in his mindset. How? It can
                  be understood in the language of both, science as well as
                  metaphysics.
                </p>
                <p>
                  <a
                    onClick={() => navigate("/brahmgyan")}
                    className="btn btn-xsm small btn-solid btn-gradient circle wide ld-lp-carousel-filterable-btn split-inner"
                    style={{ opacity: 1 }}
                  >
                    <span>
                      <span className="btn-gradient-bg bg-gradient-primary-lr" />
                      <span className="btn-txt">Continue Reading</span>
                      <span className="btn-gradient-bg btn-gradient-bg-hover bg-gradient-secondary-rl" />
                    </span>
                  </a>
                </p>
              </div>
              <div className="lqd-column col-md-4">
                <div
                  className="lqd-frickin-img"
                  data-inview="true"
                  data-inview-options='{ "delayTime": 250, "threshold": 0.75 }'
                >
                  <div className="lqd-frickin-img-inner">
                    <span className="lqd-frickin-img-bg bg-gradient-primary-tl rounded" />
                    <div className="">
                      <figure data-responsive-bg="true" className="rounded">
                        <img
                         
                          data-src="https://www.djjs.org/images/new/brahmgyan-djjs.jpg"
                          alt="Brahmgyan"
                          src="https://www.djjs.org/images/new/brahmgyan-djjs.jpg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HisHoliness;
