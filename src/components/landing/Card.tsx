import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  blueTopBorder?: boolean;
}

export function Card({ children, className, hover = true, blueTopBorder = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 md:p-8 border border-border",
        hover && "card-hover",
        blueTopBorder && "blue-top-border",
        className
      )}
    >
      {children}
    </div>
  );
}

interface AnimatedCardProps extends CardProps {
  delay?: number;
}

export function AnimatedCard({ children, className, hover = true, blueTopBorder = false, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "bg-card rounded-xl p-6 md:p-8 border border-border",
        hover && "card-hover",
        blueTopBorder && "blue-top-border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  blueTopBorder?: boolean;
}

export function IconCard({ icon: Icon, title, description, delay = 0, blueTopBorder = true }: IconCardProps) {
  return (
    <AnimatedCard delay={delay} blueTopBorder={blueTopBorder}>
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </AnimatedCard>
  );
}

export function ProblemCard({ icon, title, description, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex flex-col items-center text-center max-w-[260px]",
        className
      )}
    >
      {/* Icon + dotted ring */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg
          className="absolute inset-0"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#E5E7EB"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            fill="none"
          />
        </svg>

        <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h3 className="mt-5 text-base font-medium text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}