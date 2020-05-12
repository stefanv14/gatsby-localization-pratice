import React from 'react'
import styled from 'styled-components'
import AccomodationImg from '../images/room2.jpg'

const AccomodationDiv = styled.div`
    height:auto;
    width:100%;
    padding: 5% 0;
    h3 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 27px;
        font-weight:700;
        color: ${props => props.theme.colors.blue};
    }
    p{
        text-align:left;
        font-size:0.899rem;
        line-height:22px;
    }
`;

const AccomodationWrapper = styled.div`
    display:flex;
    @media all and ${props =>props.theme.devices.xs} {
        flex-direction:column;
    }
`;

const LeftDiv = styled.div`
    width:50%;
    padding-right:1.1rem;
    p {
        margin: 10px 0 15px 0;
    }
    @media all and ${props =>props.theme.devices.xs} {
        width: 100%;
    }
`;

const RightDiv = styled.div`
    width:50%;
    @media all and ${props =>props.theme.devices.xs} {
        width:100%;
        img {
            width: 100%;
            height:auto;
        }
    }
    @media all and ${props =>props.theme.devices.md} {
        width:100%;
        img {
            width: 100%;
            height:auto;
        }
    }
`;

const Accomodation = ({accTitle, text1, text2, text3}) => {
    return (
        <AccomodationDiv>
            <AccomodationWrapper>
                <LeftDiv>
                    <h3>{accTitle}</h3>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </LeftDiv>
                <RightDiv>
                    <img src={AccomodationImg} alt="img" />
                </RightDiv>
            </AccomodationWrapper>
        </AccomodationDiv>
    )
}

export default Accomodation
