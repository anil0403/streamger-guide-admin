import Search from "@/components/search";
import TableData from "@/components/table-data";
import TablePagination from "@/components/table-pagination";
import { Button } from "@/components/ui/button";
import React from "react";
import { getServices } from "@/lib/action/services/action";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import { IP } from "@/lib/interceptor/admin_content/axios";
import Image from "next/image";
import { getArchivedMovies } from "@/lib/action/archived/movies/action";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const ArchivedMoviesPage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";
  // const services = await getServices(searchQuery, page);
  const archivedMovies = await getArchivedMovies(searchQuery, page);
  console.log("archived movies  = ", archivedMovies);
  return (
    <div className="hidden h-full flex-1 flex-col  px-4  md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">Archived Movies</h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="services" />
          <TablePagination />

          <Button asChild size="sm">
            <Link href="/archived/movies/add-movie/">Add New Movie</Link>
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.N</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Genre</TableHead>

                <TableHead>Rating</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {archivedMovies?.map((movie: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{movie?.title}</TableCell>
                  <TableCell>{(movie?.genre).join(", ")}</TableCell>
                  <TableCell>{movie?.rating}</TableCell>
                  <TableCell className="space-x-4 min-w-fit">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={`/archived/movies/${movie?.id}`}>View</Link>
                    </Button>
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
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

export default ArchivedMoviesPage;
