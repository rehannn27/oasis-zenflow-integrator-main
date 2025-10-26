import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Bed, Sparkles, Calendar, Palmtree } from "lucide-react";

// ST. LUCIA IMAGES
import StLucia1 from "../assets/1.png";
import StLuciaSPATreatment from "../assets/SPA treatment.png";
import StLuciaLivingRoom from "../assets/stlucia/Living Room.png";
import StLuciaKitchen from "../assets/stlucia/Kitchen & Dining Room.png";
import StLuciaBathroom from "../assets/stlucia/Bathroom.png";
import PitonsImg from "../assets/stlucia/stlucia-pitons.jpg";
import Cruize from "../assets/stlucia/cruize.jpeg";
import Mudbath from "../assets/stlucia/mudbath.jpeg";
import SulphurSpring from "../assets/stlucia/sulphur spring.jpeg";
import BambooRafting from "../assets/stlucia/bamboo rafting.jpeg";
import StLucia11 from "../assets/11.png";

export default function StLucia() {
  const amenities = [
    "Walk-in Shower",
    "Queen Bed & Futon",
    "Full Kitchen",
    "Fridge & Microwave",
    "Stove",
    "Air Conditioning",
    "Smart TV",
    "Free WiFi",
    "Private Balcony",
    "Ocean View",
    "Gazebo",
    
  ];

  const services = [
    "SPA Treatments",
    "Authentic Caribbean Cuisine",
    "SPA Services",
  ];
  const Premium = [
    "Airport Transfer",
    "Personal Shopper",
    "Tour Guide",
    "Excursions & Tours",
    "Premium Bath Amenities",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={StLucia11}
            alt="St. Lucia wellness retreat exterior"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Oasis of Calm <span className="bg-gradient-ocean bg-clip-text text-transparent">St. Lucia</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white mb-4">
            <Palmtree className="h-5 w-5" />
            <span className="text-sm font-medium">St. Lucia, Caribbean</span>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white font-semibold" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.9)' }}>
            With its romantic charm, lush rainforests, and the famous twin Pitons Mountain peaks,
            Saint Lucia is one of the Caribbean's most unique and captivating getaway spots. Experience
            paradise with breathtaking ocean views of the Caribbean Sea.
          </p>
        </div>
      </section>

      {/* St. Lucia Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">St. Lucia Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src={StLuciaLivingRoom}
              alt="St. Lucia Living Room"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={PitonsImg}
              alt="Twin Pitons"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={StLuciaKitchen}
              alt="St. Lucia Kitchen"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Caribbean Paradise Awaits</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nestled on our tropical hillside, the Oasis of Calm Caribbean Escape provides a tranquil 
                  retreat surrounded by amazing scenery. This cabin, designed with a laid-back sense of luxury 
                  in mind, features a plush queen bed, cozy living space, full kitchen and elegant finishing 
                  with a Caribbean touch.
                </p>
                <p>
                  Nearby attractions include the Governor's mansion, The View at the Morne, Sandals Hotel 
                  and golf course, and a short drive to the beach and city market. Step onto your private 
                  balcony for a breathtaking view of ships sailing to and from Port Castries and an amazing 
                  evening sunset as you sit in your own gazebo.
                </p>
                <p>
                  This exotic and enchanting Caribbean getaway is your private retreat designed for total 
                  relaxation, whether you begin your day with the sound of birds chirping or end it with 
                  stunning sunset views.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Oceanview Cabin</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <CardHeader className="bg-gradient-sunset text-secondary-foreground">
                <CardTitle className="text-2xl">Entire Oceanview Cabin</CardTitle>
                <p className="text-sm">Caribbean Sea View</p>
              </CardHeader>
              <div className="relative h-48 bg-muted">
                <img
                  src={StLuciaLivingRoom}
                  alt="St. Lucia cabin living room"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Sleeps 3 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4 text-primary" />
                    <span>Queen Bed & Futon</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Private balcony with breathtaking ocean views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Gazebo for sunset viewing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Full kitchen and cozy living space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Elegant Caribbean-inspired finishing</span>
                  </li>
                </ul>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">$100</span>
                  <span className="text-muted-foreground">/ nightly</span>
                </div>
                
                <Button asChild variant="hero" className="w-full">
                  <Link to="/book">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book This Cabin
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Cabin Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center p-4 hover:bg-gradient-calm transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{amenity}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">Onsite Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-4 hover:bg-gradient-calm transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <Palmtree className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">Premium Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Premium.map((premium, index) => (
              <Card key={index} className="text-center p-4 hover:bg-gradient-calm transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{premium}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 px-4 bg-gradient-sunset text-secondary-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center">St Lucia Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-48 bg-muted">
                <img
                  src={Cruize}
                  alt="Cruise"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Cruise</h3>
                <p className="text-sm text-muted-foreground">Scenic boat tours and coastal adventures</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-48 bg-muted">
                <img
                  src={Mudbath}
                  alt="Mudbath"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Mudbath</h3>
                <p className="text-sm text-muted-foreground">Therapeutic volcanic mud baths for relaxation</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-48 bg-muted">
                <img
                  src={SulphurSpring}
                  alt="Sulphur Spring"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Sulphur Spring</h3>
                <p className="text-sm text-muted-foreground">Natural hot springs with healing mineral waters</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-48 bg-muted">
                <img
                  src={BambooRafting}
                  alt="Bamboo Rafting"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Bamboo Rafting</h3>
                <p className="text-sm text-muted-foreground">Traditional bamboo rafting down rainforest rivers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center p-8">
            <CardContent>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>The Morne, St. Lucia WI</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">📞 758-451-7375</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✉️ oasisofcalmholisticcenter@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-ocean text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Escape to Caribbean Paradise</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the spirit of Saint Lucia at your own pace
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/book">Book Your Caribbean Escape</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}