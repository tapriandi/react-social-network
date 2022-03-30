import useSWR from "swr";
import Link from "next/link";
// import headerMenu from "Json/headerMenu.json";
import useResponsive from "hooks/useResponsive";
import fecther from "services/fetcher";

export default function Nav({ className }) {
  const { isTablet } = useResponsive();
  const {data, error} = useSWR('/api/headermenu', fecther);

  return (
    <div className={`${className} mt-10 border-t border-b md:bg-white md:border md:mt-20 md:w-full md:h-screen md:px-[5%] md:pt-10`}>
      <ul className="flex py-3 space-x-3 md:flex-col md:space-x-0 md:items-end">
        {data?.map((e, idx) => (
          <span key={idx} className="flex md:py-2 ">
            <li className="hover:underline hover:text-gray-500 md:text-right">
              <Link href="/">
                <a>{e.title}</a>
              </Link>
            </li>
            {!isTablet && idx < data?.length - 1 && (
              <span className="pl-3">/</span>
            )}
          </span>
        ))}
      </ul>
    </div>
  );
}
