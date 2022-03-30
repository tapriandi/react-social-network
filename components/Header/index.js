import { useState, useEffect } from "react";
import { HiArrowSmUp } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineSearch,
  AiOutlineCloudUpload,
  AiOutlineClose,
} from "react-icons/ai";
import Nav from "./Nav";
import User from "./User";
import Link from "next/link";
import SearchForm from "./SearchForm";
import Button from "components/Atom/Button";
import useResponsive from "hooks/useResponsive";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const { isTablet, isMobile } = useResponsive();

  useEffect(() => {
    isTablet && setNavOpen(false);
    isMobile && setSearchOpen(false);
  }, [isTablet, isMobile]);

  return (
    <div className="relative z-50 py-5 md:py-4 sm:py-3 md:h-20">
      <div className="flex justify-between items-center px-[6%] sm:[4%]">
        <Link href="/">
          <a className="text-4xl text-gray-600 md:text-3xl sm:text-xl">
            <span className="font-semibold text-main">Social</span>Network
          </a>
        </Link>

        {searchOpen && (
          <SearchForm className="w-1/3 sm:absolute sm:top-20 sm:w-[80%] sm:left-[10%]" />
        )}

        <div className="flex space-x-5 items-center">
          {searchOpen ? (
            <AiOutlineClose
              role="presentation"
              className="hidden sm:flex"
              onClick={() => setSearchOpen(false)}
            />
          ) : (
            <AiOutlineSearch
              role="presentation"
              className="hidden sm:flex"
              onClick={() => setSearchOpen(true)}
            />
          )}

          <Button className="h-10 px-4 md:bg-transparent md:text-black sm:px-2">
            <HiArrowSmUp className="sm:hidden" />
            <AiOutlineCloudUpload className="hidden md:text-xl sm:flex md:text-black" />
            <span className="text-sm pl-2 font-semibold sm:hidden">Upload</span>
          </Button>

          <User />

          {isTablet &&
            (navOpen ? (
              <AiOutlineClose
                className="text-lg peer"
                onClick={() => setNavOpen(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="text-lg peer"
                onClick={() => setNavOpen(true)}
              />
            ))}
        </div>
      </div>

      {navOpen && (
        <div className="px-[6%]">
          <Nav className="md:absolute top-0 left-0" />{" "}
        </div>
      )}
    </div>
  );
}
