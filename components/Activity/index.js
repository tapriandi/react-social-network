import useSWR from "swr";
import { useState, useEffect } from "react";
import Card from "./Card";
import fecther from "services/fetcher";
import TitleSection from "components/Atom/TitleSection";

export default function Activity() {
  const [a, setA] = useState();
  const { data, error } = useSWR("/api/socials", fecther);

  return (
    <div className="pb-8 md:pt-8">
      <TitleSection
        leftTitle="Activity"
        rightTitle="View timeline / Filter activities"
        classTitle="text-lg"
      />
      <div className="border-b border-t-2 py-2 grid">
        {data?.map(
          (e, idx) => idx < 8 && <Card key={idx} className="w-full" item={e} />
        )}
      </div>
    </div>
  );
}
