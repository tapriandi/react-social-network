import EmbedVideo from "components/Atom/EmbedVideo";

export default function Card({ item, className }) {
  
  return (
    <div className={`relative border cursor-pointer aspect-video ${className}`}>
      <EmbedVideo className="w-full h-full" video={item.video} />
      <p className="flex justify-between w-full absolute bottom-0 left-0 z-10 p-3 text-sm font-semimedium">
        {item.channel}
        <span className="text-xs">{item.views} viewer</span>
      </p>
    </div>
  );
}
