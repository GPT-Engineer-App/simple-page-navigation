import Link from "next/link";

export default function Demo1() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Demo Page 1</h1>
      <p className="mb-4">This is the first demo page.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go back to Home
      </Link>
    </div>
  );
}
