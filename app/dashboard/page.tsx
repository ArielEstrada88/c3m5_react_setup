import WorkoutCard from '@/components/WorkoutCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6 mt-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WorkoutCard id="1" title="Bench Press" description="Chest workout" image="/images/bench.jpg" />
        <WorkoutCard id="2" title="Squat" description="Leg workout" image="/images/squat.jpg" />
        <WorkoutCard id="3" title="Deadlift" description="Back workout" image="/images/deadlift.jpg" />
      </div>
    </div>
  );
}