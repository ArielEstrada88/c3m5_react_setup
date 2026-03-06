import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold text-indigo-600">C3M5</span>
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
        <Link href="/workouts" className="hover:text-indigo-600">Workouts</Link>
        <Link href="/login" className="hover:text-indigo-600">Login</Link>
        <Link href="/register" className="hover:text-indigo-600">Register</Link>
      </div>
    </nav>
  );
}