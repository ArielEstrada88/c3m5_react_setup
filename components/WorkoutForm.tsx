'use client';

import { useForm } from 'react-hook-form';

export interface WorkoutFormValues {
  title: string;
  description: string;
}

interface WorkoutFormProps {
  onSubmit: (data: WorkoutFormValues) => void;
  defaultValues?: WorkoutFormValues;
}

export default function WorkoutForm({ onSubmit, defaultValues }: WorkoutFormProps) {
  const { register, handleSubmit } = useForm<WorkoutFormValues>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          {...register('title')}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register('description')}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
      >
        Save
      </button>
    </form>
  );
}