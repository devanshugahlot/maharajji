import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import './event.css'
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
      image: "https://www.djjs.org/uploads/news/im_65fa4ad49d027.jpg",
      link: "",
      date: "2024-03-20",
    },
    {
      title:
        "Unique Workshop on Mental Health Held by PEACE Program for Working Professionals",
      image: "https://www.djjs.org/uploads/news/im_65cd838ad9731.jpg",
      link: "",
      date: "2024-02-15",
    },
    {
      title:
        "SAM Hosts Grand National Youth Day Celebration at Central Park, Connaught Place",
      image: "https://www.djjs.org/uploads/news/im_65ae11789af55.png",
      link: "",
      date: "2024-01-22",
    },
    {
      title:
        "PEACE inspires corporate minds in a unique workshop on Psychology of Relationships",
      image: "https://www.djjs.org/uploads/news/im_65a3b8028b87d.jpg",
      link: "",
      date: "2024-01-14",
    },
  ];

  const otherNews = [
    {
      title:
        "Theology of Divine Science unveiled at Spiritual Forum organized by DJJS at London, UK",
      image: "https://www.djjs.org/uploads/news/im_65f10d31d2d4f.jpg",
      link: "",
      date: "2024-03-13",
    },
    {
      title:
        "Active Participation of DJJS in Nakshatra Fair, 2024 at Pragati Maidan, New Delhi; motivated people for Spiritual Upliftment",
      image: "https://www.djjs.org/uploads/news/im_65e135eca7254.jpg",
      link: "",
      date: "2024-03-01",
    },
    {
      title:
        "DJJS Celebrated National Youth Day with an Awakening Call to the Youth at Rudrapur, Uttarakhand",
      image: "https://www.djjs.org/uploads/news/im_65d5d58e376cd.jpg",
      link: "",
      date: "2024-02-21",
    },
    {
      title:
        "DJJS organized hundreds of spiritual and cultural programs across the world to commemorate the establishment of Shri Ram Temple",
      image: "https://www.djjs.org/uploads/news/im_65f10d31d2d4f.jpg",
      link: "",
      date: "2024-02-15",
    },
  ];

  const items = [
    {
      imageUrl: "https://www.djjs.org/uploads/news/im_660a098258abb.jpg",
      title:
        "Shri Ram Katha satiated the thirst for Spiritual Knowledge in Kurukshetra, Haryana",
      date: "April 1, 2024",
      link: "",
      category: "upcoming", // Specify the category for this item
    },

    {
      imageUrl: "https://www.djjs.org/uploads/news/im_660a098258abb.jpg",
      title:
        "Shri Ram Katha satiated the thirst for Spiritual Knowledge in Kurukshetra, Haryana",
      date: "April 3, 2024",
      link: "",
      category: "past", 
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
                    <ul className="filter-list filter-list-inline size-md mb-0" id="portdolio-grid-1">
  <li onClick={() => handleTabClick("all")} className={activeTab === "all" ? "is-checked" : ""}>
    <span style={{ fontSize: "17px", fontWeight: "bold" ,color:"black" }}>All</span>
  </li>
  <li onClick={() => handleTabClick("upcoming")} className={activeTab === "upcoming" ? "is-checked" : ""}>
    <span style={{ fontSize: "17px", fontWeight: "bold",color:"black" }}>upcoming</span>
  </li>
  <li onClick={() => handleTabClick("past")} className={activeTab === "past" ? "is-checked" : ""}>
    <span style={{ fontSize: "17px", fontWeight: "bold" ,color:"black"}}>Past Events</span>
  </li>
  <li onClick={() => handleTabClick("Retreats")} className={activeTab === "Retreats" ? "is-checked" : ""}>
    <span style={{ fontSize: "17px", fontWeight: "bold" ,color:"black"}}>Retreats</span>
  </li>
  <li onClick={() => handleTabClick("Alone")} className={activeTab === "Alone" ? "is-checked" : ""}>
    <span style={{ fontSize: "17px", fontWeight: "bold",color:"black" }}>Alone with Krishna</span>
  </li>
  <li onClick={() => handleTabClick("Holy")} className={activeTab === "Holy" ? "is-checked" : ""}>
    <span style={{ fontSize: "17px", fontWeight: "bold" ,color:"black"}}>Holy Name Retreat</span>
  </li>
</ul>

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
                            className="image_fade ld-lazyload"
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
                        src="https://www.djjs.org/uploads/news/im_6617513a2c5f7.jpg"
                      />
                    </figure>
                    <div className="fancy-box-contents">
                      <div className="fancy-box-header">
                        <span className="fancy-box-time lh-2">Spiritual</span>
                        <h3
                          className="font-size-30 lh-15"
                          style={{ fontSize: "24px !important" }}
                        >
                          Bhagwan Shiv Katha highlighted the vital requisite of
                          attaining the Divine Knowledge in Jodhpur, Rajasthan
                        </h3>
                      </div>
                      <div className="fancy-box-info">
                        <p />
                        <div className="fancy-box-footer">
                          <a
                            target="_blank"
                            // href="news/bhagwan-shiv-katha-highlighted-the-vital-requisite-of-attaining-the-divine-knowledge-in-jodhpur-rajasthan.html"
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
                          src="https://www.djjs.org/uploads/news/im_66174c67e2a73.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Shri Ram Katha reinvigorated the spiritual legacy of
                            Lord Ram at Rewar…
                          </h3>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              // href="news/shri-ram-katha-reinvigorated-the-spiritual-legacy-of-lord-ram-at-rewari-haryana.html"
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
                          src="https://www.djjs.org/uploads/news/im_6614f9f67e48b.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Shri Ram Katha satiated the thirst for Spiritual
                            Knowledge in Kurukshe…
                          </h3>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              // href="news/shri-ram-katha-satiated-the-thirst-for-spiritual-knowledge-in-kurukshetra-haryana.html"
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
                          src="https://www.djjs.org/uploads/news/im_660a0ad615b9f.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Bhagwan Shiv Katha Urges the people of Chhatarpur,
                            Delhi to perceive G…
                          </h3>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              // href="news/bhagwan-shiv-katha-urges-the-people-of-chhatarpur-delhi-to-perceive-god-through-divine-knowledge.html"
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
                          src="https://www.djjs.org/uploads/news/im_660a0a1b1991f.jpg"
                        />
                      </figure>
                      <div className="fancy-box-contents">
                        <div className="fancy-box-header">
                          <h3 className="t500">
                            Active Participation of DJJS in Nakshatra Fair, 2024
                            at Pragati Maidan…
                          </h3>
                        </div>
                        <div className="fancy-box-info">
                          <p>&nbsp;</p>
                          <div className="fancy-box-footer">
                            <a
                              // href="news/djjs-active-participation-in-nakshatra-fair-2024-at-pragati-maidan-new-delhi-motivated-people-for-spiritual-upliftment.html"
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
