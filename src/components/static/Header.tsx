import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useSwipeable } from "react-swipeable";
import logo from "../../assets/img/Final-Show-Logo.svg";
import hamburgerIcon from "../../assets/img/menu-icon.svg";

export default function Header() {
  const location = useLocation();
  console.log(location);

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  if (location.pathname != "/") {
    return (
      <>
        <header>
          <Menu
            customBurgerIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 50 50"
                width="250px"
                height="250px"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
              </svg>
            }
            customCrossIcon={
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="250px"
                height="250px"
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
              </svg>
            }
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <Link onClick={closeSideBar} to="info">
              INFO
            </Link>
            <Link onClick={closeSideBar} to="timetable">
              TIMETABLE
            </Link>
            <Link
              onClick={closeSideBar}
              to="admin/live"
              style={{
                pointerEvents: "none",
                backgroundColor: "rgba(12, 12, 12, 0.5)",
              }}
            >
              LIVE SHOW
            </Link>
            <Link
              onClick={closeSideBar}
              to="admin/showroom"
              style={{
                pointerEvents: "none",
                backgroundColor: "rgba(12, 12, 12, 0.5)",
              }}
            >
              SHOWROOM{" "}
            </Link>
          </Menu>
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <nav className="desktop-nav">
            <Link to="info">INFO</Link>
            <Link to="timetable">TIMETABLE</Link>
            <Link
              to="admin/live"
              style={{
                pointerEvents: "none",
                backgroundColor: "rgba(12, 12, 12, 0.5)",
              }}
            >
              LIVE SHOW
            </Link>
            <Link
              to="admin/showroom"
              style={{
                pointerEvents: "none",
                backgroundColor: "rgba(12, 12, 12, 0.5)",
              }}
            >
              SHOWROOM{" "}
            </Link>
          </nav>
        </header>
      </>
    );
  } else {
    return <></>;
  }
}

