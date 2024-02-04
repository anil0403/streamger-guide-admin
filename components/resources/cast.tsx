"use client";
import React from "react";
import { IP } from "@/lib/interceptor/admin_content/axios";
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
import { DeleteCastDialog } from "../dialog/cast/delete-cast";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
interface CastProps {
  casts: any;
  paginationPage: any;
}
const CastComponent = ({ casts, paginationPage }: CastProps) => {
  if (casts?.error) {
    toast.error(casts.error);
    casts = [];
  }
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.N</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {casts?.map((cast: any, index: any) => {
            console.log(`${IP}/${cast?.picture}`);
            return (
              <TableRow key={index}>
                <TableCell>{10 * paginationPage + (index + 1)}</TableCell>
                <TableCell>{cast?.name}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={`${IP}${cast?.picture}`} />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="space-x-4">
                  <DeleteCastDialog id={cast?.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CastComponent;
