import React, { useState } from "react";
import "../Pages/brahmgyan.css";
import "./audio.css";
import { FaAngleUp } from "react-icons/fa";
import Audioslider from "./Audioslider";
import ColorSlider from "./AudioSlidermain";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

import PeopleIcon from "@mui/icons-material/People";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarBorder from "@mui/icons-material/StarBorder";
import { Divider } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpIcon";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"; 
import audio1 from "../assets/audio4.jpg"
import audio2 from "../assets/audio1.jpg"
import audio3 from "../assets/audio3.jpg"
import audio4 from "../assets/audio2.jpg"
import audio5 from "../assets/audio5.jpg"
import song1 from "../assets/song2.jpg"
import song2 from "../assets/song1.jpg"
import song3 from "../assets/song3.jpg"
import song4 from "../assets/song4.jpg"
import song5 from "../assets/song5.jpg"
import song6 from "../assets/song6.jpg"
import song7 from "../assets/song7.jpg.webp"
import song8 from "../assets/song8.jpg"
import song9 from "../assets/song9.jpg"
import song10 from "../assets/song10.jpg"
import song11 from "../assets/song11.jpg.avif"
import song12 from "../assets/song12.jpg"
import song13 from "../assets/song13.jpg"
import song14 from "../assets/song14.jpg"
import song15 from "../assets/song15.jpg"
import song16 from "../assets/song16.jpg"


