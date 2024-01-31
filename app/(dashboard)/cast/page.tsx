import Search from "@/components/search";
import TableData from "@/components/table-data";
import TablePagination from "@/components/table-pagination";
import { Button } from "@/components/ui/button";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import { IP } from "@/lib/interceptor/admin_content/axios";
import Image from "next/image";
import { getCasts } from "@/lib/action/cast/action";
interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const CastPage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";
  const casts = await getCasts(searchQuery, page);
  // console.log("services = ", services);
  const paginationPage = parseInt(page) === 1 ? 0 : parseInt(page) - 1;

  return (
    <div className="hidden h-full flex-1 flex-col px-4 md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">
        Current Services
      </h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="services" />
          <TablePagination />

          <Button asChild size="sm">
            <Link href="#">Add New Service</Link>
          </Button>
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
              {casts?.map((cast: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{10 * paginationPage + (index + 1)}</TableCell>
                  <TableCell>{cast?.name}</TableCell>

                  <TableCell className="space-x-4">
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

export default CastPage;