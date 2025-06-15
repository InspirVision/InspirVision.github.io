
export default function QuoteCard() {
return (
    <div style={{
        backgroundColor: "white",
        padding: "1rem",
        width: "300px",
        height: "400px",
        fontFamily: "'Courier New', monospace",
        boxShadow: "4px 4px 0 black",
        transform: "skew(-2deg)",
    }}>
    <h1> <b>Quote of The Day </b></h1>
    <h2> 06/15/2025 </h2>
    <br />
    <br />
    <p> "Each day provides its own gifts" <br />
        - Marcus Aurelius 
    </p>
    </div>
);
}