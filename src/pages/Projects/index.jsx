import React, { useContext } from "react";
import "./projects.css";
import { DATA } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ThemeContext } from "../../context/theme";

// Import Swiper styles
import "swiper/css";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
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
        Projects
      </h1>
      <div className="projects__inner_container">
        <Swiper
          onSwiper={(swiper) => console.log(swiper)}
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
          {DATA.map((project) => (
            <SwiperSlide
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
