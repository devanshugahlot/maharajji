import React, { useState } from "react";
import { FaPlay, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { convertToIST } from "../helpers/formatFunctions";
import imgbook from "../assets/bookstwo.png";
import img2 from "../assets/img/assetimg3.jpg";
import img4 from "../assets/assetimg9crop.jpeg";
import img5 from "../assets/vihe1.jpeg";
import img6 from "../assets/vihe2.jpeg";
import img7 from "../assets/grc1.jpeg";
import audio1 from "../assets/audio4.jpg"
import audio2 from "../assets/audio1.jpg"
import audio3 from "../assets/audio3.jpg"
import audio4 from "../assets/audio2.jpg"
import "./home.css";
const Home = () => {
  const posts = [
    {
      _id: 1,
      heading:
        "Firm, Resolute & Stout-Hearted Mother of King Bharata - SHAKUNTALA!",
      subHeading:
        "Do I have the success that I thought I would have? Where am I going with my life? Have I been able t…",
      images: [
        "https://www.djjs.org/uploads/blog/aa38226f0fffabbcce83094ef3378fad.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
    {
      _id: 2,
      heading: "Vedic Women: The Paragon of Absolute Women Empowerment",
      subHeading:
        "In Indian classic literature like Ramayan, Mahabharata and the compendiums documented by Rishis in t…",
      images: [
        "https://www.djjs.org/uploads/blog/2b3916f02f98b2302094f78bab7845f9.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
  ];
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
      title: "Vihe",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl: img5,
      link: "",
    },
    {
      title: "Vihe",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl: img6,
      link: "",
    },
  ];

  const spiritualinitiatives = [
    {
      title: "gopnath Dham",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/67/Gopinath_Mandir_%2C_Gopeshwar_Chamoli.jpg",
      link: "",
    },
    {
      title: "Gopi Nath Dham",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl:
        "https://content.jdmagicbox.com/comp/jaipur/t3/0141px141.x141.181127204533.j4t3/catalogue/gopinath-ji-thikana-mandir-purani-basti-jaipur-temples-1p1mzceokb.jpg",
      link: "",
    },
  ];

  const development = [
    {
      title: "GRC",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl:
        "https://t3.ftcdn.net/jpg/05/98/03/54/360_F_598035451_NY3PDs8siAEJcc4oIdTZqnt7bGSitalF.jpg",
      link: "",
    },
    {
      title: "GRC",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl: img7,
      link: "",
    },
  ];

  const scared = [
    {
      title: "India",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl:
        "https://media.cnn.com/api/v1/images/stellar/prod/230915082701-04-india-ram-mandir-rebuild.jpg?c=16x9&q=w_800,c_fill",
      link: "",
    },
    {
      title: "India",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl:
        "https://www.tourmyindia.com/blog//wp-content/uploads/2021/06/Famous-Temples-in-Mathura-Vrindavan-Prem-Mandir.jpg",
      link: "",
    },
  ];

  const others = [
    {
      title: "Kamdhenu2",
      category: "Indian Cow Breed Improvement",
      description:
        "In the Indian spiritual and religious texts, cow has been extremely revered and Kamdhenu Gaushala under the guidance of founder Shri Ashutosh Maharaj is working for conservation and propagation of this hol",
      imageUrl: "https://i.ytimg.com/vi/NHf2_FaGgvw/maxresdefault.jpg",
      link: "",
    },
    {
      title: "Manthan2",
      category: "Education",
      description:
        "Manthan is a Holistic Education Program for the underprivileged and underperforming children some of whom are drop-outs or even first generation learners.",
      imageUrl: "https://www.djjs.org/images/new/initiatives/manthan.jpg",
      link: "",
    },
  ];

  const filteredInitiatives = initiatives.filter(
    (initiative) => initiative.category === activeFilter
  );

  const [socialtab, setSocialtab] = useState(true);
  const [spiritualtab, setSpiritualtab] = useState(false);
  const [developmenttab, setDevelopmenttab] = useState(false);
  const [scaredtab, setScaredtab] = useState(false);
  const [otherstab, setOtherstab] = useState(false);

  const handlesocialbutton = () => {
    setSocialtab(true);
    setSpiritualtab(false);
    setDevelopmenttab(false);
    setScaredtab(false);
    setOtherstab(false);
  };

  const handlespiritualbutton = () => {
    setSocialtab(false);
    setSpiritualtab(true);
    setDevelopmenttab(false);
    setScaredtab(false);
    setOtherstab(false);
  };

  const handledevelopmentbutton = () => {
    setSocialtab(false);
    setSpiritualtab(false);
    setDevelopmenttab(true);
    setScaredtab(false);
    setOtherstab(false);
  };

  const handlescaredbutton = () => {
    setSocialtab(false);
    setSpiritualtab(false);
    setDevelopmenttab(false);
    setScaredtab(true);
    setOtherstab(false);
  };

  const handleothersbutton = () => {
    setSocialtab(false);
    setSpiritualtab(false);
    setDevelopmenttab(false);
    setScaredtab(false);
    setOtherstab(true);
  };
  return (
    <div>
      <main id="" className="">
        <section
          id="bg-cover"
          className="bg-contain      home-bg-img"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center !important",
            width: "100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Your content here */}
          <div
            className="fristhomeimg"
            style={{
              position: "absolute",
              top: "50%",
              left: "23%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#537292", // Change color as needed
              fontSize: "4rem", // Adjust font size as needed
              lineHeight: "1.5",
              // fontFamily: "monospace",
              // fontWeight:"bold",
              // Add any other styles as needed
            }}
          >
            <em>
              Welcome to the <br />
              Website of Bhurijana Dasa
            </em>
          </div>
        </section>

        <div className="maniradhadiv">
          <div className="fristmain">
            <div className="fristtext">
              <h2 style={{ color: "#899CAE" }}>
                Preacher <br />
                Philosopher <br />
                Spiritual Leader
              </h2>
              <div>
                <p>Prabhupada Ji: beacon of wisdom, source of inspiration.</p>
              </div>
            </div>
          </div>
          <div className="secondmain">
            <img
              style={{ width: "300px" }}
              src="https://bhurijanadasa.com/wp-content/uploads/2021/09/vj8J-p3_400x400-180x180.jpg"
              alt=""
            />
          </div>
          <div className="thirddiv">
            <div className="thirdtext">
              <h5>
                Prabhupada Ji,
                <br />
                epitomized <em> true enlightenment</em>…<br />
                teaching us to perceive
                <br />
                every <em>soul with equal </em>.<br />
                <img
                  decoding="async"
                  className="alignright wp-image-385 entered lazyloaded"
                  role="img"
                  src="https://radhanathswami.com/wp-content/uploads/2023/03/icon-sign-close.svg"
                  alt=""
                  width={17}
                  height={10}
                  data-lazy-src="https://radhanathswami.com/wp-content/uploads/2023/03/icon-sign-close.svg"
                  data-ll-status="loaded"
                />
                <noscript>
                  &lt;img loading="lazy" decoding="async" class="alignright
                  wp-image-385 " role="img"
                  src="https://radhanathswami.com/wp-content/uploads/2023/03/icon-sign-close.svg"
                  alt="" width="17" height="10" /&gt;
                </noscript>
              </h5>

              <div>
                <p>Prabhupada Ji: Spiritual pioneer, timeless guide.</p>
              </div>
            </div>
          </div>
        </div>

        <section
          id="bg-cover"
          className="bg-contain-two home-bg-img-two"
          style={{
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Your content here */}
          <div
            className="sendmainimg"
            style={{
              position: "absolute",
              top: "50%",
              left: "70%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontSize: "4rem",
              lineHeight: "1.3",
              fontFamily: "monospace",
              zIndex: "1", // Ensure content is above the background
            }}
          >
            <em> Author H.G. Bhurijana Prabhu</em>
            <br />
            <br />
            <p style={{ color: "#F6F2E8", fontSize: "1.5rem" }}>
              {" "}
              <em>
                Bhurijana Dasa began chanting Hare Krsna in early 1968 while
                still a student at the University of Buffalo. A few months later
                he met his spiritual master, His Divine Grace A.C. Bhaktivedanta
                Swami Prabhupada, Founder Acarya of the International Society
                for Krishna Consciousness, at the first Hare Krishna temple, on
                Second Avenue in New York City. He was initiated by Prabhupada
                later that year. In 1969 Prabhupada asked Bhurijana Dasa to help
                pioneer the Krishna consciousness movement in Japan. A year
                later, in December of 1970, Bhurijana Dasa married Jagattarini
                Devi Dasi, and together they opened ISKCON’s first Hong Kong
                center. During the next six years, he was fortunate to meet
                Srila Prabhupada in Hong Kong, Manila, Mayapur, Vrindavan,
                Melbourne, Auckland, Fiji, and Honolulu.
              </em>
            </p>
          </div>

          {/* Ensure that the image source is correctly set */}
          {/* <img src="path_to_your_image" alt="Background Image" /> */}
        </section>

        <section id="topsection" className="containerr">
          <div
            className="clearfix intro mt-20"
            style={{ maxWidth: 1920, margin: "0 auto" }}
          >
            <div className="maindasa">
              <div className="">
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
                      <img
                        style={{
                          width: "400px",
                          height: "60vh",
                          boxShadow: "rgb(246,242,232) 0px 60px -40px -7px",
                          borderRadius: "50%",
                        }}
                        alt="Brahm gyan DJJS"
                        className="ld-lazyload"
                        src={img2}
                        data-src="https://bhurijanadasa.com/wp-content/uploads/2020/12/bhurijan-prabhu-lecture.jpg"
                      />
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
                        <span className="t600">Teacher</span> H.G. Bhurijana
                        Prabhu
                      </span>
                    </h2>
                  </header>
                  {/* <p className="font-size-22 lh-105">
                    <i>
                      Discover yourself through Brahm Gyan (Eternal Science of
                      God-Realization)
                    </i>
                  </p> */}
                  <p className="font-size-24 lh-15 mb-55">
                    Bhurijana Dasa began chanting Hare Krsna in early 1968 while
                    still a student at the University of Buffalo. A few months
                    later he met his spiritual master, His Divine Grace A.C.
                    Bhaktivedanta Swami Prabhupada, Founder Acarya of the
                    International Society for Krishna Consciousness.
                    {/* <strong>
                      Divya Guru Shri Ashutosh Maharaj Ji, founder &amp; head of
                      Divya Jyoti Jagrati Sansthan is benevolently transmitting
                      to mankind, the practical experience of God through Brahm
                      Gyan (Eternal Science of God-Realization), while upholding
                      the spirit of eternal message that GOD CAN BE SEEN!
                    </strong> */}
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

        <section
          id="bg-cover"
          className="bg-contain-three home-bg-img-three"
          style={{
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Your content here */}
          <div
            className="autherimg"
            style={{
              position: "absolute",
              top: "50%",
              left: "70%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              fontSize: "4rem",
              lineHeight: "1.5",
              fontFamily: "monospace",
              zIndex: "1", // Ensure content is above the background
            }}
          >
            <em> Author H.G. Bhurijana Prabhu</em>
            <br />
            <br />
            <p style={{ color: "#F6F2E8", fontSize: "1.5rem" }}>
              {" "}
              <em>
                In 1976, during their last meeting, Srila Prabhupada asked
                Bhurijana Dasa to help develop ISKCON’s educational system.
                Bhurijana Dasa then worked in primary education and curriculum
                development and later conducted teacher-training courses in
                Vrindavan. While teaching at the Gita-Nagari farm community,
                Bhurijana Dasa wrote curriculum for elementary and high school
                academics, some of which in adapted form is still used in ISKCON
                schools to the present. Also while at Gita-Nagari, he and
                Jagattarini Dasi created and performed many puppet shows, which
                became the basis of the Gita-Nagari Puppet Theatre video series
                that has provided devotional entertainment for hundreds of
                devotee children.
              </em>
            </p>
          </div>

          {/* Ensure that the image source is correctly set */}
          {/* <img src="path_to_your_image" alt="Background Image" /> */}
        </section>

        <div className="mainradhadivtwo">
          <div className="fristmain">
            <div className="fristtext">
              <h2 style={{ color: "#899CAE" }}>
                SRILA PRABHUPADA <br />
                & BHAKTI YOGA <br />
              </h2>
              <div>
                <p>
                  Discover Radhanath Swami's teacher, Srila <br /> Prabhupada,
                  who introduced him to the path of <br /> Divine Love known as
                  'Bhakti Yoga', a practice <br /> that has been passed down by
                  saints and sages over <br /> thousands of years.
                </p>
              </div>
            </div>
          </div>

          <div className="radhadivinner">
            <img
              style={{ borderRadius: "50%", maxWidth: "70%" }}
              src={img4}
              alt=""
            />
          </div>
        </div>

        <div className="homebgone"></div>

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
                        onClick={() => handleTabChange(0)}
                        vay
                      >
                        The Day King Kaṁsa Died Part 1 of 3 – HG Bhurijana
                        Prabhu
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
                        The Day King Kaṁsa Died Part 3 of 3 – HG Bhurijana
                        Prabhu
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
                                data-src="https://i.ytimg.com/vi/xCKThRLeMUQ/hqdefault.jpg"
                                src="https://i.ytimg.com/vi/xCKThRLeMUQ/hqdefault.jpg"
                                alt="The Day King Kaṁsa Died Part 1 of 3 – HG Bhurijana Prabhu"
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
                              The Day King Kaṁsa Died Part 1 of 3 – HG Bhurijana
                              Prabhu
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
                                data-src="https://i.ytimg.com/vi/BuMEQO7nnyA/hqdefault.jpg"
                                src="https://i.ytimg.com/vi/BuMEQO7nnyA/hqdefault.jpg"
                                alt="The Day King Kaṁsa Died Part 3 of 3 – HG Bhurijana Prabhu"
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
                              The Day King Kaṁsa Died Part 3 of 3 – HG Bhurijana
                              Prabhu
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "100px ",
            backgroundColor: "#F6F2E8",
          }}
        >
          <div className="lqd-column col-md-12 text-center">
            <h2 className="h1 mt-0 mb-3 text-gradient">Audios</h2>
            <p className="font-size-16">Top Picks from Audio gallery</p>
          </div>
          <div className="row clearfix albumcategory">
            <div className="col-md-6">
              <img src={audio1} alt />
              <div className="overlay">
                <div className="text-overlay">
                  <span className="font-primary text-white">Akhand Gyan</span>
                  <div className="text-overlay-title">
                    <h2>
                      <a>Jeevan Ke Falsafe</a>
                    </h2>
                  </div>
                  <a className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn split-inner">
                    <span>
                      <span className="btn-gradient-bg bg-gradient-primary-rl" />
                      <span className="btn-txt">Play Now</span>
                      <span className="btn-gradient-bg btn-gradient-bg-hover" />
                    </span>
                  </a>
                </div>
              </div>
              <a className="liquid-overlay-link z-index-3" />
            </div>
            <div className="row mx-0 px-0 mt-3 mt-md-0 col-md-6">
              <div className="col-md-6">
                <img src={audio2} alt />
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
                <img src={audio3} alt />
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
          <div style={{ marginTop: "20px" }} className="text-center">
            <a
              onClick={() => navigate("/audio-gallery")}
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

        <section
          style={{ backgroundColor: "#F6F2E8" }}
          className="vc_row pt-50 pb-50"
        >
          <div className="container">
            <span className="ld-sf-spinner">
              <span>Loading </span>
            </span>
            <div className="w-overlay" />
            <div className="row">
              <div className="lqd-column col-md-12">
                <div className="liquid-filter-items justify-content-between align-items-center mb-5 m-xs-0">
                  <div className="liquid-filter-items-inner">
                    <a>
                      <h3 className="m-0 text-gradient font-size-40 t600">
                        Bhurijana Dasa
                      </h3>
                    </a>
                    <ul className="filter-list filter-list-inline size-md mb-0 m-xs-0">
                      <li
                        data-filter="social"
                        className={activeFilter === "social" ? "active" : ""}
                        onClick={handlesocialbutton}
                      >
                        <button className="btn btn-default btn-solid text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span
                            style={{ color: "#E86740" }}
                            className="btn-txt"
                          >
                            VIHE
                          </span>
                        </button>
                      </li>
                      <li
                        data-filter="spiritual"
                        className={activeFilter === "spiritual" ? "active" : ""}
                        onClick={handlespiritualbutton}
                      >
                        <button className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span
                            style={{ color: "#E86740" }}
                            className="btn-txt"
                          >
                            Gopinath Dham
                          </span>
                        </button>
                      </li>
                      <li
                        data-filter="workshop"
                        className={activeFilter === "workshop" ? "active" : ""}
                        onClick={handledevelopmentbutton}
                      >
                        <button className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span
                            style={{ color: "#E86740" }}
                            className="btn-txt"
                          >
                            GRC
                          </span>
                        </button>
                      </li>

                      <li
                        data-filter="workshop"
                        className={activeFilter === "scared" ? "active" : ""}
                        onClick={handlescaredbutton}
                      >
                        <button className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span
                            style={{ color: "#E86740" }}
                            className="btn-txt"
                          >
                            Scared India Gallery
                          </span>
                        </button>
                      </li>
                      <li
                        data-filter="workshop"
                        className={activeFilter === "others" ? "active" : ""}
                        onClick={handleothersbutton}
                      >
                        <button className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2">
                          <span
                            style={{ color: "#E86740" }}
                            className="btn-txt"
                          >
                            Others
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
                  {development.map((initiative, index) => (
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

              {scaredtab && (
                <div className="row d-flex flex-wrap">
                  {scared.map((initiative, index) => (
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

              {otherstab && (
                <div className="row d-flex flex-wrap">
                  {others.map((initiative, index) => (
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
        <section
          style={{ backgroundColor: "#F6F2E8" }}
          className="vc_row pt-60 pb-90"
        >
          <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
              <div
                className="lqd-column col-lg-5 col-md-6 mb-5 mb-md-0"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
              >
                <header className="fancy-title mb-60">
                  {/* <h6 className="text-uppercase ltr-sp-2 font-size-12 font-weight-semibold text-primary">
                    Akhand Gyan - Monthly Publication
                  </h6> */}
                  <h2 className="h1 mt-4 mb-4">
                    Provide complete nourishment to your body-mind-soul !
                  </h2>
                  <p>
                    <a className="nocolor">
                      <strong>AKHAND GYAN</strong>
                    </a>
                    is a revolutionary monthly magazine of DJJS. Raising voice
                    against ill practices prevailing in the society &amp; wiping
                    off the plethora of misconceptions.
                  </p>
                </header>
                <a
                  onClick={() => navigate("/Ebooks")}
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
                    <span className="btn-txt">books</span>
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
                    <div className="liquid-img-container-inner">
                      <figure>
                        <img
                          style={{ width: "72%" }}
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/images/new/akhandgyan.jpg"
                          alt="Akhand Gyan Monthly Magazine DJJS"
                          src={imgbook}
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
          style={{ backgroundColor: "#F6F2E8" }}
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
                            src="https://cdn.wionews.com/sites/default/files/2023/09/08/378210-f5ceoaabaaazs3.jpg?im=FitAndFill=(1200,900)"
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
                        <a>
                          ISKCON Janmashtami celebration happens all across the
                          world with great Devotion.
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
                            data-src="https://rajasthantourismbuzz.files.wordpress.com/2013/08/faag_3.jpg"
                            src="https://rajasthantourismbuzz.files.wordpress.com/2013/08/faag_3.jpg"
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
                        <a>
                          ISKCON Dwarka's Holi celebration blends ancient
                          traditions with modern festivities like Phoolon ki
                          Holi and Matka Phod,
                        </a>
                      </h2>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime="2024-04-01"
                      >
                        4 April, 2024
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
                            src="https://iskconghaziabad.com/wp-content/uploads/2023/12/srmm.webp"
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
                        <a>
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
            <div style={{ marginTop: "20px" }} className="lqd-column row">
              <div className="col-md-12 text-center">
                <p>
                  <a
                    style={{ fontSize: 13 }}
                    onClick={() => navigate("/events")}
                    className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn"
                  >
                    <span>
                      <span className="btn-gradient-bg" />
                      <span className="btn-txt">See all News</span>
                      <span className="btn-gradient-bg btn-gradient-bg-hover" />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{ backgroundColor: "#F6F2E8" }}
          className="vc_row overflow-hidden"
        >
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
                        Blog
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
                      {posts.map((post) => (
                        <div
                          className="lqd-column col-md-6  masonry-item"
                          key={post._id}
                        >
                          <article className="liquid-lp mb-60 shadow">
                            <figure className="liquid-lp-media">
                              <a href={post.url}>
                                <img src={post.images[0]} />
                              </a>
                            </figure>
                            <div className="px-4 pb-4">
                              <header className="liquid-lp-header">
                                <h2 className="liquid-lp-title h3">
                                  <a href={post.url}>{post.heading}</a>
                                </h2>
                                <div className="liquid-lp-date text-uppercase size-sm">
                                  {convertToIST(post.createdAt)}
                                </div>
                              </header>
                              <div className="liquid-lp-excerpt">
                                <p>{post.subHeading}</p>
                              </div>
                              <footer className="liquid-lp-footer">
                                <a
                                  href={post.url}
                                  className="btn btn-naked liquid-lp-read-more text-uppercase font-size-13 font-weight-bold"
                                >
                                  <span>
                                    <span
                                      onClick={() =>
                                        navigate(`/Blogshow/${post._id}`)
                                      }
                                      className="btn-txt"
                                    >
                                      Read more
                                    </span>
                                    <span className="btn-icon">
                                      <i className="fa fa-long-arrow-right" />
                                    </span>
                                  </span>
                                </a>
                              </footer>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "20px" }} className="lqd-column row">
                <div className="col-md-12 text-center">
                  <p>
                    <a
                      style={{ fontSize: 13 }}
                      onClick={() => navigate("/Blog")}
                      className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn"
                    >
                      <span>
                        <span className="btn-gradient-bg" />
                        <span className="btn-txt">See all Blogs</span>
                        <span className="btn-gradient-bg btn-gradient-bg-hover" />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Content of the section */}
        {/* <span className="row-bg-loader" /> */}
      </main>
    </div>
  );
};

export default Home;
