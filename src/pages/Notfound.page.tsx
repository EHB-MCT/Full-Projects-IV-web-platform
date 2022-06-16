import React from "react";
import tv from "../assets/tv.png";

export default function Notfound() {
  return (
    <div className="notfound-container">
      <img src={tv} alt="" />
      <div>
        <h2>404</h2>
        <h3>Page not found</h3>
      </div>
    </div>
  );
}
