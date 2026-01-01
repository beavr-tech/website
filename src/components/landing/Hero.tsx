import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGooglePlay, FaApple } from "react-icons/fa6";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden"
      style={{ fontFamily: "'Instrument Serif', serif" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/BgImg.png)",
          zIndex: 0,
        }}
      />

      {/* Optional overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20"
        style={{ zIndex: 1 }}
      />

      <div className="container-wide relative px-4" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-secondary rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Now in Early Access
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: "#FFFFFF",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
              fontWeight: "normal",
            }}
          >
            Premium Life is Affordable
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mx-auto max-w-3xl"
            style={{
              color: "black",
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            Making health, focus, and better living accessible to everyone and
            anyone
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.beavr.lifestyle&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-6 sm:px-8 py-6 shadow-blue-glow hover:shadow-blue-glow-lg transition-shadow [&_svg]:w-5 [&_svg]:h-5"
              >
                <FaGooglePlay className="mr-3" />
                Download on Play Store
              </Button>
            </a>
            <div className="relative group">
              <Button
                size="lg"
                variant="outline"
                disabled
                className="w-full sm:w-auto text-base px-6 sm:px-8 py-6 border-primary text-primary opacity-50 cursor-not-allowed [&_svg]:w-5 [&_svg]:h-5"
              >
                <FaApple className="mr-3" />
                Download on App Store
              </Button>

              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
