import WorkoutCard from '@/components/WorkoutCard';
import Link from 'next/link';

export default function WorkoutsPage() {
  return (
    <div className="space-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Workouts</h1>
        <Link
          href="/workouts/create"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
        >
          + Add New Workout
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <WorkoutCard id="1" title="Bench Press" description="Chest workout" image="/images/bench.jpg" />
        <WorkoutCard id="2" title="Squat" description="Leg workout" image="/images/squat.jpg" />
        <WorkoutCard id="3" title="Deadlift" description="Back workout" image="/images/deadlift.jpg" />
        <WorkoutCard id="4" title="Pull Up" description="Back & Arms" image="/images/pullup.jpg" />
      </div>
    </div>
  );
}