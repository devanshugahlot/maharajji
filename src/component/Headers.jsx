import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import img1 from "../assets/assetimg1.png"

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
    <div  className="top-header">
      <div className="main-navbar-div">
        <div style={{cursor:"pointer"}} onClick={() => navigate("/")} className="navbar-logo-div">
          <img  
            src="https://bhurijanadasa.com/wp-content/uploads/2020/12/logo-bhurijana-dark-300x96.png"
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
             Media
              <IoMdArrowDropdown />
              {isAboutHovered && (
                <div className="dropdown">
                  <ul>
                    {/* <li onClick={() => navigate("/brahmgyan")}>Brahm Gyan</li> */}
                    {/* <li onClick={() => navigate("/akhandgyan")}>
                      Akhand Gyan{" "}
                    </li> */}
                    {/* <li </li> */}
                    <li onClick={() => navigate("/video-gallery")}>
                      Video Gallery
                    </li>
                    <li onClick={() => navigate("/audio-gallery")}>
                      Audio Gallery
                    </li>
                    <li onClick={() => { closeResNav(); navigate("/ImageGallery"); }}>
                        Image gallery 
                      </li>
                    <li onClick={() => navigate("/Ebooks")}>
                      E-book
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={() => navigate("/initiatives")}>Initiatives</li>
            <li onClick={() => navigate("/events")}>Events</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
            <li onClick={() => navigate("/Livecast")}>Livecast</li>
            {/* <li onClick={() => navigate("/contribute")}>Contribute</li> */}
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
          <div className="menu-icons" onClick={handleMenuIconClick}>
            <IoMenu />
          </div>
          <div className="BHURIJANA">
            <img 
              src="https://bhurijanadasa.com/wp-content/uploads/2020/12/logo-bhurijana-dark-300x96.png"
              alt=""
            />
          </div>
        </div>
        {resnavopen && (
          <div className="responsive-navbars">
            <ul>
            <li
                onClick={() => {
                  closeResNav();
                  navigate("/");
                }}
              >
                Home
              </li>
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
               Media
                <IoMdArrowDropdown />
                {isAboutHovered && (
  <div className="dropdown">
    <ul>
      <li onClick={() => { closeResNav(); navigate("/video-gallery"); }}>
        Video Gallery
      </li>
      <li onClick={() => { closeResNav(); navigate("/audio-gallery"); }}>
        Audio Gallery
                      </li>
                      <li onClick={() => { closeResNav(); navigate("/ImageGallery"); }}>
                        Image gallery 
                      </li>
      <li onClick={() => { closeResNav(); navigate("/Ebooks"); }}>
        E-book
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
                Events
              </li>
              <li
                onClick={() => {
                  closeResNav();
                  navigate("/Livecast");
                }}
              >
                Webcast
              </li>
              <li
                onClick={() => navigate("/blog")}>Blog
              </li>
              {/* <li
                onClick={() => {
                  closeResNav();
                  navigate("/contribute");
                }}
              >
                Contribute
              </li> */}
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
