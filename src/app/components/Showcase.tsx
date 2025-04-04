"use client";

import React, { useState, useEffect } from "react";

const showcaseVideos = [
  {
    title: "Karmia's 55th Birthday Celebration",
    id: "1062512983",
    thumbnail: "/assets/home/k55-thumbnail.jpg",
  },
  {
    title: "Vida's Way",
    id: "1072425656",
    thumbnail: "/assets/home/vidas_way_thumbnail.jpg",
  },
  {
    title: "Karmia's 55th Birthday Celebration Pt. 2",
    id: "1062534041",
    thumbnail: "/assets/home/k55_pt2_thumbnail.jpg",
  },
];

const Showcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col space-y-4 items-center px-10">
      <h2>A SAMPLE OF MY WORK</h2>
      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-4">
        {showcaseVideos.map((video) =>
          selectedVideo === video.id ? (
            <div key={video.id} className="">
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              key={video.id}
              className="relative cursor-pointer group"
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* Vimeo thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Showcase;
