import React, { useState } from "react";
import "./brahmgyan.css";
import { convertToIST } from "../helpers/formatFunctions";
import { useNavigate } from "react-router-dom";
import Loading from "../loder/Loading";
import "./Blog.css";
const Blog = () => {
  const navigate = useNavigate("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const initialPostsToShow = 2; // Initial number of posts to display
  const postsToLoad = 2; // Number of posts to load each time "Load More" is clicked

  const [postsToShow, setPostsToShow] = useState(initialPostsToShow);
  const loadMorePosts = () => {
    setPostsToShow(postsToShow + postsToLoad);
  };
  const posts = [
    {
      _id: 1,
      heading: "Example Heading",
      subHeading: "Example Subheading",
      images: [
        "https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
    {
      _id: 1,
      heading: "Example Heading",
      subHeading: "Example Subheading",
      images: [
        "https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
    {
      _id: 1,
      heading: "Example Heading",
      subHeading: "Example Subheading",
      images: [
        "https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
    {
      _id: 2,
      heading: "Example Heading",
      subHeading: "Example Subheading",
      images: [
        "https://www.djjs.org/uploads/blog/bbd739969d84fd8b124b65c3883aaf3d.jpg",
        "image2.jpg",
        "image3.jpg",
      ],
      category: "sdfg",
      author: "Example Author",
      createdAt: "2024-04-12T10:38:23.367+00:00",
    },
  ];
  const categories = [
    "COVID19",
    "meditation",
    "samadhi",
    "psychology",
    "lifestyle",
    "practical spirituality",
    "supreme science",
    "philosophy",
    "vedas",
    "divine knowledge",
    "perfect master",
    "pure consciousness",
  ];
  return (
    <div>
      <section id="content" className="content">
        <div className="content-wrap">
          <div className="containerst clearfix">
            <div className="row">
              <div className="col-md-3   sidebar-container">
                <aside className="">
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

                  <div className=" widget_categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <div className="dropdown-subcategory">
                        <ul
                          className={`dropdown-menu ${
                            isDropdownOpen ? "show" : ""
                          }`}
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li   className={`${
                            isSubmenuOpen ? "show" : ""
                          }`}>
                            <a className="dropdown-item" href="#">
                              Submenu »
                            </a>
                          </li>
                          
                        </ul>
                      </div>

                      {categories.map((item, index) => {
                        return (
                          <div className="dropdowns" key={index}>
                            <button
                              style={{ width: "200px" }}
                              onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen);
                                setIsSubmenuOpen(false); // Close submenu on category click
                              }}
                              onMouseOver={() => {
                                setIsSubmenuOpen(true); // Open submenu on mouseover
                              }}
                              className="btn dropdown-toggle"
                              type="button"
                              aria-expanded={isDropdownOpen ? "true" : "false"}
                            >
                              {item}
                            </button>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </aside>
              </div>
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
            </div>
          </div>
        </div>
      </section>
      <Loading />
    </div>
  );
};

export default Blog;
