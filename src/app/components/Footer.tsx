const Footer = () => {
  return (
<footer className="bg-[#2c1d15] text-[#f4f1e6] p-4 flex items-center justify-center backdrop-blur-md border-t-4 border-#f4f1e6 min-h-[80px]">

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
          <h1 className="mb-2 text-l font-bold"> Contact Info </h1>

        <div className="flex items-center space-x-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wistfulbeauty35@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <img
              src="logos/gmailLogo.png"
              alt="Email"
              className="w-9 h-9 cursor-pointer rounded-full opacity-70 hover:opacity-100 hover:scale-105 transition-transform duration-200"
            />
          </a>

          <a
            href="https://www.instagram.com/wistfulbeauty35/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img
              src="logos/instaLogo.png"
              alt="Instagram"
              className="w-8 h-8 cursor-pointer rounded-full opacity-70 hover:opacity-100 hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
