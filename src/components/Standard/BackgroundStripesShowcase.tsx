import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/showroom/Colors.scss";
import "../../styles/components/_backgroundstripes.scss";

export default function BackgroundStripesShowcase() {
  const location = useLocation(); 
  return (
    <>
      <div id="stripes-container">
        {location.pathname.includes("/showroom/results") ? (
          <Link to="/showroom" id="pink" className="stripe stripe-hover">
            <p>Showroom</p>
          </Link>
        ) : (
          <Link
            to="/showroom/results"
            id="pink"
            className="stripe stripe-hover"
          >
            <p>Resultaat</p>
          </Link>
        )}
        <a id="yellow" className="stripe"></a>
        <a
          id="orange"
          className="stripe stripe-hover"
        >
        </a>
        <a
          id="red"
          className="stripe stripe-hover"
        >
        </a>
        <a href="#" id="blue" className="stripe stripe-hover"></a>
      </div>
    </>
  );
}
