import React from "react";
import Slider from "react-slick";

export default function Videoslideone() {
    const sliderData = [
        {
          id: "zVfJuM4qtZw",
          title:
            "Milkar Aisi Khelein Holi | Sacred Colors of Holi | True Spirit | DJJS Bhajan [Hindi]",
          imageUrl: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          videoUrl: "https://www.youtube.com/embed/ZVde6XnWVLs?si=KFFXoAndj6-A4TS9",
        },
        {
          id: "zVfJuM4qtZw",
          title:
            "Milkar Aisi Khelein Holi | Sacred Colors of Holi | True Spirit | DJJS Bhajan [Hindi]",
          imageUrl: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          videoUrl: "https://www.youtube.com/embed/0dYRQZK31lU?si=g_3l9KRL51KC1HUl",
        },
        {
          id: "zVfJuM4qtZw",
          title:
            "Milkar Aisi Khelein Holi | Sacred Colors of Holi | True Spirit | DJJS Bhajan [Hindi]",
          imageUrl: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          videoUrl: "https://www.youtube.com/embed/J6MBp5qZeNM?si=bR-SVpOijZkYpF2o",
        },
    
        // Add more items as needed
      ];
    
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1 ,// Set slidesToShow to the length of sliderData array
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <Slider {...settings}>
     { sliderData.map( ( item, index ) => (
          
          <div key={item.id} className="">
            <div className="fancy-box fancy-box-classes fancy-box-heading-sm mb-0 shadow">
              <div className="cb-img-container">
              <iframe
                    width="100%"
                    height="560"
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