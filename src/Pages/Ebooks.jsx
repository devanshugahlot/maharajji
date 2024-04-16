import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Ebooks = () => {
  const dailydivineimage = [
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Mustard_wuna-495x400.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Peacefully_4.jpg8_-495x400.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/sadhu_enterfrs001-495x400.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Mustard_wuna-495x400.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Peacefully_4.jpg8_-495x400.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/sadhu_enterfrs001-495x400.jpg",
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
                E-Books
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

export default Ebooks;
