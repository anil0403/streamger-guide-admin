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

import { Button } from "./ui/button";

const TableData = () => {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Icon</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>{" "}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Netflix</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell className="space-x-4">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableData;
