"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";

interface DashboardProps {
  counts: any;
}

const Dashboard = ({ counts }: DashboardProps) => {
  console.log("count data", counts);
  if (counts?.error) toast.error(counts?.error);

  return (
    <div className="flex items-center flex-wrap gap-10">
      {/* movies */}
      <Card className="w-48 hover:scale-110 transition-all duration-300 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-center">Movies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg font-semibold">
            {counts?.count?.movies || "..."}
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
            {counts?.count?.ott || "..."}
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
            {counts?.count?.genre || "..."}
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
            {counts?.count?.locations || "..."}
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
            {counts?.count?.director || "..."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
