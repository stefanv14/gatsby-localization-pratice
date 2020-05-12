import React from 'react';
import { home } from '~data/pages';
import Bootcamp from '~src/components/Bootcamp';
import Counter from '~src/components/Counter';
import Header from '~src/components/HeaderIndex';
import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Social from '~src/components/Social';
import Story from '~src/components/Story';
import Team from '~src/components/Team';
import Video from '~src/components/Video';
import { getLocaleCopy } from '~src/utils/helpers';


const IndexPage = ({ pageContext: { locale, name } }) => {
  const {
    siteTitle,
    headerLinkSlug, 
    headerLinkLabel,
    title, 
    story, 
    action, 
    storyLinkSlug, 
    storyLinkLabel,
    bootcampTitle, 
    bootcampText1, 
    bootcampText2,
    bootcampLng, 
    bootcampLngText, 
    bootcampEnt, 
    bootcampEntText, 
    bootcampLei, 
    bootcampLeiText, 
    bootcampLinkSlug, 
    bootcampLinkLabel,
    videoTitle, 
    videoCre, 
    videoCreText, 
    videoEnt, 
    videoEntText, 
    videoSuc, 
    videoSucText,
    team,
    counter1, 
    counter1Text, 
    counter2, 
    counter2Text, 
    counter3, 
    counter3Text, 
    counter4, 
    counter4Text,
    sliderTitle, 
    slider1Text, 
    slider1Name, 
    slider1Title, 
    slider2Text, 
    slider2Name, 
    slider2Title, 
    slider3Text, 
    slider3Name, 
    slider3Title
  } = getLocaleCopy(home, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <Header 
        headerLinkSlug={headerLinkSlug} 
        headerLinkLabel={headerLinkLabel} 
      />
      <Story 
        title={title} 
        story={story} 
        action={action} 
        storyLinkSlug={storyLinkSlug} 
        storyLinkLabel={storyLinkLabel} 
      />
      <Bootcamp 
        bootcampTitle={bootcampTitle} 
        bootcampText1={bootcampText1} 
        bootcampText2={bootcampText2}
        bootcampLng={bootcampLng} 
        bootcampLngText={bootcampLngText} 
        bootcampEnt={bootcampEnt} 
        bootcampEntText={bootcampEntText} 
        bootcampLei={bootcampLei} 
        bootcampLeiText={bootcampLeiText} 
        bootcampLinkSlug={bootcampLinkSlug} 
        bootcampLinkLabel={bootcampLinkLabel}
      />
      <Video 
        videoTitle={videoTitle} 
        videoCre={videoCre} 
        videoCreText={videoCreText} 
        videoEnt={videoEnt} 
        videoEntText={videoEntText} 
        videoSuc={videoSuc} 
        videoSucText={videoSucText}
      />
      <Team 
        team={team}
      />
      <Counter 
        counter1={counter1} 
        counter1Text={counter1Text} 
        counter2={counter2} 
        counter2Text={counter2Text} 
        counter3={counter3} 
        counter3Text={counter3Text} 
        counter4={counter4} 
        counter4Text={counter4Text}
      />

      <Social />
    </Layout>
  );
};

export default IndexPage;
