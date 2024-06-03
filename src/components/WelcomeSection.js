import React from "react";

function WelcomeSection() {
  return (
    <div className="flex flex-row justify-between p-20 items-center">
      <div className="py-20">
        <h1 className="font-bold text-blue-900 text-lg py-2">
          Welcome to MediCare+ clinic
        </h1>
        <h1 className="font-bold text-blue-900 text-4xl py-2">
          Best Specialists
        </h1>
        <p className="text-lg py-2">
          We are on the leading edge of cancer care, providing the full <br />{" "}
          continuum of cancer treatments and supportive care services in a{" "}
          <br /> single convenient location.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="text-white bg-blue-500 px-5 py-2 rounded-full">
            Make an Appointment
          </button>
          <button className="bg-white text-blue-500 px-5 py-2 rounded-full border border-blue-500">
            Departments
          </button>
        </div>
      </div>
      <div className="w-[500px]  rounded-lg overflow-hidden">
        <div className="bg-[#EBEEFF] w-full h-[500px] mt-4 md:mt-0"></div>
      </div>
    </div>
  );
}

export default WelcomeSection;
