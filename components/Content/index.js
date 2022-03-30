import useSWR from "swr";
import { SiCircle } from "react-icons/si";
import fetcher from "services/fetcher";
import Card from "components/Content/Card";
import TitleSection from "components/Atom/TitleSection";

export default function Content({ className, leftTitle, rightTitle }) {
  const { data, error } = useSWR("/api/socials", fetcher);

  return (
    <div className={`${className} py-5`}>
      <TitleSection
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        classTitle="text-xl"
        className="w-[65%] md:w-full"
      />

      <div className="grid gap-3 grid-flow-row-dense grid-cols-3 sm:grid-cols-1">
        {data?.map(
          (e, idx) =>
            idx < 5 && (
              <Card
                key={idx}
                item={e}
                className={idx == 0 && "col-span-2 row-span-2 sm:col-auto"}
              />
            )
        )}

        <div className="relative border cursor-pointer aspect-video flex justify-center items-center">
          <div className="flex items-center">
            <SiCircle className="text-4xl"/>
            <p className="flex w-full pl-3 text-sm font-semimedium">
              Show <br /> Your work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
