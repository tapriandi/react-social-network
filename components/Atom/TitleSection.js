import Link from "next/link";
import React from "react";

export default function TitleSection({ leftTitle, rightTitle, classTitle, className }) {
  return (
    <div className={`flex pb-3 justify-between items-center ${className}`}>
      <p className={`${classTitle} font-semibold`}>{leftTitle}</p>
      <Link href='/'><a className="text-xs hover:underline hover:text-gray-500">{rightTitle}</a></Link>
    </div>
  );
}
