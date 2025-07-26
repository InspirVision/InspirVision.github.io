const Footer = () => {
  return (
<footer className="border-t border-[#C1B6A4 drop-shadow-sm shadow-[#c1b6a460] text-[#000000] p-4 flex backdrop-blur-md border-t-2 border-#f4f1e6 flex-grow">

      {/* Left Side with quote grows to take all available space */}
      <div className="italic max-w-none flex-grow pr-8">
        "It's a shame that we have to live, but it's a tragedy that we get to live only one life"  
        <p className="text-center mt-2">– Jonathan Safran Foer </p>
        <p className="text-center mt-4 text-sm">&copy; {new Date().getFullYear()} InspirVision. All rights reserved.</p>
      </div>

            {/* middle with resource section */}
      <div className="italic max-w-none flex-grow pr-8 text-center">
        Resources
        <p className="text-center mt-2"> ------- </p>

      </div>

      {/* Right Side with contact info aligned right */}
      <div className="flex flex-col space-y-4 text-sm items-end min-w-[220px]">
          <h1 className="mb-2 text-l font-bold"> Contact Me </h1>
         <p><a href="https://linktr.ee/wistful.b">Linktree</a></p>
      </div>

    </footer>
  );
};

export default Footer;
