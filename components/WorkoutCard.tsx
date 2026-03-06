interface WorkoutCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export default function WorkoutCard({ id, title, description, image }: WorkoutCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}