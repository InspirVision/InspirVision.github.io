
// left side with calander
export function LeftMoodBubble() {
  return (
    <div
      style={{
        backgroundColor: "#f7e5ce",
        padding: "1rem",
        borderRadius: "50%",
        width: "180px",
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-geist-sans)",
        boxShadow: "2px 3px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <h2 className="text-md font-bold text-center mb-2">July 2025</h2>
        <div className="text-xs text-center">
          <p>Mon Tue Wed Thu Fri</p>
          <p>22  23  24  25  26</p>
          <p>29  30  31</p>
        </div>
      </div>
    </div>
  );
}

// right side with Digital clock

// export function RightMoodBubble() {
//   const [time, setTime] = useState<string>("");

//   useEffect(() => {
//     const update = () => {
//       const now = new Date();
//       setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
//     };
//     update();
//     const interval = setInterval(update, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: "#f7e5ce",
//         padding: "1rem",
//         borderRadius: "50%",
//         width: "180px",
//         height: "180px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "var(--font-geist-mono)",
//         boxShadow: "2px 3px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <p className="text-xl">{time}</p>
//     </div>
//   );
// }
