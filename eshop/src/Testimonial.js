import React from "react";
import ProfilePic from "./john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Testimonial = () => {
  return (
    <>
    <NavBar/>
    <h1 className="primary-heading" style={{margin:'5 auto',color:'#fe9e0d'}}>Testimonial</h1>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Testimonial;
