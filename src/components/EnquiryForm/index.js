import React from 'react';
import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import { withRouter } from 'react-router-dom';
import { sitecoreApiHost, sitecoreApiKey } from '../../temp/config';

const EnquiryForm = (props) => {
  return (
    <div className="container">
      <Form
        form={props.fields}
        sitecoreApiHost={sitecoreApiHost}
        sitecoreApiKey={sitecoreApiKey}
        onRedirect={(url) => props.history.push(url)}
      />
    </div>
  );
};

export default withRouter(EnquiryForm);
