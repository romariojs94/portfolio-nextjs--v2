import React from 'react';
const Buttons = ({ link, svg }) => {
  return (
    <>
      <a href={link} target="_blank">
        <button
          className="bg-[#ffffff] hover:bg-black flex text-black hover:text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none transition-transform transform hover:scale-100 duration-300 ease-in-out"
          type="button"
        >
          {svg}
        </button>
      </a>
    </>
  );
};

export default Buttons;
