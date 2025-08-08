"use client";

import React, { useState } from "react";

const showcaseVideos = [
  {
    title: "Olivo Med Spa",
    id: "1106966584",
    thumbnail: "/assets/home/olivo_med_spa_thumbnail.jpg",
  },
  {
    title: "Vida's Way",
    id: "1072425656",
    thumbnail: "/assets/home/vidas_way_thumbnail.jpg",
  },
  {
    title: "Karmia's 55th Birthday Celebration",
    id: "1062512983",
    thumbnail: "/assets/home/k55-thumbnail.jpg",
  },
  {
    title: "Phyllis' 70th Birthday Party",
    id: "1093350505",
    thumbnail: "/assets/home/phyllis_70th_thumbnail.jpg",
  },
];

const Showcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="flex flex-col space-y-4 items-center px-6 md:px-10 py-8 md:py-12">
      <h2>A SAMPLE OF MY WORK</h2>
      <div className="w-full grid md:grid-cols-2 gap-x-4 gap-y-4 md:py-8">
        {showcaseVideos.map((video) =>
          selectedVideo === video.id ? (
            <div key={video.id} className="aspect-video md:aspect-auto">
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
