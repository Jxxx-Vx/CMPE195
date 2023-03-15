import React, { useRef, useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Select all the elements that you want to animate
    const fadeElems = document.querySelectorAll('.fade-in');

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
      // Loop through each entry
      entries.forEach(entry => {
        // If the entry is visible
        if (entry.isIntersecting) {
          // Add the "is-visible" class to the element
          entry.target.classList.add('is-visible');
          // Stop observing the element
          observer.unobserve(entry.target);
        }
      });
    });

    // Loop through each element and observe it
    fadeElems.forEach(elem => {
      observer.observe(elem);
    });
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-intro">
          <h1 className="home-title">Get your Emergency News Here</h1>
          <p className="home-description">
            Sign up and subscribe to our newspaper.
          </p>
          <form className="home-form">
            <input
              type="text"
              className="home-input"
              placeholder="Enter your email address"
            />
            <button className="home-button">Sign Up</button>
          </form>
        </div>
        <div className="home-news">
          <h2 className="home-section-title">Emergency News</h2>
          <p className="home-section-description">
            Take a look at the latest Emergency News reports
          </p>
          <button className="home-section-button">View All News</button>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/f3e72f14-c9c7-4dcb-bce0-bd9f8a254550?org_if_sml=1262002"
            alt="Emergency News"
            className="home-section-image"
          />
        </div>
        <div className="home-mission fade-in">
          <h2 className="home-section-title">Our Mission</h2>
          <p className="home-section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="home-how-it-works fade-in">
          <h2 className="home-section-title">How it works?</h2>
          <p className="home-section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="home-about fade-in">
          <h2 className="home-section-title">About the Team</h2>
          <p className="home-section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
