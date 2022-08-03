import React from "react";
import {
    GithubLoginButton,
    LinkedInLoginButton,
  } from "react-social-login-buttons"

import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi my name is Jay</h2>
        <div className="prompt">
          <p>
            I am currently studying Computer Science at Toronto Metropolitan
            University. I have a strong passion for learning and creating
            applications.
          </p>
          <div className="social">
            <a href="https://github.com/JayPatel2728">
              <GithubLoginButton text="GitHub" className="social-button"/>
            </a>
            <a href="https://www.linkedin.com/in/jay-patel-251149230/">
              <LinkedInLoginButton text="LinkedIn" className="social-button"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
