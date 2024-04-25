import React from "react";
import Slider from "react-slick";

export default function Videogalleryslider() {
  // Sample data for the slider items
  const sliderData = [
    {
      id: "zVfJuM4qtZw",
      title:
        "Milkar Aisi Khelein Holi | Sacred Colors of Holi | True Spirit | DJJS Bhajan [Hindi]",
      imageUrl: "https://img.youtube.com/vi/zVfJuM4qtZw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/HIXOKeoRza0?si=ZIvoygeBDwMCsjQE",
    },
    {
      id: "zVfJuM4qtZw",
      title:
        "Milkar Aisi Khelein Holi | Sacred Colors of Holi | True Spirit | DJJS Bhajan [Hindi]",
      imageUrl: "https://img.youtube.com/vi/zVfJuM4qtZw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ukuHzliKPE4?si=sh0rtSOssSYPKrt2",
    },
    {
      id: "zVfJuM4qtZw",
      title:
        "Milkar Aisi Khelein Holi | Sacred Colors of Holi | True Spirit | DJJS Bhajan [Hindi]",
      imageUrl: "https://img.youtube.com/vi/zVfJuM4qtZw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/4oBuyV8EjdI?si=kpUUnmCq5vggR1-N",
    },

    // Add more items as needed
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as per your design
        settings: {
          slidesToShow: 1, // Show 1 slide in mobile view
        }
      }
    ]
  };
  
  return (
    <Slider {...settings}>
      {/* Mapping through sliderData to generate slider items */}
          { sliderData.map( ( item, index ) => (
          
        <div key={item.id} className="carousel-item col-md-3 col-xs-12">
          <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
            <div className="cb-img-container">
            <iframe
                  width="560"
                  height="315"
                  src={item.videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
             
            </div>
            <div className="fancy-box-contents">
              <div className="fancy-box-info">
                <h3 className="liquid-lp-title font-size-20-xs">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
          </div>
          
      ))}
    </Slider>
  );
}
