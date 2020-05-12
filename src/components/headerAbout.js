import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import AboutImg from '../images/about-image.jpg';


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
    left: calc(50% - 335px);
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
    @media all and ${props =>props.theme.devices.xs} {
        h1 {
            text-align:center;
        }
        left: calc(50% - 192px);
        bottom:70px;
        max-width:90%;
    }
    /* @media all and (max-width: '400px') {
        left: calc(50% - 200px);
    } */

    @media all and (max-width: 400px)  {
        left: calc(50% - 175px);
    }
    @media only screen and (max-width: 330px) and (min-width: 100px)  {
        left: calc(50% - 145px);
        bottom: 40px;
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

const header = ({hTitle, bButton, aboutLink}) => (
    <Header src={AboutImg}>
        <Container>
            <h1>{hTitle}</h1>
            <p><BreadcrumbLink to='/'>IT Business Bootcamp</BreadcrumbLink> > <BreadcrumbLink to='/about'>{aboutLink}</BreadcrumbLink></p>
            <ButtonLink to='/'><i className="fas fa-chevron-left"></i> {bButton}</ButtonLink>
        </Container>
    </Header>
);

export default header;

