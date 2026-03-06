import WorkoutForm, { WorkoutFormValues } from '@/components/WorkoutForm';

export default function EditWorkoutPage() {
  const handleSubmit = (data: WorkoutFormValues) => {
    console.log('Edit submitted', data);
  };

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold mb-4">Edit Workout</h1>
      <WorkoutForm
        onSubmit={handleSubmit}
        defaultValues={{ title: 'Bench Press', description: 'Chest workout' }}
      />
    </div>
  );
}