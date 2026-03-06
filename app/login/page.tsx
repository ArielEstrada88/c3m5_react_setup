export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500">
          Login
        </button>
      </form>
    </div>
  );
}