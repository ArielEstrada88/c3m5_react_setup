import WorkoutCard from '@/components/WorkoutCard';

export default function DashboardPage() {
  return (
    <div className="relative mt-6 space-y-8 overflow-hidden">

      {/* 🔥 Floating Emoji Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="animate-bounce absolute top-10 left-10 text-4xl">💪</div>
        <div className="animate-pulse absolute top-32 right-20 text-3xl">🏋️</div>
        <div className="animate-bounce absolute bottom-20 left-1/4 text-3xl">🔥</div>
        <div className="animate-pulse absolute bottom-10 right-10 text-4xl">⚡</div>
        <div className="animate-bounce absolute top-1/2 left-1/2 text-3xl">🏃</div>
      </div>

      {/* 🧠 HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back 👋</h1>
        <p className="text-indigo-100">
          You're crushing it this week — keep the momentum going!
        </p>
      </div>

      {/* 📊 STATS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">Total Workouts</p>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            💪 5
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">Total Hours</p>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            ⏱️ 4.5h
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">Calories Burned</p>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            🔥 1,200
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-gray-500">Streak</p>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            ⚡ 3 days
          </h2>
        </div>

      </div>

      {/* 🧾 RECENT WORKOUTS HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Workouts</h2>
        <button className="text-sm text-indigo-600 hover:underline">
          View All →
        </button>
      </div>

      {/* 🏋️ WORKOUT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WorkoutCard
          id="1"
          title="Bench Press"
          description="Chest workout"
          image="/images/bench.jpg"
        />
        <WorkoutCard
          id="2"
          title="Squat"
          description="Leg workout"
          image="/images/squat.jpg"
        />
        <WorkoutCard
          id="3"
          title="Running"
          description="Cardio session"
          image="/images/run.jpg"
        />
      </div>

    </div>
  );
}