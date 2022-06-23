import { useEffect, useState } from "react";
import cover_1 from "../../../assets/showroom/cover_1.png";
import cover_2 from "../../../assets/showroom/cover_2.png";
import cover_3 from "../../../assets/showroom/cover_3.png";
import cover_4 from "../../../assets/showroom/cover_4.png";
import cover_5 from "../../../assets/showroom/cover_5.png";
import share from "../../../assets/showroom/share_logo.png";

import "../../../styles/showroom/_detailSide.scss";

import phone from "../../../assets/showroom/phone.png";
import mail from "../../../assets/showroom/email.png";
import linkedin from "../../../assets/showroom/linkedin.png";
import instagram from "../../../assets/showroom/instagram.png";
import Slider from "./Slider";
import { RWebShare } from "react-web-share";

export default function DetailSide(props: any) {
  const [cover, setCover] = useState(String);
  const [cluster, setCluster] = useState(String);
  const [clusterClass, setClusterClass] = useState(String);
  const [backgroundClass, setBackgroundClass] = useState(String);

  useEffect(() => {
    if (props.cassette.cassetteNumber === 1) {
      setCover(cover_1);
      setBackgroundClass("beschrijving blackT");
    } else if (props.cassette.cassetteNumber === 2) {
      setCover(cover_2);
      setBackgroundClass("beschrijving blackT");
    } else if (props.cassette.cassetteNumber === 3) {
      setCover(cover_3);
      setBackgroundClass("beschrijving blackT");
    } else if (props.cassette.cassetteNumber === 4) {
      setCover(cover_4);
      setBackgroundClass("beschrijving blueT");
    } else if (props.cassette.cassetteNumber === 5) {
      setCover(cover_5);
      setBackgroundClass("beschrijving blackT");
    }

    if (props.data.cluster === "web" || props.data.cluster === "webApp") {
      setCluster("Web en App");
      setClusterClass("clusterName Web");
    } else if (
      props.data.cluster === "interactiveMotion" ||
      props.data.cluster === "motion"
    ) {
      setCluster("Motion");
      setClusterClass("clusterName Motion");
    } else if (
      props.data.cluster === "digitalMaking" ||
      props.data.cluster === "smartTechnologies"
    ) {
      setCluster("Smart Technologies");
      setClusterClass("clusterName Smart");
    } else if (
      props.data.cluster === "alternativeReality" ||
      props.data.cluster === "extendedReality"
    ) {
      setCluster("Extended Reality");
      setClusterClass("clusterName Reality");
    }
  }, [props.cassette.cassetteNumber, props.data.cluster]);

  return (
    <div className="detailContainer">
      <img src={cover} alt="cover-cassette" className="cover" />

      <div className="onCoverElement">
        <div id="stripeCluster">
          {/* <div id="colorStripe"></div> */}
          <h3 className={clusterClass}>{cluster}</h3>
        </div>

        <h1 id="projectArtist">
          {props.data.user.map((users: any) => {
            return users.name;
          })}
        </h1>
        <div id="projectName">
          <h5 className="projectPlaceHolder">PROJECT:</h5>
          <p className="nameProject">{props.data.title}</p>
        </div>

        {/* <ImageSlider/> */}
        <Slider data={props.data} />

        <h3 className="beschrijvingPlaceholder">PROJECTBESCHRIJVING</h3>
        <p className={backgroundClass}>{props.data.description}</p>

        <div id="personalInfo">
          <div id="contactInfoContainer">
            <div id="mail" className="infoFlex">
              <img src={mail} alt="mail icon" className="socialIcon" />
              <p className="mailAdres invulText">
                {props.data.user.map((users: any) => {
                  return users.email;
                })}
              </p>
            </div>
            {props.data.socials.map((social: any, index: any) => {
              return (
                <div key={index}>
                  <div className="infoFlex">
                    <img src={phone} alt="phone icon" className="socialIcon" />
                    <p className="invulText">{social.tel}</p>
                  </div>

                  <div id="linkedIn" className="infoFlex">
                    <img
                      src={linkedin}
                      alt="linkedin icon"
                      className="socialIcon"
                    />
                    <p className="invulText">{social.linkedin}</p>
                  </div>
                  <div id="Instagram" className="infoFlex">
                    <img
                      src={instagram}
                      alt="instagram icon"
                      className="socialIcon"
                    />
                    <p className="invulText">{social.instagram}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="shareContainer">
          {/* <RWebShare
                    data={{
                    text:"Bekijk hier mijn final work",
                    url: `http://finalshow.be/showcase/finalwork/${props.data.id}`,
                    title: "Mijn final work",
                    }}
                    sites={["facebook", "instagram", "linkedin"]}
                    >
                <img  src={share} alt="share-icon" id="shareIcon"/>
            </RWebShare> */}
        </div>
      </div>
    </div>
  );
}
