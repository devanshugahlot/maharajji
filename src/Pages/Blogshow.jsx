import React from "react";
import { convertToIST } from "../helpers/formatFunctions";
const Blogshow = () => {
  const blogPosts = [
    {
      _id: "66190f1f6e51fb707927efc1",
      heading: "Winning the Devils Bargain: Fight against Substance Abuse",
      subHeading: "asdfasdf",
      tags: ["asdfdsaf", "asd;fkhasdkjf", "asdfasdf", "asdfasdfs"],
      
        description: "<h1>Substance Abuse Among Youth: A Public Health Concern</h1><p>Substance abuse among youth is a significant public health concern that affects individuals, families, and communities worldwide. Understanding the causes, consequences, and preventive measures associated with youth substance abuse is crucial to mitigate its impact on young people's lives and foster a healthier future for generations to come.</p><p>Startling statistics by National Survey on Drug Use and Health reveal that almost 53% of full-time college students have indulged in alcohol consumption within the past month, while a staggering 33% have engaged in binge drinking—consuming more than five drinks at a time. These figures not only paint a troubling picture but also hint at a profound need to understand and prevent substance abuse among our youth.</p><p>Now that we have established that Substance abuse is a worldwide concern, we shall now focus on the ongoing prevalence of substance abuse that has cast its shadows on countless nations and cities. To understand the prevalence of substance abuse, we need to first understand the causes and risk factors associated with the same. While the prevalence rates may vary across countries and regions, the overarching global picture reveals a concerning trend. According to the World Health Organization (WHO), approximately 12% of young people aged 15-19 engage in substance abuse, with alcohol being the most commonly abused substance, followed by tobacco and illicit drugs.</p><p>Some of the most common factors that push the youth down the dark alley of Substance Abuse include Social and Environmental Factors, Mental health conditions, and Past traumatic experiences.</p><h2>Social and Environmental Factors:</h2><p>A major contributor to increasing substance abuse is due an unhealthy persuading social circle. Meeting regularly in places where alcohol and other means of substance abuse are in close vicinity makes it irresistible to avoid consumption. Moreover, it has become the social norm to celebrate birthdays, parties and events with alcohol.</p><h2>Mental health factors:</h2><p>Youth grappling with conditions like depression, anxiety, and ADHD often find themselves drawn towards substance abuse as a fleeting source of temporary relief and solace. These substances serve as momentary escapes, providing a semblance of happiness and respite from their underlying mental health challenges.</p><h2>Past traumatic experiences:</h2><p>Childhood traumas and Adverse Childhood Experiences (ACEs) have been identified as significant factors contributing to teenage substance abuse. The impact of events like family divorces, and physical, mental, and sexual child abuse can be profound, pushing teenagers towards seeking solace in alcohol and drugs as a means to escape from these traumatic experiences.</p><p>It is a common habit amongst youth to live by the Try-one/Experience-one ideology and end up developing an uncontrollable urge to live that experience multiple times. Now, if we were to take a step back and think about it. What develops that urge to experience that momentary pleasure? Is it a necessity of the physical body or our captivated mind?</p><p>Let us understand the same using a very popular analogy. Have you heard of the term “Devil’s Bargain”? It is a deal that provides us with momentary pleasures in return for detrimental destructive consequences in the near future. For example, you have a very critical meeting with your boss tomorrow at 8 am. You were inconsiderate of the cruciality of it and watched Netflix until 3 am the same morning. You woke up just in time for the meeting but had a terrible headache. The meeting didn’t go as well as planned.</p><p>Why? It’s because you fell into the trap of the devil’s bargain. You traded your precious sleep, rest and a calm state of mind with momentary thrill and pleasure, only to bear the price later.</p><p>The substance abuse game is no different. The first time someone tries it, it is curiosity. The second time someone tries it, it is thrilling. By the third time, it becomes a necessity. People end up falling into a never-ending devil’s bargain wherein they keep trading their time, money and mental state in exchange for momentary pleasures. Soon this bargain develops into dependency.</p><p>How to target it? How can we remedy the situation?</p><p>The unseemingly rising affliction must be caught at its root- the human mind. For those who argue that they indulge in such practices only to leave behind a world full of sorrows and grief, here’s a thought to ponder upon, Will the situation be better when you will gain back your consciousness? Does permanently seeking solace in the bounds of unconsciousness solve the problem for you?</p><p>The wise have said, \"Forgetting sorrows is one thing while annihilating sorrows from the root is something else altogether.\" The situation of a drunker is like that of a pigeon that closes its eyes on seeing the sharp nails of a cat. But, by closing its eyes, will the pigeon be saved from the deadly attack of the cat? Certainly not!</p><p>Implementing comprehensive education and awareness programs is a vital strategy for preventing youth substance abuse. By introducing accurate information about substances, their associated risks, and the consequences of abuse, these school-based prevention initiatives empower young individuals to make informed decisions.</p><p>Strengthening protective factors is equally important, focusing on cultivating healthy coping mechanisms, building resilience, fostering positive peer relationships, and nurturing strong family bonds.</p><p>Additionally, implementing policies that regulate the availability and accessibility of substances, such as age restrictions, taxation, and advertising restrictions, can serve as effective deterrents. Early intervention and treatment play a crucial role in identifying and addressing substance abuse problems promptly through counseling, therapy, and rehabilitation. Lastly, creating supportive and inclusive environments where young people feel connected, valued, and engaged contributes to protective factors against substance abuse.</p><p>Alongside these efforts, strict measures should be enforced to restrict college students’ access to places with alcohol availability. Together, these preventive measures aim to mitigate the prevalence of youth substance abuse and promote healthier choices among the younger generation.</p>"
      ,
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
