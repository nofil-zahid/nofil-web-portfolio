import { ABOUT, PROFILE } from './profile';
import { sameAsLinks } from './links';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CORE_SKILLS } from './seo-metadata';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      description: ABOUT.summary[0],
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: PROFILE.city,
        addressCountry: PROFILE.country,
      },
      sameAs: sameAsLinks,
      knowsAbout: [...CORE_SKILLS],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
  ],
};
