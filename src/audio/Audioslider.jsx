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
    autoplaySpeed: 9000,
  };
  if (window.innerWidth < 768) {
    settings.slidesToShow = 1;
  }
  // Sample data for the slider items
  const sliderData = [
    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=b60ef55b2ad644d996ce7171c102a9c38d8784a9-11454708-images-thumbs&n=13",
      time: "6:00",
      title: "Achyutam Keshavam",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=b5e1e0920bdde33fba48a1754635edcc26e29366-10332115-images-thumbs&n=13",
      time: "6:30",
      title: "Shyam, call your flute",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=47c45bdb613792bd3580ea2b011a22d5-5877126-images-thumbs&n=13",
      time: "7:00",
      title: "Nandlala spoke to Yashomati Maiya",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=93103e65a8e2b7c7420d25a80e1dbc842828d590-9683943-images-thumbs&n=13",
      time: "7:30",
      title: "Shri Krishna Govind Hare Murari",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=0ea6182f3b3f8611ee3c34e0250544a7c0d7dda9-9065783-images-thumbs&n=13",
      time: "8:00",
      title: "Aarti Kunj Bihari",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=b08f3151d56bd34bfd157e7a3e6bafc99aba5134-4589919-images-thumbs&n=13",
      time: "8:30",
      title: "Choto Mero Madan Gopal",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },

    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=058d0c0611fb6e5a28711e95aa445287e9ebaa97-9042494-images-thumbs&n=13",
      time: "9:00",
      title: "Hare Ram",
      trackUrl:
        "https://www.djjs.org/feed/playtrack/290619604?client_id=989dab6caab0f1cce36f9b8be8967360&oauth_token=2-111630--mZ9ImDpY3sDJATxFCA9C8Rf",
      singer: "Prerna Pravah",
    },
    {
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=ac88a640b2eb18037f5eeea01d1f9c62-4338206-images-thumbs&n=13",
      time: "9:30",
      title: "Radha Krishna Namavali Mantra",
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
          <div style={{width:"100%",height:"100%"}}
            className="amplitude-song-container amplitude-play-pause"
            data-amplitude-song-index={index}
            data-amplitude-playlist="prerna"
          >
            <div style={{width:"100%",height:"100%"}}
              className="fancy-box mb-0 fancy-box-travel"
              data-slideelement-onhover="true"
              data-slideelement-options='{"visibleElement": ".fancy-box-header", "hiddenElement": ".fancy-box-info"}'
            >
              <figure style={{width:"100%",height:"100%"}} className="fancy-box-image">
                <img style={{width:"100%",height:"120%"}} src={item.imageUrl} alt="Content Box" />
              </figure>
              <div className="fancy-box-contents" style={{ margin: 10 }}>
                <div style={{width:"100%",height:"100%"}} className="fancy-box-header">
                  <span className="fancy-box-time">{item.time}</span>
                  <p style={{color:"white"}} className="text-white font-size-13 lh-15">{item.title}</p>
                </div>
                <div className="fancy-box-info">
                  <p>&nbsp;</p>
                  <div style={{width:"100%",height:"100%"}} className="fancy-box-footer">
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
