import React from "react";
import Sidebar from "@/components/sidebar";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-6">
      <Sidebar />
      <ScrollArea className=" md:col-span-3 lg:col-span-5 px-5  py-2 max-h-screen">
        {children}
      </ScrollArea>
      {/* <div className=""></div> */}
    </div>
  );
};

export default Layout;
