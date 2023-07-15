import React from "react";
import AboutBackground from "./about-background.png";
import AboutBackgroundImage from "./home-banner-image.svg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <NavBar/>
    <h1 className="primary-heading" style={{margin:'5 auto',color:'#fe9e0d'}}>About</h1>
    <div className="about-section-container">
    
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      
      <div className="about-section-text-container">
        
        <h1 className="primary-heading">
          Music is an art that makes you fly
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
