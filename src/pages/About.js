import React, { Component } from 'react';

import "./About.css";
import <profile_pic_name> from;


export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <img
              className="profile_image"
              scr="../assets/profile_pic_name.png"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Zander Trevino</div>
            <div className="brief_description">
              <p>Hi, my name is Zander. I am a Software Developer in the process of learning at Arizona State University.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}