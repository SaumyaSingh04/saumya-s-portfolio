import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {
  EffectCube,
  EffectFade,
  Pagination,
  Mousewheel,
  Parallax,
} from "swiper/modules";
import Contact from "./Contact";
import Education from "./Education";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./AboutMe"
import Experience from "./Experience";

const CardSlider = () => {
  const cards = [
    { component: <Profile /> },
    { component: <Experience />},
    { component: <Education /> },
    { component: <Projects /> },
    { component: <Skills /> },
    { component: <Contact /> },
    { component: <About /> },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <Swiper
        direction="horizontal"
        effect="cube"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        speed={1500}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        parallax={true}
        modules={[EffectCube, EffectFade, Pagination, Mousewheel, Parallax]}
        className="w-full max-w-5xl h-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-full h-full"
          >
            {card.component}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
