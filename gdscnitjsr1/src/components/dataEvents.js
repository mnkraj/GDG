
import img1 from "../pics/event1.png";
import img2 from "../pics/event2.png";
import img3 from "../pics/event3.png";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl: img1,
    name1: "January 07,2024",
    name2: "07pm-10pm",
    description1: "Prompt-a-thon",
    description2: "HACKATHON",
    clr: "#4285F4",
  },
  {
    id: 2,
    imageurl: img2,
    name1: "January 10,2024",
    name2: "07pm-10pm",
    description1: "Introduction to ML",
    description2: "WORKSHOP",
    clr: "#F9AB00",
  },
  {
    id: 3,
    imageurl: img3,
    name1: "August 27,2023",
    name2: "06pm-10pm",
    description1: "GDSC Info Session",
    description2: "INFO SESSION",
    clr: "#34A853",
  },

  {
    id: 4,
    imageurl:
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    
   
    description: "Some text about the product..",
  },
  {
    id: 5,
    imageurl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Vans sneakers",
   
    description: "Some text about the product..",
  },
  {
    id: 6,
    imageurl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Coco Noir",
   
    description: "Some text about the product..",
  },
  {
    id: 7,
    imageurl:
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
   
    description: "Some text about the product..",
  },
  {
    id: 8,
    imageurl:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Dove cream",
 
    description: "Some text about the product..",
  },
];
