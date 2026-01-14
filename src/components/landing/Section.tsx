import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
}

export function Section({
  children,
  className,
  id,
  containerClass = "container-wide",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={containerClass}>{children}</div>
    </section>
  );
}

interface AnimatedSectionProps extends SectionProps {
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  id,
  containerClass,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("section-padding", className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <div className={containerClass || "container-wide"}>{children}</div>
    </motion.section>
  );
}

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: React.ReactNode;
  centered?: boolean;
};

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground"
        style={{
          fontFamily: "'Instrument Serif', serif",
          color: "#4F4F4F",
        }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "mt-4 text-lg md:text-xl text-muted-foreground",
            centered && "max-w-4xl mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
