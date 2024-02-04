import React from "react";

interface PageIdProps {
  params: { pageId: string };
}

const PageId = ({ params: { pageId } }: PageIdProps) => {
  console.log("pageId =", pageId);
  return <div>PageId = {pageId}</div>;
};

export default PageId;
