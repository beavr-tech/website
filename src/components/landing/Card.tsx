import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Calendar, Clock, Video, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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


interface EventCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  time: string;
  platform: string;
  hostName: string;
  hostTitle: string;
  hostOrganization: string;
  hostEmoji?: string;
  registrationLink: string;
  limitedSeats?: boolean;
  index?: number;
}

export function EventCard({
  image,
  imageAlt,
  title,
  description,
  date,
  time,
  platform,
  hostName,
  hostTitle,
  hostOrganization,
  hostEmoji = "👨‍⚕️",
  registrationLink,
  limitedSeats = false,
  index = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Event Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-full object-contain bg-secondary/20"
        />
        {limitedSeats && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            *Limited Seats
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-5">
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Video className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">{platform}</span>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        <div className="bg-secondary/50 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">{hostEmoji}</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">{hostName}</p>
              <p className="text-xs text-muted-foreground">{hostTitle}</p>
              <p className="text-xs text-muted-foreground">{hostOrganization}</p>
            </div>
          </div>
        </div>

        <a 
          href={registrationLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button size="default" className="w-full text-sm">
            Register Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
