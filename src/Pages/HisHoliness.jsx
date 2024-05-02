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
    <div >
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
                            His Divine Right With his mastery and subsequent
                            revelation of the eternal science of
                            Self-Realization—Brahm Gyan—Ashok Maharaj ji has
                            become an epoch-making personality and a perfect
                            Spiritual Master on the global stage, transforming
                            the divided and tormented human race into a
                            harmonious "global family."
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
                            To bring about a world in which each person, by
                            means of the ageless science of Self-Realization, or
                            "Brahm Gyan," becomes an embodiment of truth,
                            fraternity, and justice, eradicating all social
                            evils and threats in the process.
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
                            Global Dissemination of Krishna Consciousness: One
                            of Prabhupada's main goals was to make the teachings
                            of Krishna consciousness available to everyone. His
                            mission was to bring back to life the ancient Indian
                            spiritual wisdom, especially the teachings of the
                            Srimad Bhagavatam and the Bhagavad Gita, and make
                            them available to people from all walks of life and
                            backgrounds.
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
                  Because of its strength, depth, and vision, Shri Ashutosh
                  Maharaj Ji's spiritual odyssey is the greatest of the great.
                  Similar to previous Perfect Masters, the Master's perspective
                  is worldwide. Furthermore, humans either directly manage or
                  indirectly influence the majority of universal systems.
                  Consequently, for a change to occur in the world, it must
                  start with the human race—the fundamental unit of the
                  universe. This belief of the Master is based on a
                  straightforward hierarchy:{" "}
                </p>
                <p>Person » Family » Community » Country » Global</p>
                <p>
                  On the other hand, a person is an integrated unit of many
                  different dimensions, which can be distinguished using the
                  following hierarchy, which is oriented from the outside in
                  terms of Subtlety and absolute power:
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
                  Therefore, in order for a change to be healthy and prevent
                  relapses, it must begin at the Inner Self (Soul), which is the
                  foundation of the entire human personality.
                </p>
                <p>
                  To bring about a change in an individual's behaviour and way
                  of thinking, intellectual knowledge or external approaches are
                  insufficient. Human behaviour is a product of human pondered.
                  As a result, measuring human thoughts is necessary to regulate
                  human behaviour. The human mind is a collection of ideas that
                  can only be changed by the higher power found in the Soul. The
                  soul needs to be awakened for that.
                </p>
                <p>
                  All of our scriptures together have declared that the only way
                  to achieve this awakening is by means of the Divine Knowledge,
                  or the timeless science of Brahm Gyan. Being divine in and of
                  itself is something throughout the world, which is why the
                  knowledge of Brahm Gyan is unique and challenging to acquire.
                  However, this era is lucky to have a revered perfect spiritual
                  master in Shri Ashutosh Maharaj Ji, who has not only mastered
                  this uncommon science of but has also made it known.
                  Furthermore, not only has it been revealed, but it has also
                  been made accessible to the general public, which is extremely
                  uncommon—possibly the first instance in human history. This is
                  being used by the master. method of self-awakening via divine
                  knowledge as a special instrument to fulfil the goal of world
                  peace.
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
                  A person is endowed with the ability to practically perceive
                  the light of his inner conscience when they are initiated into
                  the eternal science of Self-Realization, Brahm Gyan. This
                  leads to a complete change in his perspective. How? It is
                  comprehensible in the vernacular of both science and
                  metaphysics.
                </p>
                <p>
                  {/* <a
                    onClick={() => navigate("/brahmgyan")}
                    className="btn btn-xsm small btn-solid btn-gradient circle wide ld-lp-carousel-filterable-btn split-inner"
                    style={{ opacity: 1 }}
                  >
                    <span>
                      <span className="btn-gradient-bg bg-gradient-primary-lr" />
                      <span className="btn-txt">Continue Reading</span>
                      <span className="btn-gradient-bg btn-gradient-bg-hover bg-gradient-secondary-rl" />
                    </span>
                  </a> */}
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
