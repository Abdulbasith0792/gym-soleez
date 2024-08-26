import Image from "next/image";
import React from "react";
import banner from "@/../public/assets/home/smoke3.jpg";
import Navbar from "./navbar";
import BannerContent from "./bannerContent";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute">
          <div className="relative z-20 flex flex-col justify-between items-center h-screen">
            <div className="flex-1">
              <Navbar />
            </div>
            <div className="flex-1">
              <BannerContent />
            </div>
          </div>
        </div>
        <div className="h-screen w-screen relative overflow-hidden z-10">
          <Image
            src={banner}
            alt=""
            height={1000}
            width={1000}
            className="object-cover w-full h-full opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
