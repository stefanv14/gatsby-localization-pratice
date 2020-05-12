import React from 'react'
import styled from 'styled-components'
import Img from '../images/bootCampImg.jpg'

const SectionImgDiv = styled.div`
    width:100%;
    height: 50vh;
    background-image: url(${props => props.src});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ImgSection = () => {
    return (
        <SectionImgDiv src={Img}>
                
        </SectionImgDiv>
    )
}

export default ImgSection
