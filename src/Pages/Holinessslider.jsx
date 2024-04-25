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
    imgSrc: "https://sc0.blr1.digitaloceanspaces.com/large/838860-60820-ojszkrnsgh-1497675650.jpg",
    title: "Devotional Literature",
    text: "His contributions to the world of Krishna bhakti encompass a rich tapestry of devotional literature. Through his poetic compositions, he has captured the essence of divine love and devotion, inspiring generations of devotees to deepen their spiritual connection with Lord Krishna. His works, filled with profound insights and heartfelt expressions of devotion, continue to resonate with seekers on the path of bhakti.",
    },
    
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ863vnJtSDuc2qE4kOKM-FMzCV-_xhGZHCL7-AXkdDXA&s",
        title: "Spiritual Teachings",
        text: "As a spiritual teacher and guide, he has disseminated the timeless teachings of Bhagavad Gita and other sacred texts, illuminating the path of devotion and self-realization. Through discourses, lectures, and personal interactions, he has shared the wisdom of ancient scriptures in a way that is accessible and relevant to contemporary audiences, helping individuals to cultivate a deeper understanding of Krishna consciousness.",
    },
    
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501602447.jpg?k=7e959804ba9cd9023ed74d459dbfcf6946857a2aac005b9237f4d3c557cafefc&o=&hp=1",
        title: "Community Building",
        text: "Central to his mission of spreading Krishna bhakti is the establishment of vibrant spiritual communities around the world. Through the construction of temples, ashrams, and retreat centers, he has provided sanctuaries where devotees can come together to worship, study, and engage in seva (selfless service). These spiritual hubs serve as catalysts for collective devotion and foster a sense of unity and belonging among practitioners.",
      },
      {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5k585rXvxMO0CdOWwFkDLKQ8KoV_gRABOyumHqfG4g&s",
        title: "Cultural Preservation",
        text: "He has played a key role in preserving and promoting the rich cultural heritage associated with Krishna bhakti. Through initiatives such as festivals, music concerts, and art exhibitions, he has celebrated the diverse expressions of devotion to Lord Krishna, ensuring that traditional practices and customs are passed down to future generations. By fostering an appreciation for the arts and traditions of Krishna consciousness, he has helped to safeguard a valuable aspect of human cultural heritage.        ",
      },
      {
        imgSrc: "https://study.com/cimages/videopreview/djk5z5jon7.jpg",
        title: "Humanitarian Service",
        text: "In alignment with the principles of Krishna bhakti, he has actively engaged in humanitarian service activities aimed at uplifting the less fortunate and alleviating suffering. Whether through food distribution programs, healthcare initiatives, or educational outreach efforts, he embodies the spirit of seva as taught by Lord Krishna in the Bhagavad Gita. His commitment to serving others with compassion and humility reflects the highest ideals of devotional practice.        ",
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
