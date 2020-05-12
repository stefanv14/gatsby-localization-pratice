import React, { useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import 'react-intl-tel-input/dist/main.css';

const BounceAnimation = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`;

const DontMissStl = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.blue};
  h3 {
    font-size: 27px;
    text-align: center;
    color: #fff;
    padding: 3.75rem 0;
    animation: ${BounceAnimation} 1s linear;
    display: none;
  }

  .is-visible {
    display: block;
  }
  .visible {
    display: block;
  }
  overflow: hidden;
`;

const DontMiss = ({ h1Title }) => {
  useEffect(() => {
    // var scroll = window.requestAnimationFrame ||
    // function(callback){ window.setTimeout(callback, 1000/60)};
    // var elementsToShow = document.querySelectorAll('.show-on-scroll');
    // function loop() {
    // Array.prototype.forEach.call(elementsToShow, function(element){
    // if (isElementInViewport(element)) {
    // element.classList.add('is-visible');
    // } else {
    // element.classList.remove('is-visible');
    // }
    // });
    // scroll(loop);
    // }
    // loop();
    // function isElementInViewport(el) {
    // var rect = el.getBoundingClientRect();
    // return (
    // (rect.top <= 0
    // && rect.bottom >= 0)
    // ||
    // (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    // ||
    // (rect.top >= 0 &&
    // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    // );
    // }
  });

  return (
    <>
      <DontMissStl>
        <h3 className="show-on-scroll visible">{h1Title}</h3>
      </DontMissStl>
    </>
  );
};

export default DontMiss;
