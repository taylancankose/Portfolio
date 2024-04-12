import React from "react";
import "./projectcard.css";
import Pill from "../Pill";

function ProjectCard({ project }) {
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
          Github'da Görüntüle
        </a>
        <a
          target="_blank"
          href={project.liveLink}
          className="project__card__link"
        >
          Uygulamaya Git {"->"}
        </a>
      </div>
      <div className="project__card__image_container">
        <img src={project.image} width={400} />
      </div>
    </div>
  );
}

export default ProjectCard;
