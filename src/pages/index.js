import React from "react";
import Layout from "../components/layout";
import Review from "../components/Review";
import WelcomeSection from "../components/WelcomeSection";
import ServicesSection from "../components/OurServices";
import BestSpecialists from "../components/BestSpecialists";
import ClinicWithInnovative from "../components/ClinicWithInnovative";

const IndexPage = () => {
  return (
    <Layout>
      <WelcomeSection />
      <ServicesSection />
      <ClinicWithInnovative />
      <BestSpecialists />
      <Review />
      <div className="bg-blue-500 p-4 rounded-lg m-20 text-center py-10">
        <h2 className="text-white text-4xl font-bold mb-2">
          Subscribe to Newsletter
        </h2>
        <p className="text-white mb-4">
          We have a wide experience in experience design and stratergy,
        </p>
        <div className="relative">
          <input
            type="text"
            className="bg-white text-black px-4 py-2 rounded-md w-1/2"
            placeholder="Enter something..."
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
