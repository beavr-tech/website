import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border px-4 md:px-6 py-4">
      {/* Outer wrapper gives spacing from screen edges */}
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Mobile View - Simple Vertical Layout */}
        <div className="md:hidden flex flex-col items-center gap-6 pb-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Beavr.png" alt="Beavr Logo" className="w-10 h-10" />
            <span className="text-foreground text-xl font-medium">BEAVR</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/people/Beavr/61585871281792/" className="text-foreground hover:text-primary transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://x.com/beavr_in?s=11" className="text-foreground hover:text-primary transition-colors">
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/beavr.in/" className="text-foreground hover:text-primary transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/beavr-in/" className="text-foreground hover:text-primary transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © 2026 BEAVR. All rights reserved
          </p>
        </div>

        {/* Desktop View - Image Container */}
        <div className="hidden md:block relative rounded-3xl overflow-hidden min-h-[420px] w-full">
          {/* Background Image – FULL WIDTH */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Footer.png')" }}
          />

          {/* Logo - Top Left */}
          <div className="absolute top-8 left-12 z-20 flex items-center gap-2">
            <img src="/bvrLogo.svg" alt="Beavr Logo" className="w-7 h-7" />
            <span className="text-white text-xl font-medium">BEAVR</span>
          </div>

          {/* Copyright - Top Center */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <p className="text-white text-lg font-light">
              © 2026 BEAVR. All rights reserved
            </p>
          </div>

          <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <p className="text-white text-4xl lg:text-5xl font-normal whitespace-nowrap" style={{ fontFamily: 'Instrument Serif, serif' }}>
              Future of <span className="italic">health</span> isn't really hospitals, it's <span className="italic">Habit Design</span>
            </p>
          </div>

          {/* Social Icons - Top Right */}
          <div className="absolute top-8 right-12 z-20 flex items-center gap-4">
            <a href="https://www.facebook.com/people/Beavr/61585871281792/" className="text-white hover:text-primary transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://x.com/beavr_in?s=11" className="text-white hover:text-primary transition-colors">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/beavr.in/" className="text-white hover:text-primary transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/beavr-in/" className="text-white hover:text-primary transition-colors">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>

          {/* BEAVR Watermark */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <span
              className="
                text-[180px] lg:text-[240px] xl:text-[280px]
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
          <div className="relative z-10 container-wide py-16">
            {/* footer content */}
          </div>
        </div>
      </div>
    </footer>
  );
}
