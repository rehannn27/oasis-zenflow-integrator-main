import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Bed, Sparkles, Calendar } from "lucide-react";

// ATLANTA IMAGES (using Atlanta1.jpeg to Atlanta13.jpeg)
import AtlantaHeroImage from "../assets/atlanta/pls.jpg";
import AtlantaCreeksideView from "../assets/atlanta/AtlantaCreeksideView.jpeg";
import AtlantaExterior from "../assets/atlanta/AtlantaExterior.jpeg";
import AtlantaBedroom from "../assets/atlanta/Amenities/Bedroom.png";
import AtlantaBedroom2 from "../assets/atlanta/AtlantaBedroomView.jpeg";
import AtlantaCreekside from "../assets/atlanta/Amenities/Creekside.png";
import AtlantaDining from "../assets/atlanta/AtlantaDiningArea.jpeg";
import AtlantaEntrance from "../assets/atlanta/Amenities/Entrance To Bedroom.png";
import AtlantaLounge from "../assets/atlanta/Amenities/Lounge.png";
import AtlantaReception from "../assets/atlanta/Amenities/Reception.png";
import AtlantaLuxurySuite from "../assets/atlanta/AtlantaLuxurySuite.jpeg";
import AtlantaSwing from "../assets/atlanta/Amenities/Swing.png";
import AtlantaSpaServices from "../assets/atlanta/Amenities/SPA Services.png";
import AtlantaSuiteBedroom from "../assets/atlanta/AtlantaSuiteBedroom.jpeg";
import AtlantaBedroomAmenity from "../assets/atlanta/Amenities/Bedroom.png";
import StoneMountain from "../assets/atlanta/Atlanta Attractions/Stone Mountain.jpeg";
import Aquarium from "../assets/atlanta/Atlanta Attractions/Aquarium.jpeg";
import OlympicPark from "../assets/atlanta/Atlanta Attractions/Olympic Park.jpeg";
import ZooEntrance from "../assets/atlanta/Atlanta Attractions/Atlanta zoo.jpeg";

