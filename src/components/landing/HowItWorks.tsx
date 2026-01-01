import { AnimatedSection, SectionHeader } from "./Section";
import { motion } from "framer-motion";
import { Download, Target, Trophy, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Personalised Onboarding",
    description: "Tell us about your habits, triggers, and lifestyle. Beavr's AI builds a personalised, science-backed plan tailored to your goals.",
  },
  {
    icon: Target,
    title: "Guided Habit Program",
    description: "Follow a structured, psychiatry- and behavioral science-based program designed to rewire habits through small, repeatable actions.",
  },
  {
    icon: Trophy,
    title: "Learn, Play & Get Support",
    description: "Engage with gamified modules, chat with Beavr AI for instant guidance, and connect with licensed professionals through live doctor-led sessions when you need deeper support.",
  },
  {
    icon: Rocket,
    title: "Data-Driven Transformation",
    description: "Using insights from IoT devices and wearables, Beavr tracks patterns, delivers timely interventions, and helps habits become automatic—without relying on willpower.",
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection id="how-it-works">
      <SectionHeader
        badge="How It Works"
        title="Your Journey to Better Habits"
        description="Four simple steps to build habits that last a lifetime."
      />

      <div className="relative">
        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number */}
              <div className="relative z-10 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-blue-glow"
                >
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                  {index + 1}
                </span>
              </div>

              {/* Connector for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden w-0.5 h-8 bg-primary/30 my-2" />
              )}

              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
