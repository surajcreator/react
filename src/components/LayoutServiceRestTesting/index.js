import React, { useEffect, useState } from 'react';
import { RestLayoutService } from '@sitecore-jss/sitecore-jss-react';
import { sitecoreApiHost, sitecoreApiKey, jssAppName } from '../../temp/config';

const layoutService = new RestLayoutService({
  apiHost: sitecoreApiHost,
  apiKey: sitecoreApiKey,
  siteName: jssAppName,
  tracking: true,
});

const LayoutServiceRestTesting = (props) => {
  const [pageData, setPageData] = useState();
  const language = 'en',
    sitecoreRoutePath = 'restaurant/al-fanar';

  useEffect(() => {
    layoutService.fetchLayoutData(sitecoreRoutePath, language).then((data) => {
      setPageData(data);
    });
  }, []);

  return (
    pageData && (
      <div>
        <p>LayoutServiceRestTesting Component</p>
        <p>{pageData.sitecore.route.fields.PageTitle.value}</p>
      </div>
    )
  );
};

export default LayoutServiceRestTesting;
