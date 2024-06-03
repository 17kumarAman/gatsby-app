import React from "react";
import Card from "./Generic/Card";
function ClinicWithInnovative() {
  return (
    <div className="flex justify-between p-20 mr-20 items-center">
      <div className="py-20">
        <h1 className="font-bold text-blue-900 text-4xl py-2">
          Clinic With Innovative
        </h1>

        <p className="text-lg py-2">
          We provide the most full medical secvices, so every person could{" "}
          <br />
          have the oppurtinity to receive medical help.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="text-white font-bold bg-blue-500 px-5 py-2 rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-20">
          <div className="rounded-lg ">
            <Card imgSrc="./doctor.jpg" heading="Qualified Doctors" />
          </div>
          <div className="rounded-lg ">
            <Card imgSrc="./car.png" heading="24 Hours Service" />
          </div>
        </div>
        <div className="my-auto rounded-lg">
          <Card imgSrc="./emergency.jpg" heading="Emergency Care" />
        </div>
      </div>
    </div>
  );
}

export default ClinicWithInnovative;
