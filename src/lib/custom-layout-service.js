import { RestLayoutService } from '@sitecore-jss/sitecore-jss-react';
import config from '../temp/config';

const { sitecoreApiKey, jssAppName } = config;
export class CustomLayoutService extends RestLayoutService {
  constructor(config) {
    super(config);
  }

  getFetchParams = (language) => {
    return {
      sc_api: sitecoreApiKey,
      sc_site: jssAppName,
      sc_language: language || '',
      config: config.tracking ?? true,
      searchQuery: 'Test',
    };
  };
}
