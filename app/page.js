"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ValidityComponent from "./_components/Validity.component";
import InternetComponent from "./_components/Internet.component";
import FourGInternetComponent from "./_components/FourGInternet.component";
import MinuteComponent from "./_components/Minute.component";
import BioscopeComponent from "./_components/Bioscope.component";
import SmsComponent from "./_components/Sms.component";

export default function Home() {
  const [bubbleData, setBubbleData] = useState({
    validityState: [],
    internateState: [],
    fourgInternateState: [],
    minuteState: [],
    bioscopeState: [],
    smsState: [],
    selectedValidity: null,
    selectedInternet: null,
    selectedFourg: null,
    selectedMinutes: null,
    selectedBioscope: null,
    selectedSms: null,
  });

  const getBubbleData = async () => {
    try {
      const response = await axios.get("bubble-map.json");
      const response2 = await axios.get("selected-bubbles.json");
      const response3 = await axios.get("eligibility-map.json");
      setBubbleData({
        validityState: response?.data?.longevity,
        internateState: response?.data?.data,
        fourgInternateState: response?.data?.fourg,
        minuteState: response?.data?.voice,
        bioscopeState: response.data.bioscope,
        smsState: response.data.sms,
        selectedValidity: response2.data.longevity,
        selectedInternet: response2.data.data,
        selectedFourg: response2.data.fourg,
        selectedMinutes: response2.data.voice,
        selectedBioscope: response2.data.bioscope,
        selectedSms: response2.data.sms,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBubbleData();
  }, []);

  const handleSelection = (key, value) => {
    setBubbleData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <main className="container mx-auto mt-8 px-16">
      <p className="font-sans text-4xl italic font-light">Flexiplan</p>
      <p className="text-base leading-6 mt-3">
        Make your own plan and enjoy great savings! Only for GP Customers
      </p>

      <ValidityComponent
        bubbleData={bubbleData}
        handleSelection={handleSelection}
      />

      <InternetComponent
        bubbleData={bubbleData}
        handleSelection={handleSelection}
      />

      <FourGInternetComponent
        bubbleData={bubbleData}
        handleSelection={handleSelection}
      />

      <MinuteComponent
        bubbleData={bubbleData}
        handleSelection={handleSelection}
      />

      <BioscopeComponent
        bubbleData={bubbleData}
        handleSelection={handleSelection}
      />

      <SmsComponent bubbleData={bubbleData} handleSelection={handleSelection} />
    </main>
  );
}
