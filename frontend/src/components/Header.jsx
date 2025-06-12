export default function Header({ title }) {
  return (
    <header className="bg-gray-800 rounded-2xl p-4 mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
    </header>
  );
}
