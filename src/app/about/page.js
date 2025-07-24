import React from 'react';

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#fdfce5] px-8 py-10 flex justify-center items-start"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="/pfp/wistfulInspirVision.jpg"
          alt="Profile Picture"
          className="w-55 h-55 rounded-full mb-5"
        />
        <p className="text-lg font-medium">
          Hi! My name is <span className="italic">'Wistful'</span> and I built this website to be a place where people can come for a break. Sometimes, life can be hard and 
          without taking time to step back and really see how far you've come or see life through a different lens it's incredibly easy to get stuck in your head. I hope through 
          my writing, others' writing, the music, vibes & aesthetic, lounge and just the entire website that you can get some sense of comfort and know that you really aren't alone.
          So, if you ever need a moment, I'll be here. <br></br>
          - Wistful
        </p>
      </div>
    </main>
  );
}
