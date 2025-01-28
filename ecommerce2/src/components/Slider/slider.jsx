import "./slider.css";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import TSFrag from "../../images/TSfrag.webp";
import TSMocha from "../../images/TSmocha.webp";
import TSBrown from "../../images/TSBrown.webp";
import TSOlive from "../../images/TSOlive.webp";
import TSFavs from "../../images/TSreverse.webp";
import TSBlack from "../../images/TSblack.webp";
import Slider from "react-multi-carousel";
import { Link } from "react-router-dom";

export default function Carouselslider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="slider">
      <h2>TRAVIS SCOTT x JORDAN</h2>
      <div className="slider-container">
        <Slider
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="slider-box">
            <img
              style={{ width: "300px" }}
              src={TSFrag}
              alt="Travis Scott x Fragment x Jordan 1s"
              className="sliderimg"
            />
            <Link to="/products" className="hoverbutton">
              Buy Now
            </Link>
          </div>
          <div className="slider-box">
            <img
              style={{ width: "300px" }}
              src={TSMocha}
              alt="Travis Scott x Jordan 1s 'Mocha'"
              className="sliderimg"
            />
            <Link to="/products" className="hoverbutton">
              Buy Now
            </Link>
          </div>
          <div className="slider-box">
            <img
              style={{ width: "300px" }}
              src={TSBrown}
              alt="Travis Scott x Jordan 1s 'Brown'"
              className="sliderimg"
            />
            <Link to="/product" className="hoverbutton">
              Buy Now
            </Link>
          </div>
          <div className="slider-box">
            <img
              style={{ width: "300px" }}
              src={TSOlive}
              alt="Travis Scott x Jordan 1s 'Reverse Olive'"
              className="sliderimg"
            />
            <Link to="/product" className="hoverbutton">
              Buy Now
            </Link>
          </div>
          <div className="slider-box">
            <img
              style={{ width: "300px" }}
              src={TSFavs}
              alt="Travis Scott x Jordan 1s 'Reverse Mocha'"
              className="sliderimg"
            />
            <Link to="/product" className="hoverbutton">
              Buy Now
            </Link>
          </div>
          <div className="slider-box">
            <img
              style={{ width: "300px" }}
              src={TSBlack}
              alt="Travis Scott x Jordan 1s 'Black Phantom'"
              className="sliderimg"
            />
            <Link to="/product" className="hoverbutton">
              Buy Now
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}
