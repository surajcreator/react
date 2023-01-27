import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const RestaurantListing = (props) => (
  <div>
    <p>RestaurantListing Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default RestaurantListing;
