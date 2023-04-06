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
    setFilterBy(updatedFilterBy);

    if (updatedFilterBy.length > 0) {
      let tempJobs = [];
      updatedFilterBy.forEach((eachCriteria, i) => {
        if (i === 0) {
          const firstFilter = data.filter(
            (job) =>
              job.role === eachCriteria ||
              job.level === eachCriteria ||
              job.languages.includes(eachCriteria) ||
              job.tools.includes(eachCriteria)
          );
          tempJobs = firstFilter;
          setJobs(tempJobs);
        } else {
          const secondFilter = tempJobs.filter(
            (job) =>
              job.role === eachCriteria ||
              job.level === eachCriteria ||
              job.languages.includes(eachCriteria) ||
              job.tools.includes(eachCriteria)
          );
          tempJobs = secondFilter;
          setJobs(tempJobs);
        }
      });
    } else {
      setJobs(data);
    }
  };

  useEffect(() => {
    if (filterBy.length > 0) {
      filterBy.forEach((eachFilterCriteria) => {
        const filteredJobs = jobs.filter(
          (job) =>
            job.role === eachFilterCriteria ||
            job.level === eachFilterCriteria ||
            job.languages.includes(eachFilterCriteria) ||
            job.tools.includes(eachFilterCriteria)
        );
        setJobs(filteredJobs);
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
          setFilterBy={setFilterBy}
        />
      )}
      <Jobs jobs={jobs} addToFilter={addToFilter} />
    </div>
  );
};

export default Home;
