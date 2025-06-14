
export default function QuoteCard() {
return (
    <div style={{
        backgroundColor: "white",
        padding: "1rem",
        width: "300px",
        fontFamily: "'Courier New', monospace",
        boxShadow: "4px 4px 0 black",
        transform: "skew(-2deg)",
    }}>
    <h2> Quote of the Day </h2>
    <p> 06/13/2025 </p>
    <blockquote> "Each day provides its own gifts" - Marcus Aurelius </blockquote>
    </div>
);
}