import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="398" rx="15" ry="15" width="86" height="50" />
    <rect x="10" y="268" rx="0" ry="0" width="254" height="39" />
    <circle cx="135" cy="143" r="110" />
    <rect x="150" y="402" rx="10" ry="10" width="110" height="40" />
    <rect x="12" y="318" rx="10" ry="10" width="253" height="72" />
  </ContentLoader>
);

export default PizzaSceleton;
