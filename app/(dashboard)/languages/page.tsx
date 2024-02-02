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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { getLanguages } from "@/lib/action/language/action";
import { AddLanguageDiaglog } from "@/components/dialog/language/add-language";
import { DeleteLanguageDialog } from "@/components/dialog/language/delete-language";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const LanguagesPage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";
  const languages = await getLanguages(searchQuery, page);
  console.log("lang  = ", languages);
  return (
    <div className="hidden h-full flex-1 flex-col px-4 md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">
        Current Services
      </h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="languages" />
          <TablePagination />

          <AddLanguageDiaglog />
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
              {languages?.map((language: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{language?.name}</TableCell>
                  <TableCell className="space-x-4">
                    <DeleteLanguageDialog id={language.id} />
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

export default LanguagesPage;
