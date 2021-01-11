import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    console.log(resumeData);
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Here is a selection of my work:</h1>
            <div id="portfolio-wrapper" className="bgrid-halves cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a href={item.projurl} target="blank">
                        <div className="item-wrap">
                          <img src={`${process.env.PUBLIC_URL}/${item.imgurl}`} className="item-img" alt="portfolio" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                              <br></br>
                              <p><a href={item.repo} target="blank">Github Repository</a></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}