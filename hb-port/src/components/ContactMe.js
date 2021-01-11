import React, { Component } from 'react';
export default class ContactMe extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me on <a href={resumeData.linkedinId} target="blank"> LinkedIn</a> or send me an email at <a href={resumeData.email} target="blank">benhcalvert@gmail.com</a>
              </p>
            </div>
          </div>
          {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  <a href={resumeData.linkedinId} target="blank"> LinkedIn</a>                  
                </h4>
              </div>
            </aside>
          </div> */}
        </section>
        );
  }
}