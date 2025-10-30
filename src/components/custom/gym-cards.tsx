import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";

function GymCard({exercise, weight}: {exercise: string, weight: number}) {
  return (
    <Card className="border-fd-accent border-2">
      <CardHeader>
        <CardTitle>{exercise.toLocaleUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <span className="text-2xl font-bold">{weight}</span> lbs
        </p>
      </CardContent>
    </Card>
  );
}

export function GymCards({exercises}: {exercises: {exercise: string, weight: number}[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((exercise) => (
        <GymCard key={exercise.exercise} exercise={exercise.exercise} weight={exercise.weight} />
      ))}
    </div>
  );
}