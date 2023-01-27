import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Author = (props) => (
  <div>
    <Text field={props.fields.authorName} />
    <br />
    <Text className="contentDescription" field={props.fields.authorDesignation} />
  </div>
);

export default Author;
