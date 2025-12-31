import { AnimatedSection, SectionHeader } from "./Section";
import { AnimatedCard } from "./Card";
import { motion } from "framer-motion";
import { Bot, Gamepad2, Users2, LineChart } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Habit Buddy",
    description:
      "Your personal AI coach adapts to your patterns, suggests optimal times, and provides encouragement when you need it most.",
    highlight: "Personalized coaching",
  },
  {
    icon: Gamepad2,
    title: "Gamified Missions",
    description:
      "Transform boring routines into exciting challenges. Earn rewards, unlock achievements, and level up your life.",
    highlight: "Make habits fun",
  },
  {
    icon: Users2,
    title: "Community Accountability",
    description:
      "Join habit squads with like-minded people. Share progress, celebrate wins, and stay motivated together.",
    highlight: "Never go alone",
  },
  {
    icon: LineChart,
    title: "Personalized Insights",
    description:
      "Deep analytics show what's working. Understand your patterns and optimize your routines for maximum success.",
    highlight: "Data-driven growth",
  },
];

export function Features() {
  return (
    <AnimatedSection id="features" className="bg-secondary/30">
      <SectionHeader
        badge="The Solution"
        title="Everything You Need to Succeed"
        description={
          <>
            Beavr combines{" "}
            <span className="text-primary font-medium italic">
              AI intelligence, game mechanics, and community power
            </span>
            , to make habit-building effortless.
          </>
        }
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <AnimatedCard key={feature.title} delay={index * 0.1} hover>
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {feature.highlight}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Decorative separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </AnimatedSection>
  );
}
