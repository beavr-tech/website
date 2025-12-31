import { AnimatedSection } from "./Section";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function AnimatedStat({ value, suffix, label, delay = 0 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">
          {rounded}
        </motion.span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}

const stats = [
  { value: 3, suffix: "×", label: "Better Habit Consistency" },
  { value: 80, suffix: "%", label: "User Retention Rate" },
  { value: 21, suffix: "K+", label: "Habits Built" },
  { value: 4.9, suffix: "/5", label: "User Satisfaction" },
];

export function Stats() {
  return (
    <AnimatedSection className="bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Testimonial quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground italic leading-relaxed">
            "Beavr transformed my morning routine. I've been waking up at 6 AM for 90 days straight—something I thought was impossible."
          </p>
          <footer className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary bg-secondary flex items-center justify-center">
              <span className="text-sm font-bold text-primary">SK</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Sarah K.</p>
              <p className="text-sm text-muted-foreground">Early Access User</p>
            </div>
          </footer>
        </motion.blockquote>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
