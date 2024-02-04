"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteGenreDialog } from "../dialog/genre/delete-genre";
import toast from "react-hot-toast";

interface GenreProps {
  genres: any;
}

const GenreCompoent = ({ genres }: GenreProps) => {
  if (genres?.error) {
    toast.error(genres.error);
    genres = [];
  }
  return (
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
  );
};

export default GenreCompoent;
