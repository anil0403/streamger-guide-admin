import React from "react";
import { getServices } from "@/lib/action/services/action";
import ServiceCompoent from "./service-component";

const Services = async () => {
  const services = await getServices("", "1");

  return (
    <div className="py-1">
      <h2 className="px-4 py-1 text-sm font-medium tracking-tight text-muted-foreground">
       Services
      </h2>
      <ServiceCompoent services={services} />
    </div>
  );
};

export default Services;
