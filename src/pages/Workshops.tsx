import { Card, CardContent } from "@/components/ui/card";

export default function Workshops() {
  return (
    <div className="min-h-screen p-10 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Wellness Workshops</h1>
        <p className="text-muted-foreground mt-2">
          Learn and grow through guided experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {["Yoga & Meditation", "Holistic Healing", "Mindfulness & Breathwork"].map((item) => (
          <Card key={item}>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Guided sessions to improve your wellbeing.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}