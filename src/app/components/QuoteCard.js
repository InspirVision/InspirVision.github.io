
export default function QuoteCard() {
return (
    <div style={{
        backgroundColor: "#D8C9A7", 
        padding: "1rem",
        width: "350px",
        height: "350px",
        fontFamily: "'Adelaide', italics",
        boxShadow: "3px 4px 0 black",
        transform: "skew(-2deg)",
    }}>
    <h1 className="text-3xl font-bold mb-2"> <b>Quote of The Day </b></h1>
    <h2 className="text-xl text-black-300 mb-4"> 07/29/2025 </h2>
    <br />
    <br />
    <p className="px-10 text-lg leading-loose italic text-center"> "I'm so proud of you. And soon, I'll be so proud of me too." <br />
      <span className="block mt-2 text-right"> - Wistful B. </span>
    </p>
    </div>
);
}