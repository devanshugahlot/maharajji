import React from "react";

const Radio = () => {

  const schedule = [
    {
      header: 'WEEKLY PROGRAMS (SAT & SUN)',
      rows: [
        [{ data: '5pm-6pm' }, { data: 'Jeevan Ke Falsafe from Akhand Gyan' }],
        [{ data: '2am-3am' }, { data: 'Jeevan Ke Falsafe from Akhand Gyan' }]
      ]
    },
    {
      header: 'DAILY PROGRAMS',
      rows: [
        [{ data: '6am-7am' }, { data: 'Ved Mantra' }],
        [{ data: '7am-8am' }, { data: 'Bhajan Pravah' }],
        [{ data: '8am-9am' }, { data: 'Guru Archana & Prerna Pravah' }],
        [{ data: '9am-12pm' }, { data: 'Satsang Pravah - Satsang & Bhajans' }],
        [{ data: '12pm-1pm' }, { data: 'Katha Pravah - Shrimad Bhagwat Katha' }],
        [{ data: '1pm-2pm' }, { data: 'Prerna Pravah & Bhajan' }],
        [{ data: '2pm-3pm' }, { data: 'Prerna Pravah & Bhajan' }],
        [{ data: '3pm-4pm' }, { data: 'Katha Pravah - Shriram Katha Amrit' }],
        [{ data: '4pm-5pm' }, { data: 'Swar Sadhna' }],
        [{ data: '5pm-6pm' }, { data: 'Chintan' }],
        [{ data: '6pm-7pm' }, { data: 'Katha Pravah - Shrimad Bhagwat Katha' }],
        [{ data: '7pm-8pm' }, { data: 'Guru Archana & Prerna Pravah' }],
        [{ data: '8pm-9pm' }, { data: 'Bhajan Pravah' }],
        [{ data: '9pm-10pm' }, { data: 'Katha Pravah - Shriram Katha Amrit' }],
        [{ data: '10pm-1am' }, { data: 'Satsang Pravah - Satsang & Bhajans' }],
        [{ data: '1am-2am' }, { data: 'Katha Pravah - Shrimad Bhagwat Katha' }],
        [{ data: '2am-3am' }, { data: 'Prerna Pravah & Bhajan' }],
        [{ data: '3am-6am' }, { data: 'Divya Raaga' }]
      ]
    }
  ];
  
  return (
    <div>
      <div>
        <div
          className="titlebar titlebar-sm scheme-light text-center"
          data-parallax="true"
          data-parallax-options='{ "parallaxBG": true }'
          style={{
            backgroundImage:
              'url("https://www.djjs.org/images/new/radio-bg.jpg")',
            backgroundPosition: "center",
          }}
        >
          <div className="titlebar-inner">
            <div className="container titlebar-container">
              <div className="row titlebar-container">
                <div className="titlebar-col col-md-12">
                  <h1 style={{ opacity: 0 }}>Radio Divya Jyoti</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="content" className="content">
          <div className="content-wrap pt-40 pb-40">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="radiobtn">
                    <img className="hide" src="simages/loader.gif" alt />
                    <a
                      href="https://cast6.asurahosting.com/tunein/divyajyo-stream.asx"
                      className="play"
                    />
                  </div>
                  <div>
                    <small>NOW PLAYING</small>
                    <br />{" "}
                    <h3 className="text-gradient m-0">
                      Satsang Pravah - Satsang &amp; Bhajans
                    </h3>
                    <div className="mb-15 mt-10">
                      <small>PLAY WITH:</small>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Windows Media Player"
                        href="https://cast6.asurahosting.com/tunein/divyajyo-stream.asx"
                      >
                        <img
                          src="https://cdn.voscast.com/resources/wmp.gif"
                          alt="Windows Media Player"
                          border={0}
                        />
                      </a>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="QuickTime"
                        href="https://cast6.asurahosting.com/tunein/divyajyo-stream.qtl"
                      >
                        <img
                          src="https://cdn.voscast.com/resources/quicktime.gif"
                          alt="QuickTime"
                          border={0}
                        />
                      </a>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="RealPlayer"
                        href="https://cast6.asurahosting.com/tunein/divyajyo-stream.ram"
                      >
                        <img
                          src="https://cdn.voscast.com/resources/realplayer.gif"
                          alt="RealPlayer"
                          border={0}
                        />
                      </a>
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Winamp"
                        href="https://cast6.asurahosting.com/tunein/divyajyo-stream.pls"
                      >
                        <img
                          src="https://cdn.voscast.com/resources/winamp.gif"
                          alt="Winamp"
                          border={0}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-offset-1"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":700,"startDelay":"180","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
                >
                  <p
                    className="lead"
                    data-split-text="true"
                    data-split-options='{"type": "lines"}'
                  >
                    Indulge your senses and soul in the melody of divine music
                    and wisdom of soulful talks. Embrace the true spiritual
                    bliss by embarking on an enlightening journey to realize
                    your true inner self. Unravel the truth of mystics and seek
                    lasting peace.{" "}
                  </p>
                  <p
                    className="lead"
                    data-split-text="true"
                    data-split-options='{"type": "lines"}'
                  >
                    Witness the divine sound of awakening. Tune in to{" "}
                    <strong>Radio Divya Jyoti</strong>!!!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="section topmargin clearfix">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="fancy-title title-border">
                      <h4 className="nobg">
                        Listen to Radio Divya Jyoti on your phone
                      </h4>
                    </div>
                    <div className="row mb-15">
                      <div className="col-xs-4 col-md-4 text-center">
                        <p>
                          <a
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Android"
                            style={{ color: "#a4c639" }}
                            href="https://play.google.com/store/apps/details?id=org.djjs.radiodivyajyoti&hl=en"
                          >
                            <i
                              style={{ fontSize: 70 }}
                              className="fa fa-5x fa-android"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            target="_blank"
                            className="button button-small button-border button-rounded"
                            href="https://play.google.com/store/apps/details?id=org.djjs.radiodivyajyoti&hl=en"
                          >
                            Download
                          </a>
                        </p>
                      </div>
                      <div className="col-xs-4 col-md-4 text-center">
                        <p>
                          <a
                            data-toggle="tooltip"
                            data-placement="left"
                            title="ios"
                            style={{ color: "#000" }}
                            href="https://itunes.apple.com/us/app/tunein-radio/id418987775?mt=8"
                          >
                            <i
                              style={{ fontSize: 70 }}
                              className="fa fa-5x fa-apple"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            target="_blank"
                            className="button button-small button-border button-rounded"
                            href="https://itunes.apple.com/us/app/tunein-radio/id418987775?mt=8"
                          >
                            Download
                          </a>
                        </p>
                      </div>
                      <div className="col-xs-4 col-md-4 text-center">
                        <p>
                          <a
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Windows"
                            style={{ color: "#dd4b39" }}
                            href="https://www.windowsphone.com/en-us/store/app/tunein-radio/7f7e3f68-ba3a-e011-854c-00237de2db9e"
                          >
                            <i
                              style={{ fontSize: 70 }}
                              className="fa fa-5x fa-windows"
                            />
                          </a>
                        </p>
                        <p>
                          <a
                            target="_blank"
                            className="button button-small button-border button-rounded"
                            href="https://www.windowsphone.com/en-us/store/app/tunein-radio/7f7e3f68-ba3a-e011-854c-00237de2db9e"
                          >
                            Download
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <p className="lead text-center">
                      <a target="_blank" href="https://tunein.com/get-tunein/">
                        Click here
                      </a>{" "}
                      for other platforms.
                    </p>
                  </div>
                  <div className="col-md-5">
  <h4>Schedule (Indian Standard Time)</h4>
  <div style={{ height: 500, overflow: "auto" }}>
    <table className="table" width="100%" cellPadding={10}>
      <tbody>
        {schedule.map((item, index) => (
          <React.Fragment key={index}>
            {item.header && (
              <tr>
                <th className="active" colSpan={2}>
                  <strong>{item.header}</strong>
                </th>
              </tr>
            )}
            {item.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <React.Fragment key={cellIndex}>
                    {cell.header && <th className="active">{cell.header}</th>}
                    {cell.data && <td>{cell.data}</td>}
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
</div>
                </div>
              </div>
            </div>
            <section>
              <div className="promo promo-dark promo-flat promo-full nobottompadding nobottommargin header-stick notopborder">
                <div
                  className="container clearfix  text-center"
                  data-custom-animations="true"
                  data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":700,"startDelay":"180","delay":100,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'
                >
                  <h3
                    className="light"
                    data-split-text="true"
                    data-split-options='{"type":"words"}'
                  >
                    DJJS welcomes your feedback on its radio service at{" "}
                    <a href="cdn-cgi/l/email-protection.html#b0c2d1d4d9dfd4d9c6c9d1dac9dfc4d9f0d4dadac39edfc2d7">
                      <span
                        className="__cf_email__"
                        data-cfemail="740615101d1b101d020d151e0d1b001d34101e1e075a1b0613"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Radio;
