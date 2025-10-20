import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Mail, Phone, User, Loader2, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { databaseService, type Booking } from "@/lib/database";
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '@/lib/stripe';
import PaymentForm from '@/components/PaymentForm';

export default function Book() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<'booking' | 'payment'>('booking');
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    accommodation: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    specialRequests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookingData: Omit<Booking, 'id' | 'status' | 'created_at' | 'updated_at'> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location as 'atlanta' | 'stlucia',
        accommodation: formData.accommodation,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        guests: parseInt(formData.guests),
        special_requests: formData.specialRequests || undefined,
      };

      const result = await databaseService.createBooking(bookingData);

      if (result) {
        setBookingId(result.id);
        setCurrentStep('payment');
        toast({
          title: "Booking Details Saved!",
          description: "Please complete your payment to confirm the reservation.",
        });
      } else {
        toast({
          title: "Booking Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Booking Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntent: any) => {
    try {
      // Update booking status to confirmed
      if (bookingId) {
        await databaseService.updateBookingStatus(bookingId, 'confirmed');
      }

      toast({
        title: "Payment Successful!",
        description: "Your booking has been confirmed. Check your email for details.",
      });

      // Reset form and go back to booking step
      setCurrentStep('booking');
      setBookingId(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        accommodation: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error('Payment confirmation error:', error);
      toast({
        title: "Payment Confirmed",
        description: "Your payment was successful, but there was an issue updating your booking. Please contact us.",
        variant: "destructive",
      });
    }
  };

  const handlePaymentError = (error: string) => {
    toast({
      title: "Payment Failed",
      description: error,
      variant: "destructive",
    });
  };

  const calculateAmount = () => {
    // Simple pricing logic - you can make this more sophisticated
    const baseRates = {
      'suite': 82,
      'basement': 125,
      'cabin': 100,
    };

    const rate = baseRates[formData.accommodation as keyof typeof baseRates] || 100;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const nights = Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));

    return rate * nights;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">Book Your Retreat</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserve Your Stay</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentStep === 'booking'
              ? "Fill out the form below to start your booking process"
              : "Complete your payment to confirm your reservation"
            }
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep === 'booking' ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
            }`}>
              1
            </div>
            <div className={`h-1 w-16 ${currentStep === 'payment' ? 'bg-primary' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep === 'payment' ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
            }`}>
              2
            </div>
          </div>
        </div>

        {/* Booking Form */}
        {currentStep === 'booking' && (
          <Card className="shadow-[var(--shadow-soft)]">
            <CardHeader className="bg-gradient-calm">
              <CardTitle className="text-2xl">Booking Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Reservation Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Select value={formData.location} onValueChange={(value) => handleChange("location", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="atlanta">Atlanta, GA</SelectItem>
                        <SelectItem value="stlucia">St. Lucia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accommodation">Accommodation *</Label>
                    <Select value={formData.accommodation} onValueChange={(value) => handleChange("accommodation", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suite">Luxurious Suite (Atlanta) - $82/night</SelectItem>
                        <SelectItem value="basement">Modern Basement (Atlanta) - $125/night</SelectItem>
                        <SelectItem value="cabin">Oceanview Cabin (St. Lucia) - $100/night</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">Check-in Date *</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleChange("checkIn", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkOut">Check-out Date *</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleChange("checkOut", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guests}
                      onChange={(e) => handleChange("guests", e.target.value)}
                      required
                      placeholder="2"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests or Questions</Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleChange("specialRequests", e.target.value)}
                  placeholder="Any special requirements, dietary restrictions, or celebration details..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar className="mr-2 h-5 w-5" />
                      Submit Booking Request
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  * We'll contact you to confirm availability and process payment securely
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
        )}

        {/* Payment Form */}
        {currentStep === 'payment' && (
          <Elements stripe={stripePromise}>
            <PaymentForm
              amount={calculateAmount()}
              currency="usd"
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
              bookingData={formData}
            />
          </Elements>
        )}

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                St. Lucia:<br />758.451.7375
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                oasiscalmholistic<br />center@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Group Bookings</h3>
              <p className="text-sm text-muted-foreground">
                Special rates for<br />weddings & events
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
