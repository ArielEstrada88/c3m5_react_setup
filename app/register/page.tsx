export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Register</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-2 rounded-md text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded-md text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded-md text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </form>
    </div>
  );
}