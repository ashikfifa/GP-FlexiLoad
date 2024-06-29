import React from "react";

const InternetComponent = (props) => {
  const { bubbleData, handleSelection } = props;

  return (
    <div className="flex items-center gap-40 my-7 border-b-[1px] border-gray-200 w-full">
      <div>
        <p className="text-xl">Internet</p>
        <p className="text-lg text-lightGreen">
          {bubbleData.selectedInternet >= 1024
            ? (bubbleData.selectedInternet / 1024)
                .toString()
                .replace(/\.0+$/, "") + "GB"
            : bubbleData.selectedInternet + "MB"}
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 p-6 ">
        {bubbleData.internateState.map((number) => (
          <div
            key={number}
            className={`w-16 h-16 flex items-center justify-center rounded-full border cursor-pointer ${
              bubbleData.selectedInternet === number
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleSelection("selectedInternet", number)}
          >
            {number >= 1024
              ? (number / 1024).toString().replace(/\.0+$/, "") + "GB"
              : number + "MB"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternetComponent;
