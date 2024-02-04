import React from "react";
import Search from "@/components/search";
import TablePagination from "@/components/table-pagination";
import { getLocations } from "@/lib/action/location/action";
import { AddLocationDialog } from "@/components/dialog/location/add-location";
import LocationComponent from "@/components/resources/location";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
}

const LocationsPage = async ({ searchParams }: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";
  const locations = await getLocations(searchQuery, page);
  // console.log("services = ", services);
  const paginationPage = parseInt(page) === 1 ? 0 : parseInt(page) - 1;

  return (
    <div className="hidden h-full flex-1 flex-col px-4 md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">All Locations</h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="locations.." />
          <TablePagination />

          <AddLocationDialog />
        </div>
        <LocationComponent
          locations={locations}
          paginationPage={paginationPage}
        />
      </div>
    </div>
  );
};

export default LocationsPage;
