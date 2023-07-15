import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Contact = () => {
  return (
    <>
    <NavBar/>
    <h1 className="primary-heading" style={{margin:'5 auto',color:'#fe9e0d'}}>Contact</h1>
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Contact;
