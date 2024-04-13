import React from "react";
import "../assets/css/custom.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/theme-blue-orange_red.min.css";
import "../assets/css/theme-vendors.min.css";
import "../assets/css/theme.min.css";
import "../assets/css/vendor.min.css";
import "./Header.css";
import "../css/custom.css";
// import "../css/components/bs-datatable.css";
// import "../css/components/ion.rangeslider.css";
const Footer = () => {
  return (
    <div>
      <footer
        className="main-footer bg-cover ld-lazyload"
        data-bg="url(https://www.djjs.org/images/new/footer.jpg)"
        style={{ backgroundColor: "#fe688b" }}
      >
        <div className="vc_row pb-20">
          <div className="inner-footer container pt-30 mt-60">
            <div className="row">
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title text-white">Useful Links</h3>
                <ul className="lqd-custom-menu reset-ul text-white">
                  <li>
                    <a href="kumbh.html">Kumbh</a>
                  </li>
                  <li>
                    <a href="about-djjs.html">About DJJS</a>
                  </li>
                  <li>
                    <a href="login.html">My Account</a>
                  </li>
                  <li>
                    <a href="upcomingevents.html">Upcoming Events</a>
                  </li>
                  <li>
                    <a href="newsletter.html">Subscribe Newsletter</a>
                  </li>
                  <li>
                    <a href="meditation.html">Meditation</a>
                  </li>
                  <li>
                    <a href="radio.html">Radio Divya Jyoti</a>
                  </li>
                  <li>
                    <a href="akhandgyan.html">Akhand Gyan</a>
                  </li>
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title text-white">Social Initiatives</h3>
                <ul className="lqd-custom-menu reset-ul text-white">
                  <li>
                    <a href="aarogya/index.html" target="_blank">
                      Aarogya
                    </a>
                  </li>
                  <li>
                    <a href="antardrishti/index.html" target="_blank">
                      Antardrishti
                    </a>
                  </li>
                  <li>
                    <a href="http://www.antarkranti.org/" target="_blank">
                      Antarkranti
                    </a>
                  </li>
                  <li>
                    <a href="manthan/index.html" target="_blank">
                      Manthan
                    </a>
                  </li>
                  <li>
                    <a href="santulan/santulan.html" target="_blank">
                      Santulan
                    </a>
                  </li>
                  <li>
                    <a href="sanrakshan/sanrakshan.html" target="_blank">
                      Sanrakshan
                    </a>
                  </li>
                  <li>
                    <a href="bodh/bodh.html" target="_blank">
                      Bodh
                    </a>
                  </li>
                  <li>
                    <a href="kamdhenu.html" target="_blank">
                      Kamdhenu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title text-white">Spiritual Programs</h3>
                <ul className="lqd-custom-menu reset-ul text-white">
                  <li>
                    <a href="shrimadbhagwatkatha.html">Shrimad Bhagwat Katha</a>
                  </li>
                  <li>
                    <a href="shriramkatha.html">Shri Ram Katha</a>
                  </li>
                  <li>
                    <a href="devibhagwatkatha.html">Devi Bhagwat Katha</a>
                  </li>
                  <li>
                    <a href="divyajyotivedmandir.html">
                      Divya Jyoti Ved Mandir
                    </a>
                  </li>
                  <li>
                    <a href="bhajan-sandhya.html">Bhajan Sandhya</a>
                  </li>
                  <li>
                    <a href="jagran-chowki.html">Jagran and Chowki</a>
                  </li>
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="widget-title text-white">
                      Subscribe Newsletter
                    </h3>
                    <div className="ld-sf ld-sf--input-solid ld-sf--button-solid ld-sf--size-xs ld-sf--circle ld-sf--border-thin ld-sf--button-show ld-sf--button-inline">
                      <form
                        id="ld_subscribe_form"
                        className="ld_sf_form1"
                        action="https://www.djjs.org/news/subscribe"
                        name="mc-embedded-subscribe-form"
                        method="post"
                      >
                        <p className="ld_sf_paragraph pr-2">
                          <input
                            type="email"
                            className="ld_sf_text"
                            id="footer-email"
                            name="email"
                            placeholder="Your email"
                          />
                        </p>
                        <button
                          type="submit"
                          className="ld_sf_submit px-4"
                          id="footer-subscribe"
                          aria-label="Submit"
                        >
                          <span className="submit-icon">
                            <i className="icon-arrow-right-material" />
                          </span>
                          <span className="ld-sf-spinner">
                            <span>Sending </span>
                          </span>
                        </button>
                      </form>
                      <div id="footer-response" className="ld_sf_response" />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-12">
                    <h3 className="widget-title text-white">DJJS Mobile App</h3>
                    <ul className="social-icon social-icon-md">
                      <li>
                        <a
                          target="_blank"
                          aria-label="DJJS Android App"
                          href="https://play.google.com/store/apps/details?id=org.djjs.djjsapp"
                        >
                          <i className="icon-ion-logo-android font-size-30" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          aria-label="DJJS IOS App"
                          href="https://itunes.apple.com/us/app/djjs/id1189587046"
                        >
                          <i className="icon-ion-logo-apple font-size-30" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-12">
                    <h3 className="widget-title text-white">Follow us</h3>
                    <ul className="social-icon social-icon-md">
                      <li>
                        <a
                          target="_blank"
                          aria-label="DJJS Facebook"
                          href="https://facebook.com/djjsworld"
                        >
                          <i className="icon-ion-logo-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          aria-label="DJJS Twitter"
                          href="https://twitter.com/djjsworld"
                        >
                          <i className="icon-ion-logo-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          aria-label="DJJS Youtube"
                          href="https://youtube.com/djjsworld"
                        >
                          <i className="icon-ion-logo-youtube" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          aria-label="DJJS Instagram"
                          href="https://instagram.com/djjsworld"
                        >
                          <i className="icon-ion-logo-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
                    <a target="_blank" href="terms-of-use.html">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="privacy-policy.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="reportabuse.html">
                      Report Abuse
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lqd-column col-md-6 text-md-right">
                <p className="my-0">
                  <span style={{ fontSize: 15 }}>
                    © 2024 Divya Jyoti Jagrati Sansthan Parivar. All rights
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
