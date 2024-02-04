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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CategoryComponent = () => {
  const languages: any = [];
  return (
    <div>
      <h2 className="text-lg font-semibold py-2 border-b-2">All Categories</h2>
      <div className="space-y-4 py-4">
        <form
          action=""
          className="flex justify-between items-center max-w-fit gap-10"
        >
          <Input placeholder="Enter name of category" type="text" name="page" />
          <Button>Add Category</Button>
        </form>
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
                    {/* <DeleteLanguageDialog id={language.id} /> */}
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

export default CategoryComponent;
