import React from "react";
import Search from "@/components/search";
import ManageComponent from "@/components/page/page";
import CategoryComponent from "@/components/category/category";

const ManagePage = () => {
  return (
    <div className="hidden h-full flex-1 flex-col px-4 md:flex border-2 rounded-lg min-h-screen">
      <ManageComponent />
      <CategoryComponent />
    </div>
  );
};

export default ManagePage;
