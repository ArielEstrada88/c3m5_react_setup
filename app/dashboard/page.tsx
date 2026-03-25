import WorkoutCard from '@/components/WorkoutCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6 mt-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-700">Welcome back! Here's a summary of your workouts this week.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Total Workouts</h2>
          <p>5</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">Total Hours</h2>
          <p>4.5h</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6">Recent Workouts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WorkoutCard id="1" title="Bench Press" description="Chest workout" image="/images/bench.jpg" />
        <WorkoutCard id="2" title="Squat" description="Leg workout" image="/images/squat.jpg" />
      </div>
    </div>
  );
}