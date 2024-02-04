import React from "react";
interface ServiceIdProps {
  params: { serviceId: string };
}
const ServiceId = ({ params: { serviceId } }: ServiceIdProps) => {
  return <div>ServiceId = {serviceId}</div>;
};

export default ServiceId;
