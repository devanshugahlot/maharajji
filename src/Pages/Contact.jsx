import React, { useState } from "react";
import "./Contact.css";
import { Button, Input } from "@mui/material";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("india");

  // const handleTabClick = (tabId) => {
  //   setActiveTab(tabId);
  // };
  return (
    <div className="main-support">
    <div className="main-container-support">
      <div className="supprt-left-container">
        <div className="leftimage">
          <img
            width={"40%"}
            src="https://www.bizgurukul.com/Biz/img/callback_vector.png"
            alt=""
          />
        </div>
        <div class="location-txt">
          <h3>Email:</h3>
          <p>harekrishna@gmail.com</p>
        </div>
        <div class="location-txt">
          <h3>Whatsapp:</h3>
          <p>+91 1234567890</p>
        </div>
        <div class="location-txt">
          <h3>Registered Address:</h3>
          <p>
            1305, 13th Floor, Pragati Tower Rajendra Place New Delhi
            110008
          </p>
        </div>
      </div>

      <div className="supprt-right-container">
        <div className="support-right-header">
          <h3>Request For CallBack</h3>
          {/* <p>
            To know more about courses offered by us kindly fill in the
            below mention details you will get a call back soon.
          </p> */}
        </div>
        <div className="support-input-main-div">
          <div className="support-input-row-1">
            <input
             
              type="text"
              placeholder="Name"
            />
            <input
            
              type="Email"
              placeholder="Email Id"
            />
          </div>
          <div className="support-input-row-2">
            <input
             
              type="number"
              placeholder="Mobile No."
            />
            <textarea
             
              name="Message"
              placeholder="Message"
              id=""
              cols="20"
              rows="3"
            ></textarea>
            <button
              className="support-submit-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
