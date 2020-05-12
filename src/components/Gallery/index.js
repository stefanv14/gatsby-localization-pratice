import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Gallery = styled.div`
    height: 150vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and ${props => props.theme.devices.sm} {
        height: auto;
    }
`;

const Container = styled.div`
    height: 130vh;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;

    @media all and ${props => props.theme.devices.sm} {
        width: 90%;
    }
`;

const Image = styled.div`
    width: 25%;
    margin: 10px;

    a div {
        width: 100%;
    }

    a div img {
        width: 100%;
    }

    @media all and ${props => props.theme.devices.sm} {
        width: 100%;
    }
`;

const gallery = () => {
    const data = useStaticQuery(graphql`
        query {
            part1: file(relativePath: { eq: "1.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part2: file(relativePath: { eq: "2.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part3: file(relativePath: { eq: "3.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part4: file(relativePath: { eq: "4.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part5: file(relativePath: { eq: "5.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part6: file(relativePath: { eq: "6.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part7: file(relativePath: { eq: "7.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part8: file(relativePath: { eq: "8.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part9: file(relativePath: { eq: "9.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            part10: file(relativePath: { eq: "10.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Gallery>
            <Container>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part1.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part2.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part3.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part4.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part5.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part6.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part7.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part8.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part9.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
                <Image>
                    <a href='https://www.google.rs/'>
                        <Img fluid={data.part10.childImageSharp.fluid} alt='partner' />
                    </a>
                </Image>
            </Container>
        </Gallery>
    );
};

export default gallery;