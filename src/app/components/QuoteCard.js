export default function QuoteCard() {
  return (
    <div
      className="relative w-[350px] h-[400px] p-6 border border-black bg-[#F5F0EB]/80 backdrop-blur-sm rounded-2xl shadow-md shadow-[#2E1F17]/20"
      style={{ boxShadow: "4px 5px 0 #2E1F17", border: "2px solid #4B3F2F",
 }}>

      {/* Main Text Content */}
      <h1 className="text-2xl font-semibold tracking-wide text-[#3A2F1B] mb-1">
        Quote of The Day
      </h1>
      <h2 className="text-l text-[#7A6A50] italic mb-4">08/2/2025</h2>

      <p className="text-lg italic text-center leading-relaxed text-[#2E2619] px-2"> {/*tmr use "We build too many walls and not enough bridges" = Issac Newton*/}
        "You get the world you're willing to fight for." 
        <br />
        <span className="block mt-4 text-right text-base font-medium">
          - Rune Winters
        </span>
      </p>

      {/* Floral Background Accent */}
      <div className="absolute bottom-0 right-0 opacity-25">
        <img
          src="navbar/rose3.png" 
          alt="Rose Sketch"
          className="w-32 h-auto"
        />
      </div>
    </div>
  );
}
