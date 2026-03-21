"use client";

import React, { useState } from "react";

const showcaseVideos = [
  {
    title: "Olivo Med Spa",
    industry: "Aesthetics & Wellness",
    id: "1106966584",
    thumbnail: "/assets/home/olivo_med_spa_thumbnail.jpg",
  },
  {
    title: "Vida's Way",
    industry: "Real Estate",
    id: "1072425656",
    thumbnail: "/assets/home/vidas_way_thumbnail.jpg",
  },
  {
    title: "Laceleaf Med Spa",
    industry: "Aesthetics & Wellness",
    id: "1174071005",
    thumbnail: "/assets/home/laceleaf_facial_memberships_thumbnail.jpg",
  },
  // {
  //   title: "K55",
  //   industry: "Events",
  //   id: "1062512983",
  //   thumbnail: "/assets/home/k55-thumbnail.jpg",
  // },
  {
    title: "Phyllis' 70th Birthday Party",
    industry: "Events",
    id: "1093350505",
    thumbnail: "/assets/home/phyllis_70th_thumbnail.jpg",
  },
];

const Showcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="bg-black px-6 md:px-10 py-16 md:py-20">
      <div className="text-center mb-14 md:mb-16">
        <h2 className="font-[family-name:var(--font-montserrat)] text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]">
          Featured Projects
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {showcaseVideos.map((video) =>
          selectedVideo === video.id ? (
            <div
              key={video.id}
              className="relative aspect-video overflow-hidden rounded-3xl bg-black"
            >
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <button
              key={video.id}
              type="button"
              onClick={() => setSelectedVideo(video.id)}
              className="relative aspect-video overflow-hidden rounded-3xl group text-left"
              aria-label={`Play ${video.title}`}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Dark overlay - only before play */}
              <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/35" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/18 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text overlay */}
              <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 z-10">
                <p className="font-[family-name:var(--font-montserrat)] uppercase text-sm md:text-base font-semibold tracking-[0.08em] text-lime-400 mb-2">
                  {video.industry}
                </p>
                <h3 className="font-[family-name:var(--font-montserrat)] text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em]">
                  {video.title}
                </h3>
              </div>
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Showcase;
