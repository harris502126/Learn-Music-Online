import React, { useState } from 'react';
import './login.css';
import Navigation from './Navigation';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
import AdditionalSidebar from './AdditionalSideBar';
import Footer from './Footer';

function Video() {
  

  return (
    <div className="video-streaming-website">
      <header>
        <h1>My Collections</h1>
       <Navigation/>
      </header>

      <main>
        <div className="video-player">
          <VideoPlayer/>
        </div>

        <div className="sidebar">
          <div className="search-bar">
            <SearchBar/>
          </div>
          <AdditionalSidebar/>
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}



export default Video;