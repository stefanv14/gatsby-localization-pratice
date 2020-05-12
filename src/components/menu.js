import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/tech.png';
import LanguageSwitcher from './LanguageSwitcher';



const Menu = styled.div`
    height: 86px;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    border-bottom: 1px solid lightgray;
    z-index: 1;

    @media all and ${props => props.theme.devices.lg} {
        display: none;
    }
`;

const Left = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const StyledLink = styled(props => <Link { ...props } />)`
    font-family: ${props => props.theme.fonts.montserratMedium};
    font-size: 10px;
    padding-right: 20px;
    color: white;

    &:hover {
        color: gray;
    }
`;

const Logo = styled.div`
    img {
        height: 50px;
    }
`;

const Right = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const MobileMenu = styled.div`
    height: 86px;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid lightgray;
    z-index: 1;

    @media all and ${props => props.theme.devices.xl} {
        display: none;
    }
`;

const MobileRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 24px;
        color: black;
    }

    & a:hover {
        color: gray;
    }

    a#times {
        display: none;
    }
`;

const SliderMenu = styled.div`
    height: 0px;
    width: 100%;
    padding-top: 0;
    padding-left: 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    top: 87px;
    left: 0;
    overflow-y: hidden;
    background-color: black;
    transition: height 2s, padding-top 2s, padding-bottom 2s;
    z-index: 2;
`;

const menu = ({ link1, link1Slug, link2, link2Slug, link3, link3Slug, link4, link4Slug, link5, link5Slug, link6, link6Slug }) => { 
    const showSlider = () => {
        document.querySelector("#bars").style.display = "none";
        document.querySelector("#times").style.display = "block";
        document.querySelector("#slider-menu").style.height = "200px";
        document.querySelector("#slider-menu").style.paddingTop = "20px";
        document.querySelector("#slider-menu").style.paddingBottom = "20px";
    };

    const hideSlider = () => {
        console.log('Hide!!!');
        document.querySelector("#bars").style.display = "block";
        document.querySelector("#times").style.display = "none";
        document.querySelector("#slider-menu").style.height = "0";
        document.querySelector("#slider-menu").style.paddingTop = "0";
        document.querySelector("#slider-menu").style.paddingBottom = "0";
    };

    return (
        <>
            <Menu>
                <Left>
                    <StyledLink to={link1Slug}>{link1}</StyledLink>
                    <StyledLink to={link2Slug}>{link2}</StyledLink>
                    <StyledLink to={link3Slug}>{link3}</StyledLink>
                    <StyledLink to={link4Slug}>{link4}</StyledLink>
                    <StyledLink to={link5Slug}>{link5}</StyledLink>
                    <StyledLink to={link6Slug}>{link6}</StyledLink>
                </Left>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <Right>
                    <StyledLink to='/facebook'><i className="fab fa-facebook-f"></i> FACEBOOK</StyledLink>
                    <StyledLink to='/instagram'><i className="fab fa-instagram"></i> INSTAGRAM</StyledLink>
                    <LanguageSwitcher />
                </Right>
            </Menu>
            <MobileMenu>
                <Logo>
                    <img src={logo} alt='logo' />
                </Logo>
                <MobileRight>
                    <a id='bars' onClick={() => showSlider()}><i className="fas fa-bars"></i></a>
                    <a id='times' onClick={() => hideSlider()}><i className="fas fa-times"></i></a>
                    <LanguageSwitcher />
                </MobileRight>
            </MobileMenu>
            <SliderMenu id='slider-menu' onClick={() => hideSlider()}>
                <StyledLink to={link1Slug}>{link1}</StyledLink>
                <StyledLink to={link2Slug}>{link2}</StyledLink>
                <StyledLink to={link3Slug}>{link3}</StyledLink>
                <StyledLink to={link4Slug}>{link4}</StyledLink>
                <StyledLink to={link5Slug}>{link5}</StyledLink>
                <StyledLink to={link6Slug}>{link6}</StyledLink>
            </SliderMenu>
        </>
    );
};

export default menu;