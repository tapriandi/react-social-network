import { AiOutlinePlus } from "react-icons/ai";
import { GoTriangleUp } from "react-icons/go";

export default function FloatingButton({ close, className }) {
  return (
    <div className={`${className} absolute top-0 right-0`}>
      <AiOutlinePlus
        className={`z-10 absolute text-xs right-[2px] top-[2px] text-white transform ${
          close && "rotate-45"
        }`}
      />
      <div className="z-0 w-12 overflow-hidden inline-block">
        <div className=" h-6 bg-main rotate-45 transform origin-bottom-right"></div>
      </div>
    </div>
  );
}
