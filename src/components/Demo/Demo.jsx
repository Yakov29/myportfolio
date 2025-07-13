import React, { useState, useEffect } from "react";
import "./Demo.css";
import Backdrop from "../Backdrop/Backdrop";
import { IoClose, IoExpandOutline, IoContractOutline } from "react-icons/io5";

const devices = {
  desktop: { width: 1200, height: 768, label: "Desktop" },
  tablet: { width: 768, height: 1024, label: "Tablet" },
  phone: { width: 480, height: 667, label: "Phone" },
};

const Demo = ({ handleClose, project }) => {
  const [device, setDevice] = useState("desktop");
  const [size, setSize] = useState({
    width: devices.desktop.width,
    height: devices.desktop.height,
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1200);
  const [isClosing, setIsClosing] = useState(false);

  const getCenteredPosition = (width, height) => ({
    x: Math.max(0, (window.innerWidth - width) / 2),
    y: Math.max(0, (window.innerHeight - height) / 2),
  });

  const [pos, setPos] = useState(getCenteredPosition(size.width, size.height));

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView || isFullscreen) {
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setPos({ x: 0, y: 0 });
    } else {
      const { width, height } = devices[device];
      setSize({ width, height });
      setPos(getCenteredPosition(width, height));
    }
  }, [device, isFullscreen, isMobileView]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleAnimatedClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      handleClose();
    }, 300);
  };

  return (
    <Backdrop>
      <div
        className={`demo__modal ${isClosing ? "demo__modal--animating" : ""}`}
        style={{
          top: pos.y,
          left: pos.x,
          width: size.width,
          height: size.height,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="demo__header">
          <h2 className="demo__title">{project.title}</h2>
          <select
            className="demo__device-select"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            disabled={isFullscreen || isMobileView}
          >
            {Object.entries(devices).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
          <div className="demo__buttons">
            {!isMobileView && (
              <button
                type="button"
                className="demo__button demo__button--resize-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
              >
                {isFullscreen ? <IoContractOutline /> : <IoExpandOutline />}
              </button>
            )}
            <button
              type="button"
              className="demo__button demo__button--close"
              onClick={(e) => {
                e.stopPropagation();
                handleAnimatedClose();
              }}
            >
              <IoClose />
            </button>
          </div>
        </div>
        <iframe
          className="demo__iframe"
          src={project.link}
          title={project.title || "Demo Preview"}
          frameBorder="0"
          style={{ flexGrow: 1, border: "none" }}
        />
      </div>
    </Backdrop>
  );
};

export default Demo;
