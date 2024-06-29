import React from "react";

const MinuteComponent = (props) => {
  const { bubbleData, handleSelection, selectedValidity } = props;

  let enableMinutes = [];
  if (selectedValidity === 1) {
    enableMinutes = bubbleData.enableMinutesDay1;
  } else if (selectedValidity === 3) {
    enableMinutes = bubbleData.enableMinutesDay3;
  } else if (selectedValidity === 7) {
    enableMinutes = bubbleData.enableMinutesDay7;
  } else if (selectedValidity === 15) {
    enableMinutes = bubbleData.enableMinutesDay15;
  } else if (selectedValidity === 30) {
    enableMinutes = bubbleData.enableMinutesDay30;
  }

  return (
    <div className="flex items-center gap-40 my-7 border-b-[1px] border-gray-200">
      <div>
        <p className="text-xl">Minutes</p>
        <p className="text-lg text-lightGreen">
          {" "}
          {bubbleData.selectedMinutes} Min{" "}
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 p-6">
        {bubbleData.minuteState.map((number) => (
          <div
            key={number}
            className={`w-16 h-16 flex items-center justify-center rounded-full border ${
              bubbleData.selectedMinutes === number
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            } ${
              !enableMinutes.includes(number)
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            onClick={() =>
              enableMinutes.includes(number) &&
              handleSelection("selectedMinutes", number)
            }
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinuteComponent;
