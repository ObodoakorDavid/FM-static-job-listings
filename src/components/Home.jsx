/** @format */

import React, { useEffect, useState } from "react";
import FilterCriteria from "./FilterCriteria";
import Jobs from "./Jobs";
import data from "../data/data";

const Home = () => {
  const [filterBy, setFilterBy] = useState([]);
  const [jobs, setJobs] = useState(data);

  const removeFilterItem = (item) => {
    const updatedFilterBy = filterBy.filter((eachItem) => eachItem !== item);
    console.log(updatedFilterBy);
    setFilterBy(updatedFilterBy);

    if (updatedFilterBy.length > 0) {
      console.log("gg");
    }
  };

  useEffect(() => {
    if (filterBy.length > 0) {
      filterBy.forEach((c) => {
        const zz = data.filter((job) => {
          console.log(c);
          return (
            job.role === c ||
            job.level === c ||
            job.languages.includes(c) ||
            job.tools.includes(c)
          );
        });
        console.log(zz);
        setJobs(zz);
      });
    } else {
      setJobs(data);
    }
  }, [filterBy]);

  const addToFilter = (item) => {
    const existingItem = filterBy.find((each) => each === item);
    if (!existingItem) {
      setFilterBy([...filterBy, item]);
    }
  };

  return (
    <div className="position-relative">
      {filterBy.length > 0 && (
        <FilterCriteria
          filterBy={filterBy}
          removeFilterItem={removeFilterItem}
        />
      )}
      <Jobs jobs={jobs} addToFilter={addToFilter} />
    </div>
  );
};

export default Home;
