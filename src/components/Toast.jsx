export default function Toast({ message }) {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md">
      {message}
    </div>
  );
}
