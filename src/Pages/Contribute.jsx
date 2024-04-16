import React, { useState } from "react";
import "./Contribute.css";
const Contribute = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <section id="content" style={{ overflow: "visible" }}>
        <div className="content-wrap notoppadding nobottompadding">
          <div className="container topmargin bottommargin">
            <div className="row">
              <div className="col-sm-5 col-md-5 mb-4">
                <div className="shadow-1 p-4">
                  <div className="donation_form">
                    <h1
                      id="donatehead"
                      className="font-size-26 t600 ltr-sp-05 mt-0"
                    >
                      DONATE ONLINE
                    </h1>
                    <p>
                      We want our donors to choose where their contribution
                      goes. Choose the cause you're most passionate about or
                      select "General" and we'll make sure your donation goes
                      where it's most needed.
                    </p>
                    <form
                      action="https://www.djjs.org/contribute/process"
                      method="post"
                      className="contribute "
                      id="contribute"
                      name="contribute"
                    >
                      {currentStep === 1 && (
                        <fieldset>
                          <div className="row">
                            <div className="col-sm-12 amount-input">
                              <div className="form-group">
                                <label htmlFor="amount">Donation Amount*</label>
                                <br />
                                <span
                                  className="currency"
                                  style={{
                                    position: "absolute",
                                    bottom: "1.5rem",
                                    left: 25,
                                  }}
                                >
                                  ₹
                                </span>
                                <div className="input-group">
                                  <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user" />
                                  </span>
                                  <div className="input-group-prepend">
                                    <div className="input-group-text" />
                                  </div>
                                  <input
                                    className="form-control input-sm required amount pl-4"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    defaultValue={500}
                                    autoComplete="off"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label htmlFor="category">Cause*</label>
                                <select
                                  className="form-control input-sm required select"
                                  name="merchant_param1"
                                  id="cause"
                                >
                                  <option value="Spiritual Programs">
                                    Spiritual Programs
                                  </option>
                                  <option value="manthan">Daan Utsav</option>
                                  <optgroup label="Social Initiatives">
                                    <option value="kamdhenu">
                                      Kamdhenu (Indian Cow Breed Improvement
                                      &amp; Conservation Program)
                                    </option>
                                    <option value="manthan">
                                      Manthan (Holistic Education Program)
                                    </option>
                                    <option value="antardrishti">
                                      Antardrishti (Welfare Program for Visually
                                      Impaired)
                                    </option>
                                    <option value="antarkranti">
                                      Antarkranti (Prisoner Reformation Program)
                                    </option>
                                    <option value="bodh">
                                      Bodh (Drug Abuse Eradication Program)
                                    </option>
                                    <option value="santulan">
                                      Santulan (Gender Equality Program)
                                    </option>
                                    <option value="sanrakshan">
                                      Sanrakshan (Nature Conservation Program)
                                    </option>
                                    <option value="aarogya">
                                      Aarogya (Holistic Health Program)
                                    </option>
                                    <option value="samadhan">
                                      Samadhan (Disaster Management Program)
                                    </option>
                                    <option value="peace">PEACE Program</option>
                                  </optgroup>
                                  <option value="monthlydonation">
                                    Monthly Donation
                                  </option>
                                  <option value="sam">SAM Workshops</option>
                                  <option value="Others">General</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 my-3 donation_type">
                              <div className="form-group">
                                <div>
                                  <label className="radio-inline">
                                    <input
                                      type="radio"
                                      name="donation_type"
                                      defaultValue="general"
                                    />{" "}
                                    General Donation
                                  </label>
                                </div>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="donation_type"
                                    defaultValue="sponsorship"
                                  />{" "}
                                  Sponsorship/Installment
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 mb-3 sponsorship_type">
                              <div className="form-group">
                                <label htmlFor="amount">
                                  Sponsorship Type*
                                </label>
                                <br />
                                <div>
                                  <label className="radio-inline">
                                    <input
                                      type="radio"
                                      name="sponsorship_type"
                                      defaultValue="new"
                                    />{" "}
                                    New Sponsorship
                                  </label>
                                </div>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="sponsorship_type"
                                    defaultValue="existing"
                                  />{" "}
                                  Installment of a Sponsorship
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 existing_sponsorship">
                              <div className="form-group">
                                <label htmlFor="category">
                                  Sponsorship ID*
                                </label>
                                <input
                                  className="form-control input-sm required pl-4"
                                  type="text"
                                  name="sponsorship_id"
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                            <div className="col-sm-12 existing_sponsorship">
                              <div className="form-group">
                                <label htmlFor="category">Email*</label>
                                <input
                                  className="form-control input-sm required pl-4"
                                  type="text"
                                  name="sponsor_email"
                                  autoComplete="off"
                                />
                              </div>
                            </div>
                            <div className="col-sm-12 new_sponsorship">
                              <div className="form-group">
                                <label htmlFor="category">
                                  Sponsorship Duration
                                </label>
                                <select
                                  className="form-control input-sm required select"
                                  name="sponsorship_duration"
                                >
                                  <option value={12}>1 Year</option>
                                  <option value={24}>2 Year</option>
                                  <option value={36}>3 Year</option>
                                  <option value={48}>4 Year</option>
                                  <option value={60}>5 Year</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 new_sponsorship existing_sponsorship">
                              <div className="form-group">
                                <label htmlFor="category" id="installment_text">
                                  Installment Type
                                </label>
                                <select
                                  className="form-control input-sm required select"
                                  name="installment_frequency"
                                >
                                  <option value={1}>Monthly</option>
                                  <option value={3}>Quarterly</option>
                                  <option value={6}>Half Yearly</option>
                                  <option value={12}>Yearly</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 new_sponsorship">
                              <div className="form-group">
                                <label htmlFor="category" id="installment_text">
                                  No. of Sponsorships
                                </label>
                                <select
                                  className="form-control input-sm required select"
                                  name="sponsorship_count"
                                >
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                  <option value={9}>9</option>
                                  <option value={10}>10</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 sponsorship_amount">
                              Total Amount: ₹ <span id="sponsorship_amount" />
                            </div>
                          </div>
                          <div id="inr">
                            <input
                              onClick={handleNext}
                              type="button"
                              name="next"
                              className="next action-button"
                              defaultValue="Next"
                            />
                          </div>
                          <div id="usd">
                            <input
                              id="submitforeign"
                              type="image"
                              src="simages/donate_paypal.jpg"
                              border={0}
                              name="submit"
                              width={190}
                              alt="PayPal - The safer, easier way to pay online!"
                            />
                            <img
                              alt
                              border={0}
                              src="../www.paypalobjects.com/en_US/i/scr/pixel.gif"
                              width={1}
                              height={1}
                            />
                            <input
                              type="hidden"
                              name="cmd"
                              defaultValue="_s-xclick"
                            />
                            <input
                              type="hidden"
                              name="hosted_button_id"
                              defaultValue="NDGLCKTL78MHU"
                            />
                            <input
                              id="item_name"
                              type="hidden"
                              name="item_name"
                              defaultValue="Spiritual Programs"
                            />
                            <input
                              type="hidden"
                              name="cpp_header_image"
                              defaultValue="simages/paypal.jpg"
                            />
                            <input
                              type="hidden"
                              name="cancel_return"
                              defaultValue="contribute.html"
                            />
                            <input
                              type="hidden"
                              name="return"
                              defaultValue="contribute.html"
                            />
                            <input
                              type="hidden"
                              name="notify_url"
                              defaultValue="notify.html"
                            />
                            <input type="hidden" name="rm" defaultValue={2} />
                          </div>
                        </fieldset>
                      )}
                      {currentStep === 2 && (
                        <fieldset>
                          <div className="col-sm-12 col-md-12 mb-2 clearfix">
                            <a
                              href="javascript:void()"
                              className="pull-left previous"
                            >
                              Back
                            </a>
                            <a
                              className="pull-right dark"
                              href="#"
                              id="opensignin"
                            >
                              Login to auto fill
                            </a>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label htmlFor="fname">Full Name</label>
                                <input
                                  className="form-control input-sm required"
                                  placeholder="Name"
                                  type="text"
                                  name="fname"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                  className="form-control input-sm required"
                                  type="text"
                                  placeholder="Address"
                                  name="billing_address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                  className="form-control input-sm required"
                                  type="text"
                                  name="billing_city"
                                  placeholder="city"
                                />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label htmlFor="zip">Pincode</label>
                                <input
                                  maxLength={20}
                                  className="form-control input-sm required"
                                  type="text"
                                  name="billing_zip"
                                  placeholder="Pincode"
                                />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label htmlFor="state">State</label>
                                <select
                                  className="form-control input-sm select required"
                                  name="billing_state"
                                >
                                  <option value>Select</option>
                                  <option value="Andaman & Nicobar">
                                    Andaman &amp; Nicobar
                                  </option>
                                  <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                  </option>
                                  <option value="Arunachal Pradesh">
                                    Arunachal Pradesh
                                  </option>
                                  <option value="Assam">Assam</option>
                                  <option value="Bihar">Bihar</option>
                                  <option value="Chandigarh">Chandigarh</option>
                                  <option value="Chhattisgarh">
                                    Chhattisgarh
                                  </option>
                                  <option value="Dadra and Nagar Haveli">
                                    Dadra and Nagar Haveli
                                  </option>
                                  <option value="Daman & Diu">
                                    Daman &amp; Diu
                                  </option>
                                  <option value="Delhi">Delhi</option>
                                  <option value="Goa">Goa</option>
                                  <option value="Gujarat">Gujarat</option>
                                  <option value="Haryana">Haryana</option>
                                  <option value="Himachal Pradesh">
                                    Himachal Pradesh
                                  </option>
                                  <option value="Jammu & Kashmir">
                                    Jammu &amp; Kashmir
                                  </option>
                                  <option value="Jharkhand">Jharkhand</option>
                                  <option value="Karnataka">Karnataka</option>
                                  <option value="Kerala">Kerala</option>
                                  <option value="Lakshadweep">
                                    Lakshadweep
                                  </option>
                                  <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                  </option>
                                  <option value="Maharashtra">
                                    Maharashtra
                                  </option>
                                  <option value="Manipur">Manipur</option>
                                  <option value="Meghalaya">Meghalaya</option>
                                  <option value="Mizoram">Mizoram</option>
                                  <option value="Nagaland">Nagaland</option>
                                  <option value="Odisha">Odisha</option>
                                  <option value="Puducherry">Puducherry</option>
                                  <option value="Punjab">Punjab</option>
                                  <option value="Rajasthan">Rajasthan</option>
                                  <option value="Sikkim">Sikkim</option>
                                  <option value="Tamil Nadu">Tamil Nadu</option>
                                  <option value="Telangana">Telangana</option>
                                  <option value="Tripura">Tripura</option>
                                  <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                  </option>
                                  <option value="Uttarakhand">
                                    Uttarakhand
                                  </option>
                                  <option value="West Bengal">
                                    West Bengal
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                  className="form-control input-sm required email"
                                  type="text"
                                  name="billing_email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="mobile">Mobile (+91)</label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text" />
                                  </div>
                                  <input
                                    maxLength={10}
                                    className="form-control input-sm required number"
                                    placeholder="Ph. Number"
                                    type="text"
                                    name="billing_tel"
                                    id="mobile"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label htmlFor="pan">
                                  Do you want 80G tax benefit?
                                </label>
                                <br />
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="tax_benefit"
                                    defaultValue={1}
                                  />{" "}
                                  Yes
                                </label>
                                <label className="radio-inline">
                                  <input
                                    type="radio"
                                    name="tax_benefit"
                                    defaultValue={0}
                                  />{" "}
                                  No
                                </label>
                                <p style={{ fontSize: 13, lineHeight: "1.4" }}>
                                  Please check this if you are a taxpayer in
                                  India and would like to avail tax benefits
                                  under 80G. To avail this, you need to provide
                                  your PAN number
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="pan">PAN No.</label>
                                <input
                                  className="form-control input-sm pan"
                                  type="text"
                                  name="pan"
                                  
                                  placeholder="Pan No."
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select
                                  className="form-control input-sm select required"
                                  name="billing_country"
                                >
                                  <option value="India">India</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label htmlFor="account">&nbsp;</label>
                                <br />
                                <input
                                  className
                                  type="checkbox"
                                  defaultValue={1}
                                  name="account"
                                  id="account"
                                />{" "}
                                Create an account for later use
                              </div>
                              <div className="clearfix" />
                              <div id="account_p" className="hide">
                                <div className="form-group">
                                  <label htmlFor="password">Password</label>
                                  <input
                                    className="form-control input-sm"
                                    id="dj_pwd"
                                    type="password"
                                    autoComplete="off"
                                    name="dj_pwd"
                                    disabled
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="cpassword">
                                    Confirm Password
                                  </label>
                                  <input
                                    className="form-control input-sm required"
                                    id="dj_cpwd"
                                    type="password"
                                    name="dj_cpwd"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div id="pwdbefore" />
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="form-group">
                              <div className="col-md-12">
                                <input
                                  type="checkbox"
                                  name="newsletter"
                                  defaultValue={1}
                                  defaultChecked
                                />{" "}
                                I wish to receive Monthly Newsletter
                              </div>
                            </div>
                          </div>
                          <div className="row" id="corpus_row">
                            <div className="form-group">
                              <div className="col-md-12">
                                <input
                                  type="checkbox"
                                  name="corpus"
                                  defaultValue={1}
                                  id="corpus"
                                />{" "}
                                I agree that the donation is towards the Corpus
                                Fund of DIVYA JYOTI JAGRATI SANSTHAN
                              </div>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <br />
                          <div className="text-center">
                            <input
                              type="hidden"
                              name="currency"
                              defaultValue="INR"
                            />
                            <input
                              type="hidden"
                              name="merchant_id"
                              defaultValue={43940}
                            />
                            <input
                              type="hidden"
                              name="redirect_url"
                              defaultValue="contribute/response.html"
                            />
                            <input
                              type="hidden"
                              name="cancel_url"
                              defaultValue="contribute/response.html"
                            />
                            <input
                              type="hidden"
                              name="language"
                              defaultValue="EN"
                            />
                            <input type="hidden" name="fbid" defaultValue />
                            <input
                              type="hidden"
                              name="ref"
                              defaultValue="website"
                            />
                          </div>
                          <button
                            id="submitbtn"
                            className="btn btn-solid text-uppercase btn-bordered border-thin circle font-size-16 lh-2 font-weight-bold ltr-sp-05 mb-2 px-5 py-2 text-white shadow-1"
                            type="submit"
                          >
                            Donate
                          </button>
                          <a
                            onClick={handlePrevious}
                            className="btn btn-solid text-uppercase btn-bordered border-thin circle font-size-16 lh-2 font-weight-bold ltr-sp-05 mb-2 px-5 py-2 text-white shadow-1  previous action-button-previous"
                            type="submit"
                          >
                            Back
                          </a>
                        </fieldset>
                      )}
                    </form>
                  </div>
                </div>
                <div
                  className="style-msg mt-4"
                  style={{ backgroundColor: "#fff", border: "none" }}
                >
                  <div className="sb-msg">
                    <p className="m-0 small text-muted">
                      <i className="icon-info-sign" /> Donations are exempted
                      u/s 80G of the Income Tax Act 1961, against order
                      no.DIT(E) 2011-2012/D-1136 D-778/3455 dt.02-11-2011 of the
                      Director of Income Tax (E) New Delhi. Validity of the
                      order is in perpetuity as per amendment under section
                      80(G)(vi) effected by Finance (No.2) Act. 2009.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-md-7">
                <div className="donation_head">
                  <h1 className="mb-2 font-weight-semibold ltr-sp-05 font-size-28 text-uppercase">
                    <span className="text-gradient">Donating to DJJS</span>
                  </h1>
                </div>
                <p className="medium-text">
                  Divya Jyoti Jagrati Sansthan (DJJS) works from the generous
                  donations given by the people. This mission provides selfless
                  service to the humanity. We highly appreciate your benign and
                  generous DONATIONS.
                </p>
                <div
                  className="lqd-frickin-img lqd-freak-to-left"
                  data-inview="true"
                  data-inview-options='{ "delayTime": 250, "threshold": 0.75 }'
                >
                  <div className="lqd-frickin-img-inner">
                    <span className="lqd-frickin-img-bg bg-gradient-secondary-br" />
                    <div className="lqd-frickin-img-holder">
                      <figure data-responsive-bg="true">
                        <img
                          className="ld-lazyload"
                          data-src="https://www.djjs.org/images/new/social1.jpg"
                          alt="Contribute to DJJS"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <p>
                  When you donate to our general funding, we prioritize by
                  investing in the most dire causes first. This way, you can be
                  sure your contribution is going where it's needed most.
                </p>
                <div className="fancy-title mb-2">
                  <h4>Offline Donation</h4>
                </div>
                <div>
                  <p>
                    To donate offline, please send the draft or cheque in favour
                    of
                    <strong>Divya Jyoti Jagrati Sansthan</strong> to the
                    following address:-
                  </p>
                  <p style={{ marginLeft: 25 }}>
                    Divya Jyoti Jagrati Sansthan
                    <br />
                    Pocket OCF, Plot No. 3,
                    <br />
                    Parvana Road,
                    <br />
                    (Behind Pushpanjali Enclave) Pitampura Extension,
                    <br />
                    New Delhi – 110034, India
                    <br />
                  </p>
                  <p>
                    {" "}
                    Please enclose your complete contact details:
                    <br />
                    Name, address, pin code, landline/mobile, e-mail{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
