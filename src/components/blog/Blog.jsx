import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";
import BlogData from "./BlogData";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Technical Skills</h2>

      <div className="blog__container grid">
        {BlogData.map((data, id) => {
          return (
            <div key={id} className="blog__card">
              <div className="blog__thumb">
                <a href="#">
                  <img src={data.icon} alt="" className="blog__img" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
