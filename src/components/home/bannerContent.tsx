import Image from "next/image";
import React from "react";
import image from "@/../public/assets/home/2.png";

const BannerContent = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="absolute w-full h-full top-[25%]">
            <div className="">
              <div className="uppercase text-8xl flex-col gap-2  font-bold flex items-center justify-center ">
                <div className="text-red-600">Hard Rock Game</div>
                <div> Time to Change</div>
                <div className="text-xl relative z-20 mt-10 rounded-full bg-red-600 px-10 py-2 uppercase">
                  Know More
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-full top-[27%]">
            <div className="flex flex-col font-sans font-semibold gap-2 items-center">
              <div className="h-12 w-[1px] bg-zinc-200" />
              <div>f</div>
              <div>X</div>
              <div>in</div>
              <div className="h-12 w-[1px] bg-zinc-200" />
            </div>
          </div>
          <div className="flex flex-col justify-end ">
            <div className="h-[80vh] relative overflow-hidden">
              <Image
                src={image}
                alt=""
                height={1000}
                width={1000}
                className="opacity-85 object-contain h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
