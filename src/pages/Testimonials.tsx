import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <div className="min-h-screen p-10 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">What Our Guests Say</h1>
        <p className="text-muted-foreground mt-2">
          Real experiences from our clients.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Sarah", text: "Amazing experience, very relaxing!" },
          { name: "John", text: "Best retreat I’ve attended." },
          { name: "Emily", text: "Highly recommend to everyone." }
        ].map((t, i) => (
          <Card key={i}>
            <CardContent className="p-6 space-y-2">
              <h2 className="font-semibold">{t.name}</h2>
              <p className="text-sm text-muted-foreground">{t.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}