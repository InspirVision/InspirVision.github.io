import { LeftMoodBubble, RightMoodBubble } from "./components/MoodBubbles";
import QuoteCard from "./components/QuoteCard";
// import Calendar from "./components/Calendar";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
<div className="w-full h-full relative">
  <img
    src="/sketch/vine.png"
    alt="Decorative vine"
    className="w-[500px] h-full scale-x-[-1] object-cover opacity-50 pointer-events-none absolute top-0 left-0 z-[-1]"
  />
</div>
      {/* Left side displaying interactive calander */}
      <div style={{ position: "absolute", left: "5%", top: "50%", transform: "translateY(-50%)" }}>
        {/* <Calendar /> */}
      </div>

      {/* Center QuoteCard */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        <QuoteCard />
      </div>

      {/* Right side displaying time with seconds (EST) and counting */}
      <div style={{ position: "absolute", right: "3%", top: "15%", transform: "translateY(-50%)" }}>
        <RightMoodBubble />
      </div>
    </main>
  );
}