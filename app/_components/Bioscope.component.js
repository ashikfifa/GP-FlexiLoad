import React from "react";

const BioscopeComponent = (props) => {
  const { bubbleData, handleSelection } = props;

  return (
    <div className="flex items-center gap-40 my-7 border-b-[1px] border-gray-200">
        <div>
          <p className="text-xl">Bioscope</p>
          <p className="text-lg text-lightGreen"> {bubbleData.selectedBioscope >= 1024
            ? (bubbleData.selectedBioscope / 1024)
                .toString()
                .replace(/\.0+$/, "") + "GB"
            : bubbleData.selectedBioscope + "MB"} </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 p-6">
          {bubbleData.bioscopeState.map((number) => (
            <div
              key={number}
              className={`w-16 h-16 flex items-center justify-center rounded-full border cursor-pointer ${
                bubbleData.selectedBioscope === number
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleSelection("selectedBioscope", number)}
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

export default BioscopeComponent;
