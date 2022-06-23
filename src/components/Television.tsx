import React, { useEffect } from "react";
import logo from "../assets/img/Final-Show-Logo.svg";
import ehb from "../assets/img/EhB-logo.png";
import video from "../assets/videos/countdown.mp4";
import Countdown from "react-countdown";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import Loader from "./Loader";
import { finalWorkService } from "../services/finalWorkService";
import WebFont from 'webfontloader';

/* A React component that is used to display a countdown timer and a video. */
function Television() {
  const [showVideo, setShowVideo] = useState(true);
  const [showStartVideo, setStartVideo] = useState(true);
  const [loader, setLoader] = useState(true);
  const [videos, setVideos] = useState<string[]>([video]);
  const [videoUrl, setVideoUrl] = useState("");

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

  useEffect(()=>{
    WebFont.load({
      custom:{
        families: ['SevenSegment'],
      },
    })
  })
  useEffect(() => {
    finalWorkService
      .fetchFinalWorks()
      .then((response) => {
        const templateData = response.slice(0, 40);
        return templateData.map((data: any) => data.pathVideo);
      })
      .then((paths: Array<string>) => {
        let oldVideos = videos.slice(0);
        let newVideos = [...oldVideos, ...paths];
        setVideos([...newVideos]);
      });
  }, [videos]);

  const handleVideoEnd = () => {
    setStartVideo(false);
    setShowVideo(false);
    queueNextVideo();
  };

  const isLoaded = () => {
    setLoader(false);
  };

  const queueNextVideo = () => {
    setTimeout(() => {
      setVideoUrl(videos[Math.floor(Math.random() * videos.length)]);
      setShowVideo(true);
    }, Math.floor(Math.random() * 6001) + 6000);
  };

  return (
    <>
      <div className="homeloadercontainer">
        {loader ? (
          <div className="blackloader">
            <Loader />{" "}
          </div>
        ) : null}
      </div>
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
                  {
                    <ReactPlayer
                      url={
                        showStartVideo
                          ? video
                          : videoUrl.replace(
                              "http://finalshowcasebackend.be/",
                              "https://finalshow.be/images/"
                            )
                      }
                      width="133%"
                      height="100%"
                      playing={true}
                      onProgress={(d) => {
                        if (d.playedSeconds > 15) {
                          handleVideoEnd();
                        }
                      }}
                      onEnded={handleVideoEnd}
                      onReady={isLoaded}
                      muted={true}
                      controls={false}
                      className="reactPlayer"
                    ></ReactPlayer>
                  }
                </div>
              ) : (
                <>
                  <p id="countdownTitle">Multimedia & Creatieve Technologie</p>
                  <Countdown
                    date={new Date(2022, 5, 24, 19, 0, 0, 0)}
                    zeroPadTime={2}
                    renderer={renderer}
                  />
                </>
              )}
            </div>
            <div className="screenOverlay"></div>
            <div className="televisionFrame"></div>
          </div>
        </div>
        <Link
          to="hub"
          className="more-btn"
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "Clicked find out more",
            });
          }}
        >
          Naar website
        </Link>
      </div>
    </>
  );
}
export { Television };
