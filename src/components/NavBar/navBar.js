import React from "react"
import styled from 'styled-components'
import LogoPic from '../../images/logo.png'

const Nav = styled.div`
    width:100%;
    height:70px;
    background:transparent;
    margin: 0;
    padding: 2% 7%;
    transition: all .2s;
    display:flex;
    text-align:center;
    border-bottom: 1px solid #ccc;
    @media (max-width: ${ p=> p.theme.sizes.lg}) {
      width: 100%;
      padding: 2% 6%;
  }  
    @media (max-width: ${p=> p.theme.sizes.md}) {
        width: 100vw;
        padding:0;
    } 
`

const Ul = styled.ul `
    display:flex;
    width: 50.66666667%;
    height:50px;
    float:left;
    position: relative;
    min-height: 1px;
    padding-right: 5px;
    padding-left: 5px;
    @media (max-width: ${p=> p.theme.sizes.lg}) {
      width: 80%;
      height:auto;
  }  
  @media (max-width: ${p=> p.theme.sizes.md}) {
    display:none;
  } 
`

const Li = styled.li `
    list-style:none;
    padding:0 2px;
    display: table-cell;
    vertical-align: middle;
    position: relative;
    height:50px;
`

const A = styled.a `
    color: ${props => props.theme.colors.white};
    font-family:"Montserrat";
    font-size:10px  !important;
    font-weight: 500 !important;
    letter-spacing: 0.02em !important;
    line-height: 22px !important;
    transition: color .2s;
`

const Logo = styled.div `
    width: 12.66666667%;
    height:50px;
    img {
        max-width: 120px;
        max-height: 50px;
    }
    @media (max-width: ${p=> p.theme.sizes.lg}) {
      width: 20%;
      height:auto;
  }  
    @media (max-width: ${p=> p.theme.sizes.md}) {
      width:100vw !important;
      height: 70px;
      position: relative;
      img {
        max-width: 120px;
        margin-left:-80%;
        max-height: 50px;
      }
      background: ${p => p.theme.colors.white};
  }
  @media (max-width: ${p=> p.theme.sizes.xs}) {
    img {
        max-width: 120px;
        margin-left:-60%;
        max-height: 50px;
      }
  }
  
    
`

const Info = styled.div `
    width:20.66666667%;
    margin-left:auto;
    height:50px;
    display:flex;
    i {
        font-size:15px;
        color:white;
        margin-right:15px;
    }
    a {
      margin-right:5px;
      padding:0;
    }
    float:right;
    text-align:right;
      @media (max-width: ${p=> p.theme.sizes.lg}) {
        width: 30%;
        height:auto;
    }  
    @media (max-width: ${p=> p.theme.sizes.md}) {
      display:none;
  } 
`





const navBar = () => {
    return (
            <Nav>
                <Ul>
                   <Li>
                        <A href="/">HOME</A>
                   </Li>
                   <Li>
                        <A href="/bootcamp">THE BOOTCAMP</A>
                   </Li>
                   <Li>
                        <A href="/about">ABOUT</A>
                   </Li>
                   <Li>
                        <A href="/partners">PARTNERS</A>
                   </Li>
                   <Li>
                        <A href="/blogs">BLOGS</A>
                   </Li>
                   <Li>
                        <A href="/contact">CONTACT</A>
                   </Li>
                </Ul>
                <Logo>
                    <img src={LogoPic} alt="Logo" />
                </Logo>
                <Info>
                    <i class="fab fa-facebook-f"></i>
                    <A>FACEBOOK</A>
                    <i class="fab fa-instagram"></i>
                    <A>INSTAGRAM</A>
                </Info>
            </Nav>
            

    )
}

export default navBar
