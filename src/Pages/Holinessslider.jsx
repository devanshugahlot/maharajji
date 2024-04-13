import React from "react";
import Slider from "react-slick";

// Define settings for the slider
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

// Define the content for each slide
const slides = [
  {
    imgSrc: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    title: "Restoration of Peace in Punjab",
    text: "The year 1983 was the darkest period in the history of Punjab. The prosperous and eventful state was thrown into a blazing fire of violence and terrorism. It was against this backdrop that His Holiness Shri Ashutosh Maharaj Ji appeared on the scene in Punjab and resurrected it to its bygone glory. The perpetual fear of war hanging over innocent people was totally uprooted and inter-faith harmony was re-established; with peaceful methods of counseling, discoursing and Brahm Gyan (eternal science of self-realization) based Dhyaan.",
    },
    
    {
        imgSrc: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        title: "Restoration of Peace in Punjab",
        text: "The year 1983 was the darkest period in the history of Punjab. The prosperous and eventful state was thrown into a blazing fire of violence and terrorism. It was against this backdrop that His Holiness Shri Ashutosh Maharaj Ji appeared on the scene in Punjab and resurrected it to its bygone glory. The perpetual fear of war hanging over innocent people was totally uprooted and inter-faith harmony was re-established; with peaceful methods of counseling, discoursing and Brahm Gyan (eternal science of self-realization) based Dhyaan.",
    },
    
    {
        imgSrc: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        title: "Restoration of Peace in Punjab",
        text: "The year 1983 was the darkest period in the history of Punjab. The prosperous and eventful state was thrown into a blazing fire of violence and terrorism. It was against this backdrop that His Holiness Shri Ashutosh Maharaj Ji appeared on the scene in Punjab and resurrected it to its bygone glory. The perpetual fear of war hanging over innocent people was totally uprooted and inter-faith harmony was re-established; with peaceful methods of counseling, discoursing and Brahm Gyan (eternal science of self-realization) based Dhyaan.",
      },
      {
        imgSrc: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        title: "Restoration of Peace in Punjab",
        text: "The year 1983 was the darkest period in the history of Punjab. The prosperous and eventful state was thrown into a blazing fire of violence and terrorism. It was against this backdrop that His Holiness Shri Ashutosh Maharaj Ji appeared on the scene in Punjab and resurrected it to its bygone glory. The perpetual fear of war hanging over innocent people was totally uprooted and inter-faith harmony was re-established; with peaceful methods of counseling, discoursing and Brahm Gyan (eternal science of self-realization) based Dhyaan.",
      },
      {
        imgSrc: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        title: "Restoration of Peace in Punjab",
        text: "The year 1983 was the darkest period in the history of Punjab. The prosperous and eventful state was thrown into a blazing fire of violence and terrorism. It was against this backdrop that His Holiness Shri Ashutosh Maharaj Ji appeared on the scene in Punjab and resurrected it to its bygone glory. The perpetual fear of war hanging over innocent people was totally uprooted and inter-faith harmony was re-established; with peaceful methods of counseling, discoursing and Brahm Gyan (eternal science of self-realization) based Dhyaan.",
      },
  // Add more slides if needed
];

export default function Holinessslider() {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
     <div>
              
   
          <div className="row" key={index}>
            <div className="col-md-5 col-xs-12 mb-4 mb-md-0">
              <div className="carousel-items row testimonials-details w-100 row" data-lqd-flickity="{&quot;asNavFor&quot;: &quot;.carousel-quotes-1&quot;, &quot;rightToLeft&quot;: true }">
                <div className="col-xs-12">
                  <div className="lqd-parallax-images-4 text-md-right">
                    <div className="liquid-counter liquid-counter-default liquid-counter-lg2 mb-0">
                      <div className="liquid-counter-element font-weight-normal" data-enable-counter="true" data-counter-options="{&quot;targetNumber&quot;:&quot;1&quot;,&quot;blurEffect&quot;:true}">
                        <span>{index + 1}</span>
                      </div>
                    </div>
                    <div className="liquid-img-group-container">
                      <div className="liquid-img-group-inner">
                        <div className="" data-reveal="true" data-reveal-options="{ &quot;direction&quot;:&quot;lr&quot; }">
                          <div className="liquid-img-group-img-container">
                            <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from="{&quot;translateY&quot;:-42}" data-parallax-to="{&quot;translateY&quot;:33}" data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;easing&quot;:&quot;linear&quot;}">
                              <figure>
                                <img src={slide.imgSrc} alt={slide.title} />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xs-12">
              <div className="carousel-items row testimonials-quotes row carousel-quotes-1" data-lqd-flickity="{ &quot;prevNextButtons&quot;: true,&quot;buttonsAppendTo&quot;:&quot;#buttons-nav&quot;, &quot;navStyle&quot;: 2, &quot;navOffsets&quot;: { &quot;nav&quot;: { &quot;right&quot;: 15} }, &quot;rightToLeft&quot;: false }">
                <div className="col-xs-12">
                  <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only">
                    <div className="testimonial-quote">
                      <blockquote className="font-size-18 " data-custom-animations="true" data-ca-options="{&quot;triggerHandler&quot;: &quot;inview&quot;, &quot;animateTargetsWhenVisible&quot;:&quot;true&quot;, &quot;animationTarget&quot;: &quot;.split-inner&quot;, &quot;duration&quot;: 700, &quot;delay&quot;: 150, &quot;easing&quot;: &quot;easeOutBack&quot;, &quot;initValues&quot;: { &quot;translateY&quot;: 55 }, &quot;animations&quot;: { &quot;translateY&quot;: 0 }}">
                        <h5 data-split-text="true" data-split-options="{&quot;type&quot;:&quot;lines&quot;}" className="mt-0 font-size-32 h3">{slide.title}</h5>
                        <p className="lh-225">{slide.text}</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
              </div>
             
          </div>
        ))}
         
        
        </Slider>
  );
}
