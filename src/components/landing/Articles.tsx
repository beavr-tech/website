import { AnimatedSection, SectionHeader } from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  excerpt: string;
  author: string;
  authorTitle?: string;
  date: string;
  link: string;
  image?: string;
  source?: string;
}

const articles: Article[] = [
  {
    title: "Building Better Habits: A Science-Based Approach",
    excerpt:
      "Discover the proven strategies that neuroscience reveals about forming lasting habits and breaking free from destructive patterns.",
    author: "Dr. James Clear",
    authorTitle: "Author & Behavioral Scientist",
    date: "Dec 15, 2025",
    link: "https://jamesclear.com/habits",
    source: "jamesclear.com",
  },
  {
    title: "The Psychology of Behavior Change",
    excerpt:
      "Understanding the mental mechanisms behind habit formation can transform how we approach personal development and growth.",
    author: "Dr. BJ Fogg",
    authorTitle: "Stanford Behavior Scientist",
    date: "Nov 28, 2025",
    link: "https://tinyhabits.com/psychology-of-behavior-change/",
    source: "tinyhabits.com",
  },
  {
    title: "How Community Accountability Drives Success",
    excerpt:
      "Research shows that social support and accountability increase success rates by up to 65% when forming new habits.",
    author: "Harvard Business Review",
    date: "Oct 10, 2025",
    link: "https://hbr.org/2023/03/the-power-of-accountability",
    source: "hbr.org",
  },
  {
    title: "Evidence base and strategies for successful smoking cessation",
    excerpt:
      "Effective smoking cessation requires a combination of brief clinical counseling and pharmacologic therapy, which together can dramatically reduce cardiovascular risk and premature mortality.",
    author: "James H. Black III, MD",
    authorTitle: "Vascular Surgeon, The Johns Hopkins Hospital",
    date: "2010",
    link: "https://doi.org/10.1016/j.jvs.2009.10.124",
    source: "Elsevier",
  },
];

interface ArticleCardProps extends Article {
  index: number;
}

function ArticleCard({
  title,
  excerpt,
  author,
  authorTitle,
  date,
  link,
  source,
  index,
}: ArticleCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group block bg-card rounded-2xl overflow-hidden border border-border p-6 md:p-8 transition-all duration-300 hover:border-primary/50"
      style={{
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(34, 132, 244, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.08)";
      }}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-10 h-10 text-primary/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
      </div>

      {/* Article Content */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {excerpt}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="font-semibold text-foreground text-sm">{author}</p>
          {authorTitle && (
            <p className="text-xs text-muted-foreground mt-0.5">
              {authorTitle}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">{date}</p>
        </div>

        <div className="flex items-center gap-2 text-primary">
          {source && (
            <span className="text-xs font-medium hidden sm:inline">
              {source}
            </span>
          )}
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

export function Articles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <AnimatedSection id="articles">
      <SectionHeader
        badge="Learn & Grow"
        title="Insights & Articles"
        description="Expert perspectives and research-backed insights on habit formation and personal transformation."
      />

      <div className="relative">
        {/* Navigation Arrows */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full w-12 h-12 shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous article"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Article Display */}
          <div className="flex-1 overflow-x-clip overflow-y-visible py-2 px-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <ArticleCard {...articles[currentIndex]} index={0} />
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full w-12 h-12 shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next article"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
