export default function NavBar() {  
  return (
    <nav className="bg-pink-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">InspirVision</h1>
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/games">Games</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/[lounge]">Lounge</a></li>
        <li><a href="/envision">Envision</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/games">Games</a></li>
        <li><a href="/inspire">Inspire</a></li>
        <li><a href="/tunes">Tunes</a></li>
      </ul>
    </nav>
  );
}
