import { AnimatedSection, SectionHeader } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What makes Beavr different from other habit apps?",
    answer:
      "Beavr combines AI-powered personalization, game mechanics, and community accountability—three elements that research shows are critical for lasting behavior change. Most apps only offer one or two of these.",
  },
  {
    question: "Is Beavr free to use?",
    answer:
      "We'll offer a generous free tier with core features. Premium plans will unlock AI coaching, advanced analytics, and exclusive community features. Early waitlist members get special founding member pricing.",
  },
  {
    question: "How does the AI Habit Buddy work?",
    answer:
      "Our AI learns from your patterns—when you're most productive, what triggers slip-ups, and what motivates you. It then provides personalized suggestions, optimal timing, and encouragement tailored to your unique journey.",
  },
  {
    question: "Can I use Beavr with friends or family?",
    answer:
      "Absolutely! You can create private habit squads with friends, family, or colleagues. Share progress, set group challenges, and keep each other accountable. It's one of our most popular features.",
  },
  {
    question: "When will Beavr launch?",
    answer:
      "Beavr is rolling out in phases. You can join the waitlist today to get early access as we open new spots and launch upcoming updates. Waitlist members receive priority access and exclusive benefits.",
  },
  {
    question: "What platforms will Beavr be available on?",
    answer:
      "We're launching first on iOS and Android, with a web app following shortly after. All platforms will sync seamlessly so you can track habits from any device.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq">
      <SectionHeader
        badge="FAQ"
        title="Got Questions?"
        description="Everything you need to know about Beavr and building better habits."
      />

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
