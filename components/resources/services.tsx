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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IP } from "@/lib/interceptor/admin_content/axios";
import { DeleteServiceDialog } from "../dialog/service/delete-service";
import toast from "react-hot-toast";

interface ServicesProps {
  services: any;
}
const ServicesComponent = ({ services }: ServicesProps) => {
  if (services?.error) {
    toast.error(services.error);
    services = [];
  }
  return (
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
          {services?.map((service: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{service?.name}</TableCell>
              <TableCell>
                <Avatar>
                  <AvatarImage src={`${IP}${service?.picture}`} alt="@shadcn" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="space-x-4">
                <DeleteServiceDialog id={service?.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServicesComponent;
