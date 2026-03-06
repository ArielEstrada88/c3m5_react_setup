import WorkoutCard from '@/components/WorkoutCard';

export default function WorkoutDetailPage() {
  return (
    <div className="mt-6">
      <WorkoutCard
        id="1"
        title="Bench Press"
        description="Detailed description of bench press."
        image="/images/bench.jpg"
      />
    </div>
  );
}