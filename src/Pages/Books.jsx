import React from "react";
import "./Books.css";
const Books = () => {
  return (
    <div>
      <div id="sectionhomepage">
        <div className="container">
          <h1 className="home-heading">Popular Book</h1>
          <div className="home-item-selected d-flex flex-row">
            <img
              className="home-item-image-selected"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-apj-img.png"
            />
            <div className="home-item-content-selected">
              <h1 className="home-item-heading-selected">Wings of Fire</h1>
              <p className="home-item-discription-selected">
                An Autobiography of Abdul Kalam
              </p>
              <p className="home-item-author-selected">by Arun Tiwari</p>
              <button
                className="button btn btn-primary"
                onclick="display('sectionwingsoffire')"
              >
                Read Now
              </button>
            </div>
          </div>
          <h1 className="sub-heading">Recommended Books</h1>
          <div className="home-item d-flex flex-row">
            <img
              className="home-item-image"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-chetan-bhagat-img.png"
            />
            <div className="home-item-content">
              <h1 className="home-item-heading">
                The 3 mistakes of my life
                <br /> Indian Author
              </h1>
              <p className="home-item-author">by chetan Bhagat</p>
              <button
                className="button btn btn-primary"
                onclick="display('section3mistakes')"
              >
                Read Now
              </button>
            </div>
          </div>
          <div className="home-item d-flex flex-row">
            <img
              className="home-item-image"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/harrypotter-img.png"
            />
            <div className="home-item-content">
              <h1 className="home-item-heading">Harrp Potter</h1>
              <p className="home-item-discription">and the sorcerer's stone</p>
              <p className="home-item-author">by J.K.Rowling</p>
              <button
                className="button btn btn-primary"
                onclick="display('sectionharrypotter')"
              >
                Read Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="sectionwingsoffire">
        <div className="books-detail-page text-center">
          <img
            className="books-detail-page-image"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-apj-img.png"
          />
          <h1 className="books-detail-page-heading">Wings of Fire</h1>
          <p className="books-detail-page-author">by Arun Tiwari</p>
          <p className="books-detail-page-content">
            Every common man who by his sheer grit and hard work achieves
            success should share his story with the rest for they may find
            inspiration and strength to go on, in his story. The 'Wings of Fire'
            is one such autobiography by visionary scientist Dr. APJ Abdul
            Kalam, who from very humble beginnings rose to be the President of
            India. The book is full of insights, personal moments and life
            experiences of Dr. Kalam. It gives us an understanding on his
            journey of success.
          </p>
          <div className="books-detail-page-buttons d-flex flex-row justify-content-center text-center">
            <button
              className="button btn btn-warning"
              onclick="display('sectionhomepage')"
            >
              Back
            </button>
            <button className="button btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
      <div id="section3mistakes">
        <div className="books-detail-page text-center">
          <img
            className="books-detail-page-image"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-chetan-bhagat-img.png"
          />
          <h1 className="books-detail-page-heading">
            The 3 mistakes of my life
          </h1>
          <p className="books-detail-page-author">by Chetan Bhagat</p>
          <p className="books-detail-page-content">
            The 3 Mistakes of my life is the third novel written by eminent
            Indian Author Chetan Bhagat. Based on cricket, business and
            religion, the novel is set against the backdrop of beautiful city
            Ahmedabad. Revolving around three young Indian boys Omi, Ishaan and
            Govind, the book goes on to narrate how the three are trying their
            best to make ends meet in the city. Based on real events, the book
            starts with a dramatic twist, where Bhagat is reading an e-mail sent
            by some young person Govind.
          </p>
          <div className="books-detail-page-buttons d-flex flex-row justify-content-center text-center">
            <button
              className="button btn btn-warning"
              onclick="display('sectionhomepage')"
            >
              Back
            </button>
            <button className="button btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
      <div id="sectionharrypotter">
        <div className="books-detail-page text-center">
          <img
            className="books-detail-page-image"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/harrypotter-img.png"
          />
          <h1 className="books-detail-page-heading">Harry Potter</h1>
          <p className="books-detail-page-author">by J.K.Rowling</p>
          <p className="books-detail-page-content">
            Harry Potter's life is miserable. His parents are dead and he's
            stuck with his heartless relatives, who force him to live in a tiny
            closet under the stairs. But his fortune changes when he receives a
            letter that tells him the truth about himself: he's a wizard. A
            mysterious visitor rescues him from his relatives and takes him to
            his new home, Hogwarts School of Witchcraft and Wizardry. After a
            lifetime of bottling up his magical powers, Harry finally feels like
            a normal kid.
          </p>
          <div className="books-detail-page-buttons d-flex flex-row justify-content-center text-center">
            <button
              className="button btn btn-warning"
              onclick="display('sectionhomepage')"
            >
              Back
            </button>
            <button className="button btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
