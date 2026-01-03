import { AnimatedSection } from "./Section";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; 

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          source: "website",
          platform: "unknown",
        },
      ]);

    if (!error) {
      setIsSubmitted(true);
      setEmail("");
    }

    // UX remains unchanged even on error
    setIsLoading(false);
  };

  return (
    <AnimatedSection id="waitlist" className="bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 rounded-full"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Limited Early Access
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground"
        >
          Ready to Transform Your Life?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground"
        >
          We’re opening early access in limited phases. Join the waitlist to get
          priority access to Beavr as we roll out new features and guided
          programs.{" "}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-primary/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
              >
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  You're on the list!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We'll reach out as we introduce more tools to support your journey.
                </p>
              </div>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 text-base bg-card border-border focus:border-primary focus:ring-primary"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="h-12 px-6 whitespace-nowrap shadow-blue-glow"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Joining...
                  </span>
                ) : (
                  <>
                    Join
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            No spam, ever
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Unsubscribe anytime
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Early access perks
          </span>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
