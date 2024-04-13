import React from "react";
import "./Webcast.css";
const Webcast = () => {
  return (
    <div>
      <div className="content-wrap pt-5 nobottompadding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/XMI8ewcgMGA?autoplay=1&showinfo=0"
                frameBorder={0}
                allowFullScreen
              />
              <h1 className="h3 mt-2 mb-1 mb-1">
                LIVE Webcast | Holi Special Webcast | Cherishing Guru-Disciple
                Bond | 10th Mar 2024 | #DJJSSatsang
              </h1>
              <p>February 11, 2024 | 11:00 am</p>
              <div className="row">
                <div className="col-md-12 text-center mt-3 mb-3">
                  <a
                    target="_blank"
                    href="https://youtu.be/XMI8ewcgMGA"
                    className=" watch-on-youtube btn btn-default text-uppercase btn-xlg circle btn-solid font-size-12 lh-15 font-weight-bold ltr-sp-05 mb-2"
                  >
                    <span>
                      <span className="btn-txt ">Watch on Youtube</span>
                      <span className="btn-icon">
                        <i className="fa fa-youtube" style={{ fontSize: 17 }} />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webcast;
