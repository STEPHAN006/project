
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Welcome to Next.js</h1>
      <Link href="/sign-in">sign in</Link>
      <Link href="/sign-up">sign up</Link>
    </div>
  );
}