const AudioGallery = () =>
{
  const categories = [
    {
      name: "COVID19",
      subcategories: [
        {
          name: "Subcategory 1",
          subsubcategories: [
            {
              name: "Subsubcategory 1A",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ],
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ],
        },
        {
          name: "Subcategory 2",
          subsubcategories: [
            {
              name: "Subsubcategory 2A",
              subsubsubcategories: [
                "Subsubsubcategory 2AA",
                "Subsubsubcategory 2AB",
              ],
            },
            {
              name: "Subsubcategory 2B",
              subsubsubcategories: [
                "Subsubsubcategory 2BA",
                "Subsubsubcategory 2BB",
              ],
            },
          ],
        },
        // Add more subcategories with their respective subsubcategories as needed
      ],
    },
    {
      name: "meditation",
      subcategories: [
        {
          name: "Subcategory 1",
          subsubcategories: [
            {
              name: "Subsubcategory 1A",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ],
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ],
        },
        {
          name: "Subcategory 2",
          subsubcategories: [
            {
              name: "Subsubcategory 2A",
              subsubsubcategories: [
                "Subsubsubcategory 2AA",
                "Subsubsubcategory 2AB",
              ],
            },
            {
              name: "Subsubcategory 2B",
              subsubsubcategories: [
                "Subsubsubcategory 2BA",
                "Subsubsubcategory 2BB",
              ],
            },
          ],
        },
        // Add more subcategories with their respective subsubcategories as needed
      ],
    },
    {
      name: "SAMADHI",
      subcategories: [
        {
          name: "Subcategory 1",
          subsubcategories: [
            {
              name: "Subsubcategory 1A",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ]
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ]
        },
        {
          name: "Subcategory 2",
          subsubcategories: [
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1AA",
                "Subsubsubcategory 1AB",
              ]
            },
            {
              name: "Subsubcategory 1B",
              subsubsubcategories: [
                "Subsubsubcategory 1BA",
                "Subsubsubcategory 1BB",
              ],
            },
          ]
        },
      ]
    }
    // Add more main categories with their subcategories and subsubcategories as needed
  ];
  const bhajans = [
    {
      id: 1,
      imageUrl: song1,
      length: "2:55",
      videoTitle: "Yashomati Nandan ",
      videoOwner: "Nitaisevini Mataji",
    },
    {
      id: 2,
      imageUrl: song2,
      length: "1:55",
      videoTitle: "Vrajavadhus Kirtan",
      videoOwner: "Vrajavadhu",
    },
    {
      id: 3,
      imageUrl: song3,
      length: "2:34",
      videoTitle: "Dhule Dhule Gora Chanda",
      videoOwner: "Shiva Ram Prabhu",
    },
    {
      id: 4,
      imageUrl: song4,
      length: "3:55",
      videoTitle: "Hare Krishna Kirtan",
      videoOwner: "Shyam Sunder Das",
    },
    {
      id: 4,
      imageUrl: song5,
      length: "4:29",
      videoTitle: "Namaste Narsimhaye",
      videoOwner: "Vaiyasaki Das",
    },
    {
      id: 4,
      imageUrl: song6,
      length: "1:43",
      videoTitle: "Radhy Kirshna",
      videoOwner: "Naambhav Prabhu",
    },
    {
      id: 4,
      imageUrl: song7,
      length: "2:55",
      videoTitle: "Samsara Davanal Lidha Loka",
      videoOwner: "Vaiyasaki Das",
    },

    {
      id: 4,
      imageUrl: song8,
      length: "2:55",
      videoTitle: "Vande Kirshna Nand Kumara",
      videoOwner: "Naambhav Prabhu",
    },
    // Add more items as needed
  ];

  const bhajanstwo = [
    {
      id: 1,
      imageUrl: song9,
      length: "1:22",
      videoTitle: "Aho Shri Satpurush ke",
      videoOwner: "Sayla Nityakram",
    },
    {
      id: 2,
      imageUrl: song10,
      length: "2:03",
      videoTitle: "Shri Ram Naam Jaap",
      videoOwner: "Vineet Setpal",
    },
    {
      id: 3,
      imageUrl: song11,
      length: "2:55",
      videoTitle: "Shri Krishnaya Vasudevaya",
      videoOwner: "Acharya Sudhir Sharma Ved Pathi",
    },
    {
      id: 4,
      imageUrl: song12,
      length: "3:10",
      videoTitle: "Maha Mrityunjaya Mantra",
      videoOwner: "Maysa A. Hajjaj Makan",
    },
    {
      id: 4,
      imageUrl: song13,
      length: "1:55",
      videoTitle: "Bhramins",
      videoOwner: "shestidesjatoelicoknigi",
      
    },
    {
      id: 4,
      imageUrl:song14,
      length: "2:02",
      videoTitle: "Shiv Shiv Shiv Shiv",
      videoOwner: "Suresh Kumar G",
    },
    {
      id: 4,
      imageUrl: song15,
      length: "3:25",
      videoTitle: "SHRI VINOD AGGARWAL",
      videoOwner: "swapnil patil",
    },

    {
      id: 4,
      imageUrl: song16,
      length: "2:55",
      videoTitle: "Radhe Krishan Dhun",
      videoOwner: "Anupama Kotwani",
    },
  
  ];
  const [openCategory, setOpenCategory] = useState(null);
  const [ openSubCategory, setOpenSubCategory ] = useState( null ); 
  const [openSubSubCategory, setOpenSubSubCategory] = useState(null); // State to manage which subsubcategory is open

  const handleCategoryClick = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };
  const handleSubCategoryClick = (index) => {
    if (openSubCategory === index) {
      setOpenSubCategory(null);
    } else {
      setOpenSubCategory(index);
    }
  };
  const handleSubSubCategoryClick = (index) => {
    if (openSubSubCategory === index) {
      setOpenSubSubCategory(null);
    } else {
      setOpenSubSubCategory(index);
    }
  };
  return (
    <div style={{backgroundColor:"#F6F2E8"}}>
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
         
          <div className="container-fluid clearfix">
            {/* slider div */}
           
            <div className="container">
            <div className="heading-block bottommargin-sm topmargin noborder">
                 <h2
                      className="lh-115 mb-0"
                      data-fittext="true"
                      data-fittext-options='{"compressor":1, "maxFontSize":"maxFontSize", "minFontSize":"25"}'
                    >
                      <span className="text-gradient">
                        <span className="t600">Featured  Categories
</span>
                      </span>
                    </h2>
                <span className="text-gradient m-0 t400 font-size-26">Browse by audio categories</span>
              </div>
              <div className="row clearfix albumcategory">
                <div className="col-md-6">
                  <img src={audio1} alt />
                  <div className="overlay">
                    <div className="text-overlay">
                      <span className="font-primary text-white">
                        Akhand Gyan
                      </span>
                      <div className="text-overlay-title">
                        <h2>
                          <a >Jeevan Ke Falsafe</a>
                        </h2>
                      </div>
                      <a
                        
                        className="btn btn-sm btn-solid btn-gradient circle text-uppercase wide ld-lp-carousel-filterable-btn split-inner"
                      >
                        <span>
                          <span className="btn-gradient-bg bg-gradient-primary-rl" />
                          <span className="btn-txt">Play Now</span>
                          <span className="btn-gradient-bg btn-gradient-bg-hover" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <a
                    className="liquid-overlay-link z-index-3"
                    
                  />
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
                    <img
                      src={audio3}
                      alt
                    />
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
                    <img src={audio5} alt />
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
              <div className="listContainer">
                
                <div>
                  <div className="listHeader">
                    <div className="listHeaderL">
                      <p className="listTitle">Devotional Bhajans</p>
                    </div>
                  </div>
                  <div className="listContent" id="playlist">
                    {/* Iterate over the bhajans array using map */}
                    {bhajans.map((bhajan) => (
                      <div key={bhajan.id} className="listItem">
                        <div className="itemImage">
                          <img src={bhajan.imageUrl} alt="" />
                          <button className="itemLength">
                            {bhajan.length}
                          </button>
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
                    {bhajanstwo.map((bhajan) => (
                      <div key={bhajan.id} className="listItem">
                        <div className="itemImage">
                          <img src={bhajan.imageUrl} alt="" />
                          <button className="itemLength">
                            {bhajan.length}
                          </button>
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
                <div className="widget">
      <h3 className="widget-title">Categories</h3>
      <List>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <ListItemButton onClick={() => handleCategoryClick(index)} className={openCategory === index ? 'open' : ''}>
              {openCategory === index ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <ListItemText  primary={category.name} />
            </ListItemButton>
            {openCategory === index && (
              <List component="div" disablePadding>
                {category.subcategories.map((subcategory, subIndex) => (
                  <React.Fragment key={subIndex}>
                    <ListItemButton onClick={() => handleSubCategoryClick(subIndex)} className={openSubCategory === subIndex ? 'open' : ''}>
                      {openSubCategory === subIndex ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                      <ListItemText  primary={subcategory.name} />
                    </ListItemButton>
                    {openSubCategory === subIndex && subcategory.subsubcategories && (
                      <List component="div" disablePadding>
                        {subcategory.subsubcategories.map((subsubcategory, subsubIndex) => (
                          <React.Fragment key={subsubIndex}>
                            <ListItemButton onClick={() => handleSubSubCategoryClick(subsubIndex)} className={openSubSubCategory === subsubIndex ? 'open' : ''}>
                              {openSubSubCategory === subsubIndex ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                              <ListItemText primary={subsubcategory.name} />
                            </ListItemButton>
                            {openSubSubCategory === subsubIndex && subsubcategory.subsubsubcategories && (
                              <List component="div" disablePadding>
                                {subsubcategory.subsubsubcategories.map((subsubsubcategory, subsubsubIndex) => (
                                  <ListItemButton key={subsubsubIndex} className="sub-sub-sub-item">
                                    <ListItemText primary={subsubsubcategory} />
                                  </ListItemButton>
                                ))}
                              </List>
                            )}
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </React.Fragment>
                ))}
              </List>
            )}
            {index !== categories.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
                </div>
              </div>
            
           
        
            </div>
            
          </div>
          
        </div>
        
      </section>
    
      <div style={{backgroundColor:"#F6F2E8"}}>
     <div style={{marginLeft:"110px"}} className="heading-block bottommargin-sm topmargin noborder">
                 <h2
                      className="lh-115 mb-0"
                      data-fittext="true"
                      data-fittext-options='{"compressor":1, "maxFontSize":"maxFontSize", "minFontSize":"25"}'
                    >
                      <span className="text-gradient">
                        <span className="t600">Featured  Categories
</span>
                      </span>
                    </h2>
                <span className="text-gradient m-0 t400 font-size-26">Browse by audio categories</span>
              </div>

<div style={{padding:"0 20px"}} className="mb-8 carousel-container carousel-shadow-all carousel-nav-left carousel-nav-md carousel-dots-style4 ">
              <div
                className="carousel-items row"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":".carousel-item","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":-55,"rotateX":-1,"opacity":0},"animations":{"translateY":0,"rotateX":0,"opacity":1}}'
                data-lqd-flickity='{"cellAlign":"center","prevNextButtons":false,"buttonsAppendTo":"self","pageDots":false,"groupCells":true,"wrapAround":true,"pauseAutoPlayOnHover":false}'
              >
                {/* slider component */}
                <Audioslider />
              </div>
        </div>
        </div>
      <div className="play-bg" id="player">
        <div className="d-flex h-100">
          <div
            className="row d-flex flex-wrap justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <div className="d-none d-sm-block align-self-center col-md-3 mx-auto">
              <div className="meta-container">
                <span
                  data-amplitude-song-info="name"
                  className="song-name lh-1"
                >
                  Hare Krishna
                </span>
                <span
                  className="hidden-xs artist-name text-white lh-1"
                  data-amplitude-song-info="artist"
                >
                  Hare Krishna
                </span>
              </div>
            </div>
            <div className="col-md-4 align-self-center mx-auto playerbuttons">
              <div className="audiobtn d-flex align-items-center justify-content-center">
                <span className="amplitude-shuffle amplitude-shuffle-off">
                  <i className="fa fa-random" />
                </span>
                <span className="amplitude-prev ml-1">
                  <i className="text-white fa fa-backward" />
                </span>
                <span className="amplitude-play-pause mx-4 amplitude-paused">
                  <a className="btn btn-naked btn-icon-block btn-icon-top btn-icon-circle btn-icon-solid btn-icon-lg">
                    <span>
                      <span className="btn-icon  shadow">
                        <i className="fa fa-play" />
                      </span>
                    </span>
                  </a>
                </span>
                <span className="amplitude-next mr-1">
                  <i className="text-white fa fa-forward" />
                </span>
                <span className="amplitude-repeat-song amplitude-repeat-off amplitude-repeat-song-off">
                  <i className="fa fa-repeat" />
                </span>
              </div>
            </div>
            <div className="d-none d-sm-block col-md-3 align-self-center mx-auto range-slider">
              <div
                style={{ marginTop: "10px" }}
                className="d-flex align-items-center"
              >
                <span className="current-time">
                  <span className="amplitude-current-minutes">00</span>:
                  <span className="amplitude-current-seconds">00</span>
                </span>
                <ColorSlider />
                <span className="duration">
                  <span className="amplitude-duration-minutes">04</span>:
                  <span className="amplitude-duration-seconds">51</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioGallery;
