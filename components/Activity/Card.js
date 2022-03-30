import React from "react";
import { AiOutlineUnlock, AiOutlineHeart } from "react-icons/ai";
import {
  HiOutlineDocumentText,
  HiOutlineVideoCamera,
  HiOutlineChat,
} from "react-icons/hi";
import EmbedVideo from "components/Atom/EmbedVideo";
import FloatingButton from "components/Atom/FloatingButton";

export default function Card({ item }) {
  return (
    <div className="relative group cursor-pointer flex p-2 my-1 border border-transparent hover:border-main">
      <EmbedVideo video={item.video} className="w-[30%] bg-gray-400 aspect-video"/>
      <div className="w-[70%] pl-3 py-1">
        <div className="flex items-center">
          <p className="text-base font-semibold">{item.username}</p>
          <span className="text-xs pl-2">{item.activity[0]?.type}</span>
        </div>
        <p className="text-sm ellipsis-1 pb-1">{item.desc}</p>
        <div className="flex items-center">
          {item.activity[0].type == "comment" && <HiOutlineChat />}
          {item.activity[0].type == "video" && <HiOutlineVideoCamera />}
          {item.activity[0].type == "write" && <HiOutlineDocumentText />}
          {item.activity[0].type == "unlock" && <AiOutlineUnlock />}
          {item.activity[0].type == "heart" && <AiOutlineHeart />}
          <p className="text-xs pl-2">{item.activity[0]?.time}</p>
        </div>
      </div>
      <FloatingButton close className="hidden group-hover:flex" />
    </div>
  );
}
