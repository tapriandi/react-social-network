import React from "react";
import { HiUser } from "react-icons/hi";
import Button from "components/Atom/Button";

export default function User() {
  return (
    <div className="flex cursor-pointer duration-300 hover:underline">
      <Button className="h-10 w-10 md:bg-transparent md:h-auto md:w-auto">
        <HiUser className="md:text-lg md:text-black" />
      </Button>
      <div className="relative px-2 md:pl-0">
        <p className="text-sm font-semibold text-main md:hidden">First</p>
        <p className="text-[11px] text-main md:hidden">Second</p>
        <span className="absolute text-[8px] font-semibold -top-2 -right-3 w-4 h-4 rounded-full bg-red-500 text-white flex justify-center items-center md:-right-0 sm:text-[6px] sm:w-3 sm:h-3">
          15
        </span>
      </div>
    </div>
  );
}
