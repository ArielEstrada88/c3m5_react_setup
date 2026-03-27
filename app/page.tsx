import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ========================= */}
      {/* EMOJI + WORD BACKGROUND LAYER */}
      {/* ========================= */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* ========================= */}
        {/* HORIZONTAL FULL-VIEWPORT EMOJIS WITH ORIGINAL VERTICAL POSITIONS */}
        {/* ========================= */}
        <div className="absolute top-0 left-0 w-full h-full">

          {/* Emoji #1 - far left */}
          <div className="absolute top-[2%] left-[0%] text-[5vw] animate-bounce">
            💪
          </div>

          {/* Emoji #2 */}
          <div className="absolute top-[10%] left-[16.66%] text-[5vw] animate-pulse">
            🏋️
          </div>

          {/* Emoji #3 */}
          <div className="absolute top-[45%] left-[33.33%] text-[5vw] animate-bounce">
            🔥
          </div>

          {/* Emoji #4 */}
          <div className="absolute top-[30%] left-[50%] text-[5vw] animate-pulse">
            ⚡
          </div>

          {/* Emoji #5 */}
          <div className="absolute bottom-[5%] left-[66.66%] text-[5vw] animate-spin">
            🏃
          </div>

          {/* Emoji #6 */}
          <div className="absolute bottom-[3%] left-[83.33%] text-[5vw] animate-[spin_6s_linear_infinite]">
            🚴
          </div>

          {/* Emoji #7 - far right */}
          <div className="absolute bottom-[33%] left-[100%] text-[5vw] animate-[bounce_3s_infinite]">
            🏊
          </div>
        </div>

        {/* ========================= */}
        {/* WORD ANIMATIONS - scaling with vw for ultra-wide monitors */}
        {/* ========================= */}
        <div className="absolute top-[5%] left-[0] text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-bold text-indigo-500 animate-runAcross">
          Run
        </div>

        <div className="absolute top-[33%] right-[3%] text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-bold text-green-500 animate-bloom">
          Lift
        </div>

        <div className="absolute bottom-[25%] left-[25%] text-[3vw] sm:text-[2.5vw] md:text-[2vw] font-semibold text-red-500 animate-floatUp">
          Sweat
        </div>

        <div className="absolute top-[50%] right-[33%] text-[5vw] sm:text-[4vw] md:text-[3.5vw] font-extrabold text-yellow-400 animate-jumpscare">
          WIN
        </div>

        <div className="absolute bottom-[3%] left-[50%] text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-bold text-purple-500 animate-bounceScale">
          Achieve
        </div>
      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center space-y-6 px-4 sm:px-6 md:px-8 lg:px-12">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600">
          Welcome to C3M5
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xs sm:max-w-md md:max-w-lg">
          Track your workouts, log progress, and get stronger every day.
        </p>

        <div className="space-x-2 sm:space-x-4">
          <Link
            href="/register"
            className="bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-indigo-500 text-sm sm:text-base md:text-lg"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="bg-white text-indigo-600 px-4 sm:px-6 py-2 rounded hover:bg-indigo-100 hover:text-indigo-700 border border-indigo-200 text-sm sm:text-base md:text-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}