import { getUser } from "@/lib/auth-session";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function ProfilePage() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            {user.image && (
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="text-center">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">Email vérifié</span>
                <span>{user.emailVerified ? "Oui" : "Non"}</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">Membre depuis</span>
                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}