import { LeftMoodBubble, RightMoodBubble } from "./components/MoodBubbles";
import QuoteCard from "./components/QuoteCard";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left side displaying interactive calander */}
      <div style={{ position: "absolute", left: "5%", top: "50%", transform: "translateY(-50%)" }}>
        <LeftMoodBubble />
      </div>

      {/* Center QuoteCard */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        <QuoteCard />
      </div>

      {/* Right side displaying time with seconds (EST) and counting
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)" }}>
        <RightMoodBubble />
      </div> */}
    </main>
  );
}