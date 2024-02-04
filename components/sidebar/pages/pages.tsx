"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Pages = () => {
  const pathname = usePathname();
  const pages = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Movies",
      path: "/movies",
    },
    {
      title: "Tv Shows",
      path: "/tv",
    },
  ];
  return (
    <div className="py-1">
      <h2 className="px-4 py-1 text-sm font-medium tracking-tight text-muted-foreground">
        Pages
      </h2>
      {pages.map((item: any) => (
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

export default Pages;
