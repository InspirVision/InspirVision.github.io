import QuoteCard from "./components/QuoteCard";


export default function HomePage() {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#fdfce5",
    }}> 
    <QuoteCard />
    </main>
  ); }