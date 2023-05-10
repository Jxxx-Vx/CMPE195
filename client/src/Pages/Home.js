import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/register');
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    history.push('/alerts');
  };

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
            <button className="home-button" onClick = {handleSubmit}>Sign Up</button>
          </form>
        </div>
        <div className="home-news">
          <h2 className="blue">Emergency News</h2>
          <p className="home-section-description">
            Take a look at the latest Emergency News reports
          </p>
          <button className="home-section-button" onClick={handleSubmit2}>View All News</button>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/f3e72f14-c9c7-4dcb-bce0-bd9f8a254550?org_if_sml=1262002"
            alt="Emergency News"
            className="home-section-image"
          />
        </div>
        <div className="home-mission fade-in">
          <div className="home-mission-text">
            <h2 className="home-section-title">Our Mission</h2>
              <p className="home-section-description">
              Our mission is to keep our users informed and safe by providing real-time updates on emergency events and disasters from various sources. 
              We believe that with our app, people can be prepared and take the necessary actions to protect themselves and their loved ones. 
              We are passionate about making a positive impact on the world and continuously strive to improve and expand our services. 
              Join us in our mission to stay informed and stay safe!  
              </p>
          </div>
          <div className="home-mission-image">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/f3e72f14-c9c7-4dcb-bce0-bd9f8a254550?org_if_sml=1262002"
              alt="Our Mission"
              className="home-section-image"
            />
          </div>
        </div>

        
        <div className="home-how-it-works fade-in">
          <div className="home-how-text">
            <h2 className="home-section-title">How it works?</h2>
            <p className="home-section-description">
              Our web app is a powerful tool that pulls information from two reliable sources, the National Weather Service API and the United States Geological Survey APIs, 
              to keep our users updated on natural disasters and emergency events in real-time.  We are passionate about keeping our users informed and safe, 
              and we're continuously expanding our data sources to provide the most comprehensive and up-to-date information available. 
            </p>
          </div>
          <div className="home-how-image">
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/f3e72f14-c9c7-4dcb-bce0-bd9f8a254550?org_if_sml=1262002"
                alt=""
                className="home-section-image"
              />
          </div>
        </div>
        <div className="home-about fade-in">
          <div className="home-about-text">
            <h2 className="home-section-title">About the Team</h2>
            <p className="home-section-description">
              Our team is composed of senior students majoring in Software Engineering at San Jose State University. 
              We bring diverse skills and experiences to the table, collaborate effectively, and have a passion for learning and applying the latest industry-standard tools and practices. 
              Our strong work ethic and can-do attitude drive us to continuously improve and deliver high-quality results for our clients and users.
            </p>
          </div>

          <div className="home-how-image">
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/f3e72f14-c9c7-4dcb-bce0-bd9f8a254550?org_if_sml=1262002"
                alt=""
                className="home-section-image"
              />
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Home;
