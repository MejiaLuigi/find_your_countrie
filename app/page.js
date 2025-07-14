'use client';
import { useRouter } from 'next/navigation';
import Button from "./ui/home/Button";


export default function Home() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-#fafafaff dark:bg-gray-900 text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Find Your Countrie</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
        This project helps you learn about your favorite country by showing population, region, and capital.
      </p>
      <Button
        label="Find Your Countrie"
        onClick={() => router.push("/dashboard")}
        className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 h-20 w-100 rounded-full"
      />
    </main>
  );
}
