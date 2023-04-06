/** @format */

import React from "react";

const FilterCriteria = ({ filterBy, removeFilterItem, setFilterBy }) => {
  return (
    <div className="bg-white px-3 py-3 mx-auto rounded-1 filter-criteria d-flex gap-4 align-items-center justify-content-between">
      <div className="d-flex flex-wrap gap-3 align-items-center">
        {filterBy.map((eachCriteria) => {
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
                className="remove-x px-2 py-1 pt-2 bg-dark-cyan text-white"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
      <p
        onClick={() => {
          setFilterBy([]);
        }}
        className="clear text-dark-grayish-cyan bg-white fw-bolder cursor-pointer"
      >
        Clear
      </p>
    </div>
  );
};

export default FilterCriteria;
