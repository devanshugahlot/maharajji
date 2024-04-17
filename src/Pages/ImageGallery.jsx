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
        "https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-6/285686413_314861977523993_1476172159150271144_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vyzAT6bF2uoAb7hwS7e&_nc_ht=scontent.fjai1-2.fna&oh=00_AfBSqAt7pBKuStsJcryBSmSTGIxBZOLOhDgM5Wx9XDxTfA&oe=66252D8B",
    },
    {
      image:
        "https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-6/356807383_2445519355623109_7059811934833627163_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y2-xbabCbN0Ab6xwEBP&_nc_ht=scontent.fjai1-2.fna&oh=00_AfDYjJdOUoOlk8cG_YCWJNSjYdUQ4DUD-vjbzbfHqLzcwQ&oe=66254802",
    },
    {
      image:
        "https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/356869876_2445519438956434_4160302837541214726_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fisrp5M_ogUAb5WTutV&_nc_ht=scontent.fjai1-3.fna&oh=00_AfBSLJSy7xIvZvPrqRWidQbVsCDqkVHEbzqLwmJdLIvUlA&oe=662548DF",
      },
      {
        image:"https://scontent.fjai1-1.fna.fbcdn.net/v/t39.30808-6/290569571_154078053862867_4171269724000187565_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-KlAmaatMMIAb4-iHSw&_nc_ht=scontent.fjai1-1.fna&oh=00_AfCgFvXC8ELhroHnn4ARUrzfZtu5S_hVpWd4Q8VHNYDiFQ&oe=66256C02"
      },
      {
          image:"https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/240433494_130086016001591_3733657763458892551_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=M5R51yDUwosAb6GfUG_&_nc_ht=scontent.fjai1-3.fna&oh=00_AfDn__cGxYCh5XfGfvLKKOZB7sPg_am6nxyVoVpjcQNLwg&oe=6625487F"
      },
      {
          image:"https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-6/281162278_296510529359138_5494572139170462070_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LF_WsvX9usYAb4n2la-&_nc_ht=scontent.fjai1-2.fna&oh=00_AfCJT4OY-_tgGPBH_c-l357jbbUg57veiUf5JiI2ITyr-w&oe=66255994"
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
