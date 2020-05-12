import React from 'react';

import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import { getLocaleCopy } from '~src/utils/helpers';
import { partners } from '~data/pages';
import Header from '~src/components/HeaderPartners';
import Gallery from '~src/components/Gallery';

const Partners = ({ pageContext: { locale, name } }) => {
  const {
    siteTitle,
    partnersTitle, 
    partnersLink1Slug, 
    partnersLink1Label, 
    partnersLink2Slug, 
    partnersLink2Label, 
    partnersButtonSlug, 
    partnersButtonLabel
  } = getLocaleCopy(partners, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <Header 
        partnersTitle={partnersTitle} 
        partnersLink1Slug={partnersLink1Slug} 
        partnersLink1Label={partnersLink1Label} 
        partnersLink2Slug={partnersLink2Slug} 
        partnersLink2Label={partnersLink2Label} 
        partnersButtonSlug={partnersButtonSlug} 
        partnersButtonLabel={partnersButtonLabel}
      />
      <Gallery />
    </Layout>
  );
};

export default Partners;
