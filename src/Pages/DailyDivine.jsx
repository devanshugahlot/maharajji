import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const DailyDivine = () => {
  const dailydivineimage = [
    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    },
    {
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    },
    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    },
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
  for (let i = 0; i < dailydivineimage.length; i += 3) {
    const rowImages = dailydivineimage.slice(i, i + 3);
    rows.push(
      <div className="row" key={i}>
        {rowImages.map((item, index) => (
          <div className="col-md-4" key={i + index}>
            <div onClick={() => openLightbox(i + index)}>
              <img
                style={{ width: "100%", height: "45vh" }}
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
      <div className="titlebar-inner">
        <div className="container titlebar-container">
          <div className="row titlebar-container">
            <div className="titlebar-col col-md-12">
              <h1
                data-fittext="true"
                data-fittext-options='{{ "maxFontSize": 60, "minFontSize": 32 }}'
              >
                Daily Divine Inspiration
              </h1>
              <p>Charaiveti Charaiveti</p>
              <a
                className="titlebar-scroll-link"
                href="#content"
                data-localscroll="true"
              >
                <i className="fa fa-angle-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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

export default DailyDivine;
