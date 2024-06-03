import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#F8FDFF]">
      <Navbar button="Contact" />
      {children}
      <Navbar />
      <Footer />
    </div>
  );
}
