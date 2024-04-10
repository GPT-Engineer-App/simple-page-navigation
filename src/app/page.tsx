import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="mb-4">This is a simple demo of linking between pages in Next.js.</p>
      <div className="flex space-x-4">
        <Link href="/demo1" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go to Demo Page 1
        </Link>
        <Link href="/demo2" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Go to Demo Page 2
        </Link>
      </div>
    </div>
  );
}
