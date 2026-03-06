import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center mt-20 space-y-6">
      <h1 className="text-4xl font-bold text-indigo-600">Welcome to C3M5</h1>
      <p className="text-gray-700">Track your workouts, log progress, and get stronger every day.</p>
      <div className="space-x-4">
        <Link href="/register" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500">
          Get Started
        </Link>
        <Link href="/login" className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300">
          Login
        </Link>
      </div>
    </div>
  );
}