"use client"
import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { FaLanguage, FaPlay, FaBookOpen, FaUserFriends } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Resources = () => {
  const pathname = usePathname();
  const resources = [
    {
      title: "Languages",
      path: "/languages",
      icon: <FaLanguage />,
    },
    {
      title: "Services",
      path: "/services",
      icon: <FaPlay />,
    },
    {
      title: "Genre",
      path: "/genre",
      icon: <FaBookOpen />,
    },
    {
      title: "Locations",
      path: "/locations",
      icon: <FaLocationArrow />,
    },
    {
      title: "Cast",
      path: "/cast",
      icon: <FaUserFriends />,
    },
  ];
  return (
    <div className="py-1">
      <h2 className="px-4 py-1 text-sm font-medium tracking-tight text-muted-foreground">
        Resources
      </h2>
      {resources.map((item: any) => (
        <div key={item?.title} className=" my-1">
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

export default Resources;
