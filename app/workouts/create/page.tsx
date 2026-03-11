'use client';

import WorkoutForm, { WorkoutFormValues } from '@/components/WorkoutForm';

export default function CreateWorkoutPage() {
  const handleSubmit = (data: WorkoutFormValues) => {
    console.log(data);
  };

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold mb-4">Create Workout</h1>
      <WorkoutForm onSubmit={handleSubmit} />
    </div>
  );
}