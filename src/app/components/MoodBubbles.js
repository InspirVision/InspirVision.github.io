// for speech bubbles with gifs

// Left side: GIF above, Bubble below
export function LeftMoodBubble() {
  return (
    <div className="flex flex-col items-center">
      <img src="gifs/left.gif" alt="Left Mood GIF" className="w-62 h-62 mb-2" />
      <div className="bg-gray-200 p-4 rounded-full shadow-md w-52 h-52 flex justify-center items-center text-center">
        <p className="text-xs">Take Breaks</p>
      </div>
    </div>
  );
}

// Right side: Bubble above, GIF below
export function RightMoodBubble() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-200 p-4 rounded-full shadow-md w-52 h-52 flex justify-center items-center text-center">
        <p className="text-xs">Just Breathe</p>
      </div>
      <img src="gifs/right.gif" alt="Right Mood GIF" className="w-62 h-62 mt-2" />
    </div>
  );
}