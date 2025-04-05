import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="px-30 py-10 flex space-x-8">
      {/* Image */}
      <div>
        <Image
          src="/assets/about/about-pic.jpg"
          alt="About Intercon Visuals"
          width={1000}
          height={400}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col space-y-6">
        <h2>Hi, I'm Jevon!</h2>
        <div className="flex flex-col space-y-4">
          <p>
            I am Jevon Cochran: a photographer, videographer, and multimedia
            visual artist based in the Bay Area.
          </p>
          <p>
            An avid traveler, I discovered my passion for photography and visual
            arts in 2016 during one of many stints living abroad. Feeling called
            to document my time in Salvador da Bahia, Brazil, I began to create
            a record of my experiences equipped only with my iPhone. The
            overwhelmingly positive response I received for my travel content
            prompted me to take it to the next level and invest in a DSLR
            camera. From that moment, I never looked back and have been
            committed to perfecting my craft ever since.
          </p>
          <p>
            My brand, Intercon Visuals, is an ode to my artistic origin story,
            as well as my knack for profiling and highlighting spaces. Whether
            they be places that exist in my own community or the many
            communities I have had the privilege of visiting and exploring, I am
            driven by the ability to open a window into another world. This art
            form, and the opportunities it presents to meet new people and forge
            new experiences, keeps me in motion. If you wish to connect, collab,
            or book me, you are welcome to hit me up.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
