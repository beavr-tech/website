import { AnimatedSection, SectionHeader } from "./Section";
import { ProblemCard } from "./Card";


export function Problem() {
  return (
    <AnimatedSection id="problem" className="bg-background">
      <SectionHeader
        badge="The Problem"
        title="Why Most Habits Fail?"
        description={
          <>
            Building lasting habits is one of the hardest things we do. {" "} 
            <span className="text-primary font-medium">Here's why 92% of people fail.</span>
          </>
        }
      />

      {/* Desktop layout */}
      <div className="hidden lg:flex items-start justify-center gap-6 mt-16">
        <ProblemCard
          icon={<img src="/Flame.svg" className="w-9 h-9" />}
          title="Broken Streaks"
          description="Miss a day and your motivation fades. Traditional apps often punish rather than support your recovery."
          className={""}
        />

        <ProblemCard
          icon={<img src="/electric.svg" className="w-9 h-9" />}
          title="Lack of Motivation"
          description="Starting strong but fading fast. Without meaningful progress tracking, habits feel like endless chores."
          className={""}
        />

        <ProblemCard
          icon={<img src="/Justice.svg" className="w-12 h-12" />}
          title="No Accountability"
          description="Going it alone is hard. Most people quit because there’s no one to celebrate wins or push through setbacks."
          className={""}
        />

        <ProblemCard
          icon={<img src="/thumb.svg" className="w-10 h-10" />}
          title="Generic Advice"
          description="One-size-fits-all solutions don’t work. Your habits should adapt to your schedule and lifestyle."
          className={""}
        />
      </div>

      {/* Mobile / Tablet layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:hidden mt-12 max-w-4xl mx-auto justify-items-center">
        <ProblemCard
          icon={<img src="/Flame.svg" className="w-9 h-9" />}
          title="Broken Streaks"
          description="Miss a day and your motivation fades. Traditional apps often punish rather than support your recovery."
          className=""
        />

        <ProblemCard
          icon={<img src="/electric.svg" className="w-9 h-9" />}
          title="Lack of Motivation"
          description="Starting strong but fading fast. Without meaningful progress tracking, habits feel like endless chores."
          className=""
        />

        <ProblemCard
          icon={<img src="/Justice.svg" className="w-12 h-12" />}
          title="No Accountability"
          description="Going it alone is hard. Most people quit because there's no one to celebrate wins or push through setbacks."
          className=""
        />

        <ProblemCard
          icon={<img src="/thumb.svg" className="w-10 h-10" />}
          title="Generic Advice"
          description="One-size-fits-all solutions don't work. Your habits should adapt to your schedule and lifestyle."
          className=""
        />
      </div>
    </AnimatedSection>
  );
}
