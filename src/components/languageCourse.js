import React from 'react'
import styled from 'styled-components'

const LanguageCourseDiv = styled.div`
    width: 100%;
    height:auto;
    h3 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 27px;
        font-weight:700;
        color: ${props => props.theme.colors.blue};
        margin-bottom:1.5rem;
    }
    p{
        text-align:left;
        font-size:0.899rem;
        line-height:22px;
    }
`;

const LanguageCourseWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    @media all and ${props =>props.theme.devices.xs} {
        flex-direction:column;
    }
`;

const TextLeft = styled.div`
    width:49%;
    @media all and ${props =>props.theme.devices.xs} {
        width: 100%;
    }
`;

const TextRight = styled.div`
    width:49%;
    @media all and ${props =>props.theme.devices.xs} {
        width: 100%;
    }

`;

const CenterButton = styled.button`
    padding: 14px 14px;
    background:#fe6c61;
    background-image: linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,.01) 100%);
    background-repeat: repeat-x;
    font-weight:400;
    letter-spacing: 0.02em;
    color:#fff;
    font-size:14px;
    border:none;
    border-radius:5px;
    width:12%;
    margin: 1.4rem 0;
    margin-left: calc(50% - 7%);
    cursor: pointer;
    @media all and ${props =>props.theme.devices.xs} {
        width: 30%;
        margin-left: calc(50% - 15%);
    }
    @media all and ${props =>props.theme.devices.md} {
        width:30%;
        margin-left: calc(50% - 15%);
    }
`;

const LanguageCourse = ({ text33, text34, text35, text36, text37, text38, text39, text40 }) => {
    return (
        <LanguageCourseDiv>
            <h3>{text33}</h3>
            <LanguageCourseWrapper>
                <TextLeft>
                    <p>{text34}</p><br />
                    <p>{text35}</p>
                </TextLeft>
                <TextRight>
                    <p>{text36}</p><br />
                    <p>{text37}</p> <p>{text38}</p>
                    <p>{text39}</p>
                </TextRight>
            </LanguageCourseWrapper>
            <CenterButton>
                {text40}
            </CenterButton>
        </LanguageCourseDiv>
    )
}

export default LanguageCourse
