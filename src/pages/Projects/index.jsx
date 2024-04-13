import React, { useContext } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ThemeContext } from "../../context/theme";
import { LocaleContext } from "../../context/locale";

// Import Swiper styles
import "swiper/css";
import ProjectCard from "../../components/ProjectCard";
import DATA from "./data";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const { lng } = useContext(LocaleContext);
  const { translations } = lng.language;
  const projects = DATA();
  return (
    <div
      className="projects__container"
      style={{
        backgroundColor: colors.bgColor,
      }}
    >
      <h1
        style={{
          color: colors.gray0,
        }}
      >
        {translations.projects}
      </h1>
      <div className="projects__inner_container">
        <Swiper
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
