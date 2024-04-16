import React from "react";
import ResponsiveDrawer from "./Dropdown/Dropdown";

const MainCategory = ({ initialstatecategory }) => {
  return (
    <div>
      <div className="widget  ">
        <h3 className="widget-title">Categories</h3>
        <ul>
          {initialstatecategory.map((item, index) => (
            <li key={index}>
              <a className="mb-3 text-uppercase ls2 noborder">
                <ResponsiveDrawer category={item} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainCategory;
