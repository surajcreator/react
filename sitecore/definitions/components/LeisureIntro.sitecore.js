// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the LeisureIntro component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'LeisureIntro',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'PageTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'LeisureType', type: CommonFieldTypes.SingleLineText },
      { name: 'OpeningHrs', type: CommonFieldTypes.SingleLineText },
      { name: 'DressCode', type: CommonFieldTypes.SingleLineText },
      { name: 'BaggageLimits', type: CommonFieldTypes.SingleLineText },
      { name: 'ParkingAvailability', type: CommonFieldTypes.SingleLineText },
      { name: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'Description', type: CommonFieldTypes.RichText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
