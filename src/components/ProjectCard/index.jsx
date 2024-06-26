import React, { useContext } from "react";
import "./projectcard.css";
import Pill from "../Pill";
import { AppContext } from "../../context";

function ProjectCard({ project }) {
  const { appState } = useContext(AppContext);
  const { translations } = appState?.locale?.language;
  return (
    <div
      key={project.id}
      className="project__card__container"
      style={{
        backgroundColor: project.color,
      }}
    >
      <p className="project__card__title">{project.title}</p>
      <p className="project__card__description">{project.description}</p>
      <div className="project__card__technology_container">
        {project.technology.map((item, i) => (
          <Pill item={item} key={i} />
        ))}
      </div>
      <div className="project__card__links_container">
        <a
          target="_blank"
          href={project.githubLink}
          className="project__card__link"
        >
          {translations["view-github"]}
        </a>
        <a
          target="_blank"
          href={project.liveLink}
          className="project__card__link"
        >
          {translations["view-live"]}
          {"->"}
        </a>
      </div>
      <div className="project__card__image_container">
        <img src={project.image} height={300} />
      </div>
    </div>
  );
}

export default ProjectCard;
