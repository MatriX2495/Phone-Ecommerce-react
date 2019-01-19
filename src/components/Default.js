import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="conatiner">
            <div className="row mt-5">
              <div className="col-10 col-md-6 col-lg-4 text-capitalize text-center mx-auto">
                <h2>
                  <span className="text-danger">404 !! </span>page not found
                </h2>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
