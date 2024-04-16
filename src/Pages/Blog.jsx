import React, { useState } from "react";
import "./brahmgyan.css";
import { convertToIST } from "../helpers/formatFunctions";
import { useNavigate } from "react-router-dom";
import Loading from "../loder/Loading";
import ResponsiveDrawer from "../component/Dropdown/Dropdown";
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
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"; // Update this line

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

const Blog = () => {
  const navigate = useNavigate("");

  const initialPostsToShow = 4;
  const postsToLoad = 2;

  const [postsToShow, setPostsToShow] = useState(initialPostsToShow);
  const loadMorePosts = () => {
    setPostsToShow(postsToShow + postsToLoad);
  };
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null); // State to manage which subcategory is open

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

  const posts = [
    {
      _id: 1,
      heading: "Firm, Resolute & Stout-Hearted Mother of King Bharata - SHAKUNTALA!",
      subHeading: "Do I have the success that I thought I would have? Where am I going with my life? Have I been able t…",
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
      subHeading: "In Indian classic literature like Ramayan, Mahabharata and the compendiums documented by Rishis in t…",
      images: [
        "https://www.djjs.org/uploads/blog/2b3916f02f98b2302094f78bab7845f9.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
    {
      _id: 3,
      heading: "योगासन क्यों करें?",
      subHeading: "अखण्ड ज्ञान का यह लेख, आपको इस सच से अवगत कराएगा कि इन आधुनिक तकनीकों और प्राच…",
      images: [
        "https://www.djjs.org/uploads/blog/djjsblog_5346035d93884d8f6.35601679.jpg  ",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
    {
      _id: 4,
      heading: "होली पर्व - बुरा मानें या न मानें?",
      subHeading: "आएँ, अपने मन को ईश्वरीय रंग में रंग कर इस पर्व की बिगड़ी हुई सूरत को फिर से खूबस�…",
      images: [
        "https://www.djjs.org/uploads/blog/djjsblog_5246035d938844923.67234180.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },


    {
      _id: 5,
      heading: "God is Both- Just and Merciful! ",
      subHeading: "Is God in one place or is He All-pervading? Is God Just as well as Merciful?",
      images: [
        "https://www.djjs.org/uploads/blog/ae1a4f76f0be3be0fb82db40de5b69c1.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },


    {
      _id: 6,
      heading: "Pushkaram – Embodiment of Indian Environmentalism!",
      subHeading: "Love & reverence for all elements of universe is innate in Indian culture. Most of our festivals…",
      images: [
        "https://www.djjs.org/uploads/blog/9fa4dc2565547d567cb1a6124b3aa17c.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },



  ];
  // const [openCategory, setOpenCategory] = useState(null);
  // const [openSubCategory, setOpenSubCategory] = useState(null);
  const [openSubSubCategory, setOpenSubSubCategory] = useState(null); // State to manage which subsubcategory is open

  const handleSubSubCategoryClick = (index) => {
    if (openSubSubCategory === index) {
      setOpenSubSubCategory(null);
    } else {
      setOpenSubSubCategory(index);
    }
  };
  return (
    <div>
      {/* Your JSX code */}
      <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
        <div className="titlebar-inner py-5">
          <div className="container titlebar-container">
            <div className="row titlebar-container">
              <div className="titlebar-col col-md-6">
                <h1 className="font-size-26 mb-1">Blogs</h1>
                <p className="font-size-14 text-fade-dark-06">
                  Swing with the divine melodies
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
                    <span>Blogs</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="content" className="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row">
              <div className="col-md-8 nobottommargin clearfix">
                <div className="liquid-blog-posts">
                  <div
                    className="liquid-blog-grid row"
                    data-liquid-masonry="true"
                  >
                    {posts.slice(0, postsToShow).map((post) => (
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
                <div className="text-center">
                  <a
                    id="loadmore"
                    onClick={loadMorePosts}
                    className="btn btn-solid text-uppercase btn-lg semi-round btn-bordered border-thin font-size-12 font-weight-bold ltr-sp-2 px-2 p-xs-0"
                  >
                    <span>
                      <span className="btn-txt">Load More</span>
                      <span className="btn-icon">
                        <i className="icon-ion-ios-arrow-forward" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-md-offset-1 sidebar-container">
                <aside className="main-sidebar">
                  <div className="widget widget_search mt-0">
                    <form
                      role="search"
                      method="post"
                      className="search-form"
                      action="https://www.djjs.org/blog/search"
                    >
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search…"
                        />
                      </label>
                      <input type="submit" className="search-submit" />
                    </form>
                  </div>
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
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
