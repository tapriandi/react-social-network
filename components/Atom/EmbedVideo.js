import React from "react";

export default function EmbedVideo({ video, className }) {
  return (
    <div className={className}>
      <iframe
        width="100%"
        height="100%"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
