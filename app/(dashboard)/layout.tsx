import React from "react";
import Sidebar from "@/components/sidebar";
import { ModeToggle } from "@/components/ui/theme-toggle";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <div className="col-span-5 p-5">{children}</div>
    </div>
  );
};

export default Layout;
