import React from "react";
import logo from "../assets/img/Final-Show-Logo.svg";
import ehb from "../assets/img/EhB-logo.png";
import video from "../assets/videos/countdown.mp4";
import button from "../assets/img/tvdial.png";
import Countdown from "react-countdown";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

function Television() {
  const [showVideo, setShowVideo] = useState(true);

  // define renderer for countdown
  const renderer = (props: any) => {
    return (
      <>
        <span>{props.formatted.days} days</span>
        <span>
          {props.formatted.hours}:{props.formatted.minutes}:
          {props.formatted.seconds}
        </span>
      </>
    );
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    queueNextVideo();
  };

  const queueNextVideo = () => {
    setTimeout(() => {
      setShowVideo(true);
    }, 5000);
  };

  return (
    <div className="countDownPageContainer">
      <div className="homepageLogoContainer">
        <div className="logoContainer">
          <img src={logo} alt="Final Show Logo" />
        </div>
        <div className="logoContainer" id="ehbLogoContainer">
          <img className="ehbLogo" src={ehb} alt="" />
        </div>
      </div>
      <div className="televisionContainer">
        <div id="television">
          <div className="screen">
            {showVideo ? (
              <div className="playerWrapper">
                <ReactPlayer
                  url={video}
                  width="133%"
                  height="100%"
                  playing={true}
                  onEnded={handleVideoEnd}
                  muted={true}
                  controls={false}
                  className="reactPlayer"
                ></ReactPlayer>
              </div>
            ) : (
              <Countdown
                date={new Date(2022, 5, 24, 19, 0, 0, 0)}
                zeroPadTime={2}
                renderer={renderer}
              />
            )}
          </div>
          <div className="screenOverlay"></div>
          <div className="televisionFrame"></div>
        </div>
      </div>
      <Link
        to="info"
        className="more-btn"
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked find out more",
          });
        }}
      >
        Find out more
      </Link>
    </div>
  );
}
export { Television };
