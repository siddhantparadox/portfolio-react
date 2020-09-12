import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-left" id="education">
        <div className="w-100">
          <h3 className="mb-5 text-md-left" >Education</h3>
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 text-md-left">
                <div className="resume-content">
                  <h4 className="mb-0">{data.university}</h4>
                  <div className="subheading mb-3">{data.degree}</div>
                  <div>{data.track}</div>
                  <p>{data.gpa}</p>
                  <div className="mb-0">{data.coursework}</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate} - {data.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Education;
