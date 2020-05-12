import React from 'react';

import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import Disqus from "disqus-react"
import Header from '../components/headerBlogs';
import Layout from '~src/components/Layout/PageLayout';

const Blogs = styled.div`
    width: 100%;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media all and ${props => props.theme.devices.md} {
        margin: 28px 0;
    }
    @media all and ${props => props.theme.devices.sm} {
        margin: 20px 0;
    }
    @media all and ${props => props.theme.devices.xs} {
        margin: 13px 0;
    }
`;

const Container = styled.div`
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    border: 1px solid lightgray;
    margin-bottom: 5%;
    @media all and ${props => props.theme.devices.md} {
        width: 94%;
    }
    @media all and ${props => props.theme.devices.sm} {
        width: 94%;
    }
    @media all and ${props => props.theme.devices.xs} {
        width: 94%;
    }
`;

const Category = styled.p`
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 14px;
    padding-bottom: 30px;
`;

const StyledLink = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 14px;
    color: black;

    &:hover {
        color: ${props => props.theme.colors.lightBlue};
        text-decoration: none;
    }
`;

const Paragraph = styled.p`
    text-align:left;
`;

const CommentDiv = styled.div`
    width: 48%;
    @media all and ${props => props.theme.devices.md} {
        width: 84%;
    }
    @media all and ${props => props.theme.devices.sm} {
        width: 84%;
    }
    @media all and ${props => props.theme.devices.xs} {
        width: 84%;
    }
`;

const PageTemplate = props => {
  const { title = null, body = null, category = null, image= null, id=null, date=null } = props.pageContext;
  const newTitle = title;
  const data = useStaticQuery(graphql`
    query allTheImagesQuery{
        allImageSharp {
            edges {
                node {
                    fluid(maxWidth:1000) {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    }
    `);

    const TheImageYouWant = data.allImageSharp.edges
        .filter(edge => edge.node.fluid.originalName === image)
        .map(myImage => <Img fluid={myImage.node.fluid} />);
    const disqusShortname = "comments-source";
    const baseUrl = 'comm-source.disqus.com';
        const disqusConfig = {
            url: `${baseUrl}/${id}`,
            identifier: id,
            title: newTitle
        };
  return (
    <Layout name={title} title={title}>
        
        <Header />
        <Blogs>
            <Container>
                <Category>in <StyledLink to='/entrepreneur'>{category}</StyledLink></Category>
                <div style={{textAlign:'left'}}>
                    {title && <h1>{title}</h1>}
                    <br /><br />
                    {TheImageYouWant}
                    <div dangerouslySetInnerHTML={{ __html: body }} /><br />
                    <hr style={{opacity:'0.4'}}/><br />
                    <p style={{textAlign:'right',fontWeight:'bold',color:'#333'}}>{date}</p>                         
                </div>
            </Container>
            <CommentDiv>
                <Disqus.DiscussionEmbed 
                    shortname={disqusShortname}
                    config={disqusConfig}
                    style={{color:'black'}}
                />
            </CommentDiv>
        </Blogs>
    </Layout>
  );
};

export default PageTemplate;