export default function NavBar() {  
  return (
    <nav className="bg-pink-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">InspireVision</h1>
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/games">Games</a></li>
        <li><a href="/about">About</a></li>
        {/* Add other links */}
      </ul>
    </nav>
  );
}
