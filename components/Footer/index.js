import useSWR from "swr";
import Link from "next/link";
import { RiLinkedinFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import useResponsive from "hooks/useResponsive";
import Button from "components/Atom/Button";
import fecther from "services/fetcher";

export default function Footer() {
  const { isTablet } = useResponsive();
  const { data, error } = useSWR("/api/footermenu", fecther);

  return (
    <div className="flex flex-col px-[6%] sm:[4%] border-t-2 py-8 mt-8 text-sm leading-8 md:text-xs md:leading-6">
      <div className="flex space-x-2 sm:justify-center">
        <Button href="/" className="w-10 h-10">
          <RiLinkedinFill />
        </Button>
        <Button href="/" className="w-10 h-10">
          <RiFacebookFill />
        </Button>
        <Button href="/" className="w-10 h-10">
          <RiTwitterFill />
        </Button>
      </div>

      <ul className="flex py-8 space-x-3 md:flex-col md:space-x-0">
        {data?.map((e, idx) => (
          <>
            <li className="hover:underline hover:text-" key={idx}>
              <Link href="/">
                <a>{e.title}</a>
              </Link>
            </li>
            {!isTablet && idx < data?.length - 1 && (
              <span className="px-1">/</span>
            )}
          </>
        ))}
      </ul>

      <p className="">@Copyright 2022 Company Name inc</p>

      <ul className="flex space-x-3">
        <li className="hover:underline hover:text-">
          <Link href="/">
            <a>Privacy</a>
          </Link>
        </li>
        <li className="px-1">/</li>
        <li className="hover:underline">
          <Link href="/">
            <a>Term</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