export default function Atlanta() {
  const accommodations = [
    {
      title: "Luxurious Private Suite",
      view: "Hillside view",
      sleeps: "2 Guests",
      bed: "King Bed",
      features: ["Private deck overlooking creek", "Jacuzzi", "Walk-in closet", "Keyless entry"],
      price: "$82",
      period: "nightly",
    },
    {
      title: "Modern Basement Retreat",
      view: "Creekside view",
      sleeps: "5 Guests",
      bed: "Multiple beds",
      features: ["Entertainment room", "Fitness room", "Sauna", "Private lounge", "Dining area"],
      price: "$125",
      period: "nightly",
    },
  ];

  const amenities = [
    "Walk-in Showers",
    "Walk-in closet",
    "Pull-Out Sofa",
    "Fridge",
    "Microwave",
    "Air Fryer Cooker",
    "Air Conditioning",
    "Free Parking",
    "Keyless Entry",
    "Free WiFi",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={AtlantaHeroImage}
            alt="Atlanta wellness retreat exterior"
            className="w-full h-full object-cover"
            style={{
              imageRendering: 'crisp-edges'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Oasis of Calm <span className="text-yellow-400">Atlanta</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Snellville, GA 30039 USA</span>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white font-semibold" style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.9)' }}>
            Located in the suburbs of Atlanta, amidst lush foliage and a continuously flowing creek
            that beckons you to rest, reset and rejuvenate. Experience a peaceful sanctuary
            conveniently near Stone Mountain Park, theaters, restaurants, and shopping.
          </p>
        </div>
      </section>

      {/* Atlanta Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Atlanta Gallery</h2>

          {/* Amenities Gallery */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center">Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaBedroom}
                    alt="Atlanta Bedroom"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Bedroom</h4>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaCreekside}
                    alt="Atlanta Creekside"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Creekside</h4>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaEntrance}
                    alt="Atlanta Entrance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Entrance</h4>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaLounge}
                    alt="Atlanta Lounge"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Lounge</h4>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaReception}
                    alt="Atlanta Reception"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Reception</h4>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaSwing}
                    alt="Atlanta Swing"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Swing</h4>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={AtlantaSpaServices}
                    alt="Atlanta Spa Services"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Spa Services</h4>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Attractions */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-center">Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={StoneMountain}
                    alt="Stone Mountain Park"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Stone Mountain Park</h4>
                  <p className="text-sm text-muted-foreground text-center">Iconic mountain carving and family-friendly attractions</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={Aquarium}
                    alt="Aquarium"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Aquarium</h4>
                  <p className="text-sm text-muted-foreground text-center">Explore marine life and underwater wonders</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={ZooEntrance}
                    alt="Zoo Entrance"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Zoo Entrance</h4>
                  <p className="text-sm text-muted-foreground text-center">Discover diverse animal exhibits and conservation efforts</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <div className="relative w-48 h-48 mx-auto bg-muted rounded-full overflow-hidden">
                  <img
                    src={OlympicPark}
                    alt="Olympic Park"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center">Olympic Park</h4>
                  <p className="text-sm text-muted-foreground text-center">Historic site of the 1996 Olympics with fountains and events</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">A Unique Wellness Retreat</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The expansive grounds feature indigenous trees, plants, and birds—an amazingly peaceful 
                  and tranquil ambience for nature lovers. Guests can relax in a swing hammock or go for a 
                  nature walk along the nearby walking trail.
                </p>
                <p>
                  Enjoy complimentary snacks, beverages and a surprise SPA treatment if you are celebrating 
                  a special occasion. The grounds can be set up for weddings, anniversaries or birthday parties.
                </p>
                <p>
                  Optional authentic Mediterranean cuisine and SPA services including sauna are available. 
                  Body, Mind, and Spirit Wellness classes are presented by our certified on-site 
                  Holistic Wellness Therapist.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Accommodation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <CardHeader className="bg-gradient-ocean text-white">
                  <CardTitle className="text-2xl">{room.title}</CardTitle>
                  <p className="text-sm opacity-90">{room.view}</p>
                </CardHeader>
                <div className="relative h-48 bg-muted">
                  <img
                    src={index === 0 ? AtlantaSuiteBedroom : AtlantaBedroomAmenity}
                    alt={`${room.title} bed and amenities`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{room.sleeps}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-primary" />
                      <span>{room.bed}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{room.price}</span>
                    <span className="text-muted-foreground">/ {room.period}</span>
                  </div>
                  
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/book">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book This Room
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Amenities & Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center p-4 hover:bg-gradient-calm transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{amenity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atlanta Attractions */}
      <section className="py-16 px-4 bg-gradient-sunset text-secondary-foreground">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Atlanta Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-64 bg-muted">
                <img
                  src={StoneMountain}
                  alt="Stone Mountain Park"
                  className="h-full w-full object-cover"
                  style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Stone Mountain Park</h3>
                <p className="text-sm text-muted-foreground">Iconic mountain carving and family-friendly attractions</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-64 bg-muted">
                <img
                  src={Aquarium}
                  alt="Aquarium"
                  className="h-full w-full object-cover"
                  style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Aquarium</h3>
                <p className="text-sm text-muted-foreground">Explore marine life and underwater wonders</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-64 bg-muted">
                <img
                  src={ZooEntrance}
                  alt="Zoo Entrance"
                  className="h-full w-full object-cover"
                  style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Zoo Entrance</h3>
                <p className="text-sm text-muted-foreground">Discover diverse animal exhibits and conservation efforts</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="relative h-64 bg-muted">
                <img
                  src={OlympicPark}
                  alt="Olympic Park"
                  className="h-full w-full object-cover"
                  style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.2) brightness(1.1) saturate(1.1) sharpen(1px)' }}
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Olympic Park</h3>
                <p className="text-sm text-muted-foreground">Historic site of the 1996 Olympics with fountains and events</p>
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
                  <span>Snellville, GA 30039 USA</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">📞 404-433-2899</span>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Atlanta's Hidden Oasis?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your peaceful retreat today and discover true tranquility
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/book">Reserve Your Stay</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}