import React from "react";
import { Input } from "./ui/input";

interface SearchProps {
  placeholder?: string;
}
const Search = ({ placeholder }: SearchProps) => {
  return (
    <Input
      placeholder={`Filter ${placeholder}...`}
      className=" w-[150px] lg:w-[250px]"
    />
  );
};

export default Search;
