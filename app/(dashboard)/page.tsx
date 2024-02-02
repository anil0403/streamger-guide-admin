"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/theme-toggle";

import { count } from "@/lib/action/count/action";
import { redirect, useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  const counts = await count();
  console.log("counts = ", counts);
  return (
    <div className="min-h-[95dvh] p-4 space-y-4 rounded-md border-2">
      <div className="border-b-2 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold ">Dashboard</h1>
        <ModeToggle />
      </div>
      <div className="flex items-center flex-wrap gap-10">
        {/* movies */}
        <Card
          onClick={() => router.push("/movies")}
          className="w-48 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="text-center">Movies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg font-semibold">
              {counts?.count?.movies}
            </p>
          </CardContent>
        </Card>

        {/* Tv Shows */}
        <Card className="w-48 hover:scale-110 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center">Tv Shows</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg font-semibold">coming</p>
          </CardContent>
        </Card>

        {/* services */}
        <Card className="w-48 hover:scale-110 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center">Servicves</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg font-semibold">
              {counts?.count?.ott}
            </p>
          </CardContent>
        </Card>

        {/* genre */}
        <Card className="w-48 hover:scale-110 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center">Genre</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg font-semibold">
              {counts?.count?.genre}
            </p>
          </CardContent>
        </Card>

        {/* location */}
        <Card className="w-48 hover:scale-110 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center">Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg font-semibold">
              {counts?.count?.locations}
            </p>
          </CardContent>
        </Card>

        {/* location */}
        <Card className="w-48 hover:scale-110 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center">Directors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg font-semibold">
              {counts?.count?.director}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
