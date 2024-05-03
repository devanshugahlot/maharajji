import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import "./event.css";
const Events = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleAccordion2 = () => {
    setIsopen(!isopen);
  };
  const handleCategoryClick = (category) => {
    setActiveTab(category);
  };

  const workshops = [
    {
      title:
        "Youth Empowerment Takes Center Stage: SAM Shines at Yuva Utsav India@2047",
      image:
        "https://back2godhead.com/wp-content/uploads/2012/12/117_1976_11-10-29.jpg",

      link: "",
      date: "2024-03-20",
    },
    {
      title:
        "Unique Workshop on Mental Health Held by PEACE Program for Working Professionals",
      image:
        "https://krots.top/uploads/posts/2022-03/1647120856_27-krot-info-p-krishnaiti-prikol-smeshnie-foto-29.jpg",
      link: "",
      date: "2024-02-15",
    },
    {
      title:
        "SAM Hosts Grand National Youth Day Celebration at Central Park, Connaught Place",
      image:
        "https://krishna.org/wp-content/uploads/2005/07/Srila-Prabhupada-and-Hansadutta-talk-on-morning-walk.jpg",
      link: "",
      date: "2024-01-22",
    },
    {
      title:
        "PEACE inspires corporate minds in a unique workshop on Psychology of Relationships",
      image:
        "https://krishna.org/wp-content/uploads/2016/03/ISKCON-Portland-Devotees-1976.jpg",
      link: "",
      date: "2024-01-14",
    },
  ];

  const otherNews = [
    {
      title:
        "Theology of Divine Science unveiled at Spiritual Forum organized by DJJS at London, UK",
      image:
        "https://avatars.mds.yandex.net/get-altay/1778671/2a000001861d3c88040eb3a8a28884402153/orig",
      link: "",
      date: "2024-03-13",
    },
    {
      title:
        "Active Participation of Bhurijana Dasa in Nakshatra Fair, 2024 at Pragati Maidan, New Delhi; motivated people for Spiritual Upliftment",
      image:
        "https://back2godhead.com/wp-content/uploads/2012/12/106_1975_10-10-32.jpg",
      link: "",
      date: "2024-03-01",
    },
    {
      title:
        "Bhurijana Dasa Celebrated National Youth Day with an Awakening Call to the Youth at Rudrapur, Uttarakhand",
      image:
        "https://i2.wp.com/www.kksblog.com/wp-content/uploads/2019/12/46144290_2234368186586813_5526730166639788032_o.jpg?resize=1536%2C1024&ssl=1",
      link: "",
      date: "2024-02-21",
    },
    {
      title:
        "Bhurijana Dasa organized hundreds of spiritual and cultural programs across the world to commemorate the establishment of Shri Ram Temple",
      image: "https://i.ytimg.com/vi/eU16HHBUrHQ/maxresdefault.jpg",
      link: "",
      date: "2024-02-15",
    },
  ];

  const items = [
    {
      imageUrl:
        "https://d16qttj5aycdv0.cloudfront.net/upload/activity/other_img/IMG_3074_1657076565.JPG",
      title: "ISKCON Temples Abuzz with Spiritual Fervor on Janmashtami ",
      date: "April 4, 2024",
      link: "",
      category: "upcoming", // Specify the category for this item
    },

    {
      imageUrl:
        "https://d16qttj5aycdv0.cloudfront.net/upload/major_event/other_img/Diwali_New_Year_Celebration_at_Rajkot_Gurukul_(19)_1636199578.jpg",
      title: "Embracing Divine Love: Radiant Revelry on Radhasthami",
      date: "May 4, 2024",
      link: "",
      category: "past",
    },
    {
      imageUrl:
        "https://www.iskconbangalore.org/wp-content/uploads/2024/03/sp-initiation.jpg",
      title:
        "Golden Glow of Devotion: Gaura Purnima - Illuminating Hearts with Divine Grace",
      date: "July 12, 2024",
      link: "",
      category: "past",
    },
    {
      imageUrl:
        "https://i.pinimg.com/originals/22/e2/f0/22e2f081a5303caab95a6050c20cea62.jpg",
      title:
        "Journey of Devotion: Ratha Yatra - Uniting Souls on the Chariot of Faith",
      date: "September 42, 2024",
      link: "",
      category: "Retreats",
    },
    {
      imageUrl:
        "https://back2godhead.com/wp-content/uploads/2012/12/116_1976_11-09-3.jpg",
      title:
        "Divine Illumination: Diwali Festival in ISKCON - Sparkling Lights, Sacred Delights",
      date: "July 5, 2024",
      link: "",
      category: "Alone",
    },
    {
      imageUrl:
        "https://back2godhead.com/wp-content/uploads/2012/12/116_1976_11-09-3.jpg",
      title:
        "Sheltered in Devotion: Govardhan Puja - Building Mountains of Love and Gratitude",
      date: "May 17, 2024",
      link: "",
      category: "holy",
    },
  ];
  const getFilteredItems = () => {
    if (activeTab === "all") {
      return items;
    } else {
      return items.filter((item) => item.category.includes(activeTab));
    }
  };
  return (
    <div>
      <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
        <div className="titlebar-inner py-5">
          <div className="container titlebar-container">
            <div className="row titlebar-container">
              <div className="titlebar-col col-md-6">
                <h1 className="font-size-26 mb-1">News &amp; Events</h1>
                <p className="font-size-14 text-fade-dark-06">
                  Stay updated with DJJS activities
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
                    <span>News</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main id="content" className="content">
        <div className="container text-center mt-15">
          <div className="row visible-xs bottommargin-xs videocats">
            <div className="col-md-12">
              <div className="ld-dropdown-menu">
                <a
                  className="btn btn-default btn-naked border-thin btn-icon-left btn-icon-circle btn-icon-solid font-size-12 font-weight-bold text-uppercase ltr-sp-05 mb-2"
                  data-ld-toggle="true"
                  data-toggle="collapse"
                  data-target="#video-submenu"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>
                    <span className="btn-txt font-size-18">
                      All Categories <i className="fa fa-angle-down" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa fa-list" />
                    </span>
                  </span>
                </a>
                <ul
                  className="ld-module-dropdown left collapse"
                  id="video-submenu"
                  style={{ width: "100%" }}
                >
                  <li role="separator" className="divider" />
                  <li>
                    <div>
                      <strong>SPIRITUAL INITIATIVES</strong>
                    </div>
                  </li>
                  <li>
                    <a>Shrimad Bhagwat Katha</a>
                  </li>
                  <li>
                    <a>Shri Ram Katha</a>
                  </li>
                  <li>
                    <a>Devi Bhagwat Katha</a>
                  </li>
                  <li>
                    <a>Bhajan Sandhya</a>
                  </li>
                  <li>
                    <a>Jagran and Chowki</a>
                  </li>
                  <li>
                    <a>Shiv Katha</a>
                  </li>
                  <li>
                    <a>Shri Krishna Janmashtami</a>
                  </li>
                  <li>
                    <a>Shri Krishna Katha</a>
                  </li>
                  <li>
                    <a>Holi Mahotstav</a>
                  </li>
                  <li>
                    <a>Guru Purnima</a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <div>
                      <strong>SOCIAL INITIATIVES</strong>
                    </div>
                  </li>
                  <li>
                    <a>Hitkari Kheti</a>
                  </li>
                  <li>
                    <a>Manthan</a>
                  </li>
                  <li>
                    <a>Kamdhenu</a>
                  </li>
                  <li>
                    <a>Antardrishti</a>
                  </li>
                  <li>
                    <a>Antarkranti</a>
                  </li>
                  <li>
                    <a>Bodh</a>
                  </li>
                  <li>
                    <a>Santulan</a>
                  </li>
                  <li>
                    <a>Sanrakshan</a>
                  </li>
                  <li>
                    <a>Aarogya</a>
                  </li>
                  <li>
                    <a>Samadhan</a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <div>
                      <strong>WORKSHOPS</strong>
                    </div>
                  </li>
                  <li>
                    <a>SAM Workshop</a>
                  </li>
                  <li>
                    <a>PEACE Workshop</a>
                  </li>
                  <li>
                    <a>WAY Workshop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        <div>
          <div id="tabs" className="container topmargin clearfix m-xs-0">
            <div className="row">
              <div className="lqd-column col-md-12">
                <div className="liquid-filter-items justify-content-between align-items-center mb-5 m-xs-0">
                  <div className="liquid-filter-items-inner">
                    <a>
                      <h3 className="m-0 text-gradient">
                        Latest in Categories
                      </h3>
                    </a>
                    <u
                      className="filter-list filter-list-inline size-md mb-0"
                      id="portdolio-grid-1"
                    >
                      <li
                        onClick={() => handleTabClick("all")}
                        className={activeTab === "all" ? "is-checked" : ""}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          All
                        </span>
                      </li>
                      <li
                        onClick={() => handleTabClick("upcoming")}
                        className={activeTab === "upcoming" ? "is-checked" : ""}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Upcoming
                        </span>
                      </li>
                      <li
                        onClick={() => handleTabClick("past")}
                        className={activeTab === "past" ? "is-checked" : ""}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Past Event
                        </span>
                      </li>
                      <li
                        onClick={() => handleTabClick("Retreats")}
                        className={activeTab === "Retreats" ? "is-checked" : ""}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Retreat
                        </span>
                      </li>
                      <li
                        onClick={() => handleTabClick("Alone")}
                        className={activeTab === "Alone" ? "is-checked" : ""}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Alone with Krishna
                        </span>
                      </li>
                      <li
                        onClick={() => handleTabClick("Holy")}
                        className={activeTab === "Holy" ? "is-checked" : ""}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Holy Name Retreat
                        </span>
                      </li>
                    </u>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative d-flex ">
              <span className="ld-sf-spinner">
                <span>Loading </span>
              </span>
              <div className="w-overlay" />
              {/* {devhbjdsvfhjbijdf} */}
              <div id="latestcategory" className="col_full mb-0 m-xs-0">
                {/* {activeTab === "all" && (
                  <div className="col_one_third mb-xs ">
                    <div className="ipost clearfix">
                      <div className="entry-image mb-10">
                        <a
                          className="img_scale"
                          // href="news/shri-ram-katha-satiated-the-thirst-for-spiritual-knowledge-in-kurukshetra-haryana.html"
                        >
                          <img
                            className="image_fade ld-lazyload"
                            data-src="https://www.djjs.org/uploads/news/im_660a098258abb.jpg"
                            alt
                            src="https://www.djjs.org/uploads/news/im_660a098258abb.jpg"
                          />
                        </a>
                      </div>
                      <div className="entry-title">
                        <h4 className="font-size-22 font-weight-semibold">
                          <a >
                            Shri Ram Katha satiated the thirst for Spiritual
                            Knowledge in Kurukshetra, Haryana
                          </a>
                        </h4>
                      </div>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime="2024-04-01"
                      >
                        April 1, 2024
                      </time>
                    </div>
                  </div>
                )} */}
                {getFilteredItems().map((item, index) => (
                 <div className="col_one_third mb-xs" key={index}>
                 <div className="ipost clearfix">
                   <div className="entry-image mb-10">
                     <a className="img_scale" href={item.link}>
                       <img
                         className="image_fade ld-lazyload img-fluid" // added img-fluid class
                         data-src={item.imageUrl}
                         alt={item.title}
                         src={item.imageUrl}
                       />
                     </a>
                   </div>
                   <div className="entry-title">
                     <h4 className="font-size-22 font-weight-semibold">
                       <a href={item.link}>{item.title}</a>
                     </h4>
                   </div>
                   <time
                     className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                     dateTime={item.date}
                   >
                     {item.date}
                   </time>
                 </div>
               </div>
               
                ))}
              </div>
              <div className="clear" />
            </div>
            <div className="d-flex flex-1 justify-content-center mb-30">
              <a
                id="seeall"
                // href="news/category/spiritual.html"
                className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn"
              >
                <span>
                  <span className="btn-gradient-bg bg-gradient-primary-lr" />
                  <span className="btn-txt">See More</span>
                  <span className="btn-gradient-bg btn-gradient-bg-hover bg-gradient-secondary-rl" />
                </span>
              </a>
            </div>
          </div>
          <section className="vc_row pt-45 pb-45">
            <div className="container">
              <div className="row slide-mask colorbox" id="topnews">
                <div className="lqd-column col-md-6 p-0">
                  <div
                    className="fancy-box fancy-box-travel fancy-box-small mb-0 brd-right slide-0"
                    data-slideelement-onhover="true"
                    data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                    style={{ paddingBottom: "75%" }}
                  >
                    <figure
                      className="fancy-box-image ld-lazyload"
                      data-bg="url('uploads/news/im_660a0ad615b9f.jpg')"
                    >
                      <img
                        className="ld-lazyload"
                        data-src="https://www.djjs.org/uploads/news/im_6617513a2c5f7.jpg"
                        alt="djjs news"
                        src="https://storage.ning.com/topology/rest/1.0/file/get/2515282138?profile=original"
                      />
                    </figure>
                    <div className="fancy-box-contents">
                      <div className="fancy-box-header">
                        <span className="fancy-box-time lh-2">Spiritual</span>
                        <h3
                          className="font-size-30 lh-15"
                          style={{ fontSize: "24px !important" }}
                        >
                          Devotional singing, chanting of mantras, and group
                          kirtan sessions are integral parts of temple
                          activities. These sessions often involve traditional
                          in truments like the mridanga drum and kartals.
                        </h3>
                      </div>
                    </div>
                    <a
                      className="liquid-overlay-link z-index-3"
                      // href="news/bhagwan-shiv-katha-highlighted-the-vital-requisite-of-attaining-the-divine-knowledge-in-jodhpur-rajasthan.html"
                    />
                  </div>
                </div>
                <div className="col-md-6 p-0" id="topnewsright">
                  <div className="col-md-6 p-0">
                    <div
                      className="fancy-box fancy-box-travel fancy-box-small mb-0 brd-btm brd-right slide-0"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      style={{ paddingBottom: "75%" }}
                    >
                      <figure
                        className="fancy-box-image ld-lazyload"
                        data-bg="url('uploads/news/im_660a0a1b1991f.jpg')"
                      >
                        <img
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/uploads/news/im_660a0a1b1991f.jpg"
                          alt="djjs news"
                          src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/de05-816x544.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Shri Ram Katha reinvigorated the spiritual legacy of
                            Lord Ram at Rewar…
                          </h3>
                        </div>
                      </div>
                      <a
                        className="liquid-overlay-link z-index-3"
                        // href="news/shri-ram-katha-reinvigorated-the-spiritual-legacy-of-lord-ram-at-rewari-haryana.html"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div
                      className="fancy-box fancy-box-travel fancy-box-small mb-0 brd-btm  slide-0"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      style={{ paddingBottom: "75%" }}
                    >
                      <figure
                        className="fancy-box-image ld-lazyload"
                        data-bg="url('uploads/news/im_660a098258abb.jpg')"
                      >
                        <img
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/uploads/news/im_660a098258abb.jpg"
                          alt="djjs news"
                          src="https://i.ytimg.com/vi/hjwXeWnM7lA/maxresdefault.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Shri Ram Katha satiated the thirst for Spiritual
                            Knowledge in Kurukshe…
                          </h3>
                        </div>
                      </div>
                      <a
                        className="liquid-overlay-link z-index-3"
                        // href="news/shri-ram-katha-satiated-the-thirst-for-spiritual-knowledge-in-kurukshetra-haryana.html"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div
                      className="fancy-box fancy-box-travel fancy-box-small mb-0  brd-right slide-0"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      style={{ paddingBottom: "75%" }}
                    >
                      <figure
                        className="fancy-box-image ld-lazyload"
                        data-bg="url('uploads/news/im_65fa49f30b5e1.jpg')"
                      >
                        <img
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/uploads/news/im_65fa49f30b5e1.jpg"
                          alt="djjs news"
                          src="https://live.staticflickr.com/6114/6210416427_6f0c5c2b6a_b.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Bhagwan Shiv Katha Urges the people of Chhatarpur,
                            Delhi to perceive G…
                          </h3>
                        </div>
                      </div>
                      <a
                        className="liquid-overlay-link z-index-3"
                        // href="news/bhagwan-shiv-katha-urges-the-people-of-chhatarpur-delhi-to-perceive-god-through-divine-knowledge.html"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div
                      className="fancy-box fancy-box-travel fancy-box-small mb-0   slide-0"
                      data-slideelement-onhover="true"
                      data-slideelement-options='{ "visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info" }'
                      style={{ paddingBottom: "75%" }}
                    >
                      <figure
                        className="fancy-box-image ld-lazyload"
                        data-bg="url('uploads/news/im_65e135eca7254.jpg')"
                      >
                        <img
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/uploads/news/im_65e135eca7254.jpg"
                          alt="djjs news"
                          src="https://www.iskconbangalore.org/wp-content/uploads/2015/11/de7-816x544.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Active Participation of Bhurijana Dasa in Nakshatra
                            Fair, 2024 at Pragati Maidan…
                          </h3>
                        </div>
                      </div>
                      <a
                        className="liquid-overlay-link z-index-3"
                        // href="news/djjs-active-participation-in-nakshatra-fair-2024-at-pragati-maidan-new-delhi-motivated-people-for-spiritual-upliftment.html"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container clearfix">
            <div className="col_full m-xs-0 topmargin clearfix">
              <div className="row w-100 d-flex flex-wrap align-items-center">
                <div className="col-xs-9 col-md-9">
                  <div className="heading-block noborder mb-15">
                    <h3>
                      <span className="text-gradient">
                        <a className="text-gradient">Workshops</a>
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="col-xs-3 col-md-3 text-right">
                  <a className="btn btn-naked text-uppercase font-weight-bold nowrap">
                    <span>
                      <span className="btn-txt">See all</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row">
                {/* Use the map function to render workshop items */}
                {workshops.map((workshop, index) => (
                  <div className="col-md-3 col-sm-6 mb-xs" key={index}>
                    <div className="ipost clearfix">
                      <div className="entry-image mb-15">
                        <a href={workshop.link}>
                          <img
                            className="image_fade ld-lazyload"
                            data-src={workshop.image}
                            src={workshop.image}
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="entry-title">
                        <h4 className="font-weight-semibold">
                          <a href={workshop.link}>{workshop.title}</a>
                        </h4>
                      </div>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime={workshop.date}
                      >
                        {workshop.date}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
              <div className="clear" />
            </div>
            <div className="col_full">
              <div className="row w-100 d-flex flex-wrap align-items-center">
                <div className="col-xs-9 col-md-9">
                  <div className="heading-block noborder mb-15">
                    <h3>
                      <span className="text-gradient">
                        <a
                          className="text-gradient"
                          // href="news/category/spiritual/spiritual-others.html"
                        >
                          Other News
                        </a>
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="col-xs-3 col-md-3 text-right">
                  <a
                    // href="news/category/spiritual/spiritual-others.html"
                    className="btn btn-naked nowrap text-uppercase font-weight-bold"
                  >
                    <span>
                      <span className="btn-txt">See all</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row">
                {/* Use the map function to render other news items */}
                {otherNews.map((newsItem, index) => (
                  <div className="col-md-3 col-sm-6 mb-xs" key={index}>
                    <div className="ipost clearfix">
                      <div className="entry-image mb-15">
                        <a href={newsItem.link}>
                          <img
                            className="image_fade ld-lazyload"
                            data-src={newsItem.image}
                            src={newsItem.image}
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="entry-title">
                        <h4 className="font-weight-semibold">
                          <a href={newsItem.link}>{newsItem.title}</a>
                        </h4>
                      </div>
                      <time
                        className="liquid-lp-date text-uppercase ltr-sp-1 my-0"
                        dateTime={newsItem.date}
                      >
                        {newsItem.date}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
