import React from 'react';

export default function page() {
{/* for random quote generator use font family like "font-family: Playfair Display, serif"*/}
return (
    <main>
        <h1 className="font-bold text-3xl text-center mb-2"> Random Quote Generator </h1>
        <h2 className="text-left text-xl italic color-black"> Categories</h2>

        <div style={{
        position: "absolute", 
        left: "50%", 
        transform: "translateX(-50%)",
        backgroundColor: "#D8C9A7", 
        padding: "1rem",
        width: "350px",
        height: "350px",
        fontFamily: "'Adelaide', italics",
        boxShadow: "3px 4px 0 black",
    }}> <p className="text-center"> Quote </p></div>
    </main>
);
}