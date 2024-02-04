"use client";
import React from "react";
import {
  MdDashboard,
  MdOutlineLocalMovies,
  MdSettings,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdDashboard />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <MdSupervisedUserCircle />,
    },
    {
      title: "Movies",
      path: "/movies",
      icon: <MdOutlineLocalMovies />,
    },
    {
      title: "Tv Shows",
      path: "/tv-shows",
      icon: <IoTvSharp />,
    },
    {
      title: "Manage",
      path: "/manage",
      icon: <MdSettings />,
    },
  ];
  return (
    <>
      {menuItems.map((item: any) => (
        <div key={item?.title} className="py-1">
          <div className="space-y-1">
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
        </div>
      ))}
    </>
  );
};

export default MenuItems;
