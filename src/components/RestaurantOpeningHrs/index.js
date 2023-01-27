import React from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const RestaurantOpeningHrs = (props) => {
  const { openingTime, closingTime } = props.fields.data.contextItem;
  return (
    <div
      className="container mt-5"
      // style={{ backgroundColor: props.fields.ComponentBackground.value }}
    >
      <div className="pt-3 pb-3">
        {/* <h4>{props.fields.ComponentTitle.value}</h4> */}
        <h4>Opening hours</h4>
        <p>
          <strong>Opens at :-</strong> {openingTime.value}
          <br />
          <strong>Closes at :-</strong> {closingTime.value}
        </p>
      </div>
    </div>
  );
};

export default withSitecoreContext()(RestaurantOpeningHrs);
