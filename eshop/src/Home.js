import React from "react";
import BannerBackground from "./home-banner-background.png";
import BannerImage from "./home-banner-image.png";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import './App.css'
import { FiArrowRight } from "react-icons/fi";
import Footer from "./Footer";
const Home = () => {
  const location = useLocation()
  console.log(location.state.name)
  const data = location.state

  const name = data.name;
  const level= data.level;
  console.log(name,level)
  const capitalize = (anyname)=>{
    return anyname.charAt(0).toUpperCase()+anyname.slice(1).toLowerCase();
  }
const capitalized = capitalize(name)

  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome {capitalized}
          </h1>
          <p className="primary-text">
            Learning music will not be in a same path for everybody, That's why we make it personalized
          </p>
          <button className="secondary-button">
          Level {level} <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;