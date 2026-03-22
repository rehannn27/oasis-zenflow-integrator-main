import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Users, Mail, Phone, User } from "lucide-react";

export default function Book() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Reserve Your Stay</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Form</CardTitle>
          </CardHeader>

          <CardContent>
            <form action="https://formspree.io/f/xeerwvda" method="POST" className="space-y-4">

              <input type="hidden" name="project" value="Oasis Booking Form" />

              <Input name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
              <Input type="tel" name="phone" placeholder="Phone" required />

              <select name="location" required className="w-full border p-2 rounded">
                <option value="">Select location</option>
                <option value="atlanta">Atlanta</option>
                <option value="stlucia">St Lucia</option>
              </select>

              <select name="accommodation" required className="w-full border p-2 rounded">
                <option value="">Select accommodation</option>
                <option value="suite">Suite</option>
                <option value="basement">Basement</option>
                <option value="cabin">Cabin</option>
              </select>

              <Input type="date" name="checkIn" required />
              <Input type="date" name="checkOut" required />
              <Input type="number" name="guests" placeholder="Guests" required />

              <Textarea name="message" placeholder="Special Requests" />

              <Button type="submit" className="w-full">
                Submit Booking
              </Button>

            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}