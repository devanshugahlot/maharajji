import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <div>
      <header
        className={`main-header main-header-overlay ${
          isMenuOpen ? "menu-open" : ""
        }`}
        data-react-to-megamenu="true"
        data-sticky-header="true"
        data-sticky-options='{ "stickyTrigger": "first-section" }'
      >
        <div className="mainbar-wrap">
          <div className="megamenu-hover-bg" />
          <div className="container-fluid mainbar-container">
            <div className="mainbar">
              <div className="row mainbar-row align-items-lg-stretch px-4">
                <div className="col">
                  <div className="navbar-header">
                    <a
                      onClick={() => navigate("/")}
                      className="navbar-brand"
                      rel="home"
                    >
                      <span className="navbar-brand-inner">
                        <img
                          width={80}
                          className="logo-sticky"
                          src="https://www.djjs.org/images/logo-dark@2x.png"
                          alt="DJJS"
                        />
                        <img
                          width={80}
                          className="mobile-logo-default"
                          src="https://www.djjs.org/images/logo-dark@2x.png"
                          alt="DJJS"
                        />
                        <img
                          width={80}
                          className="logo-default"
                          src="https://www.djjs.org/images/logo-dark@2x.png"
                          alt="DJJS"
                        />
                      </span>
                    </a>
                    <button
                      
                      type="button"
                      className={`navbar-toggle nav-trigger style-mobile ${
                        !isMenuOpen ? "collapsed" : ""
                      }`}
                      onClick={toggleMenu}
                      aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="bars">
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                      </span>
                    </button>
                    
                  </div>
                </div>
                <div className="col">
                  <div
                    className={`collapse navbar-collapse ${
                      isMenuOpen ? "show" : ""
                    }`}
                    id="main-header-collapse"
                  >
                    <ul
                      id="primary-nav"
                      className="main-nav nav align-items-lg-stretch main-nav-hover-underline-1 justify-content-lg-center"
                      data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'
                    >
                      <li onClick={() => navigate("/hisholiness")} className>
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              His Holiness
                              <span
                                className="submenu-expander"
                                onClick={handleSubMenuToggle}
                              >
                                <i className="fa fa-angle-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        className="menu-item-has-children"
                        onMouseEnter={handleSubMenuToggle}
                        onMouseLeave={closeSubMenu}
                      >
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              Wisdom
                              <span className="submenu-expander">
                                <i className="icon-ion-ios-arrow-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                        <ul
                          className={`nav-item-children ${
                            isSubMenuOpen ? "show-submenu" : ""
                          }`}
                        >
                          <li>
                            <a href="brahmgyan.html">
                              <span className="link-icon" />
                              <span className="link-txt">
                                <span className="link-ext" />
                                <span className="txt">
                                  Brahm Gyan
                                  <span className="submenu-expander">
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="akhandgyan.html">
                              <span className="link-icon" />
                              <span className="link-txt">
                                <span className="link-ext" />
                                <span className="txt">
                                  Akhand Gyan Magazine
                                  <span className="submenu-expander">
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="blog.html">
                              <span className="link-icon" />
                              <span className="link-txt">
                                <span className="link-ext" />
                                <span className="txt">
                                  Blog
                                  <span className="submenu-expander">
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="gallery/videos.html">
                              <span className="link-icon" />
                              <span className="link-txt">
                                <span className="link-ext" />
                                <span className="txt">
                                  Video Gallery
                                  <span className="submenu-expander">
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="gallery/audio.html">
                              <span className="link-icon" />
                              <span className="link-txt">
                                <span className="link-ext" />
                                <span className="txt">
                                  Audio Gallery
                                  <span className="submenu-expander">
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="gallery/cc.html">
                              <span className="link-icon" />
                              <span className="link-txt">
                                <span className="link-ext" />
                                <span className="txt">
                                  Daily Divine Inspiration (Charaiveti)
                                  <span className="submenu-expander">
                                    <i className="fa fa-angle-down" />
                                  </span>
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li onClick={() => navigate("/initiatives")} className>
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              Initiatives
                              <span className="submenu-expander">
                                <i className="fa fa-angle-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li onClick={() => navigate("/events")} className>
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              News
                              <span className="submenu-expander">
                                <i className="fa fa-angle-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li onClick={() => navigate("/webcast")} className>
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">Webcast</span>
                          </span>
                        </a>
                      </li>
                      <li onClick={() => navigate("/radio")} className>
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              Radio
                              <span className="submenu-expander">
                                <i className="fa fa-angle-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li onClick={() => navigate("/contribute")} className>
                        <a>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              Contribute
                              <span className="submenu-expander">
                                <i className="fa fa-angle-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className>
                        <a onClick={() => navigate("/Contact")}>
                          <span className="link-icon" />
                          <span className="link-txt">
                            <span className="link-ext" />
                            <span className="txt">
                              Contact
                              <span className="submenu-expander">
                                <i className="fa fa-angle-down" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col text-right">
                  <div className="header-module">
                    <ul className="social-icon social-icon-sm">
                      <li>
                        <a
                          href="https://facebook.com/djjsworld"
                          aria-label="DJJS Facebook"
                          target="_blank"
                        >
                          <i className="icon-ion-logo-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/djjsworld"
                          aria-label="DJJS Twitter"
                          target="_blank"
                        >
                          <i className="icon-ion-logo-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtube.com/djjsworld"
                          aria-label="DJJS Youtube"
                          target="_blank"
                        >
                          <i className="icon-ion-logo-youtube" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com/djjsworld"
                          aria-label="DJJS Instagram"
                          target="_blank"
                        >
                          <i className="icon-ion-logo-instagram" />
                        </a>
                      </li>
                      <li className="lqd-show-on-mobile">
                        <a
                          role="button"
                          aria-label="Search DJJS"
                          id="searchicon"
                          data-ld-toggle="true"
                          data-toggle="collapse"
                          data-target="#search-1"
                          aria-controls="search-1"
                          aria-expanded="false"
                        >
                          <i className="icon-ld-search" />
                        </a>
                        <div className="ld-module-search">
                          <div
                            role="search"
                            className="ld-module-dropdown collapse"
                            id="search-list"
                            aria-expanded="false"
                          >
                            <h4>Select a search category</h4>
                            <ul className="p-0">
                              <li
                                data-ld-toggle="true"
                                data-toggle="collapse"
                                data-target="#search-1"
                                data-action="https://www.djjs.org/news/search"
                                data-name="search"
                                data-placeholder="Search News"
                              >
                                News
                              </li>
                              <li
                                data-ld-toggle="true"
                                data-toggle="collapse"
                                data-target="#search-1"
                                data-action="https://www.djjs.org/gallery/searchaudio"
                                data-name="search"
                                data-placeholder="Search Audios"
                              >
                                Audios
                              </li>
                              <li
                                data-ld-toggle="true"
                                data-toggle="collapse"
                                data-target="#search-1"
                                data-action="https://www.djjs.org/gallery/videos/search"
                                data-name="search"
                                data-placeholder="Search Videos"
                              >
                                Videos
                              </li>
                              <li
                                data-ld-toggle="true"
                                data-toggle="collapse"
                                data-target="#search-1"
                                data-action="https://www.djjs.org/search"
                                data-name="q"
                                data-placeholder="Search Site"
                              >
                                Search Site
                              </li>
                            </ul>
                          </div>
                          <div
                            role="search"
                            className="ld-module-dropdown collapse"
                            id="search-1"
                            aria-expanded="false"
                          >
                            <div className="ld-search-form-container">
                              <form
                                id="searchform"
                                role="search"
                                method="get"
                                action="https://www.djjs.org/search"
                                className="ld-search-form"
                              >
                                <input
                                  id="searchinput"
                                  type="search"
                                  placeholder="Search site"
                                  defaultValue
                                  name="q"
                                />
                                <span
                                  role="search"
                                  className="input-icon"
                                  data-ld-toggle="true"
                                  data-toggle="collapse"
                                  data-target="#search-1"
                                  aria-controls="search-1"
                                  aria-expanded="false"
                                >
                                  <i className="icon-ld-search" />
                                </span>
                              </form>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
