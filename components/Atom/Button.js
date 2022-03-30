import React from "react";

export default function SocialButton({ children, href, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${className} cursor-pointer bg-main text-white flex justify-center items-center hover:bg-lightgreen hover:text-main duration-300`}
    >
      {children}
    </a>
  );
}
