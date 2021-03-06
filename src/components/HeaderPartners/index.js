import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const Header = styled.div`
    height: 60vh;
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
    height: 30vh;
    position: absolute;
    left: calc(50% - 130px);
    bottom: 10px;
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

    p {
        color: ${props => props.theme.colors.lightBlue};
    }
`;

const BreadcrumbLink = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserrat};
    font-size: 14px;
    color: ${props => props.theme.colors.lightBlue};

    &:hover {
        color: ${props => props.theme.colors.blue};
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

const header = ({ partnersTitle, partnersLink1Slug, partnersLink1Label, partnersLink2Slug, partnersLink2Label, partnersButtonSlug, partnersButtonLabel }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "partners.jpg" }) {
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
                <h1>{partnersTitle}</h1>
                <p><BreadcrumbLink to={partnersLink1Slug}>{partnersLink1Label}</BreadcrumbLink> > <BreadcrumbLink to={partnersLink2Slug}>{partnersLink2Label}</BreadcrumbLink></p>
                <ButtonLink to={partnersButtonSlug}><i className="fas fa-chevron-left"></i>{partnersButtonLabel}</ButtonLink>
            </Container>
        </Header>
    );
};

export default header;

