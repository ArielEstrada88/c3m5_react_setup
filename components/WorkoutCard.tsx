interface WorkoutCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export default function WorkoutCard({ id, title, description, image }: WorkoutCardProps) {
  return (
    <div className="
      group bg-white rounded-xl overflow-hidden
      shadow-md transition-all duration-300 ease-out
      hover:-translate-y-2
      scale-100 sm:hover:scale-[1.02] md:hover:scale-[1.05]
      hover:shadow-2xl
      border border-transparent hover:border-indigo-300
      relative w-full max-w-full
    ">

      {/* Glow on hover */}
      <div className="
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
        transition duration-300 pointer-events-none
        bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20
        blur-xl
      "></div>

      {/* Subtle glimmer always */}
      <div className="
        absolute inset-0 rounded-xl opacity-20 pointer-events-none
        bg-gradient-to-tr from-white/40 via-transparent to-indigo-100/30
      "></div>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4 relative z-10">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}