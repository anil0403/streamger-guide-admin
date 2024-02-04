"use client";
import React from "react";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface ServiceCompoentProps {
  services: any;
}

const ServiceCompoent = ({ services }: ServiceCompoentProps) => {
  const pathname = usePathname();
  return (
    <>
      {services?.map((service: any) => (
        <div key={service?.title} className="my-1">
          <Button
            asChild
            variant={pathname === service.path ? "secondary" : "ghost"}
            size="default"
            className="w-full justify-start gap-3 text-md"
          >
            <Link href={`/service/${service?.id}`}>
              {service.icon}
              {service.name}
            </Link>
          </Button>
        </div>
      ))}
    </>
  );
};

export default ServiceCompoent;
