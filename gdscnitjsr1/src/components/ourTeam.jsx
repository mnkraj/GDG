import React, { useEffect, useState } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import Leads from "./Leads";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Llogo from "../img/gdsc bracket left.svg";
import Rlogo from "../img/gdsc bracket right.svg";
import Example from "./link";
import TeamCard from "./TeamCard";

const PersonCard = ({ person }) => {
  return (
    <>
      <TeamCard
        imageSrc={person.imageurl}
        Name={person.name}
        Description={person.team} // or any description if available
        Domain={person.branch}
        Website={person.x} // assuming 'x' is the website, replace if not correct
        Linkedin={person.linkedin}
        Facebook={person.facebook}
        Github={person.github}
        Instagram={person.instagram}
        gmail={person.mail} // add this if there's a need for Instagram icon
      />
    </>
  );
};

const OurTeam = () => {
  const [profiles, setProfiles] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gdg-rho.vercel.app/api/v1/displaymembers"
        );
        const filteredProfiles = response.data.filter(person => person.teamType !== "lead");
        setProfiles(filteredProfiles);

        const registrationArray = filteredProfiles.map((person) => person.registration);
        localStorage.setItem("registrationArray", JSON.stringify(registrationArray));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const slideNo = () => {
    if (window.innerWidth >= 850) {
      return 3;
    } else if (window.innerWidth >= 580) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10 z-50 relative" id="our-team">
      <div className="flex items-center justify-center">
        <img src={Llogo} alt="left bracket logo" />
        <h1 className="font-Patrick sm:text-[64px] text-[30px]">Our Team</h1>
        <img src={Rlogo} alt="right bracket logo" />
      </div>
      <div className="flex items-center justify-center mx-0">
        <p className="sm:text-[24px] text-[16px] font-Lato text-[#5F6368] self-center mt-[44px]">
          Meet the incredible GDSC team - a synergy of coding brilliance, design
          prowess, strategic minds, and innovation wizards. Together, they
          propel the boundaries of technology.
        </p>
      </div>
      <br />
      <br />
      <Leads />
      <br />
      <br />
      <h1 className="font-Patrick sm:text-[48px] text-[24px] underline">
        Meet the Core
      </h1>
      <br />
      <br />
      <Swiper
        className="md:h-[500px] h-[400px]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={slideNo()}
        autoplay={{ delay: 0, disableOnInteraction: false }} // Disable autoplay
        onSwiper={setSwiperInstance}
      >
        {profiles.map((person, index) => (
          <SwiperSlide key={index}>
            <PersonCard person={person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
