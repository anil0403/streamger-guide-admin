import React from "react";
import Search from "@/components/search";
import TablePagination from "@/components/table-pagination";
import GenreCompoent from "@/components/resources/genre";
import { AddGenreDialog } from "@/components/dialog/genre/add-genre";
import { getGenres } from "@/lib/action/genre/action";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const GenrePage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";
  const genres = await getGenres(searchQuery, page);
  console.log("genres  = ", genres);
  return (
    <div className="hidden h-full flex-1 flex-col px-4 md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">All Genres</h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="languages" />
          <TablePagination />

          <AddGenreDialog />
        </div>
        <GenreCompoent genres={genres} />
      </div>
    </div>
  );
};

export default GenrePage;
