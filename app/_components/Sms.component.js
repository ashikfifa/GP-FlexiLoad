import React from "react";

const SmsComponent = (props) => {
  const { bubbleData, handleSelection,selectedValidity } = props;

  let enableSms = [];
  if (selectedValidity === 1) {
    enableSms = bubbleData.enableSmsDay1;
  } else if (selectedValidity === 3) {
    enableSms = bubbleData.enableSmsDay3;
  } else if (selectedValidity === 7) {
    enableSms = bubbleData.enableSmsDay7;
  } else if (selectedValidity === 15) {
    enableSms = bubbleData.enableSmsDay15;
  } else if (selectedValidity === 30) {
    enableSms = bubbleData.enableSmsDay30;
  }


  return (
    <div className="flex items-center gap-40 my-7 border-b-[1px] border-gray-200">
      <div>
        <p className="text-xl">SMS</p>
        <p className="text-lg text-lightGreen"> {bubbleData.selectedSms} SMS </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-4 p-6">
        
        {bubbleData.smsState.map((number) => (
          <div
            key={number}
            className={`w-16 h-16 flex items-center justify-center rounded-full border ${
              bubbleData.selectedSms === number
                ? "bg-green-500 text-white"
                : "bg-white text-black"
            } ${
              !enableSms.includes(number)
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            onClick={() =>
              enableSms.includes(number) &&
              handleSelection("selectedSms", number)
            }
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmsComponent;
