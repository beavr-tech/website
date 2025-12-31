import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden z-40"
    >
      <Button className="w-full h-12 text-base shadow-blue-glow" asChild>
        <a href="#waitlist">
          Join the Waitlist
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </Button>
    </motion.div>
  );
}
