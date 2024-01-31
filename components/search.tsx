"use client";
import React from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder?: string;
}
const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("searchQuery", e.target.value);
      replace(`${pathname}?${params}`);
    } else {
      params.delete("searchQuery");
      replace(`${pathname}?${params}`);
    }
    // params.set("page","1");
  }, 200);
  // const set.params("page",1);

  return (
    <Input
      onChange={handleSearch}
      type="text"
      placeholder={`Filter ${placeholder}...`}
      className=" w-[150px] lg:w-[250px]"
    />
  );
};

export default Search;
