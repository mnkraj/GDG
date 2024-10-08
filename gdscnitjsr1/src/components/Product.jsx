import React from "react";

export default function Product(props) {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="product-container flex flex-col items-center">
        <img
          className="product--image w-full rounded-md mb-4 object-cover"
          src={props.url}
          alt="product image"
        />
      </div>
      <div className="mt-4 text-center">
        <h5 className="font-medium text-gray-600 mb-1">
          DATE &nbsp;&nbsp;&nbsp;&nbsp; TIME
        </h5>
        <h4 className="text-lg font-semibold text-gray-800">
          {props.name1} &nbsp;&nbsp;&nbsp;&nbsp; {props.name2}
        </h4>
      </div>
      <div className="mt-4 text-center">
        <a href={`${props.description}`}>
          <button
            className=" text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            style={{backgroundColor : "blue"}}
          >
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}
