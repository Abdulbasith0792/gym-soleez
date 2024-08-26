import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent flex justify-center w-screen ">
      <div className="md:w-[90%] lg:w-[85%]">
        <div className="flex justify-between items-center mt-4">
          <div className="text-white text-4xl uppercase font-bold flex-1">
            fit<span className="text-red-600">Verse</span>
          </div>
          <div className="flex-1">
            <ul className="flex justify-center items-center gap-8 text-lg tracking-wide  text-zinc-200">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Classes</a>
              </li>
              <li>
                <a href="">Trainers</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="bg-red-600 w-fit rounded-full text-lg uppercase px-10 font-semibold py-2 border-none outline-none">
              <div>Free Trial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
