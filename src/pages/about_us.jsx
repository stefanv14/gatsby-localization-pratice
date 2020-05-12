import React from 'react';

import styled from 'styled-components';
import Header from '../components/headerAbout';
import Layout from '../components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import { aboutUs } from '~data/pages';
import { getLocaleCopy } from '~src/utils/helpers';

const Wrapper = styled.div`
  width: 84%;
  margin: 0 auto;
  @media all and ${props => props.theme.devices.xs} {
    width: 92%;
  }
  @media all and ${props => props.theme.devices.sm} {
    width: 94%;
  }
  @media all and ${props => props.theme.devices.md} {
    width: 94%;
  }
`;

const AboutContext = styled.div`
  width: 100%;
  height: auto;
  padding: 5% 0;
  font-weight: bold;
  color: #333;
`;

const H2 = styled.h2`
  color: #999;
  font-size: 39px;
  padding-bottom: 2rem;
  text-align: left;
`;

const Paragraph = styled.p`
  color: #333;
  line-height: 22px;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.02em;
  line-height: 22px;
  strong {
    font-family: ${props => props.theme.fonts.montserratBold};
  }
  span {
    color: #999;
  }
`;

const UL = styled.ul`
  padding-inline-start: 2.5rem;
  list-style: none;
`;

const LI = styled.li`
  color: ${props => props.theme.colors.blue};
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 400;
  line-height: 1.375rem;
  ::before {
    content: '•';
    color: black;
    display: inline-block;
    width: 1rem;
    font-weight: 700;
    font-size: 25px;
    margin-left: -1em;
  }
`;

const AboutPage = ({ pageContext: { locale, name } }) => {
  const {
    siteTitle,
    h1Title,
    boldText1,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    text14,
    text15,
    text16,
    text17,
    text18,
    text19,
    text20,
    text21,
    text22,
    text23,
    text24,
    text25,
    text26,
    text27,
    text28,
    hTitle,
    bButton,
    aboutLink,
  } = getLocaleCopy(aboutUs, locale);
  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <Header hTitle={hTitle} bButton={bButton} aboutLink={aboutLink} />
      <AboutContext>
        <Wrapper>
          <H2>{h1Title}</H2>
          <Paragraph>
            <strong>{boldText1}</strong> {text1} <span>{text2}</span> {text3}
          </Paragraph>
          <br />
          <Paragraph>
            {text4} <span>{text5}</span> {text6} <span>{text7}</span> {text8}
          </Paragraph>
          <br />
          <br />
          <Paragraph>
            {text9} <span>{text10}</span> {text11} <span>{text12}</span>{' '}
            {text13} <span>{text14}</span> {text15}
          </Paragraph>
          <br />
          <Paragraph>{text16}</Paragraph>
          <br />
          <Paragraph>{text17}</Paragraph>
          <br />
          <UL>
            <LI>{text18}</LI>
            <LI>{text19}</LI>
            <LI>{text20}</LI>
            <LI>{text21}</LI>
            <LI>{text22}</LI>
            <LI>{text23}</LI>
            <LI>{text24}</LI>
            <LI>{text25}</LI>
          </UL>
          <br />
          <Paragraph>
            {text26} <span>{text27}</span> {text28}
          </Paragraph>
        </Wrapper>
      </AboutContext>
    </Layout>
  );
};

export default AboutPage;
