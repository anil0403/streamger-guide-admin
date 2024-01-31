"use client";
import { IoTvSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import {
  MdDashboard,
  MdOutlineLocalMovies,
  MdSettings,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { FaLanguage, FaPlay, FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  // console.log("pathanme = ", pathname);
  const menuItems = [
    {
      title: "Pages",
      list: [
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
      ],
    },
    {
      title: "Archived",
      list: [
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
      ],
    },
    {
      title: "Resources",
      list: [
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
          title: "Locations",
          path: "/locations",
          icon: <FaLocationDot />,
        },
        {
          title: "Cast",
          path: "/cast",
          icon: <FaUserFriends />,
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col justify-between py-5 px-3  border-r min-h-screen ">
      <Image
        className="pl-4"
        src="/assets/logo.svg"
        alt="logo"
        height={20}
        width={150}
      />
      <div className="py-2">
        {menuItems.map((item: any) => (
          <div key={item.title}>
            <h2 className="mb-2 px-4 text-sm font-medium tracking-tight text-muted-foreground">
              {item.title}
            </h2>
            <div className="space-y-1">
              {item.list.map((element: any, index: number) => (
                <Button
                  key={index}
                  asChild
                  variant={pathname === element.path ? "secondary" : "ghost"}
                  size="default"
                  className="w-full justify-start gap-3 text-md"
                >
                  <Link href={element.path}>
                    {element.icon}
                    {element.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button
          variant="outline"
          className="w-full justify-between gap-3 text-md"
        >
          Anil Shrestha
          <MdSettings size={25} />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
