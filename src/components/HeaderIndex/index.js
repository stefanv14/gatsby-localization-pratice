import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

// import homeImg from '../../images/home.jpg';

const Header = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${props => props.src});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &::after {
        content: '';
        position: absolute;
        width: 100%; 
        height: 100%;
        top: 0; 
        left: 0;
        background-color: rgba(0,0,0,0.4);
    }
`;

const Container = styled.div`
    height: 35vh;
    position: absolute;
    left: calc(50% - 130px);
    bottom: calc(40% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;

    h1 {
        font-family: 'MontserratBold';
        font-size: 39px;
        color: white;
    }
`;

const ButtonLink = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserratBold};
    font-size: 10.5px;
    display: inline-block;
    padding: 17px 37px 17px 37px;
    margin: 5px;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 50px;
    -webkit-transition: all .2s;
    transition: all .2s;
    color: ${props => props.theme.colors.lightBlue};
    background-color: ${props => props.theme.colors.blue};

    &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.blue};
        background-color: ${props => props.theme.colors.lightBlue};
    }
`;

const IndexPage = ({ headerLinkSlug, headerLinkLabel }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "home.jpg" }) {
                childImageSharp {
                    fluid {
                        src
                    }
                }
            }
        }
    `);
    
    return (
        <Header src={data.file.childImageSharp.fluid.src}>
            <Container>
                <h1>IT</h1>
                <h1>BUSINESS</h1>
                <h1>BOOTCAMP</h1>
                <ButtonLink to={headerLinkSlug}>{headerLinkLabel}</ButtonLink>
            </Container>
        </Header>
    );
};

// export const query = graphql`
//     query {
//         file(relativePath: { eq: "home.jpg" }) {
//             childImageSharp {
//                 fluid {
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `;

export default IndexPage;




