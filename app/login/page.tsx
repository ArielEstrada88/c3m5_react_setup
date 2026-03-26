export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow-md">
      {/* Heading color set to dark gray for readability */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Login</h2>
      
      <form className="space-y-4">
        {/* Inputs: border + text dark gray, placeholder medium gray */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded text-gray-800 placeholder-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded text-gray-800 placeholder-gray-400"
        />

        {/* Button remains unchanged */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}