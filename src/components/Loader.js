
import React from "react";

const Loader = (props) => {
    return (<div className="loading">
        <div className="spinner"></div>
    </div>
    )
}

const Footer = (props) => {
    return(
    <div>
      <ul>
        <li>Footer Information</li>
      </ul>
    </div>
    )
  }

  const loader=<Loader />;
  const footer=<Footer />;

  module.exports={loader,footer}