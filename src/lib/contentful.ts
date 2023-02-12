import { createClient } from 'contentful';

const config = {
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
}

export const contentful = createClient(config);
