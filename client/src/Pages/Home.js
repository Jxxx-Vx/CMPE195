import React from 'react'
import './Home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-home-page">
        <div className = "home-img1">
          <div className = 'text1'>
            <span>Get your Emergency News Here.</span>
            <span>Sign up and subscribe to our newspaper.</span>
            <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/edee35b7-f005-4c71-b5ff-824fde88a790?org_if_sml=13593"
            alt="SearchBarI633"
            className="home-search-bar"
          />
          <button className="home-signinbutton">
            Sign Up
          </button>
          </div>

          <span className="home-text">
            <span>Get your Emergency News Here.</span>
          </span>
          <span className="home-text02">
            <span>Sign up and subscribe to our newspaper.</span>
          </span>
        </div>
        <div className = "curve"></div>
        <div className="home-navigateto-emergency-news">
          <div className="home-navigateto-news"/>
          <span className="home-text06">
            <span className="home-text07">
              <span>Take a look at the latest Emergency News reports</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </span>
          <div className="home-navigateto-news-button">
            <span className="home-text13">
              <span> Emergency News</span>
            </span>
          </div>
          <span className="home-text15">
            <span>
              Creating News Report Through Twitter API
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dbf4f428-9f63-44a4-9318-00cacdaadd2d/f3e72f14-c9c7-4dcb-bce0-bd9f8a254550?org_if_sml=1262002"
            alt="image4I633"
            className="home-image4"
          />
        </div>
        <div className="home-mission">
          <span className="home-text17">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
          </span>
          <span className="home-text19">
            <span>Our Mission</span>
          </span>
        </div>
        <div className="home-howit-works">
          <span className="home-text21">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
          </span>
          <span className="home-text23">
            <span>How it works?</span>
          </span>
        </div>
        <div className="home-aboutthe-team">
          <span className="home-text25">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
          </span>
          <span className="home-text27">
            <span>About the Team</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
