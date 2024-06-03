import React from "react";
import Card from "./Generic/Card";

const OurServices = () => {
  return (
    <div className="p-20 bg-blue-50">
      <div className="items-center flex flex-col text-center justify-center gap-5 mb-8">
        <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>
        <p className="text-center text-lg">
          We Provide the most full medical services, so every person could{" "}
          <br />
          have opportunity to receive qualitative medical help.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-20 pt-5">
        <Card imgSrc="./dental.png" heading="Dental Care" />
        <Card imgSrc="./lung.jpg" heading="Pulmonary" />
        <Card imgSrc="./neuro.png" heading="Neurological" />
        <Card imgSrc="./prediatric.png" heading="Prediatrics" />
      </div>
    </div>
  );
};

export default OurServices;
