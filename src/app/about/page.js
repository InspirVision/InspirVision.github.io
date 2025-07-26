import React from 'react';

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-#f3efe4 text-#3e2e1f px-8 py-10 flex justify-center items-start"
    >
        <div style={{
        fontFamily: "'Elaris', italics"
    }}> </div>
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="/pfp/wistfulInspirVision.jpg"
          alt="Profile Picture"
          className="w-48 h-48 rounded-full shadow-lg border border-[#a68c6d] ring-2 ring-[#d6c2a7] object-cover"
        />
        <p className="text-lg font-vanity max-w-2xl leading-relaxed">
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
