import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import Slider from "../Slider/slider";
import "./home.css";
import tsbrown from "../../images/TSBrown.webp";
import tsbrownb from "../../images/TSbrownBack.webp";
import aam4 from "../../images/aamj4w.webp";
import aam4back from "../../images/aamj4wback.webp";
import tsolive from "../../images/TSOlive.webp";
import tsoliveb from "../../images/TSOliveback.webp";
import pandas from "../../images/pandaDunks.jpg";
import sambas from "../../images/samba.png";
import hero from "../../images/homeshoe.jpeg";

import { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <>
      <section>
        <img id="homePic" src={hero} alt="Home Shoe" />
      </section>

      <h1>NEW RELEASES</h1>
      <div className="shoe-releases">
        <div className="shoe-row">
          <div className="shoe-card">
            <img
              className="shoe-pics"
              src={isHovered ? tsbrownb : tsbrown}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              alt="Travis Scott Jordan 1 low velvet brown"
            />
            <div className="description">
              Travis Scott x Jordan 1 Low 'Velvet Brown'
            </div>
            <div className="shoe-price">800 USD</div>
            <div className="ratings">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i> 4.5 (97)
            </div>
            <button className="buy">ADD TO BAG</button>
          </div>
          <div className="shoe-card">
            <img
              className="shoe-pics"
              src={isHovered2 ? aam4back : aam4}
              onMouseOver={() => setIsHovered2(true)}
              onMouseOut={() => setIsHovered2(false)}
              alt="A Ma Maniere x Air Jordan 4"
            />
            <div className="description">A Ma Maniere x Air Jordan 4</div>
            <div className="shoe-price">250 USD</div>
            <div className="ratings">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i> 4 (75)
            </div>
            <button className="buy">ADD TO BAG</button>
          </div>
          <div className="shoe-card">
            <img
              className="shoe-pics"
              src={isHovered3 ? tsoliveb : tsolive}
              onMouseOver={() => setIsHovered3(true)}
              onMouseOut={() => setIsHovered3(false)}
              alt="Travis Scott Jordan 1 low Reverse Olive"
            />
            <div className="description">
              Travis Scott x Jordan 1 Low 'Reverse Olive'
            </div>
            <div className="shoe-price">700 USD</div>
            <div className="ratings">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i> 5 (144)
            </div>
            <button className="buy">ADD TO BAG</button>
          </div>
        </div>
      </div>

      <div className="top-sold">
        <h2>MOST POPULAR</h2>
        <div className="black-background">
          <div className="gray-back-top">
            <div className="pop">
              <h4>Panda Dunk Low</h4>
              <p>
                The Nike Dunk Low Retro White Black released in January of 2021
              </p>
              <button className="shop-now">
                <Link to="/product">SHOP NOW</Link>
              </button>
            </div>
            <img className="panda-pic" src={pandas} alt="Panda Dunk Low" />
          </div>
        </div>
        <div className="black-background">
          <div className="gray-back-bottom">
            <img className="samba-pic" src={sambas} alt="Adidas Samba" />
            <div className="pop">
              <h4>Adidas Samba</h4>
              <p>The Adidas Samba Classic debuted for $100 in 2023</p>
              <button className="shop-now">
                <Link to="/product">SHOP NOW</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="slider-section">
        <Slider />
      </section>
    </>
  );
};

export default Home;
