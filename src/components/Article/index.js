import React from 'react';
import { DateField, RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const Article = (props) => (
  <div>
    <p>Article Component</p>
    <Text field={props.fields.articleTitle} />
    <RichText field={props.fields.articleDescription} />
    <Text field={props.fields.articleAuthor} />
    {props.fields.articleAuthor && (
      <div>
        <Text field={props.fields.articleAuthor.authorName} />
      </div>
    )}
    <DateField field={props.fields.articlePublishedDate} />
  </div>
);

export default Article;
