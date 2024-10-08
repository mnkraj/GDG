import React from "react";
import "../App.css";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { responsive } from "./dataEvents";
import eventImage from "../pics/Header (1).png"; // Import your event image
import { useEffect, useState } from "react";
import axios from "axios";
import Llogo from "../img/gdsc bracket left.svg";
import Rlogo from "../img/gdsc bracket right.svg";
export default function Events() {
  const [productData, setproductdata] = useState([]);
  const baseurl = "localhost:3080/";

  // Remove any leading slashes from thumbnailPath

  // const color = [
  //   "#34A853",
  //   "#F9AB00",
  //   "#4285F4",

  // ];

  // Now the color array contains more than 10 colors

  const options = { year: "numeric", month: "short", day: "numeric" };

  const product = productData.map((item) => (
    <Product
      name1={new Date(item.date).toLocaleDateString("en-US", options)}
      name2={item.startTime + "-" + item.endTime}
      url={`${item.thumbnailurl}`}
      price={item.price}
      description1={item.title}
      description2={item.category}
      clr={item.color}
      description={item.description}
    />
  ));
  const fetchdata = async () => {
    const response = await axios.get(
      "https://gdg-rho.vercel.app/api/v1/displayevents"
    );
    console.log(response.data);
    setproductdata(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App flex flex-col" id="events">
      <div className="flex justify-center items-center">
        <img src={Llogo} />
        <h1 className=" font-Patrick sm:text-[64px] text-[30px] ">Events</h1>
        <img src={Rlogo} />
      </div>
      <p className="sm:text-[24px] text-[16px] font-Lato  text-[#5F6368] self-center mt-[44px]">
        Here are our upcoming and some past events make sure to <i>RSVP</i> to
        be a part of these exciting oppurtunities.
      </p>
      <br />

      <Carousel
        showDots={true}
        responsive={responsive}
        className="w-[80%] flex  self-center "
      >
        {product}
      </Carousel>
    </div>
  );
}
