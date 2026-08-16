import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
// import { EventPreview } from "@/components/landing/EventPreview";
import { Articles } from "@/components/landing/Articles";
import { FAQ } from "@/components/landing/FAQ";
import { Waitlist } from "@/components/landing/Waitlist";
import { Footer } from "@/components/landing/Footer";
import { MobileCTA } from "@/components/landing/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        {/* <EventPreview /> */}
        <Articles />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;