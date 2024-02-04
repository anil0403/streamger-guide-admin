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
import { DeleteLocationDialog } from "../dialog/location/delete-location";
import toast from "react-hot-toast";
interface LocationProps {
  locations: any;
  paginationPage: any;
}

const LocationComponent = ({ locations, paginationPage }: LocationProps) => {
  if (locations?.error) {
    toast.error(locations.error);
    locations = [];
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
          {locations?.map((location: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{10 * paginationPage + (index + 1)}</TableCell>
              <TableCell>{location?.name}</TableCell>

              <TableCell className="space-x-4">
                <DeleteLocationDialog id={location?.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LocationComponent;
