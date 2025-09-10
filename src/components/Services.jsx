import { services } from "../data";
import { useState } from "react";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  const [servicesData, setServicesData] = useState(services);
  const removeService = (id) => {
    console.log("removeService called with id:", id);
    setServicesData((prev) => prev.filter((s) => s.id !== id));
  };
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <Service
              {...service}
              key={service.id}
              removeService={removeService}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
