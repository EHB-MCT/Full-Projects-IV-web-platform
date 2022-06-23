import { useEffect, useState } from "react";
import { finalWorkService } from "../../services/finalWorkService";
import Cassette from "../Home/Cassette";

import "../../styles/showroom/_cassette.scss";
import "../../styles/showroom/_countdown.scss";
import "../../styles/showroom/_genomineerd.scss";
import Countdown from "react-countdown";

import Motion from "../../assets/showroom/Logos-Clusters/MOTION_Logo.svg";
import WebApp from "../../assets/showroom/Logos-Clusters/WEB&APP_LOGO.svg";
import Reality from "../../assets/showroom/Logos-Clusters/EXTENDEDREALITY_LOGO.svg";
import Smart from "../../assets/showroom/Logos-Clusters/SMARTTECHNOLOGY_Logo.svg";

function Genomineerd() {
  const [finalWorks, setFinalWorks] = useState([]);

  useEffect(() => {
    finalWorkService.fetchFinalWorks().then((Response) => {
      var templateData = Response.slice(0, 40);
      setFinalWorks(templateData);
    });
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <div>
          <div className="motionGenom">
            <div className="motionImg">
              <img
                className="logoImgcluster"
                src={Motion}
                alt="name-cluster-logo"
              />
            </div>
            <div className="cassettesContainerNominees">
            {
              finalWorks.filter((x: any) => x.cluster === "motion").sort((a : any, b: any) => b.score - a.score).slice(0,5).map((x:any) => {
                  return <Cassette data={x} key={x["id"]} ></Cassette>
            })
            }
            </div>
          </div>
          <div className="webAppGenom">
            <div className="appImg">
              <img
                className="logoImgcluster"
                src={WebApp}
                alt="name-cluster-logo"
              />
            </div>
            <div className="cassettesContainerNominees">
            {
              finalWorks.filter((x: any) => x.cluster === "webApp").sort((a : any, b: any) => b.score - a.score).slice(0,5).map((x:any) => {
                  return <Cassette data={x} key={x["id"]} ></Cassette>
            })
            }
            </div>
          </div>
          <div className="realityGenom">
            <div className="realityImg">
              <img
                className="logoImgcluster"
                src={Reality}
                alt="name-cluster-logo"
              />
            </div>
            <div className="cassettesContainerNominees">
            {
              finalWorks.filter((x: any) => x.cluster === "extendedReality").sort((a : any, b: any) => b.score - a.score).slice(0,5).map((x:any) => {
                  return <Cassette data={x} key={x["id"]} ></Cassette>
            })
            }
            </div>
          </div>
          <div className="smartGenom">
            <div className="smartImg">
              <img
                className="logoImgcluster"
                src={Smart}
                alt="name-cluster-logo"
              />
            </div>
            <div className="cassettesContainerNominees">
            {
              finalWorks.filter((x: any) => x.cluster === "smartTechnologies").sort((a : any, b: any) => b.score - a.score).slice(0,5).map((x:any) => {
                  return <Cassette data={x} key={x["id"]} ></Cassette>
            })
            }
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Countdown">
          <h1>Ontdek hier de genomineerden</h1>
          <div id="CountDownStyle">
            <div id="days">
              <p>{days < 10 ? <span>0{days}</span> : <span>{days}</span>}</p>
              <p>{days <= 1 ? <span>Dag</span> : <span>Dagen</span>}</p>
            </div>
            <div id="hours">
              <p>{hours < 10 ? <span>0{hours}</span> : <span>{hours}</span>}</p>
              <p>{hours <= 1 ? <span>Uur</span> : <span>Uren</span>}</p>
            </div>
            <div id="minutes">
              <p>
                {minutes < 10 ? (
                  <span>0{minutes}</span>
                ) : (
                  <span>{minutes}</span>
                )}
              </p>
              <p>{minutes <= 1 ? <span>Min</span> : <span>Min</span>}</p>
            </div>
            <div id="seconds">
              <p>
                {seconds < 10 ? (
                  <span>0{seconds}</span>
                ) : (
                  <span>{seconds}</span>
                )}
              </p>
              <p>{seconds <= 1 ? <span>Sec</span> : <span>Sec</span>}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="allClusters">
      <Countdown
        date={new Date("2022-06-24T12:00:00+02:00")}
        renderer={renderer}
      />
    </div>
  );
}
export default Genomineerd;
