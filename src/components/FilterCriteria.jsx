/** @format */

import React from "react";

const FilterCriteria = ({ filterBy, removeFilterItem }) => {
  return (
    <div className="bg-white px-3 py-3 mx-auto rounded-1 filter-criteria d-flex flex-wrap gap-3 align-items-center">
      {filterBy.map((eachCriteria) => {
        console.log(eachCriteria);
        return (
          <div
            key={eachCriteria}
            className="d-flex align-items-center fw-bolder"
          >
            <p className="text-dark-cyan fw-semibold px-2 py-1 pt-2 ">
              {eachCriteria}
            </p>
            <p
              onClick={() => {
                removeFilterItem(eachCriteria);
              }}
              className="px-2 py-1 pt-2 bg-dark-cyan text-white"
            >
              X
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterCriteria;
