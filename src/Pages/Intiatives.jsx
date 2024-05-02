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

  const vihe = [
    {
      image:
        "https://i.ytimg.com/vi/nS3h-uejx7w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjerLR298OBaxeFWddIFRGMK2idw",
      alt: "Manthan",
      title: "Manthan",
      category: "Education",
      description:
        " Manthan is a term used in the context of Krishna bhajans to describe a deep introspection or contemplation on the divine essence of Lord Krishna.It refers to the spiritual churn or reflection on the divine qualities, leelas (divine play), teachings, and form of Lord Krishna.",
      link: "",
    },
    {
      image: "https://iskcongurukul.in/assets/img/overlay3.jpg",
      alt: "Kamdhenu",
      title: "Kamdhenu",
      category: "Indian Cow Breed Improvement",
      description:
        "Kamadhenu is a divine bovine goddess often associated with Hindu mythology.In the context of Krishna, Kamadhenu is not directly associated with him in the same way as other characters like Radha, Sudama, or Arjuna, but there are instances where Kamadhenu appears in Krishna's stories.",
      link: "",
    },
    {
      image:
        "https://www.mayapur.com/wp-content/uploads/2017/11/SMIS-Class-1024x576.jpg",
      alt: "Antardrishti",
      title: "Antardrishti",
      category: "For visually impaired",
      description:
        "Antardrishti is a term commonly associated with Lord Krishna, particularly in the context of his divine vision or inner sight. In Hindu mythology and scriptures, Krishna is often depicted as possessing a profound inner vision that transcends ordinary perception.",
      link: "",
    },
    {
      image:
        "https://krishna.org/wp-content/uploads/2005/06/UrmilaDeviOnHarinamWithIps2003Italy.jpg",
      alt: "Antarkranti",
      title: "Antarkranti",
      category: "Prisoner Reformation",
      description:
        "Antarkranti is a program initiated by the Art of Living Foundation, founded by spiritual leader Sri Sri Ravi Shankar. It aims to rehabilitate prison inmates through yoga, meditation, and spiritual practices. The program operates in various prisons around the world, including in India, where it has had significant success in transforming the lives of inmates.",
      link: "",
    },
    {
      image:
        "https://back2godhead.com/wp-content/uploads/2012/11/098_1975_10-01-23-6-8.jpg",
      alt: "Santulan",
      title: "Santulan",
      category: "Gender Equality",
      description:
        "In the stories of Krishna's divine play (lila), santulan can also refer to the balance and harmony maintained by Krishna in his interactions with his devotees, friends, and enemies. Despite the challenges and adversities he faces, Krishna remains unperturbed and maintains a sense of equilibrium, thereby inspiring others to do the same.",
      link: "",
    },
    {
      image:
        "https://iskcongurukul.in/assets/img/gallery/14706926_1065015960284539_7084913377255007935_o.jpg",
      alt: "Bodh",
      title: "Bodh",
      category: "Drug Abuse Eradication",
      description:
        "Bodh is a term rooted in various Eastern philosophies, particularly in Buddhism. It derives from the Sanskrit word bodhi, which translates to awakening or enlightenment. In Buddhism, Bodh refers to the state of profound understanding and insight into the nature of reality, leading to liberation from suffering and the cycle of rebirth.",
      link: "",
    },
  ];

  const Grc = [
    {
      image:
        "https://1.bp.blogspot.com/-I_GMRXcf6FY/XITJAb-rPlI/AAAAAAAAXdg/3pU6rdSfElc4nV2fHH2oZB5edl17uwPAgCLcBGAs/s1600/FB_IMG_1552204536130.jpg",
      alt: "Antarkranti",
      title: "Antarkranti",
      category: "Prisoner Reformation",
      description:
        "Krishna, in the context of Antarkranti, could refer to various aspects. Krishna is a central figure in Hindu mythology and spirituality, known for his teachings in the Bhagavad Gita, which emphasizes duty, righteousness, and selflessness. In the context of Antarkranti, Krishna's teachings could serve as a philosophical and spiritual foundation for the rehabilitation process, guiding inmates towards inner transformation and moral upliftment.",
      link: "",
    },
    {
      image:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/02/iskcon-1707384122.jpg",
      alt: "Santulan",
      title: "Santulan",
      category: "Gender Equality",
      description:
        "Krishna, in the context of Antarkranti, could refer to various aspects. Krishna is a central figure in Hindu mythology and spirituality, known for his teachings in the Bhagavad Gita, which emphasizes duty, righteousness, and selflessness. In the context of Antarkranti, Krishna's teachings could serve as a philosophical and spiritual foundation for the rehabilitation process, guiding inmates towards inner transformation and moral upliftment.",
      link: "",
    },
    {
      image:
        "https://storage.ning.com/topology/rest/1.0/file/get/2514875066?profile=original",
      alt: "Advaita",
      title: "Advaita",
      category: "Teachings",
      description: "Advaita Vedanta, a school of Hindu philosophy, teaches that there is ultimately only one reality, often referred to as Brahman, and that everything else, including the individual self (atman) and the material world, is an illusion (maya). This perspective is deeply rooted in the Upanishads, the philosophical texts that form the basis of Vedanta.",
      link: "",
    },
    // Add more objects for additional tabs if needed
  ];

  const gopinath = [
    {
      image:
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/05/26211958/260518iskcon_05.jpg",
      alt: "Aarogya",
      title: "Aarogya",
      category: "Health",
      description:
        "Gopinath Aarogya is a renowned healthcare institution nestled in the heart of Krishna, dedicated to serving the medical needs of the community. With a commitment to excellence and compassion, it stands as a beacon of hope for those seeking healing and wellness.In the pursuit of health and happiness, Aarogya continues to be trusted for individuals and families alike.",
      link: "",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/04/40/53/72/360_F_440537238_gjiow2HUqdYq4qHBKoRgqpiyCVQVHRwy.jpg",
      alt: "Samadhan",
      title: "Samadhan",
      category: "Disaster Management",
      description:
        "Gopinath Samadhan is a vital institution in Krishna, dedicated to resolving societal issues and fostering community well-being. Through its tireless efforts and innovative approaches, Gopinath Samadhan addresses a myriad of challenges, from education to environmental sustainability.Gopinath Samadhan's impact resonates far beyond its borders.",
      link: "",
    },
    {
      image: "https://iskcongurukul.in/assets/img/overlay3.jpg",
      alt: "Ananda",
      title: "Ananda",
      category: "Happiness",
      description:
        "Gopinath Ananda, resonating with the joyous spirit of Krishna, radiates bliss and positivity in every endeavor. It serves as a sanctuary of happiness and fulfillment, uplifting hearts with its vibrant energy and uplifting atmosphere. Inspired by Krishna's teachings of love and celebration, Gopinath Ananda spreads joy through community events, cultural festivals, and spiritual gatherings.",
      link: "",
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
                  realization - Brahm Gyan and to achieve the objective of World
                  Peace based on equality, fraternity, and dignity, Bhurijana
                  Dasa undertakes multi farious and multi directional activities
                  targeting all groups of society.
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
                        style={{ borderRadius: "5px" }}
                        className="ld-lazyload"
                        data-src="https://www.djjs.org/images/new/initiatives/djjs-initiatives.jpg"
                        alt="DJJS Initiatives"
                        src="https://blog.cdn.level.game/2023/11/manishaleveldesigner_lord_krishnas_images_with_his_characterist_824b3b26-f482-46ac-9f1f-3bb45c223f72.png"
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
                                style={{ color: "#E86740" }}
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
                              <span
                                style={{ color: "#E86740" }}
                                className="btn-txt"
                              >
                                Gopinath Dham
                              </span>
                            </span>
                          </a>
                        </li>
                        <li onClick={handledevelopmentbutton}>
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span
                                style={{ color: "#E86740" }}
                                className="btn-txt"
                              >
                                GRC
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span
                                style={{ color: "#E86740" }}
                                className="btn-txt"
                              >
                                Scared India Gallery
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin  font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                            <span>
                              <span
                                style={{ color: "#E86740" }}
                                className="btn-txt"
                              >
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
                  {vihe.map((item, index) => (
                    <div
                      className="lqd-column col-md-4 col-sm-6 social"
                      key={index}
                    >
                      <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                        <figure className="fancy-box-image">
                          <img
                            style={{ height: "250px" }}
                            src={item.image}
                            alt={item.alt}
                          />
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
                            <p style={{ color: "black" }} className="lh-175">
                              {item.description}
                            </p>
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
                  {gopinath.map((item, index) => (
                    <div
                      key={index}
                      className="lqd-column col-md-4 col-sm-6 social mt-4"
                    >
                      <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                        <figure className="fancy-box-image">
                          <img
                            style={{ height: "250px" }}
                            src={item.image}
                            alt={item.alt}
                          />
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
                            <p style={{ color: "black" }} className="lh-175">
                              {item.description}
                            </p>
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
                  {Grc.map((tab, index) => (
                    <div
                      key={index}
                      className="lqd-column col-md-4 col-sm-6 social mt-2"
                    >
                      <div className="fancy-box fancy-box-tour fancy-box-heading-lg">
                        <figure className="fancy-box-image">
                          <img
                            style={{ height: "250px" }}
                            src={tab.image}
                            alt={tab.alt}
                          />
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
                            <p style={{ color: "black" }} className="lh-175">
                              {tab.description}
                            </p>
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
