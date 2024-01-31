"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { BiLeftArrow } from "react-icons/bi";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const TablePagination = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";
  const params = new URLSearchParams(searchParams);

  const hasPrev = parseInt(page) - 1 > 0;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", String(parseInt(page) - 1))
      : params.set("page", String(parseInt(page) + 1));
    replace(`${pathname}?${params}`);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => handleChangePage("prev")}
            variant="ghost"
            disabled={!hasPrev}
            className="gap-2"
          >
            <FaAngleDoubleLeft />
            Previous
          </Button>
          {/* <PaginationPrevious
          className="cursor-notallowed"
            isActive={false}
            
            onClick={() => handleChangePage("prev")}
          /> */}
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem> */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button
            onClick={() => handleChangePage("next")}
            variant="ghost"
            className="gap-2"
          >
            Next
            <FaAngleDoubleRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
