/** @format */

import React from "react";

const Jobs = ({ jobs, addToFilter }) => {
  return (
    <div className="jobs d-flex flex-column gap-5 text-start">
      {jobs.map((job, i) => {
        const {
          id,
          company,
          logo,
          position,
          postedAt,
          contract,
          location,
          languages,
          role,
          level,
          tools,
          featured,
        } = job;

        const borderActive = job.new && job.featured ? "border-active" : "";
        return (
          <div
            className={`job p-3 mx-auto bg-white rounded-2 py-5 d-lg-flex justify-content-md-between ${borderActive}`}
            key={i}
          >
            <div className="left-side d-lg-flex gap-lg-4 ps-lg-5 align-items-lg-center py-3 py-lg-0">
              <img className="logo" src={logo} alt="" />
              <div>
                <div className="d-flex align-items-center gap-4">
                  <p className=" fw-bold text-dark-cyan">{company}</p>
                  <div className="d-flex align-items-center gap-2">
                    {job.new && (
                      <p className="bg-dark-cyan text-white px-2 pt-1 rounded-5">
                        NEW!
                      </p>
                    )}
                    {featured && (
                      <p className="bg-grayish-cyan text-white px-2 pt-1 rounded-5">
                        FEATURED
                      </p>
                    )}
                  </div>
                </div>
                <p className="position-p fw-bolder text-very-dark-cyan">
                  {position}
                </p>
                <div className="three d-flex gap-2 pb-1">
                  <p className=" fw-semibold text-dark-grayish-cyan">
                    {postedAt}
                  </p>
                  <p className=" fw-semibold text-dark-grayish-cyan">
                    {contract}
                  </p>
                  <p className=" fw-semibold text-dark-grayish-cyan">
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/* ===================== */}
            <div className="job-bottom d-flex align-items-center justify-content-lg-end pe-lg-5 gap-2 flex-wrap pt-3  ">
              <p
                onClick={() => {
                  addToFilter(role);
                }}
                className="text-dark-cyan fw-semibold px-2 py-1 pt-2 rounded-1"
              >
                {role}
              </p>
              <p
                onClick={() => {
                  addToFilter(level);
                }}
                className="text-dark-cyan fw-semibold px-2 py-1 pt-2 rounded-1"
              >
                {level}
              </p>
              {languages.map((language) => {
                return (
                  <p
                    onClick={() => {
                      addToFilter(language);
                    }}
                    className="text-dark-cyan fw-semibold px-2 py-1 pt-2 rounded-1"
                    key={language}
                  >
                    {language}
                  </p>
                );
              })}
              {tools.map((tool) => {
                return (
                  <p
                    onClick={() => {
                      addToFilter(tool);
                    }}
                    className="text-dark-cyan fw-semibold px-2 py-1 pt-2 rounded-1"
                    key={tool}
                  >
                    {tool}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
