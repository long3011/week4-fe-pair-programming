import { tours } from "../data";
import {useState} from "react";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const removeTours = (id) => {
    console.log("removeService called with id:", id);
    setToursData((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours}/>;
        })}
      </div>
    </section>
  );
};
export default Tours;
