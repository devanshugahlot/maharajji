import React from "react";
import "../assets/css/custom.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/theme-blue-orange_red.min.css";
import "../assets/css/theme-vendors.min.css";
import "../assets/css/theme.min.css";
import "../assets/css/vendor.min.css";
import "./Header.css";
import "../css/custom.css";
import './footer.css'
// import "../css/components/bs-datatable.css";
// import "../css/components/ion.rangeslider.css";
import img1 from "../assets/assetimg1.png"
const Footer = () => {
  return (
    <div>
      <footer
        className="main-footer bg-cover ld-lazyload"
        data-bg="url(https://www.djjs.org/images/new/footer.jpg)"
        style={{ backgroundColor: "#505050" }}
      >
        <div  className="vc_row pb-22">
          <div  className="inner-footer container pt-30 mt-60 ">
            <div    className="row  footpri">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title text-white">Useful Links</h3>
                <ul className="lqd-custom-menu reset-ul text-white">
                  <li>
                    <a >Home</a>
                  </li>
                  <li>
                    <a >Events</a>
                  </li>
                  <li>
                    <a >Blog</a>
                  </li>
                  <li>
                    <a >Livecast</a>
                  </li>
                  <li>
                    <a >E-book</a>
                  </li>
                  
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title text-white">Social Initiatives</h3>
                <ul className="lqd-custom-menu reset-ul text-white">
                  <li>
                    <a  target="_blank">
                    HisHoliness
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                    initiatives
                    </a>
                  </li>

                  <li>
                    <a target="_blank">
                    Video Gallery
                    </a>
                  </li>
                  
                  <li>
                    <a target="_blank">
                    Audio Gallery
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                    Image gallery
                    </a>
                  </li>
               
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title text-white">Spiritual Programs</h3>
                <ul className="lqd-custom-menu reset-ul text-white">
                  <li>
                    <a >Janmastami</a>
                  </li>
                  <li>
                    <a >Rath Yatra-Festival of Chariots</a>
                  </li>
                  <li>
                    <a > Bhagwat Katha</a>
                  </li>
                  <li>
                    <a >
                    Diwali
                    </a>
                  </li>
                  <li>
                    <a >Holi- Festival of Colors</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="bt-fade-white-015 pt-35 pb-35 mt-50">
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-6">
                <ul className="lqd-custom-menu reset-ul inline-nav">
                  <li>
                    <a target="_blank" >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a target="_blank" >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      Report Abuse
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lqd-column col-md-6 text-md-right">
                <p className="my-0">
                  <span style={{ fontSize: 15 }}>
                    © 2024  All rights
                    reserved.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
