import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  return (
  <footer className="bg-background border-t border-border  px-4 md:px-6 py-4">
    {/* Outer wrapper gives spacing from screen edges */}
    <div className="w-full max-w-[1440px] mx-auto">
      
      {/* Image container */}
      <div className="relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-[420px] w-full">

        {/* Background Image – FULL WIDTH */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Footer.png')" }}
        />

        {/* Logo - Top Left */}
        <div className="absolute top-4 left-8 md:top-8 md:left-12 z-20 flex items-center gap-2">
          <img src="/bvrLogo.svg" alt="Beavr Logo" className="w-5 h-5 md:w-7 md:h-7" />
          <span className="text-white text-lg md:text-xl font-medium">BEAVR</span>
        </div>

        {/* Copyright - Top Center */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-8 z-20 flex flex-col items-center gap-2">
          <p className="text-white text-base md:text-lg font-light">
            © 2025 BEAVR. All rights reserved
          </p>
        </div>
        <div className="absolute top-14 left-1/2 -translate-x-1/2 md:top-28 z-20 flex flex-col items-center gap-2">
          <p className="text-white text-xl md:text-4xl lg:text-5xl font-normal whitespace-nowrap" style={{ fontFamily: 'Instrument Serif, serif' }}>
            Future of <span className="italic">health</span> isn't really hospitals, it's <span className="italic">Habit Design</span>
          </p>
        </div>

        {/* Social Icons - Top Right */}
        <div className="absolute top-4 right-8 md:top-8 md:right-12 z-20 flex items-center gap-3 md:gap-4">
          <a href="#" className="text-white hover:text-primary transition-colors">
            <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.instagram.com/beavr.in/" className="text-white hover:text-primary transition-colors">
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>

        {/* BEAVR Watermark */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <span
            className="
              text-[120px] md:text-[180px] lg:text-[240px] xl:text-[280px]
              font-extrabold tracking-widest
              text-transparent select-none
              translate-y-[36%]
            "
            style={{
              background: "linear-gradient(180deg, #EEF7FF 0%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            BEAVR
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide py-12 md:py-16">
          {/* footer content */}
        </div>

      </div>
    </div>
  </footer>
);


}
