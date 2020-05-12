import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Team = styled.div`
    height: 110vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
`;

const Container = styled.div`
    height: 90vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 39px;
    }

    div {
        height: 70vh;
        width: 100%;
    };
    
    div img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    };
`;

const team = ({ team }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "team.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Team>
            <Container>
                <h1>{team}</h1>
                <Img fluid={data.file.childImageSharp.fluid} />
                {/* <img src={teamImg} /> */}
            </Container>
        </Team>
    );
};

export default team;