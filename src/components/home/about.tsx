import React from "react";

const About = () => {
  return (
    <div className="h-[90vh] flex justify-center bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950">
      <div className="lg:w-[85%]">
        <div className="flex justify-between h-full gap-28 mt-20">
          <div className="flex-1 flex flex-col gap-7">
            <div className="flex flex-col gap-[2px]">
              <div className="text-white text-xl">Overview Intro</div>
              <div className="text-red-600 uppercase font-semibold text-3xl">
                Our story
              </div>
            </div>
            <div className="h-[40vh] w-[80vh] bg-black shadow-lg rounded-lg shadow-black"></div>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <div className="flex flex-col gap-[2px]">
              <div className="text-white text-xl">About Us</div>
              <div className="text-red-600 uppercase font-semibold text-3xl">
                Who we are
              </div>
            </div>
            <div>
              <div className="text-sm font-sans leading-snug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, fugit molestiae totam facilis quaerat voluptates
                consequuntur modi, itaque officiis repudiandae nulla enim.
                Debitis laborum, quo asperiores ipsum tempora nam iste similique
                neque, ipsa, illo dolore beatae eligendi natus mollitia. Non.
              </div>

              <div className="text-sm mt-4 font-sans leading-snug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                earum nisi laudantium provident adipisci veniam fuga architecto,
                atque magni enim?
              </div>
            </div>
            <div>
              <div className="bg-red-600  w-fit rounded-full px-10 py-2 text-white font-bold">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
