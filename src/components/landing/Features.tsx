import { AnimatedSection, SectionHeader } from "./Section";
import { AnimatedCard } from "./Card";
import { motion } from "framer-motion";
import { Bot, Gamepad2, Users2, LineChart } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Coaching",
    description:
      "Your personal AI coach learns your unique patterns, predicts challenges before they happen, and delivers personalized guidance at exactly the right moment.",
    highlight: "Intelligent Automation",
  },
  {
    icon: Gamepad2,
    title: "Behavioral Science Engine",
    description:
      "Built on proven behavioral psychology principles. Gamified challenges, reward systems, and habit stacking make consistency feel natural and rewarding.",
    highlight: "Science-Backed Methods",
  },
  {
    icon: LineChart,
    title: "Neuroplasticity Training",
    description:
      "Leverages brain science to rewire habits at a neural level. Progressive challenges strengthen pathways, making positive behaviors automatic over time.",
    highlight: "Brain Rewiring",
  },
  {
    icon: Users2,
    title: "IoT Integration",
    description:
      "Seamlessly connects with your smart devices and wearables. Auto-track workouts, sleep, and activities—no manual logging needed.",
    highlight: "Smart Connectivity",
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
            Beavr blends{" "}
            <span className="text-primary font-medium italic">
              AI, behavioral science, neuroplasticity, and IoT 
            </span>
             {" "} to make habit-building feel effortless.
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
    </AnimatedSection>
  );
}
