import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../assets/हरे-कृष्णा-हरे-रामा.png";
import "./imggallery.css"
const ImageGallery = () => {
  const dailydivineimage = [
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Mustard_wuna.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Peacefully_4.jpg8_.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/sadhu_enterfrs001.jpg",
    },

    {
      image: "https://i.ytimg.com/vi/hIIV9VSR_Tg/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/OBq7-6MzAhw/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/FTvh0MaP8cs/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/sBI7NLPP3yo/hqdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/8wSu9u9J-xo/hqdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/24_P12KznPM/hqdefault.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T-Q6hCV6m_USk0bqvDiOqnzCJs_W0JCZtFqENi-6ag&s",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/f7/71/iskon-temple.jpg?w=1200&h=-1&s=1",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtEejtmK7bAyjkpsIsIg1nc9byguS0E4HI98H-Sdvzw&s",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Mustard_wuna.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/Peacefully_4.jpg8_.jpg",
    },
    {
      image:
        "https://bhurijanadasa.com/wp-content/uploads/2021/08/sadhu_enterfrs001.jpg",
    },

    {
      image: "https://i.ytimg.com/vi/hIIV9VSR_Tg/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/OBq7-6MzAhw/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/FTvh0MaP8cs/maxresdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/sBI7NLPP3yo/hqdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/8wSu9u9J-xo/hqdefault.jpg",
    },
    {
      image: "https://i.ytimg.com/vi/24_P12KznPM/hqdefault.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T-Q6hCV6m_USk0bqvDiOqnzCJs_W0JCZtFqENi-6ag&s",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/f7/71/iskon-temple.jpg?w=1200&h=-1&s=1",
    },
    {
      image: "https://i.ytimg.com/vi/sBI7NLPP3yo/hqdefault.jpg",
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
                style={{ width: "100%", height: "300px", cursor: "pointer" }}
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
      <div
       
        className="titlebar-inner-2"
      >
        <div className="container titlebar-container">
          <div className="row titlebar-container">
            <div className="titlebar-col col-md-12">
              <h2 style={{marginTop:"200px"}}
                className="lh-115 mb-0"
                data-fittext="true"
                data-fittext-options='{"compressor":1, "maxFontSize":"maxFontSize", "minFontSize":"25"}'
              >
                <span  className="">
                  <span className="t600">Images Gallery</span> 
                </span>
              </h2>
              <p>Charaiveti Charaiveti</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }} className="container">
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

export default ImageGallery;
