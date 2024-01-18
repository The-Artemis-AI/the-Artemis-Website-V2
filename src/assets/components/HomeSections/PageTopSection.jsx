import React from "react";
import Navbar from "../Navbar";
import Deepmind from "../../images/deepmind.webp";

function PageTopSection(props) {
  return (
    <div className="w-full tablet:h-[130%] pb-5 ">
      <Navbar activeLink={props.activeLink} />
      <div className=" w-full h-[90%] mt-10 mx-auto bg-white  items-center flex flex-col justify-between">
        <div className="w-full bigphone:w-[85%] mx-auto flex flex-col bigphone:flex-row items-center justify-between">
          <div className="w-[80%] bigphone:w-[60%] my-2 ">
            <p className="text-xl my-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              {props.title}
            </p>
            <h3 className="text-2xl  phone:text-3xl bigphone:text-4xl tablet:text-5xl my-3 bigphone:my-1" style={{ fontFamily: "Montserrat" }}>
              {props.firstPart}
              <span className="underline" style={{ fontFamily: "Montserrat" }}>
                {props.underlined}
              </span>{" "}
              {props.lastPart}
            </h3>
          </div>
          <div className="w-[80%] my-3 bigphone:my-1 bigphone:w-[40%]">
            <p>{props.content}</p>
          </div>
        </div>
        <div
          className="w-full h-[200px] bigphone:h-[300px] tablet:h-[65%] bg-gray-200"
          style={{
            backgroundImage: `url(${Deepmind})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>
      </div>
    </div>
  );
}

export default PageTopSection;
