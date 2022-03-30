import useSWR from "swr";
import Card from "./Card";
import fecther from "services/fetcher";
import TitleSection from "components/Atom/TitleSection";

export default function Channels() {
  const { data, error } = useSWR("/api/socials", fecther);
  
  return (
    <div className="py-8">
      <TitleSection
        leftTitle="Channels"
        rightTitle="Browse all channels"
        classTitle="text-lg"
      />
      <div className="border-b border-t-2 py-4 grid gap-4 grid-cols-2">
        {data?.map((e, idx) => (
          <Card key={idx} className="w-auto" item={e} />
        ))}
      </div>
    </div>
  );
}
