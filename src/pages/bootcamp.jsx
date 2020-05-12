import React from 'react';
import styled from 'styled-components';
import { bootcamp } from '~data/pages';
import { getLocaleCopy } from '~src/utils/helpers';
import Accomodation from '../components/accomodation';
import DontMiss from '../components/dontMiss';
import ImgSection from '../components/imgSection';
import LanguageCourse from '../components/languageCourse';
import Layout from '../components/Layout/PageLayout';
import Price from '../components/price';
import Programme from '../components/programme';
import SignUpFormData from '../components/signUpFormData';


const Wrapper = styled.div`
    width:84%;
    margin:0 auto;
    @media all and ${props =>props.theme.devices.md} {
        width:92%;
    }
`;

const Home = ({ pageContext: { locale, name } }) => {
    const { 
        siteTitle, h1Title, accTitle, text1, text2, text3, text4, text5, text6, text7, text8,
        text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19,
        text20, text21, text22, text23, text24, text25, text26, text27, text28, text29, text30,
        text31, text32, text33, text34, text35, text36, text37, text38, text39, text40, text41,
        text42, text43, text44, text45, text46, text47, text48, text49, text50, text51, text52,
        text53, text54, text55, text56, text57, text58, text59, text60, text61, text62, text63,
        text64, text65, text66, text67, text68, text69, text70, text71, text72, text73, text74,
        text75, text76, text77, text78, text79 
    } = getLocaleCopy(
        bootcamp,
        locale
      );
    return (
        <Layout name={name} title={siteTitle}>
            <DontMiss h1Title={h1Title} />
            <Wrapper>
                <Accomodation accTitle={accTitle} text1={text1} 
                              text2={text2} text3={text3} 
                />
                <Programme text4={text4} text5={text5} text6={text6} text7={text7} text8={text8}
                           text9={text9} text10={text10} text11={text11} text12={text12}
                           text13={text13} text14={text14} text15={text15} text16={text16}
                           text17={text17} text18={text18} text19={text19} text20={text20}
                           text21={text21} text22={text22} text23={text23} text24={text24}
                           text25={text25} text26={text26} text27={text27} text28={text28}
                           text29={text29} text30={text30} text31={text31} text32={text32} 
                />
                <LanguageCourse text33={text33} text34={text34} text35={text35}
                                text36={text36} text37={text37} text38={text38}
                                text39={text39} text40={text40} 
                />
            </Wrapper>
            <ImgSection />
            <Wrapper>
                <Price text41={text41} text42={text42} text43={text43} text44={text44}
                       text45={text45} text46={text46} text47={text47} text48={text48}
                       text49={text49} text50={text50} text51={text51} text52={text52}
                       text53={text53} text54={text54} text55={text55} text56={text56}
                       text57={text57} text58={text58} text59={text59} text60={text60}
                       text61={text61} text62={text62} text63={text63}
                />
                <SignUpFormData text64={text64} text65={text65} text66={text66} text67={text67}
                            text68={text68} text69={text69} text70={text70} text71={text71}
                            text72={text72} text73={text73} text74={text74} text75={text75}
                            text76={text76} text77={text77} text78={text78} text79={text79} 
                />
            </Wrapper>
        </Layout>
    )
}

export default Home