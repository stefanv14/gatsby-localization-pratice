import React from 'react'
import styled from 'styled-components'
import '../styles/fontawesome/css/all.min.css'

const ProgrammeDiv = styled.div`
    h3 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 27px;
        font-weight:700;
        color: ${props => props.theme.colors.blue};
    }
    margin-bottom:6%;
`;

const ProgrammeWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    @media all and ${props =>props.theme.devices.xs} {
        flex-direction:column;
    }
`;

const OneProgramme = styled.div`
    display:flex;
    width:20.66%;
    max-width:16.66%;
    margin-top:2%;
    span {
        text-align:center;
        padding: 0 .5rem;
        color:#fff;
        font-size:2rem;
        background:#ebebeb;
        margin-right:1rem;
    }
    p {
        width: 70%;
        margin-left:39%;
        text-align:left;
    }
    p:hover {
        background:#999;
        cursor:pointer;
    }
    h3 {
        color:#333;
        cursor:pointer;
        position:absolute;top:0;
        padding-left:40%;
        width:140%;
        text-align:left;
        user-select:none;
    }
    i {
        color:#ccc;
    }
    @media all and ${props =>props.theme.devices.xs} {

        margin: 5% 0 5% 0;
        h3 {
            width:430%;
            padding-left:110%;
            /* top:15%; */
            margin-top:10%;
        }
        p {
            margin-left:115%;
            width: 700%;
        }
    }
    @media all and ${props =>props.theme.devices.md} {
        h3 {
            font-size:1rem;
            height:100%;
            padding-top: 10%;
        }
    }
    @media all and ${props =>props.theme.devices.lg} {
        h3 {
            font-size:1rem;
            height:100%;
            padding-top: 7%;
        }
    }
`;

const OneProgrammeWrap = styled.div`
    position:relative;
    width:75%;
`;

const TogglePannel = styled.div`
    display:none;
    padding-top:15%;
    @media all and ${props =>props.theme.devices.xs} {
        padding:50% 0 50% 0;
    }
`;

const Programme = ({ text4, 
                     text5, 
                     text6, 
                     text7, 
                     text8, 
                     text9, 
                     text10, 
                     text11,
                     text12,
                     text13,
                     text14,
                     text15,
                     text16,
                     text17,
                     text18,
                     text19,
                     text20,
                     text21,
                     text22,
                     text23,
                     text24,
                     text25,
                     text26,
                     text27,
                     text28,
                     text29,
                     text30,
                     text31,
                     text32
                  }) => {
    var br=1;
    const handleClick = (e) => {
        if(e.target.nextElementSibling.style.display=="block"){
            e.target.nextElementSibling.style.display="none";
            e.target.previousElementSibling.setAttribute("class", "fas fa-plus-square");
            br=0;
        }else{
            console.log(e.target.nextSibling,e.target.previousElementSibling);
            e.target.nextElementSibling.style.display="block";
            e.target.previousElementSibling.setAttribute("class", "fas fa-minus-square");
            br+=1;
        }
    }
    return (
        <ProgrammeDiv>
            <h3>{text4}</h3>
            <ProgrammeWrapper>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}>
                        </i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 1
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text6}<br /><br /> {text7}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 2
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text8}<br /><br /> {text9}<br /><br /> {text10}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 3
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text11} <br /><br />{text12}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 4
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text13}<br /><br /> {text14}<br /><br /> {text15}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 5
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                               {text16}<br /><br /> {text17}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 6
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text18}<br /><br /> {text19}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
            </ProgrammeWrapper>
            <ProgrammeWrapper>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 7/8
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text20}<br /><br /> {text21}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 9/10
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text22}<br /><br /> {text23}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 11
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text24}<br /><br /> {text25}<br /><br /> {text26}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 12
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text27}<br /><br /> {text28}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 13
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text29}<br /><br /> {text30}<br /><br /> {text31}.
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
                <OneProgramme>
                    <OneProgrammeWrap>
                        <i className="fas fa-plus-square" style={{fontSize:'2.3rem'}}></i>
                        <h3 name="1" onClick={handleClick}>
                            {text5} 14
                        </h3>
                        <TogglePannel id="myDIV">
                            <p style={{background:'transparent'}}>
                                {text32}
                            </p>
                        </TogglePannel>
                    </OneProgrammeWrap>
                </OneProgramme>
            </ProgrammeWrapper>
        </ProgrammeDiv>
    )
}

export default Programme
