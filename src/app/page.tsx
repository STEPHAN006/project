import { getUser } from "@/lib/auth-session";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
      <h1 className="text-2xl font-bold">Bienvenue {user.name}</h1>
      <Link href="/profile" className="text-blue-500 hover:underline">
        Voir mon profil
      </Link>
      <form action={async () => {
        'use server'
        await auth.api.signOut({
          headers: await headers(),
        });
        redirect("/sign-in");
      }}>
        <Button type="submit">
          Se déconnecter
        </Button>
      </form>
    </div>
  );
}
