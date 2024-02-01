import AddMovieForm from "@/components/movie/add-movie-form";
import React from "react";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const ServicesPage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";

  return (
    <div className="hidden h-full flex-1 flex-col  px-4  md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">Add New Movie</h2>
      <div>
        <AddMovieForm />
      </div>
    </div>
  );
};

export default ServicesPage;
