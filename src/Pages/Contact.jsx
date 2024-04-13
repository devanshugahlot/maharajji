import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("india");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      <section id="content" className="content">
        <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
          <div className="titlebar-inner py-5">
            <div className="container titlebar-container">
              <div className="row titlebar-container">
                <div className="titlebar-col col-md-6">
                  <h1 className="font-size-26 mb-1">Contact Us</h1>
                </div>
                <div className="titlebar-col col-md-6 text-md-right">
                  <ol className="breadcrumb reset-ul inline-nav">
                    <li>
                      <a href="index.html">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrap pt-5 nobottompadding">
          <div className="container topmar">
            <div className="row">
              <div className="lqd-column col-md-12">
                <div className="row">
                  <div className="lqd-column col-md-3 col-sm-8">
                    <h2 className="font-size-24 font-weight-bold">
                      <small>
                        <i className="icon-liquid_map_pin mr-2 fa-1x" />
                      </small>{" "}
                      New Delhi, India
                    </h2>
                    <p className="font-size-14">
                      Plot-3, Pocket-OCF,Pitampura Extension, Delhi - 110034,
                      India
                    </p>
                    <hr className="w-30 ml-0 border-color-primary" />
                    <p className="font-size-14">
                      +91-11-27020666, 27024555 <br />{" "}
                      <a href="cdn-cgi/l/email-protection.html#563f38303916323c3c2578392431">
                        <span
                          className="__cf_email__"
                          data-cfemail="0861666e67486c62627b26677a6f"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="lqd-column col-md-3 col-sm-8">
                    <h2 className="font-size-24 font-weight-bold">
                      <small>
                        <i className="icon-liquid_map_pin mr-2 fa-1x" />
                      </small>{" "}
                      Ontario, Canada
                    </h2>
                    <p className="font-size-14">
                      24 Taber Road, Etobicoke, ON M9W 3A5
                      <br />
                      Main Intersection Rexdale BLW / Kipling Av
                    </p>
                    <hr className="w-30 ml-0 border-color-primary" />
                    <p className="font-size-14">
                      1-416-746-7100, 1-416-312-7211
                      <br />{" "}
                      <a href="cdn-cgi/l/email-protection.html#f89c918e81999281978c919b9996999c99b89f95999194d69b9795">
                        <span
                          className="__cf_email__"
                          data-cfemail="b5d1dcc3ccd4dfccdac1dcd6d4dbd4d1d4f5d2d8d4dcd99bd6dad8"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="lqd-column col-md-3 col-sm-8">
                    <h2 className="font-size-24 font-weight-bold">
                      <small>
                        <i className="icon-liquid_map_pin mr-2 fa-1x" />
                      </small>{" "}
                      New York, USA
                    </h2>
                    <p className="font-size-14">
                      2026 Grand Ave, Baldwin, New York, 11510 United States
                    </p>
                    <hr className="w-30 ml-0 border-color-primary" />
                    <p className="font-size-14">
                      718-463-3710 <br />{" "}
                      <a href="cdn-cgi/l/email-protection.html#dfbbb5b5acedefede99fb8b2beb6b3f1bcb0b2">
                        <span
                          className="__cf_email__"
                          data-cfemail="7e1a14140d4c4e4c483e19131f1712501d1113"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="lqd-column col-md-3 col-sm-8">
                    <h2 className="font-size-24 font-weight-bold">
                      <small>
                        <i className="icon-liquid_map_pin mr-2 fa-1x" />
                      </small>{" "}
                      London, UK
                    </h2>
                    <p className="font-size-14">
                      96D West End Lane Hayes Middlesex UB3 5LX, UK
                    </p>
                    <hr className="w-30 ml-0 border-color-primary" />
                    <p className="font-size-14">
                      0044 (0) 208 754 9306 <br />{" "}
                      <a href="cdn-cgi/l/email-protection.html#b6d2dcdcc584868480f6d1dbd7dfda98d5d9db">
                        <span
                          className="__cf_email__"
                          data-cfemail="b7c499d5dfd6dcc3dec7c5deced6d5dfd6c5c3def7d3ddddc499d8c5d0"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mapbg bottommargin topmargin">
              <h2 className="text-gradient">Our Centers</h2>
              <div className="tabs tabs-nav-justified tabs-nav-underlined tabs-nav-active-underlined">
                <ul className="nav tabs-nav" role="tablist">
                  <li
                    role="presentation"
                    className={activeTab === "india" ? "h5 active" : "h5"}
                  >
                    <a
                      href="#india"
                      aria-expanded="false"
                      aria-controls="ld-tab-pane-1"
                      role="tab"
                      data-toggle="tab"
                      onClick={() => handleTabClick("india")}
                    >
                      India
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={activeTab === "others" ? "h5 active" : "h5"}
                  >
                    <a
                      href="#others"
                      aria-expanded={activeTab === "others" ? "true" : "false"}
                      aria-controls="ld-tab-pane-2"
                      role="tab"
                      data-toggle="tab"
                      onClick={() => handleTabClick("others")}
                    >
                      International Centers
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-3 col-md-3 tabs-content">
                    <div
                      className={`tabs-pane fade topmargin-sm ${
                        activeTab === "others" ? "active in" : ""
                      }`}
                      id="others"
                    >
                      <a className="topmar" href="#" title="aas">
                        Australia
                      </a>
                      <a href="#" title="abh">
                        Baharin
                      </a>
                      <a href="#" title="acn">
                        Canada
                      </a>
                      <a href="#" title="adb">
                        Dubai
                      </a>
                      <a href="#" title="agm">
                        Germany
                      </a>
                      <a href="#" title="agc">
                        Greece
                      </a>
                      <a href="#" title="agn">
                        Guyana
                      </a>
                      <a href="#" title="atl">
                        Italy
                      </a>
                      <a href="#" title="alb">
                        Lebanon
                      </a>
                      <a href="#" title="anp">
                        Nepal
                      </a>
                      <a href="#" title="anz">
                        New Zealand
                      </a>
                      <a href="#" title="aph">
                        Philippines
                      </a>
                      <a href="#" title="asz">
                        Switzerland
                      </a>
                      <a href="#" title="auk">
                        United Kingdom
                      </a>
                      <a id="usa" href="#" title="aus">
                        United States
                      </a>
                    </div>
                    <div
                      className={`tabs-pane fade topmargin-sm ${
                        activeTab === "india" ? "active in" : ""
                      }`}
                      id="india"
                    >
                      <select id="branches">
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu & Kashmir">
                          Jammu &amp; Kashmir
                        </option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="rj">Rajasthan</option>
                        <option value="Rajasthan">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                      <div id="branchresults" />
                      <a className="topmar" href="#" title="as">
                        Assam
                      </a>
                      <a href="#" title="bh">
                        Bihar
                      </a>
                      <a href="#" title="ch">
                        Chhattisgarh
                      </a>
                      <a href="#" title="gj">
                        Gujarat
                      </a>
                      <a href="#" title="hr">
                        Haryana
                      </a>
                      <a href="#" title="hp">
                        Himachal Pradesh
                      </a>
                      <a href="#" title="jk">
                        Jammu &amp; Kashmir
                      </a>
                      <a href="#" title="kn">
                        Karnataka
                      </a>
                      <a href="#" title="mp">
                        Madhya Pradesh
                      </a>
                      <a href="#" title="mh">
                        Maharashtra
                      </a>
                      <a
                        className="button button-circle button-small"
                        href="#"
                        title="nd"
                      >
                        Delhi
                      </a>
                      <a href="#" title="od">
                        Odisha
                      </a>
                      <a href="#" title="pb">
                        Punjab
                      </a>
                      <a href="#" title="rj">
                        Rajasthan
                      </a>
                      <a href="#" title="tn">
                        Tamil Nadu
                      </a>
                      <a href="#" title="ap">
                        Telangana
                      </a>
                      <a href="#" title="up">
                        Uttar Pradesh
                      </a>
                      <a href="#" title="uk">
                        Uttarakhand
                      </a>
                      <a href="#" title="wb">
                        West Bengal
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-9 col-md-9 mapbgimg">
                    <div
                      className="tresult"
                      style={{ display: "flex", flexWrap: "wrap" }}
                      data-custom-animations="true"
                      data-ca-options='{"triggerHandler":"inview","animationTarget":".col-sm-6","animateTargetsWhenVisible":"true","duration":"1400","delay":"180","easing":"easeOutQuint","initValues":{"translateY":75,"scale":0.75,"opacity":0},"animations":{"translateY":0,"scale":1,"opacity":1}}'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
