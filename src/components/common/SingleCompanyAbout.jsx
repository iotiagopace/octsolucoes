import React from "react";

const SingleCompanyAbout = ({icon,title}) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="sdf__item mb-30">
          <div className="sdf__icon">
            <i className={icon}></i>
          </div>
          <div className="sdf__text">
            <h6>{title}</h6>
            <p>
              In macroeconomics, an industry is a branch of an economy that
              produces a closely-related.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCompanyAbout;
