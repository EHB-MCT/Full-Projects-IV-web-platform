import React, { useEffect, useState } from "react";
import imgFrame from "../assets/tv.png";
import TimetableItem from "../components/TimetableItem";
import Tetris from "react-tetris";
import { useNavigate } from "react-router-dom";
import data from "../data/timetableData.json";
import Pacman from "react-pacman";
import Snake from "snake-game-react";

type inter = {
  HeldPiece: any;
  Gameboard: any;
  PieceQueue: any;
  points: any;
  linesCleared: any;
  state: any;
  controller: any;
};

export default function Timetable2() {
  const [tetris, showTetris] = useState(true);
  const [pacman, showPacman] = useState(false);
  const [snake, showSnake] = useState(false);
  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
  }, []);

  function returnGameOrTimetable() {
    if (easterEgg) {
      return (
        <div className="easter-egg-container">
          <div className="game-selectors">
            <p
              className="teletext red-text"
              onClick={() => {
                showTetris(true);
                showPacman(false);
                showSnake(false);
              }}
            >
              tetris
            </p>
            <p
              className="teletext red-text"
              onClick={() => {
                showTetris(false);
                showPacman(true);
                showSnake(false);
              }}
            >
              pacman
            </p>
            <p
              className="teletext red-text"
              onClick={() => {
                showTetris(false);
                showPacman(false);
                showSnake(true);
              }}
            >
              snake
            </p>
          </div>
          {tetris ? (
            <Tetris
              keyboardControls={{
                // Default values shown here. These will be used if no
                // `keyboardControls` prop is provided.
                down: "MOVE_DOWN",
                left: "MOVE_LEFT",
                right: "MOVE_RIGHT",
                space: "HARD_DROP",
                z: "FLIP_COUNTERCLOCKWISE",
                x: "FLIP_CLOCKWISE",
                up: "FLIP_CLOCKWISE",
                p: "TOGGLE_PAUSE",
                c: "HOLD",
                shift: "HOLD",
              }}
            >
              {({
                HeldPiece,
                Gameboard,
                PieceQueue,
                points,
                linesCleared,
                state,
                controller,
              }: inter) => (
                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className="teletext white-text">Points: {points}</p>
                    <p className="teletext white-text">
                      Lines Cleared: {linesCleared}
                    </p>
                  </div>
                  <Gameboard />
                  {state === "LOST" && (
                    <div>
                      <p className="teletext red-text">Game Over</p>
                    </div>
                  )}
                </div>
              )}
            </Tetris>
          ) : (
            <></>
          )}
          {pacman ? <Pacman /> : <></>}
          {snake ? (
            <Snake color1="#00ff00" color2="#0000ff" backgroundColor="#000" />
          ) : (
            <></>
          )}
        </div>
      );
    } else {
      return (
        <div id="teletext">
          <p id="hint-text" className="teletext pink-text">
            Press '8' for a surprise!
          </p>
          <p
            className="teletext red-text"
            id="back-arrow"
            onClick={() => navigate(-1)}
          >
            ← go back
          </p>
          <div className="teletext-subtitle">
            <p className="teletext white-text">
              EhB → Anderlecht, BXL → Fri 24 Jun &nbsp;
            </p>
            <p className="yellow-text teletext">
              {time}
            </p>
          </div>
          <div className="teletext-title">
            <svg viewBox="0 0 77.91 51.94">
              <polygon
                fill="red"
                points="51.94 36.36 57.14 36.36 57.14 31.17 62.33 31.17 62.33 25.97 67.53 25.97 67.53 20.78 72.72 20.78 72.72 15.58 67.53 15.58 67.53 10.39 62.33 10.39 62.33 5.19 57.14 5.19 57.14 0 51.94 0 46.75 0 41.55 0 36.36 0 31.17 0 25.97 0 20.78 0 20.78 5.19 15.58 5.19 15.58 10.39 10.39 10.39 10.39 15.58 5.19 15.58 5.19 20.78 5.19 25.97 5.19 31.17 0 31.17 0 36.36 0 41.55 5.19 41.55 5.19 46.75 5.19 51.94 10.39 51.94 15.58 51.94 20.78 51.94 25.97 51.94 25.97 46.75 20.78 46.75 20.78 41.55 20.78 36.36 20.78 31.17 20.78 25.97 20.78 20.78 25.97 20.78 25.97 15.58 31.17 15.58 36.36 15.58 41.55 15.58 46.75 15.58 46.75 20.78 41.55 20.78 41.55 25.97 36.36 25.97 36.36 31.17 36.36 36.36 41.55 36.36 41.55 41.55 46.75 41.55 51.94 41.55 51.94 36.36"
              />
              <polygon
                fill="red"
                points="72.72 41.55 67.53 41.55 62.33 41.55 57.14 41.55 57.14 46.75 51.94 46.75 51.94 51.94 57.14 51.94 62.33 51.94 67.53 51.94 72.72 51.94 77.91 51.94 77.91 46.75 77.91 41.55 72.72 41.55"
              />
            </svg>
            <div className="teletext double-height">
              <span className="cyan-text">
                &#xe054;&#xe049;&#xe04d;&#xe045;&#xe054;&#xe041;&#xe042;&#xe04c;&#xe045;
              </span>
              <span className="cyan-text">
                &#xe154;&#xe149;&#xe14d;&#xe145;&#xe154;&#xe141;&#xe142;&#xe14c;&#xe145;
              </span>
            </div>
          </div>
          <div className="timetable-container">
            {data.map((item, i) => {
              return (
                <TimetableItem
                  time={item.time}
                  title={item.title}
                  desc={item.description}
                  key={i}
                />
              );
            })}
          </div>
          <div className="timetable-footer teletext">
            <svg viewBox="0 0 77.91 51.94">
              <polygon
                fill="red"
                points="51.94 36.36 57.14 36.36 57.14 31.17 62.33 31.17 62.33 25.97 67.53 25.97 67.53 20.78 72.72 20.78 72.72 15.58 67.53 15.58 67.53 10.39 62.33 10.39 62.33 5.19 57.14 5.19 57.14 0 51.94 0 46.75 0 41.55 0 36.36 0 31.17 0 25.97 0 20.78 0 20.78 5.19 15.58 5.19 15.58 10.39 10.39 10.39 10.39 15.58 5.19 15.58 5.19 20.78 5.19 25.97 5.19 31.17 0 31.17 0 36.36 0 41.55 5.19 41.55 5.19 46.75 5.19 51.94 10.39 51.94 15.58 51.94 20.78 51.94 25.97 51.94 25.97 46.75 20.78 46.75 20.78 41.55 20.78 36.36 20.78 31.17 20.78 25.97 20.78 20.78 25.97 20.78 25.97 15.58 31.17 15.58 36.36 15.58 41.55 15.58 46.75 15.58 46.75 20.78 41.55 20.78 41.55 25.97 36.36 25.97 36.36 31.17 36.36 36.36 41.55 36.36 41.55 41.55 46.75 41.55 51.94 41.55 51.94 36.36"
              />
              <polygon
                fill="red"
                points="72.72 41.55 67.53 41.55 62.33 41.55 57.14 41.55 57.14 46.75 51.94 46.75 51.94 51.94 57.14 51.94 62.33 51.94 67.53 51.94 72.72 51.94 77.91 51.94 77.91 46.75 77.91 41.55 72.72 41.55"
              />
            </svg>
            <p className="teletext">Erasmushogeschool Brussel</p>
            <p className="teletext">2022</p>
          </div>
        </div>
      );
    }
  }
  let easterEgg: boolean = useKeyPress("8");
  useEffect(() => {}, []);
  const navigate = useNavigate();

  return (
    <div id="teletext-container">
      <>{returnGameOrTimetable()}</>
      <div className="tv-overlay-container">
        <img src={imgFrame} alt="" />
      </div>
      <div className="black-bg"></div>
    </div>
  );
}

function getCurrentTime() {
  let today = new Date();
  let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
  let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}

function useKeyPress(targetKey: string): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function downHandler({ key }: any): void {
    if (key === targetKey) {
      setKeyPressed(!keyPressed);
    }
  }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
