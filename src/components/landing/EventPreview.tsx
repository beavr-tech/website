import { AnimatedSection, SectionHeader } from "./Section";
import { EventCard } from "./Card";

const upcomingEvents = [
  {
    image: "/events/event.jpeg",
    imageAlt: "Quit Smoking Event",
    title: "Quit Smoking: A Psychiatrist's Guide",
    description:
      "This New Year, don't promise yourself—prove it. Quit smoking with expert guidance, not willpower alone.",
    date: "10th Jan 2026",
    time: "6-7 PM",
    platform: "Google Meet",
    hostName: "Dr. Dev Rai (Host)",
    hostTitle: "Dept. of Psychiatry",
    hostOrganization: "NDMC Medical College, New Delhi",
    hostEmoji: "👨‍⚕️",
    registrationLink: "https://u.payu.in/PAYUMN/9IlRfSC00u1C",
    limitedSeats: true,
  },
  
  
];

export function EventPreview() {
  const isSingleEvent = upcomingEvents.length === 1;

  return (
    <AnimatedSection id="upcoming-events">
      <SectionHeader
        badge="Join Us Live"
        title="Upcoming Events"
        description="Expert-led sessions designed to help you build better habits and transform your life."
      />

      <div
        className={
          isSingleEvent
            ? "flex justify-center"
            : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {upcomingEvents.map((event, index) => (
          <div key={index} className={isSingleEvent ? "max-w-md w-full" : ""}>
            <EventCard {...event} index={index} />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
