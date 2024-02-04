import React from "react";

interface CategoryIdProps {
  params: { categoryId: string };
}

const CategoryId = ({ params: { categoryId } }: CategoryIdProps) => {
  return <div>CategoryId = {categoryId}</div>;
};

export default CategoryId;
