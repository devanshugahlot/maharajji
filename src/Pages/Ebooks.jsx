import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Ebooks = () => {
  const dailydivineimage = [
    {
      image:
        "https://www.abcbooksmarket.com/image/cache/catalog/Books/Anmol/Abhinav%20Sansar-500x500.jpg",
    },
    {
      image:
        "https://www.abcbooksmarket.com/image/cache/catalog/Books/Anmol/Atharvaved-500x500.jpg",
    },
    {
      image:
        "https://www.abcbooksmarket.com/image/cache/catalog/Books/Anmol/Hiranyagarbh-500x500.jpeg",
    },
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2024/03/Ek-Yogi-Ki-Aatmakatha3.jpg",
    },
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2021/10/Bhagwan-srikrishna-Tatwagya-Dharmasansthapak-300x466.jpg",
    },
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2021/10/Bhagwan-srikrishnaPradurbhav-aur-Parakram-300x453.jpg",
    },
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2021/10/Dashrath-Nandan-Sriram-300x466.jpg",
    },
    {
      image:
        "https://hindubookstore.com/wp-content/uploads/2021/10/Krishna-Katha-300x492.jpg",
    },
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
      <div className="titlebar-inner">
        <div className="container titlebar-container">
          <div className="row titlebar-container">
            <div className="titlebar-col col-md-12">
            <h2
                      className="lh-115 mb-0"
                      data-fittext="true"
                      data-fittext-options='{"compressor":1, "maxFontSize":"maxFontSize", "minFontSize":"25"}'
                    >
                      <span className="text-gradient">
                        <span className="t600">E-</span>Books
                      </span>
                    </h2>
              <p>Charaiveti Charaiveti</p>
             
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
