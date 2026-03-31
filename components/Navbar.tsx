import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold text-indigo-600">C3M5</span>
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200">Dashboard</Link>
        <Link href="/workouts" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Workouts</Link>
        <Link href="/login" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Login</Link>
        <Link href="/register" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Register</Link>
      </div>
    </nav>
  );
}