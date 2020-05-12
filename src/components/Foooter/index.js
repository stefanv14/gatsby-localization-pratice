import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/tech.png';


const Footer = styled.div`
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.blue};

    @media all and ${props => props.theme.devices.md} {
        height: 80vh;
    }
`;

const Container = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media all and ${props => props.theme.devices.md} {
        flex-direction: column;
    }
`;

const Left = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    @media all and ${props => props.theme.devices.md} {
        width: 100%;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledLink1 = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserratMedium};
    font-size: 10px;
    padding: 0 20px 20px 0;
    color: white;

    &:hover {
        color: ${props => props.theme.colors.lightBlue};
    }
`;

const StyledLink2 = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserratMedium};
    font-size: 10px;
    padding: 0;
    color: white;

    &:hover {
        color: ${props => props.theme.colors.lightBlue};
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    p {
        font-family: ${props => props.theme.fonts.montserratMedium};
        font-size: 14px;
        color: white;
    }

    p i {
        font-size: 14px;
    }
`;

const Right = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: flex-end;

    @media all and ${props => props.theme.devices.md} {
        width: 100%;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: flex-end;
    img {
        height: 50px;
    }

    @media all and ${props => props.theme.devices.md} {
        justify-content: flex-start;
    }
`;

const Copyright = styled.p`
    font-family: ${props => props.theme.fonts.montserratMedium};     
    font-size: 14px;
    line-height: 1.8;
    text-align: right;
    color: white;

    a {
        font-size: 14px;
    }

    @media all and ${props => props.theme.devices.md} {
        text-align: left;
    }
`;

const footer = ({ footerLink1Slug, footerLink1Label, footerLink2Slug, footerLink2Label, footerLink3Slug, footerLink3Label }) => (
    <Footer>
        <Container>
            <Left>
                <Menu>
                    <StyledLink1 to={footerLink1Slug}>{footerLink1Label}</StyledLink1>
                    <StyledLink1 to={footerLink2Slug}>{footerLink2Label}</StyledLink1>
                    <StyledLink1 to={footerLink3Slug}>{footerLink3Label}</StyledLink1>
                </Menu>
                <Contact>
                    <p><i className="fas fa-phone" /> (+381) 11 123 4567</p>
                    <p><i className="fas fa-envelope" /> info@ITtech.com</p>
                    <p><i className="fas fa-home" /> 11000 Belgrade, Serbia</p>
                </Contact>
            </Left>
            <Right>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <div>
                    <Copyright>
                        Copyright &#169; {new Date().getFullYear()} IT International
                    </Copyright>
                    <Copyright>
                        All rights reserved, <StyledLink2 to='/privacy'>Privacy Policy</StyledLink2>
                    </Copyright>
                </div>
            </Right>
        </Container>
    </Footer>
);

export default footer;