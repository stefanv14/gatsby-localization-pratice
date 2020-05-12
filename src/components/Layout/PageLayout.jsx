import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPageName } from '~src/redux/actions';
import { getLocale } from '~src/redux/selectors';

import '../../styles/fontawesome/css/all.min.css';

import Header from '../menu';
import Footer from '../Foooter/index';

import { getLocaleCopy } from '~src/utils/helpers';
import { footer, NavBar } from '~data/components';

const PageLayout = ({ children, name, title, setPageNameConnect, locale }) => {
  const { link1, link1Slug, link2, link2Slug, link3, link3Slug, link4, link4Slug, link5, link5Slug, link6, link6Slug } = getLocaleCopy(NavBar, locale);
  const { footerLink1Slug, footerLink1Label, footerLink2Slug, footerLink2Label, footerLink3Slug, footerLink3Label } = getLocaleCopy(footer, locale);

  useEffect(() => {
    setPageNameConnect(name);
  }, [name]);

  return (
    <>
      <Header 
        siteTitle={title} 
        link1={link1} 
        link1Slug={link1Slug} 
        link2={link2} 
        link2Slug={link2Slug} 
        link3={link3} 
        link3Slug={link3Slug} 
        link4={link4} 
        link4Slug={link4Slug} 
        link5={link5} 
        link5Slug={link5Slug}
        link6={link6}
        link6Slug={link6Slug} 
      />
        
      <main>{children}</main>
      <Footer 
        footerLink1Slug={footerLink1Slug} 
        footerLink1Label={footerLink1Label} 
        footerLink2Slug={footerLink2Slug} 
        footerLink2Label={footerLink2Label} 
        footerLink3Slug={footerLink3Slug} 
        footerLink3Label={footerLink3Label} 
      />
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  locale: getLocale(state),
});

export default connect(mapStateToProps, { setPageNameConnect: setPageName })(PageLayout);
