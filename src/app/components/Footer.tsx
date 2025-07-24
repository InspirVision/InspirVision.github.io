const Footer = () => {
  return (
    <footer className="bg-[#556B2F] text-[#fdfce5] p-6 flex items-center">
      {/* Left Side with quote grows to take all available space */}
      <div className="italic max-w-none flex-grow pr-8">
        "It's a shame that we have to live but it's a tragedy that we get to live only one life"  
        <p className="text-center mt-2">– Jonathan Safran Foer </p>
        <p className="text-center mt-4 text-sm">&copy; {new Date().getFullYear()} InspirVision. All rights reserved.</p>
      </div>

      {/* Right Side with contact info aligned right */}
      <div className="flex flex-col space-y-4 text-sm items-end min-w-[220px]">
          <h1 className="mb-2"> Contact Info </h1>

        <div className="flex items-center space-x-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wistfulbeauty35@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <img src="logos/gmailLogo.png" alt="Email" className="w-11 h-11 cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/wistfulbeauty35/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img src="logos/instaLogo.png" alt="Instagram" className="w-10 h-10 cursor-pointer" />
          </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
