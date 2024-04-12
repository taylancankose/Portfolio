import React from "react";
import "./projects.css";
import { DATA } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  return (
    <div className="projects__container">
      <h1>Projects</h1>
      <div className="projects__inner_container">
        <Swiper
          onSlideChange={() => console.log("slide change")}
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
