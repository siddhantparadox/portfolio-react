import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex text-md-left "
        id="about"
      >
        <div className="w-100">
          <h2 className="mb-0">
            {this.landingData.firstName}
            {this.landingData.lastName}
          </h2>
          <div className="subheading mb-5">
            {this.landingData.phoneNumber} ·
            <a href="mailto:siddhantg314@gmail.com">{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={this.landingData.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={this.landingData.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
