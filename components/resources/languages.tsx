"use client";
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
import { DeleteLanguageDialog } from "@/components/dialog/language/delete-language";
import toast from "react-hot-toast";

interface LanguagesProps {
  languages: any;
}

const LanguageComponent = ({ languages }: LanguagesProps) => {
  if (languages?.error) {
    toast.error(languages.error);
    languages = [];
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
  );
};

export default LanguageComponent;
