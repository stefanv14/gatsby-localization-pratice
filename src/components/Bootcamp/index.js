import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

const Bootcamp = styled.div`
    height: 110vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;

    @media all and ${props => props.theme.devices.sm} {
        height: 230vh;
    }
`;

const Container = styled.div`
    height: 90vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 39px;
    }

    p {
        color: #bababa;
    }

    @media all and ${props => props.theme.devices.sm} {
        height: 210vh;
    }
`;

const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media all and ${props => props.theme.devices.sm} {
        flex-direction: column;
    }
`;

const Item = styled.div`
    height: 60vh;
    width: 33.3%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    a {
        width: 100%;
    }

    a div {
        height: 25vh;
        width: 100%;
    }

    a div img {
        height: 25vh;
        width: 100%;
        object-fit: cover;
    }

    div {
        height: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    div h3 {
        padding: 20px 20px 0;
    }

    div p {
        text-align: center;
        padding: 0 20px;
    }

    @media all and ${props => props.theme.devices.sm} {
        width: 100%;

        a div img {
            height: 35vh;
        }

        div {
            height: 25vh;
        }
    }
`;

const StyledLink = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserratMedium};
    font-size: 12px;
    padding: 0 0 20px;
    text-align: center;
    color: ${props => props.theme.colors.lightBlue};

    &:hover {
        color: ${props => props.theme.colors.blue};
    }
`;

const bootcamp = ({ 
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
    bootcampLinkLabel 
}) => {
    const data = useStaticQuery(graphql`
        query {
            boot1: file(relativePath: { eq: "boot-1.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            boot2: file(relativePath: { eq: "boot-2.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            boot3: file(relativePath: { eq: "boot-3.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Bootcamp>
            <Container>
                <h1>{bootcampTitle}</h1>
                <div>
                    <p>{bootcampText1}</p>
                    <p>{bootcampText2}</p>
                </div>
                <Items>
                    <Item>
                        <Link to={bootcampLinkSlug}>
                            <Img fluid={data.boot1.childImageSharp.fluid} />
                        </Link>
                        <div>
                            <h3>{bootcampLng}</h3>
                            <p>{bootcampLngText}</p>
                            <StyledLink to={bootcampLinkSlug}>{bootcampLinkLabel}</StyledLink>
                        </div>
                    </Item>
                    <Item>
                        <Link to={bootcampLinkSlug}>
                            <Img fluid={data.boot2.childImageSharp.fluid} />
                        </Link>
                        <div>
                            <h3>{bootcampEnt}</h3>
                            <p>{bootcampEntText}</p>
                            <StyledLink to={bootcampLinkSlug}>{bootcampLinkLabel}</StyledLink>
                        </div>
                    </Item>
                    <Item>
                        <Link to={bootcampLinkSlug}>
                            <Img fluid={data.boot3.childImageSharp.fluid} />
                        </Link>
                        <div>
                            <h3>{bootcampLei}</h3>
                            <p>{bootcampLeiText}</p>
                            <StyledLink to={bootcampLinkSlug}>{bootcampLinkLabel}</StyledLink>
                        </div>
                    </Item>
                </Items>
            </Container>
        </Bootcamp>
    );
};

export default bootcamp;