import React from "react";
import red1 from "../assets/img/vhs/red-1.png";
import red2 from "../assets/img/vhs/red-2.png";
import red3 from "../assets/img/vhs/red-3.png";
import red4 from "../assets/img/vhs/red-4.png";
import yellow1 from "../assets/img/vhs/yellow-1.png";
import yellow2 from "../assets/img/vhs/yellow-2.png";
import yellow3 from "../assets/img/vhs/yellow-3.png";
import yellow4 from "../assets/img/vhs/yellow-4.png";
import blue1 from "../assets/img/vhs/blue-1.png";
import blue2 from "../assets/img/vhs/blue-2.png";
import blue3 from "../assets/img/vhs/blue-3.png";
import blue4 from "../assets/img/vhs/blue-4.png";
import orange1 from "../assets/img/vhs/orange-1.png";
import orange2 from "../assets/img/vhs/orange-2.png";
import orange3 from "../assets/img/vhs/orange-3.png";
import orange4 from "../assets/img/vhs/orange-4.png";
import pink from "../assets/img/vhs/pink.png";
import white from "../assets/img/vhs/white.png";

interface IProps {
  color: string;
  variation: number;
  title?: string;
  startTime?: string;
  rotate?: boolean;
}

export default function VHS(props: IProps) {
  let bgImg: string = "";

  switch (props.color + String(props.variation)) {
    case "red1":
      bgImg = red1;
      break;
    case "red2":
      bgImg = red2;
      break;
    case "red3":
      bgImg = red3;
      break;
    case "red4":
      bgImg = red4;
      break;
    case "yellow1":
      bgImg = yellow1;
      break;
    case "yellow2":
      bgImg = yellow2;
      break;
    case "yellow3":
      bgImg = yellow3;
      break;
    case "yellow4":
      bgImg = yellow4;
      break;
    case "blue1":
      bgImg = blue1;
      break;
    case "blue2":
      bgImg = blue2;
      break;
    case "blue3":
      bgImg = blue3;
      break;
    case "blue4":
      bgImg = blue4;
      break;
    case "orange1":
      bgImg = orange1;
      break;
    case "orange2":
      bgImg = orange2;
      break;
    case "orange3":
      bgImg = orange3;
      break;
    case "orange4":
      bgImg = orange4;
      break;
    default:
      bgImg = red1;
      break;
  }

  props.color === "pink" ? (bgImg = pink) : (bgImg = bgImg);
  props.color === "white" ? (bgImg = white) : (bgImg = bgImg);

  let imgStyle = {};
  props.rotate ? (imgStyle = { transform: "rotate(180deg)" }) : (imgStyle = {});

  return (
    <div
      style={{
        transform: `translate(${Math.floor((Math.random() - 0.5) * 10)}%, 0px)`,
      }}
      className="vhs-container"
    >
      <div className="timing-container">
        <p
          style={{
            transform: `rotate(${Math.floor(
              (Math.random() - 0.5) * 40
            )}deg) translate(${Math.floor(
              (Math.random() - 0.5) * 4
            )}px, ${Math.floor((Math.random() - 0.5) * 4)}px)`,
          }}
          className="start-time"
        >
          {props.startTime}
        </p>
      </div>
      <div className="title-container">
        <h1
          style={{
            transform: `rotate(${Math.floor(
              (Math.random() - 0.5) * 4
            )}deg) translate(${Math.floor(
              (Math.random() - 0.5) * 4
            )}px, ${Math.floor((Math.random() - 0.5) * 4)}px)`,
          }}
        >
          {props.title || ""}
        </h1>
      </div>
      <img
        src={bgImg}
        alt=""
        className="vhs-bg-image"
        width="10"
        height="1"
        style={imgStyle}
      />
    </div>
  );
}
