import Search from "@/components/search";
import TablePagination from "@/components/table-pagination";
import React from "react";

import { getLanguages } from "@/lib/action/language/action";
import { AddLanguageDiaglog } from "@/components/dialog/language/add-language";
import LanguageComponent from "@/components/resources/languages";

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
      <h2 className="text-lg font-semibold py-2 border-b-2">All Languages</h2>

      <div className="space-y-4 py-4">
        <div className="flex justify-between items-center">
          <Search placeholder="languages" />
          <TablePagination />

          <AddLanguageDiaglog />
        </div>
        <LanguageComponent languages={languages} />
      </div>
    </div>
  );
};

export default LanguagesPage;
