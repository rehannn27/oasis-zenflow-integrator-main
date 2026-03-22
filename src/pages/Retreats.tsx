import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Retreats() {
  return (
    <div className="min-h-screen p-10 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Transformative Wellness Retreats</h1>
        <p className="text-muted-foreground mt-2">
          Reconnect your mind, body, and soul in our curated retreats.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {["Atlanta Healing Retreat", "St. Lucia Ocean Retreat", "Nature Escape Retreat"].map((title) => (
          <Card key={title}>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">
                3–5 days immersive wellness experience.
              </p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}