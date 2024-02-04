"use client";
import React from "react";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { Button } from "../../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Archived = () => {
  const pathname = usePathname();
  const archived = [
    {
      title: "Movies",
      path: "/archived/movies",
      icon: <MdOutlineLocalMovies />,
    },
    {
      title: "Tv Shows",
      path: "/archived/tv-shows",
      icon: <IoTvSharp />,
    },
  ];
  return (
    <div className="py-1">
      <h2 className="px-4 py-1 text-sm font-medium tracking-tight text-muted-foreground">
        Archived
      </h2>
      {archived.map((item: any) => (
        <div key={item?.title} className="my-1">
          <Button
            asChild
            variant={pathname === item.path ? "secondary" : "ghost"}
            size="default"
            className="w-full justify-start gap-3 text-md"
          >
            <Link href={item.path}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Archived;
