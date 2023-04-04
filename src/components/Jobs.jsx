/** @format */

import React from "react";

const Jobs = ({ jobs }) => {
  return (
    <div className="d-flex flex-column gap-5 mt-5 text-start">
      {jobs.map((job) => {
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
        console.log(job);
        return (
          <div className="job p-3 mx-auto bg-white rounded-2 py-5" key={id}>
            <img className="logo" src={logo} alt="" />
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
            <p className="fw-bold text-very-dark-cyan">{position}</p>
            <div className="d-flex gap-2 border-bottom pb-1">
              <p className=" fw-semibold text-dark-grayish-cyan">{postedAt}</p>
              <p className=" fw-semibold text-dark-grayish-cyan">{contract}</p>
              <p className=" fw-semibold text-dark-grayish-cyan">{location}</p>
            </div>
            <div className="job-bottom d-flex align-items-center gap-2 flex-wrap pt-3  ">
              <p className="text-dark-cyan fw-semibold px-2 py-1 pt-2 rounded-1">
                {role}
              </p>
              <p className="text-dark-cyan fw-semibold px-2 py-1 pt-2 rounded-1">
                {level}
              </p>
              {languages.map((language) => {
                return (
                  <p
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
