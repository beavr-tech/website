import { AnimatedSection, SectionHeader } from "./Section";
import { motion } from "framer-motion";
import { Flame, Trophy, Star, Zap, CheckCircle2 } from "lucide-react";

export function AppPreview() {
  return (
    <AnimatedSection id="community">
      <SectionHeader
        badge="App Preview"
        title="Your Habits, Gamified"
        description="Experience habit-building like never before with our beautifully designed app."
      />

      <div className="flex justify-center">
        {/* Phone Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
          
          {/* Phone */}
          <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
            <div className="bg-background rounded-[2.5rem] overflow-hidden w-72 sm:w-80">
              {/* Status bar */}
              <div className="h-8 bg-primary/5 flex items-center justify-center">
                <div className="w-20 h-1 bg-foreground/20 rounded-full" />
              </div>

              {/* App content */}
              <div className="p-5 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Good morning,</p>
                    <p className="text-xl font-bold text-foreground">Alex!</p>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                    <Flame className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">12</span>
                  </div>
                </div>

                {/* Progress card */}
                <div className="bg-secondary/50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Daily Progress</span>
                    <span className="text-sm font-bold text-primary">4/6</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "66%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>

                {/* Habits list */}
                <div className="space-y-3">
                  {[
                    { name: "Morning Meditation", time: "7:00 AM", done: true },
                    { name: "Read 20 Pages", time: "8:00 AM", done: true },
                    { name: "Workout Session", time: "6:00 PM", done: false },
                  ].map((habit, i) => (
                    <motion.div
                      key={habit.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        habit.done ? "bg-primary" : "bg-secondary"
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 ${
                          habit.done ? "text-primary-foreground" : "text-muted-foreground"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          habit.done ? "text-muted-foreground line-through" : "text-foreground"
                        }`}>
                          {habit.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{habit.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2">
                  {[Trophy, Star, Zap].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1, type: "spring" }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  ))}
                  <div className="flex-1 text-right">
                    <p className="text-xs text-muted-foreground">Level</p>
                    <p className="text-lg font-bold text-primary">7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            animate={{ y: [0, -10, 0] }}
            className="absolute -left-16 top-1/4 bg-card p-3 rounded-xl shadow-lg border border-border hidden md:block"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">New Badge!</p>
                <p className="text-xs text-muted-foreground">7-Day Streak</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            animate={{ y: [0, 10, 0] }}
            className="absolute -right-12 bottom-1/3 bg-card p-3 rounded-xl shadow-lg border border-border hidden md:block"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              <p className="text-xs font-bold text-foreground">+50 XP</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
