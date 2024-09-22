import React from "react";

export function Done() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="border w-min rounded-md p-2">
        <svg
          className="w-4 h-4"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-bold text-2xl">All done!</h1>
        <p className="text-center text-gray-500">You&apos;re all set up</p>
      </div>
      <div className="w-full max-w-[100px]">
        <button
          className="
            group
            transition-all duration-300 ease-in-out
            hover:bg-gray-100
            shadow-sm
            w-full border border-gray-400 rounded-full p-2 flex items-center gap-2 justify-center
            hover:w-[calc(100%+20px)]
          "
        >
          <span className="text-sm font-bold">Login</span>
          <span className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-4">
            <svg
              className="w-4 h-4 text-primary
              opacity-0 group-hover:opacity-100 
              transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
