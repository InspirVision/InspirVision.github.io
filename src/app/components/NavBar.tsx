const NavBar = () => {
  return (
    <nav className="bg-[#2c1d15] text-[#f4f1e6] p-4">
      {/* Top header */}
      <div className="text-l italic mb-1 select-none">
        InspirVision
      </div>
       <div className="w-10 border-b-2 border-[#f4f1e6] mt-1" />

          <img /* image for top right corner in navbar*/
         // src="navbar/rose3.png" 
         // alt="rose illustration"
        //  className="absolute top-2 right-2 w-18 opacity-60 pointer-events-none filter sepia-[0.2] contrast-115"
        /> 

      {/* Navigation links */}
      <ul className="flex justify-center space-x-8 text-lg">
        <li><a href="/tunes" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Tunes</a></li>
        <li><a href="/games" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Games</a></li>
        <li><a href="/inspire" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Inspire</a></li>
        <li><a href="/envision" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Envision</a></li>

        {/* Home in heart */}
      <li>
          <a
            href="/"
            className="relative flex items-center justify-center px-4 py-1 text-[#A9B388] hover:text-[#C3D59B] transition-colors duration-300 ease-in-out border-b border-gray-300 text-#2c1d15-700 hover:border-green-700"
            aria-label="Home"
          >
            {/* Heart SVG as background */}
              <svg
                    className="absolute -top-7 -bottom-2 -left-4 -right-4 text-[#A9B388] opacity-45"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                  >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

            Home
          </a>
        </li>

        <li><a href="/catalog" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Catalog</a></li>
        <li><a href="/gallery" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Gallery</a></li>
        <li><a href="/[lounge]" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">Lounge</a></li>
        <li><a href="/about" className="border-b border-gray-300 text-#2c1d15-700 hover:border-green-700">About</a></li>
      </ul>
      <nav className="border-b border-gray-400 px-6"> </nav>
    </nav>
  );
};

export default NavBar;
