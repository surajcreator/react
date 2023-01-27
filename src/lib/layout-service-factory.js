import {
  GraphQLLayoutService,
  RestLayoutService,
  constants,
} from '@sitecore-jss/sitecore-jss-react';
import config from '../temp/config';
import { CustomLayoutService } from './custom-layout-service';

export class LayoutServiceFactory {
  create() {
    return process.env.REACT_APP_FETCH_WITH === constants.FETCH_WITH.GRAPHQL
      ? new GraphQLLayoutService({
          endpoint: config.graphQLEndpoint,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
        })
      : new CustomLayoutService({
          apiHost: config.sitecoreApiHost,
          apiKey: config.sitecoreApiKey,
          siteName: config.jssAppName,
          configurationName: 'default',
        });
  }
}

export const layoutServiceFactory = new LayoutServiceFactory();
