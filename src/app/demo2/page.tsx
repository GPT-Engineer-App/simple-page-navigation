import Link from "next/link";

export default function Demo2() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Demo Page 2</h1>
      <p className="mb-4">This is the second demo page.</p>
      <Link href="/" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Go back to Home
      </Link>
    </div>
  );
}
