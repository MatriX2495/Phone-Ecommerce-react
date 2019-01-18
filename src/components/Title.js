import React from 'react'

export default function Title({name,title}) {
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-6 mx-auto my-5">
                    <h1 className="text-capitalize text-blue font-weight-bold text-center">
                        {name}&nbsp;{title}
                    </h1>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
