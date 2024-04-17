import React, { useState } from "react";
import "./Hisholiness.css";
import { useNavigate } from "react-router-dom";

const Intiatives = () => {
  const navigate = useNavigate();

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

  const socialTabs = [
    {
      image: "https://www.djjs.org/images/new/initiatives/manthan.jpg",
      alt: "Manthan",
      title: "Manthan",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      link: "manthan/index.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/kamdhenu.jpg",
      alt: "Kamdhenu",
      title: "Kamdhenu",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and pr…",
      link: "kamdhenu.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/antardrishti.jpg",
      alt: "Antardrishti",
      title: "Antardrishti",
      category: "For visually impaired",
      description:
        "Antardrishti is a welfare program for visually impaired and physically disabled persons which aims for their overall growth & development.",
      link: "antardrishti/index.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/antarkranti.jpg",
      alt: "Antarkranti",
      title: "Antarkranti",
      category: "Prisoner Reformation",
      description:
        "Antarkranti is the Prisoner's Reformation and post-release Rehabilitation Program.",
      link: "http://www.antarkranti.org/",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/santulan.jpg",
      alt: "Santulan",
      title: "Santulan",
      category: "Gender Equality",
      description:
        "Santulan is the Gender Equality program of Divya Jyoti Jagrati Sansthan that is working for the elimination of all forms of discrimination and violence against the female gender; through a…",
      link: "santulan/santulan.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/bodh.jpg",
      alt: "Bodh",
      title: "Bodh",
      category: "Drug Abuse Eradication",
      description:
        "Bodh- the drug abuse eradication program of DJJS, works for the elimination of drug abuse and eradication of drug demand through ‘Dhyan Therapy’, thereby transforming the drug afflicted society in…",
      link: "bodh/bodh.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/sanrakshan.jpg",
      alt: "Sanrakshan",
      title: "Sanrakshan",
      category: "Environment",
      description:
        "Sanrakshan is Natural Resource Management and Environment Protection Program aims at rebuilding the fading human-nature relationship of mutualism for re-establishing the environmental bala…",
      link: "sanrakshan/sanrakshan.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/aarogya.jpg",
      alt: "Aarogya",
      title: "Aarogya",
      category: "Health",
      description:
        "Aarogya is a complete Health Program including Yoga, Herbal remedies and Ayurveda to prevent various diseases.",
      link: "aarogya/index.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/samadhan.jpg",
      alt: "Samadhan",
      title: "Samadhan",
      category: "Disaster Management",
      description:
        "Samadhan- Disaster Relief Programme has been dedicated to rescue, relief and rehabilitation of areas and victims struck by natural and man-made disasters.",
      link: "samadhan/index.html",
    },
  ];

  const developmentTabs = [
    {
      image: "https://www.djjs.org/images/new/initiatives/antarkranti.jpg",
      alt: "Antarkranti",
      title: "Antarkranti",
      category: "Prisoner Reformation",
      description:
        "Antarkranti is the Prisoner's Reformation and post-release Rehabilitation Program.",
      link: "http://www.antarkranti.org/",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/santulan.jpg",
      alt: "Santulan",
      title: "Santulan",
      category: "Gender Equality",
      description:
        "Santulan is the Gender Equality program of Divya Jyoti Jagrati Sansthan that is working for the elimination of all forms of discrimination and violence against the female gender.",
      link: "santulan/santulan.html",
    },
    // Add more objects for additional tabs if needed
  ];

  const spiritualTabs = [
    {
      image: "https://www.djjs.org/images/new/initiatives/aarogya.jpg",
      alt: "Aarogya",
      title: "Aarogya",
      category: "Health",
      description:
        "Aarogya is a complete Health Program including Yoga, Herbal remedies and Ayurveda to prevent various diseases.",
      link: "aarogya/index.html",
    },
    {
      image: "https://www.djjs.org/images/new/initiatives/samadhan.jpg",
      alt: "Samadhan",
      title: "Samadhan",
      category: "Disaster Management",
      description:
        "Samadhan- Disaster Relief Programme has been dedicated to rescue, relief and rehabilitation of areas and victims struck by natural and man-made disasters.",
      link: "samadhan/index.html",
    },
    // Add more objects for additional tabs if needed
  ];

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
                  <span>Bhurijana Dasa Initiatives</span>
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
                  realization - Brahm Gyan and to
                  achieve the objective of World Peace based on equality,
                  fraternity, and dignity, Bhurijana Dasa undertakes multi farious and
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
                  <div className=" ">
                    <figure data-responsive-bg="true" className="rounded">
                      <img
                        className="ld-lazyload"
                        data-src="https://www.djjs.org/images/new/initiatives/djjs-initiatives.jpg"
                        alt="DJJS Initiatives"
                        src="https://www.djjs.org/images/new/initiatives/djjs-initiatives.jpg"
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
                        <li onClick={handlesocialbutton} className="active">
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin btn-solid font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span
                               style={{color:"#E86740"}}
                                className="btn-txt"
                              >
                                VIHE
                              </span>
                            </span>
                          </a>
                        </li>
                        <li onClick={handlespiritualbutton}>
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span style={{color:"#E86740"}} className="btn-txt">
                              Gopinath Dham
                              </span>
                            </span>
                          </a>
                        </li>
                        <li onClick={handledevelopmentbutton}>
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span style={{color:"#E86740"}} className="btn-txt">
                              GRC
                              </span>
                            </span>
                          </a>
                        </li>
                        <li >
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span style={{color:"#E86740"}} className="btn-txt">
                              Scared India Gallery 
                              </span>
                            </span>
                          </a>
                        </li>
                        <li >
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span style={{color:"#E86740"}} className="btn-txt">
                              Others  
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {socialtab && (
                <div
                  style={{ marginTop: "30px" }}
                  className="row d-flex flex-wrap"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":".lqd-column", "animateTargetsWhenVisible": true, "duration":1000,"delay":100,"easing":"easeOutQuint","initValues":{"translateY":55, "opacity": 0},"animations":{"translateY":0, "opacity": 1	}}'
                >
                  {socialTabs.map((item, index) => (
                    <div
                      className="lqd-column col-md-4 col-sm-6 social"
                      key={index}
                    >
                      <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                        <figure className="fancy-box-image">
                          <img src={item.image} alt={item.alt} />
                        </figure>
                        <div className="fancy-box-contents">
                          <div className="fancy-box-header">
                            <h3 className="t500 font-size-26 lh-125">
                              {item.title}
                            </h3>
                          </div>
                          <ul className="liquid-lp-category mt-10">
                            <li>
                              <a className="btn btn-solid text-uppercase btn-xsm small circle btn-bordered border-thin font-weight-thin font-size-11 lh-15 ltr-sp-05 mb-2">
                                <span>
                                  <span className="btn-txt text-white">
                                    {item.category}
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          <div className="fancy-box-info">
                            <p className="lh-175">{item.description}</p>
                          </div>
                        </div>
                       
                        <a
                          target="_blank"
                          href={item.link}
                          className="liquid-overlay-link"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {spiritualtab && (
                <div
                  style={{ marginTop: "30px" }}
                  className="row d-flex flex-wrap"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":".lqd-column", "animateTargetsWhenVisible": true, "duration":1000,"delay":100,"easing":"easeOutQuint","initValues":{"translateY":55, "opacity": 0},"animations":{"translateY":0, "opacity": 1}}'
                >
                  {spiritualTabs.map((item, index) => (
                    <div
                      key={index}
                      className="lqd-column col-md-4 col-sm-6 social mt-4"
                    >
                      <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                        <figure className="fancy-box-image">
                          <img src={item.image} alt={item.alt} />
                        </figure>
                        <div className="fancy-box-contents">
                          <div className="fancy-box-header">
                            <h3 className="t500 font-size-26 lh-125">
                              {item.title}
                            </h3>
                          </div>
                          <ul className="liquid-lp-category mt-10">
                            <li>
                              <a className="btn btn-solid text-uppercase btn-xsm small circle btn-bordered border-thin font-weight-thin font-size-11 lh-15 ltr-sp-05 mb-2">
                                <span>
                                  <span className="btn-txt text-white">
                                    {item.category}
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          <div className="fancy-box-info">
                            <p className="lh-175">{item.description}</p>
                          </div>
                        </div>
                       
                        <a
                          target="_blank"
                          href={item.link}
                          className="liquid-overlay-link"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {developmenttab && (
                <div
                  style={{ marginTop: "30px" }}
                  className="row d-flex flex-wrap"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":".lqd-column", "animateTargetsWhenVisible": true, "duration":1000,"delay":100,"easing":"easeOutQuint","initValues":{"translateY":55, "opacity": 0},"animations":{"translateY":0, "opacity": 1}}'
                >
                  {developmentTabs.map((tab, index) => (
                    <div
                      key={index}
                      className="lqd-column col-md-4 col-sm-6 social mt-2"
                    >
                      <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                        <figure className="fancy-box-image">
                          <img src={tab.image} alt={tab.alt} />
                        </figure>
                        <div className="fancy-box-contents">
                          <div className="fancy-box-header">
                            <h3 className="t500 font-size-26 lh-125">
                              {tab.title}
                            </h3>
                          </div>
                          <ul className="liquid-lp-category mt-10">
                            <li>
                              <a className="btn btn-solid text-uppercase btn-xsm small circle btn-bordered border-thin font-weight-thin font-size-11 lh-15 ltr-sp-05 mb-2">
                                <span>
                                  <span className="btn-txt text-white">
                                    {tab.category}
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          <div className="fancy-box-info">
                            <p className="lh-175">{tab.description}</p>
                          </div>
                        </div>
                       
                        <a
                          target="_blank"
                          href={tab.link}
                          className="liquid-overlay-link"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intiatives;
