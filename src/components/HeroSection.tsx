
nonimport { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: 'hsl(180 10% 20%)' }}>
          Oasis of Calm
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ color: 'hsl(38 79% 75%)' }}>
          Holistic Wellness & SPA
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'hsl(180 10% 20%)' }}>
          Restore Your Balance
        </h3>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: 'hsl(180 0% 50%)' }}>
          Experience tranquility at our Atlanta and St. Lucia locations. Book your personalized wellness journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="text-lg px-8"
            style={{
              backgroundColor: 'hsl(174 45% 35%)',
              color: 'hsl(0 0% 100%)',
              border: 'none'
            }}
          >
            <Link to="/book">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8"
            style={{
              backgroundColor: 'hsl(38 79% 75%)',
              color: 'hsl(180 10% 20%)',
              border: '1px solid hsl(38 79% 75%)'
            }}
          >
            <Link to="/services">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
