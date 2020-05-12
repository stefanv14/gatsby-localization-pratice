import React, { useState } from 'react';

import styled from 'styled-components';
import Header from '../components/headerBlog';
import Layout from '~src/components/Layout/PageLayout';
import dataJson from '../data/blogs/posts.json';
import BlogPosts from '../components/blogPosts';
import { getLocaleCopy } from '~src/utils/helpers';
import { blog } from '~data/pages';

const Blog = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing:border-box;
  @media all and ${props => props.theme.devices.xs} {
    align-content:space-between;
    justify-content: space-between;
  }
`;

const Navigation = styled.div`
  height: 20vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h3 {
    letter-spacing: 4px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media all and ${props => props.theme.devices.sm} {
    width: 90%;
  }
  @media all and ${props => props.theme.devices.xs} {
    h3 {
      font-size:2rem;
      text-align: center;
      padding-top:38%;
    }
  }
`;

const HeaderLink = styled.a`
  font-family: ${props => props.theme.fonts.montserratBold};
  font-size: 1rem;
  padding: 0 10px;
  color: #333;

  &:hover {
    color: gray;
    text-decoration: none;
  }
`;

const Container = styled.div`
  height: auto;
  width: 84%;
  max-width: 84%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
  @media all and ${props => props.theme.devices.sm} {
    height: auto;
  }
  @media all and ${props => props.theme.devices.xs} {
    padding-top:10%;
    max-width:82%;
  }
`;

const NavCategories = styled.div`
  @media all and ${props => props.theme.devices.xs} {
    display:flex;
    flex-direction:column;
    line-height:2;
    padding-top:5%;
    padding-bottom:25%;
  }
`;

const blogPage = ({ pageContext: { locale, name } }) => {
  const {
    blogTitle1,
    headerBlogTitle,
    btnBackToHome,
    blogs,
    blogCategory1,
    blogCategory2,
    blogCategory3,
    blogTitle5,
  } = getLocaleCopy(blog, locale);
  const jsonData = dataJson;
  const Sdsdd = jsonData.pagesEN.filter(el => el);
  const SdsddSR = jsonData.pagesSR.filter(el => el);
  const [value, setValue] = useState(Sdsdd);
  const [valueSR, setValueSR] = useState(SdsddSR);
  console.log(value);
  const ENTREPRENEUR = e => {
    e.preventDefault();
    setValue(jsonData.pagesEN.filter(el => el.category === e.target.id));
    setValueSR(jsonData.pagesSR.filter(el => el.category === 'PREDUZETNIK'));
    console.log(value, valueSR);
  };
  const STUDENT = e => {
    setValue(jsonData.pagesEN.filter(el => el.category === e.target.id));
    setValueSR(jsonData.pagesSR.filter(el => el.category === 'STUDENT'));
    console.log(value);
  };
  const handleAll = () => {
    setValue(Sdsdd);
    setValueSR(SdsddSR);
    console.log(value);
  };
  return (
    <Layout name={name} title="Blog">
      <Header
        headerBlogTitle={headerBlogTitle}
        btnBackToHome={btnBackToHome}
        blogs={blogs}
      />
      <Blog>
        <Navigation>
          <h3>{blogTitle1}</h3>
          <NavCategories>
            <HeaderLink onClick={handleAll}>{blogCategory1}</HeaderLink>
            <HeaderLink id="ENTREPRENEUR" onClick={ENTREPRENEUR}>
              {blogCategory2}
            </HeaderLink>
            <HeaderLink id="STUDENT" onClick={STUDENT}>
              {blogCategory3}
            </HeaderLink>
          </NavCategories>
        </Navigation>
        <Container id="innerHTML">
          <BlogPosts
            jsonData={value}
            jsonDataSR={valueSR}
            blogTitle5={blogTitle5}
            locale={locale}
          />
        </Container>
      </Blog>
    </Layout>
  );
};

export default blogPage;
