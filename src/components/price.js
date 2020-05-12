import React from 'react'
import styled from 'styled-components'
import CalendarDate from './CalendarDate';

const PriceDiv = styled.div`
    h3 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 27px;
        font-weight:700;
        color: ${props => props.theme.colors.blue};
        margin-bottom:1.5rem;
    }
    width:100%;
    padding-top: 4%;
    p {
        margin: 10px 0 15px 0;
        text-align:left;
        font-size:0.899rem;
    }

`;

const PriceWrapper = styled.div`
    display:flex;
    @media all and ${props =>props.theme.devices.xs} {
        flex-direction:column;
    }
`;

const Bold = styled.p`
    font-family: ${props => props.theme.fonts.montserratBold};
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

const Price = ({ text41, text42, text43, text44, text45, text46, text47, text48, text49, text50,
                 text51, text52, text53, text54, text55, text56, text57, text58, text59, text60,
                 text61, text62, text63 
               }) => {
    return (
        <PriceDiv>
            <h3>{text41}</h3>
            <PriceWrapper>
                <TextLeft>
                    <p>{text42}</p>
                    <p>{text43}</p>
                    <ul style={{marginLeft:'10%',fontSize:'0.899rem'}}>
                        <li>{text44}</li>
                        <li>{text45}</li>
                        <li>{text46}</li>
                        <li>{text47}</li>
                        <li>{text48}</li>
                        <li>{text49}</li>
                        <li>{text50}</li>
                        <li>{text51}</li>
                    </ul>
                    <p>{text52}</p>
                    <ul style={{marginLeft:'10%',fontSize:'0.899rem'}}>
                        <li>{text53}</li>
                        <li>{text54}</li>
                        <li>{text55}</li>
                        <li>{text56}</li>
                        <li>{text57}</li>
                        <li>{text58}</li>
                        <li>{text59}</li>
                    </ul>
                </TextLeft>
                <TextRight>
                    <Bold>{text60}</Bold>
                    <Bold>2019</Bold>
                    <p>{text61}</p>
                    <Bold>2020</Bold>
                    <p>{text62}<br />
                       {text63}
                    </p>
                        {/* <Calendar
                            onChange={date => setStartDate({date})}
                            value={startDate}  
                        /> */}
                    <CalendarDate />
                </TextRight>
            </PriceWrapper>
        </PriceDiv>
    )
}

export default Price
