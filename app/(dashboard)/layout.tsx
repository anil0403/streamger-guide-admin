import React from "react";
import Sidebar from "@/components/sidebar";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <ScrollArea className="col-span-5 px-5  py-2 max-h-screen">
        {children}
      </ScrollArea>
      {/* <div className=""></div> */}
    </div>
  );
};

export default Layout;
