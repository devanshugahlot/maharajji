import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../assets/हरे-कृष्णा-हरे-रामा.png"
import "react-image-lightbox/style.css";

const Ebooks = () => {
  const dailydivineimage = [
 
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2021/10/Gita-Yatha-Rup.jpg",
    },

    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2022/08/shrimad-bhagavad-geetadharavahi-hindi-me.jpg",
    },
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2021/10/Yogeshwar-krishna-300x467.jpg",
    },

    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2023/08/Srikrishna-by-Gurudatt.jpg",
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2020/12/surrender_unto_me.jpg"
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2020/12/japa-bhurijan-prabhu.jpg"
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2020/12/my_glorious_master.jpg"
    }
    ,
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2020/12/the_art_of_teaching.jpg"
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2020/12/unveiling_his_lotus_feet.jpg"
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2021/08/the-veil-1-197x300.jpg"
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2021/08/BAckward-glance-e1629785980743.jpg"
    },
    {
      image:"https://bhurijanadasa.com/wp-content/uploads/2021/09/Japa-hindi-front-230x300.jpg"
    },
    {
      image:"https://i0.wp.com/www.iskconbooks.com/wp-content/uploads/2020/10/Hindi-Cvr-Beyond-birth-and-death.jpg?zoom=3&resize=247%2C296&ssl=1"
    },
    {
      image:"https://i0.wp.com/www.iskconbooks.com/wp-content/uploads/2020/10/Eng-Cvr-Introduction-to-Bhagavad-gita-1.jpg?zoom=3&resize=247%2C296&ssl=1"
    },
    {
      image:"https://i0.wp.com/www.iskconbooks.com/wp-content/uploads/2020/10/Eng-Cvr-On-the-way-to-Krsna.jpg?zoom=3&resize=247%2C296&ssl=1"
    },
    {
      image:"https://i0.wp.com/www.iskconbooks.com/wp-content/uploads/2020/10/Hindi-Cvr-Perfection-question-perfect-answer.jpg?resize=247%2C296&ssl=1"
    }
    
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const rows = [];
  for (let i = 0; i < dailydivineimage.length; i += 4) {
    const rowImages = dailydivineimage.slice(i, i + 4);
    rows.push(
      <div className="row" key={i}>
        {rowImages.map((item, index) => (
          <div className="col-md-3 text-center" key={i + index}>
            <div onClick={() => openLightbox(i + index)}>
              <img
                style={{ width: "auto", height: "45vh", cursor: "pointer" }}
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    );
  }


  return (
    <div>
<div className="titlebar-inner-2">
    <div className="container titlebar-container">
        <div className="row titlebar-container">
            <div className="titlebar-col col-md-12">
                <h2 style={{marginTop:"200px"}} className="lh-115 mb-0" data-fittext="true" data-fittext-options='{"compressor":1, "maxFontSize":"maxFontSize", "minFontSize":"25"}'>
                    <span className="">
                        <span className="t600">E-</span>Books
                    </span>
                </h2>
                <p>Charaiveti Charaiveti</p>
            </div>
        </div>
    </div>
</div>




      <div style={{marginTop:"20px"}} className="container">
        {rows.map((row, index) => (
          <div key={index} className="mb-4">
            {row}
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={dailydivineimage[photoIndex].image}
          nextSrc={
            dailydivineimage[(photoIndex + 1) % dailydivineimage.length].image
          }
          prevSrc={
            dailydivineimage[
              (photoIndex + dailydivineimage.length - 1) %
                dailydivineimage.length
            ].image
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + dailydivineimage.length - 1) %
                dailydivineimage.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % dailydivineimage.length)
          }
        />
      )}

    </div>
  );
};

export default Ebooks;
