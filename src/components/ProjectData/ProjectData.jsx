import React from "react";
import "./ProjectData.css";
import Backdrop from "./../Backdrop/Backdrop";
import { IoClose } from "react-icons/io5";

const ProjectData = ({ project, handleClose, openDemo }) => {
  return (
    <Backdrop>
      <form className="project-data__modal">
        <button type="button" className="close" onClick={handleClose}>
          <IoClose />
        </button>
        <div className="project-data__content">
          <h2 className="project-data__title">{project.title}</h2>
          <p className="project-data__description">{project.description}</p>
          <button onClick={openDemo} type="button" className="project-data__button">See Demo</button>
        </div>
        {/* <img
          className="project-data__image"
          src={project.image}
          alt={project.title}
        /> */}
      </form>
    </Backdrop>
  );
};

export default ProjectData;
