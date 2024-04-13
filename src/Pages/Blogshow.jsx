import React from "react";
import { convertToIST } from "../helpers/formatFunctions";
const Blogshow = () => {
  const blogPosts = [
    {
      _id: "66190f1f6e51fb707927efc1",
      heading: "Winning the Devils Bargain: Fight against Substance Abuse",
      subHeading: "asdfasdf",
      tags: ["asdfdsaf", "asd;fkhasdkjf", "asdfasdf", "asdfasdfs"],
      description: '<h1>Heading </h1><p><span class="ql-font-serif">asdfksajdfjh</span></p><p><u class="ql-font-serif ql-size-large">This is blog page this is the first time i am doing </u></p><ul><li><u class="ql-font-serif ql-size-large">it</u></li></ul><ol><li><u class="ql-font-serif ql-size-large">aksjdfl;kajsdf</u></li><li><u class="ql-font-serif ql-size-large">asdkjfasd</u></li><li class="ql-indent-1"><u class="ql-font-serif ql-size-large">fkk;adhsfkasjdfl</u></li><li class="ql-indent-1"><u class="ql-font-serif ql-size-large">asdfasdfkjflas</u></li><li class="ql-indent-1"><u class="ql-font-serif ql-size-large">faksjdfj;askdjf</u></li><li class="ql-indent-1"><u class="ql-font-serif ql-size-large"> bitamr</u></li></ol><blockquote class="ql-indent-1"><u class="ql-font-serif ql-size-large"> this is the fiest imt e</u></blockquote>',
      images: [
        "https://www.djjs.org/uploads/blog/99ad5ffb1fc78d7d4603cf51290a9eb6.png",
        "http://localhost:5000/files/images/image-1712900978416-133783390.png",
      ],
      category: "Sample Category",
      firstSubCategory: "First Subcategory",
      secondSubCategory: "Second Subcategory",
      thirdSubCategory: "",
      fourthSubCategory: "asdf",
      fifthSubCategory: "asdf",
      author: "Jayesh Vijay",
      createdAt:"2024-04-12T10:38:23.367Z",
      updatedAt: "2024-04-12T10:38:23.367Z"
    },
  ];

  return (
    <div>
      {blogPosts.map((post) => (
        <div key={post._id}>
          <div className="titlebar titlebar-sm scheme-dark bg-gray-2 bb-fade-black-005">
            <div className="titlebar-inner py-5">
              <div className="container titlebar-container">
                <div className="row titlebar-container">
                  <div className="titlebar-col col-md-6">
                    <h1 className="font-size-26 mb-1"> {post.heading}</h1>
                    <div className="font-size-14 text-fade-dark-06">
                      <ul className="entry-meta clearfix">
                        <li>
                        {convertToIST(post.createdAt)}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="titlebar-col col-md-6 text-md-right">
                    <ol className="breadcrumb reset-ul inline-nav">
                      <li>
                        <a href="../index.html">
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="../blog.html">
                          <span>Blog</span>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="content">
            <div className="content-wrap pb-0">
              <div className="container clearfix">
                <div className="row">
                  <div className="col-md-8 ">
                    <div className="single-post nobottommargin">
                      <div className="pull-left addthis_toolbox addthis_default_style">
                        <a className="addthis_button_facebook_like" />
                        <a className="addthis_button_tweet" />
                        <a className="addthis_button_google_plusone" />
                        <a className="addthis_counter addthis_pill_style" />
                      </div>

                      <div className="text-center mb-3">
                        <img
                          style={{ margin: "0 auto" }}
                          src={post.images[0]}
                          alt={post.heading}
                          className="img-responsive"
                        />
                      </div>
                      <div className="entry clearfix">
                        <div className="clearfix" />
                        <div className="entry-content notopmargin">
                          <p dangerouslySetInnerHTML={{ __html: post.description }} />
                          <div className="tagcloud clearfix">
                            <span style={{ marginRight: 10 }} className="pull-left">
                              <strong>TAGS</strong>
                            </span>
                            {post.tags.map((tag, i) => (
                              <a key={i} href={`#${tag}`}>{tag}</a>
                            ))}
                          </div>
                          <div className="clear" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-md-offset-1 sidebar-container">
                    <aside className="main-sidebar">
                      <div className="widget widget_search mt-0">
                        <form
                          role="search"
                          method="post"
                          className="search-form"
                          action="https://www.djjs.org/blog/search"
                        >
                          <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input
                              type="search"
                              className="search-field"
                              placeholder="Search …"
                              defaultValue
                              name="searchval"
                            />
                          </label>
                          <input
                            type="submit"
                            className="search-submit"
                            defaultValue="Search"
                          />
                        </form>
                      </div>
                      <div className="widget widget_categories">
                        <h3 className="widget-title">Categories</h3>
                        <ul>
                          {/* Render categories here */}
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Blogshow;
