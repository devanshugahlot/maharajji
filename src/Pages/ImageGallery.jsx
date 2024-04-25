import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

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
      image:
        "https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/434726411_440400318563971_8967494144404261188_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QWjHaX1RZ-AAb5TCC-C&_nc_ht=scontent.fjai1-3.fna&oh=00_AfBhZz-DGZb6okZwxbgFin6a8kMlEdl40yq-HZt_kRBoMg&oe=662445DD",
    },
    {
      image:
        "https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/356843923_2445518715623173_2283261093584050099_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qq25CwcuLxIAb69QdcW&_nc_ht=scontent.fjai1-3.fna&oh=00_AfDyykvxC9q1k6GDpQiQtf1S8jCff-KJkE5ItP_RBXVC6g&oe=66246113",
    },
    {
      image:
        "https://scontent.fjai1-1.fna.fbcdn.net/v/t39.30808-6/353389655_272420028695335_8157961501742259159_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MnQCtymIa-0Ab43JHTb&_nc_ht=scontent.fjai1-1.fna&oh=00_AfAhBqmUOYoVGD6UGCVLedHg4cYneRaCdSqRtph0lqb_8w&oe=66244D85",
    },
    {
      image:
        "https://i.ytimg.com/vi/hIIV9VSR_Tg/maxresdefault.jpg",
    },
    {
      image:
        "https://i.ytimg.com/vi/OBq7-6MzAhw/maxresdefault.jpg",
    },
    {
      image:
        "https://i.ytimg.com/vi/FTvh0MaP8cs/maxresdefault.jpg",
      },
      {
        image:"https://i.ytimg.com/vi/sBI7NLPP3yo/hqdefault.jpg"
      },
      {
          image:"https://i.ytimg.com/vi/8wSu9u9J-xo/hqdefault.jpg"
      },
      {
          image:"https://i.ytimg.com/vi/24_P12KznPM/hqdefault.jpg"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T-Q6hCV6m_USk0bqvDiOqnzCJs_W0JCZtFqENi-6ag&s"
    },
    {
      image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/f7/71/iskon-temple.jpg?w=1200&h=-1&s=1"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtEejtmK7bAyjkpsIsIg1nc9byguS0E4HI98H-Sdvzw&s"
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
  for (let i = 0; i < dailydivineimage.length; i += 3) {
    const rowImages = dailydivineimage.slice(i, i + 3);
    rows.push(
      <div className="row" key={i}>
        {rowImages.map((item, index) => (
          <div className="col-md-4 text-center" key={i + index}>
            <div onClick={() => openLightbox(i + index)}>
              <img
                style={{ width: "300px", height: "300px", cursor: "pointer" }} // Set width and height to 300px
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
                  <span className="t600">Images</span> Gallery
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

export default ImageGallery;
