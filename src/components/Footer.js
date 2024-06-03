import React from "react";

function Footer() {
  return (
    <div className="w-full h-40 bg-[#ECF4FF] px-20 py-5 ">
      <div className="flex gap-8">
        <img src="./fb.png" alt="Facebook" className="rounded-full w-7 h-7" />
        <img src="./google.png" alt="Google" className="rounded-full w-7 h-7" />
        <img
          src="./twitter.png"
          alt="Twitter"
          className="rounded-full w-7 h-7"
        />
      </div>
      <div className="pt-3 text-sm"> © 2024-011BQ</div>
    </div>
  );
}

export default Footer;
