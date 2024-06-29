import React from "react";

const FourGInternetComponent = (props) => {
  const { bubbleData, handleSelection } = props;

  return (
    <div className="flex items-center gap-40 my-7 border-b-[1px] border-gray-200">
      <div>
        <p className="text-xl">4G Internet</p>
        <p className="text-lg text-lightGreen">
          {bubbleData.selectedFourg >= 1024
            ? (bubbleData.selectedFourg / 1024)
                .toString()
                .replace(/\.0+$/, "") + "GB"
            : bubbleData.selectedFourg + "MB"}
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 p-6">
        {bubbleData.fourgInternateState.map((number) => (
          <div
            key={number}
            className={`w-16 h-16 flex items-center justify-center rounded-full border cursor-pointer ${
              bubbleData.selectedFourg === number
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleSelection("selectedFourg", number)}
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

export default FourGInternetComponent;
