/** @format */

import React from "react";
import FilterCriteria from "./FilterCriteria";
import Jobs from "./Jobs";
import data from "../data/data";

const Home = () => {
  return (
    <div>
      <FilterCriteria />
      <Jobs jobs={data} />
    </div>
  );
};

export default Home;
