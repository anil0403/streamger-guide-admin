import Search from "@/components/search";
import TablePagination from "@/components/table-pagination";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGenres } from "@/lib/action/genre/action";
import { AddGenreDialog } from "@/components/dialog/genre/add-genre";
import { DeleteGenreDialog } from "@/components/dialog/genre/delete-genre";

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
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.N</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {genres?.map((genre: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{genre?.name}</TableCell>
                  <TableCell className="space-x-4">
                    <DeleteGenreDialog id={genre.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
