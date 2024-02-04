import React from "react";
import Search from "@/components/search";
import TablePagination from "@/components/table-pagination";
import { getServices } from "@/lib/action/services/action";
import { AddServiceDialog } from "@/components/dialog/service/add-service";
import ServicesComponent from "@/components/resources/services";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const ServicesPage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";
  const services = await getServices(searchQuery, page);

  return (
    <div className="hidden h-full flex-1 flex-col px-4 md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">
        Current Services
      </h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="services" />
          <TablePagination />

          <AddServiceDialog />
        </div>
        <ServicesComponent services={services} />
      </div>
    </div>
  );
};

export default ServicesPage;
