import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const BounceAnimation = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`;

const Item = styled.div`
  box-sizing: border-box;
  width: 46%;
  margin: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f2f2f2;
  animation: ${BounceAnimation} 1s ease-in;
  h3,
  h4 {
    text-align: center;
  }

  h3 {
    padding: 10px;
    font-size: 39px;
    font-family: ${props => props.theme.fonts.montserratBold};
  }
  h4 {
    width: 100%;
    color: ${props => props.theme.colors.blue};
  }

  div {
    width: 100%;
  }

  div img {
    width: 100%;
    object-fit: cover;
  }

  p {
    text-align: left;
    padding: 10px 0;
    font-family: ${props => props.theme.fonts.montserrat};
  }

  p span {
    font-size: 12px;
  }

  p span:nth-child(2) {
    font-family: ${props => props.theme.fonts.montserratBold};
  }

  @media all and ${props => props.theme.devices.sm} {
    width: 100%;
  }
  @media all and ${props => props.theme.devices.xs} {
    width: 100%;
    margin:5% 0;
    h3 {
      padding:5% 0;
      font-size:1.7rem;
    }
  }
`;

const FooterLink = styled(props => <Link {...props} />)`
  font-family: ${props => props.theme.fonts.montserratBold};
  font-weight: 400;
  font-size: 14 px;
  color: ${props => props.theme.colors.blue};
  &:hover {
    color: ${props => props.theme.colors.lightBlue};
    text-decoration: none;
    margin-left: 5%;
    transition: all 0.3s ease-in;
  }
`;

const blogPosts = props => {
  const data = useStaticQuery(graphql`
    query allTheImagesQueryallTheImagesQuery {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  let code = [];
  console.log(code);
  if (props.locale === 'sr') {
    props.jsonDataSR.map(post => {
      const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === post.image)
        .map(myImage => <Img fluid={myImage.node.fluid} alt="slika1" />);
      code.push(
        <Item key={post.id}>
          <h4>{post.category}</h4>
          <h3>{post.title}</h3>
          <h4 style={{ paddingBottom: '5%' }}>{post.date}</h4>
          {TheImageYouWant}
          <div
            style={{ fontSize: '0.775rem' }}
            dangerouslySetInnerHTML={{
              __html: post.body.substring(0, 256) + '...',
            }}
          />
          <FooterLink to={post.linkSlug}>
            {post.btn} <i className="fas fa-chevron-right"></i>
          </FooterLink>
        </Item>
      );
    });
  } else {
    props.jsonData.map(post => {
      const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === post.image)
        .map(myImage => <Img fluid={myImage.node.fluid} alt="slika1" />);
      code.push(
        <Item key={post.id}>
          <h4>{post.category}</h4>
          <h3>{post.title}</h3>
          <h4 style={{ paddingBottom: '5%' }}>{post.date}</h4>
          {TheImageYouWant}
          <div
            style={{ fontSize: '0.775rem' }}
            dangerouslySetInnerHTML={{
              __html: post.body.substring(0, 256) + '...',
            }}
          />
          <FooterLink to={post.id}>
            VIEW STORY <i className="fas fa-chevron-right"></i>
          </FooterLink>
        </Item>
      );
    });
  }
  return code;
};

export default blogPosts;
