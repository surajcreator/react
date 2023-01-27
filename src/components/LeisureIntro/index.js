import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';

const LeisureIntro = (props) => (
  <div>
    <p>LeisureIntro Component</p>
    Name: <Text field={props.fields.PageTitle} />
    <br />
    Type: <Text field={props.fields.LeisureType} />
    <br />
    Opening hrs: <Text field={props.fields.OpeningHrs} />
    <br />
    {props.t('DressCode')}: <Text field={props.fields.DressCode} />
    <br />
    Baggage limit: <Text field={props.fields.BaggageLimits} />
    <br />
    Parking: <Text field={props.fields.ParkingAvailability} />
    <br />
    Title: <Text field={props.fields.Title} />
    <br />
    Description: <RichText field={props.fields.Description} />
  </div>
);

export default withTranslation()(LeisureIntro);
