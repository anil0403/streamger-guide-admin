import Search from "@/components/search";
import TableData from "@/components/table-data";
import TablePagination from "@/components/table-pagination";
import { Button } from "@/components/ui/button";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y- px-4 py-2 md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">
        Current Services
      </h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="services" />
          <TablePagination />

          <Button size="sm">Add New Service</Button>
        </div>
        <TableData />
      </div>
    </div>
  );
};

export default ServicesPage;
