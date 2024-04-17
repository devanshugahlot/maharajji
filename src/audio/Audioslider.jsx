import React from "react";
import Slider from "react-slick";

export default function Audioslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Sample data for the slider items
  const sliderData = [
    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    {
      imageUrl:
        "https://www.djjs.org/images/app/pp/pp42.webp",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000187358120-34ne1b-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000183148048-4stdw8-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://i1.sndcdn.com/artworks-000191278583-265df7-t500x500.jpg",
      time: "9:22",
      title: "PP144-Prathana (Hindi)",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    // Add more items as needed
  ];

  return (
    <Slider {...settings}>
      {/* Using map to generate slider items dynamically */}
      {sliderData.map((item, index) => (
        <div
          key={index}
          className="carousel-item lqd-column col-sm-4 col-md-3 col-lg-2 col-xs-12"
        >
          <div
            className="amplitude-song-container amplitude-play-pause"
            data-amplitude-song-index={index}
            data-amplitude-playlist="prerna"
          >
            <div
              className="fancy-box mb-0 fancy-box-travel"
              data-slideelement-onhover="true"
              data-slideelement-options='{"visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info"}'
            >
              <figure className="fancy-box-image">
                <img src={item.imageUrl} alt="Content Box" />
              </figure>
              <div className="fancy-box-contents" style={{ margin: 10 }}>
                <div className="fancy-box-header">
                  <span className="fancy-box-time">{item.time}</span>
                  <p className="text-white font-size-13 lh-15">{item.title}</p>
                </div>
                <div className="fancy-box-info">
                  <p>&nbsp;</p>
                  <div className="fancy-box-footer">
                    <a
                      className="play-icon track-list btn btn-naked text-uppercase"
                      data-track={item.trackUrl}
                      data-poster={item.imageUrl}
                      data-title={item.title}
                      data-singer={item.singer}
                    >
                      <span>
                        <span className="btn-txt">Listen</span>
                        <span className="btn-icon">
                          <i className="fa fa-play" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <a className="liquid-overlay-link z-index-3" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
