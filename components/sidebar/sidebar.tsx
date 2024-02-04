import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import { Logout } from "../dialog/logout/logout";
import Services from "./service/services";
import MenuItems from "./menuItems/menuItems";
import Pages from "./pages/pages";
import Categories from "./categories/categories";
import Archived from "./archived/archived";
import Resources from "./resources/resources";

const Sidebar = () => {
  // const menuItems = [
  //   {
  //     // title: "Pages",
  //     list: [
  //       {
  //         title: "Dashboard",
  //         path: "/",
  //         icon: <MdDashboard />,
  //       },
  //       {
  //         title: "Users",
  //         path: "/users",
  //         icon: <MdSupervisedUserCircle />,
  //       },
  //       {
  //         title: "Movies",
  //         path: "/movies",
  //         icon: <MdOutlineLocalMovies />,
  //       },
  //       {
  //         title: "Tv Shows",
  //         path: "/tv-shows",
  //         icon: <IoTvSharp />,
  //       },
  //       {
  //         title: "Manage",
  //         path: "/manage",
  //         icon: <MdSettings />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Pages",
  //   },
  //   {
  //     title: "Category",
  //   },
  //   {
  //     title: "Archived",
  //     list: [
  //       {
  //         title: "Movies",
  //         path: "/archived/movies",
  //         icon: <MdOutlineLocalMovies />,
  //       },
  //       {
  //         title: "Tv Shows",
  //         path: "/archived/tv-shows",
  //         icon: <IoTvSharp />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Services",
  //     list: [
  //       {
  //         title: "Movies",
  //         path: "/archived/movies",
  //         icon: <MdOutlineLocalMovies />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Resources",
  //     list: [
  //       {
  //         title: "Languages",
  //         path: "/languages",
  //         icon: <FaLanguage />,
  //       },
  //       {
  //         title: "Services",
  //         path: "/services",
  //         icon: <FaPlay />,
  //       },
  //       {
  //         title: "Genre",
  //         path: "/genre",
  //         icon: <FaBookOpen />,
  //       },
  //       {
  //         title: "Locations",
  //         path: "/locations",
  //         icon: <FaLocationDot />,
  //       },
  //       {
  //         title: "Cast",
  //         path: "/cast",
  //         icon: <FaUserFriends />,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className="flex flex-col justify-between py-5 px-3 border-r max-h-screen">
      <Image
        className="pl-4"
        src="/assets/logo.svg"
        alt="logo"
        height={20}
        width={150}
      />
      <ScrollArea className="py-4">
        {/* {menuItems.map((item: any) => (
          <div key={item?.title} className="py-1">
            <h2 className="px-4 py-1 text-sm font-medium tracking-tight text-muted-foreground">
              {item.title || null}
            </h2>
            <div className="space-y-1">
              {item.list?.map((element: any, index: number) => (
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
        ))} */}

        {/* menu items */}
        <MenuItems />

        {/* pages */}

        <Pages />

        {/* Categories */}

        <Categories />

        <Services />

        {/* archhived */}
        <Archived />

        <Resources />
      </ScrollArea>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
