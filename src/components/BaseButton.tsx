import React from "react";

function BaseButton() {
  return (
    <button className="flex items-center bg-purple-500 gap-1 px-4 py-2 cursor-pointer text-white font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3">
      Send
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
  );
}

export default BaseButton;
