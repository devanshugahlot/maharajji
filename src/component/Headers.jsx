import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();
  const [resnavopen, setResnavopen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutHovered(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuIconClick = () => {
    setResnavopen(!resnavopen);
  };

  const handleWisdomClick = () => {
    setIsAboutHovered(!isAboutHovered);
  };

  const closeResNav = () => {
    setResnavopen(false);
  };

  return (
    <div className="top-header">
      <div className="main-navbar-div">
        <div onClick={() => navigate("/")} className="navbar-logo-div">
          <img
            style={{ width: "70px", cursor: "pointer" }}
            src="https://www.djjs.org/images/logo-dark@2x.png"
            alt=""
          />
        </div>
        <div className="navbar-all-list">
          <ul className={isMenuOpen ? "open" : ""}>
            <li onClick={() => navigate("/hisholiness")}>HisHoliness</li>
            <li
              style={{ alignItems: "center", display: "flex" }}
              onClick={handleWisdomClick}
            >
              Wisdom
              <IoMdArrowDropdown />
              {isAboutHovered && (
                <div className="dropdown">
                  <ul>
                    <li onClick={() => navigate("/brahmgyan")}>Brahm Gyan</li>
                    <li onClick={() => navigate("/akhandgyan")}>
                      Akhand Gyan{" "}
                    </li>
                    <li onClick={() => navigate("/blog")}>Blog</li>
                    <li onClick={() => navigate("/video-gallery")}>
                      Video Gallery
                    </li>
                    <li onClick={() => navigate("/audio-gallery")}>
                      Audio Gallery
                    </li>
                    <li onClick={() => navigate("/daily-divine-inspiration")}>
                      Daily Divine Inspiration(Charaiveti)
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={() => navigate("/initiatives")}>Initiatives</li>
            <li onClick={() => navigate("/events")}>News</li>
            <li onClick={() => navigate("/webcast")}>Webcast</li>
            <li onClick={() => navigate("/radio")}>Radio</li>
            <li onClick={() => navigate("/contribute")}>Contribute</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
          <div className="menu-icons" onClick={handleMenuIconClick}>
            <IoMenu />
          </div>
        </div>
        {resnavopen && (
          <div className="responsive-navbars">
            <ul>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/hisholiness");
                }}
              >
                HisHoliness
              </li>
              <li
                style={{ alignItems: "center", display: "flex" }}
                onClick={handleWisdomClick}
              >
                Wisdom
                <IoMdArrowDropdown />
                {isAboutHovered && (
                  <div className="dropdown">
                    <ul>
                      <li
                        onClick={() => {
                          closeResNav();
                          navigate("/brahmgyan");
                        }}
                      >
                        Brahm Gyan
                      </li>
                      <li
                        onClick={() => {
                          closeResNav();
                          navigate("/akhandgyan");
                        }}
                      >
                        Akhand Gyan
                      </li>
                      <li
                        onClick={() => {
                          closeResNav();
                          navigate("/blog");
                        }}
                      >
                        Blog
                      </li>
                      <li
                        onClick={() => {
                          closeResNav();
                          navigate("/video-gallery");
                        }}
                      >
                        Video Gallery
                      </li>
                      <li
                        onClick={() => {
                          closeResNav();
                          navigate("/audio-gallery");
                        }}
                      >
                        Audio Gallery
                      </li>
                      <li
                        onClick={() => {
                          closeResNav();
                          navigate("/daily-divine-inspiration");
                        }}
                      >
                        Daily Divine Inspiration(Charaiveti)
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/initiatives");
                }}
              >
                Initiatives
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/events");
                }}
              >
                News
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/webcast");
                }}
              >
                Webcast
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/radio");
                }}
              >
                Radio
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/contribute");
                }}
              >
                Contribute
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headers;
