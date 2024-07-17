import posthog from 'posthog-js'
import { browser } from '$app/environment';

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_lUzpEiX0aTAJBpE5racmMlDxHfW2RIZRNPR6Ocj0p3h',
      { 
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      }
    )
  }
  return
};