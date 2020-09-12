import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center text-md-left" id="experience">
        <div className="w-100">
          <h3 className="mb-5">Experience</h3>
          {
            this.experience.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h4 className="mb-0">{exp.position}</h4>
                  <div className="subheading mb-3">{exp.organization}</div>
                  <p>{exp.aboutWork}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Experience;
