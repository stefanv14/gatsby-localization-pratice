import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { setLocale } from '~src/redux/actions';
import { getLocale, getPageName } from '~src/redux/selectors';
import i18n from '~config/i18n';

const Container = styled.div`
    display: flex;
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

const LanguageSwitch = ({ setLocaleConnect, currentLocale, name }) => {
    const locales = Object.keys(i18n);
    const langs = [];
        
    locales.map((lang, i) => {
        const path = name
            ? `${i18n[lang].startUrl}${i18n[lang].slugs[name]}`
            : `${i18n[lang].startUrl}`;

        langs[i] = 
            <StyledLink
                key={lang}
                title={i18n[lang].languageName}
                hrefLang={i18n[lang]}
                to={path}
                onClick={() => {setLocaleConnect(lang)}}
            >
                {i18n[lang].languageName}
            </StyledLink>;
    });

    return (
        <Container>
            {currentLocale === 'en' ? langs[1] : langs[0]}
        </Container>
    );
};

const mapStateToProps = state => ({
    currentLocale: getLocale(state),
    name: getPageName(state)
});

export default connect(mapStateToProps, { setLocaleConnect: setLocale })(LanguageSwitch);
