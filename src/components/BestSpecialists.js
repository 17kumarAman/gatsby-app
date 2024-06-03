import React from "react";
import Card from "./Generic/Card";

function BestSpecialists() {
  return (
    <div className="p-8">
      <div className="items-center flex flex-col text-center justify-center gap-5 mb-8">
        <h1 className="text-4xl font-bold text-blue-900">
          We Have The Best Specialist{" "}
        </h1>
        <p className="text-center text-lg">
          We have a wide experience in expereince design and strategy, <br />
          with locally-rooted knowledge.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 ml-10">
        <Card heading="Dr.Awaatif AL" description="Dental Care" />
        <Card heading="Dr.Flipa Gaspar" description="Cardiology" />
        <Card heading="Dr.Sukhmeet Gorae" description="Neurological" />
        <Card heading="Dr.Siri Jakobsson" description="Prediatrics" />
      </div>
    </div>
  );
}

export default BestSpecialists;
