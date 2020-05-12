import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Story = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    height: 70%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: 'MontserratBold';
        font-size: 39px;
        font-weight: 700;
        text-align: center;
        width: 70%;
        color: ${props => props.theme.colors.blue};
        
        @media all and ${props => props.theme.devices.sm} {
            width: 100%;
        }
    }

    p {
        font-size: 12px;
        font-weight: 300;
        line-height: 1.8;
        letter-spacing: .2px;
        text-align: center;
        width: 60%;
        
        @media all and ${props => props.theme.devices.sm} {
            width: 100%;
        }
    }

    @media all and ${props => props.theme.devices.sm} {
        width: 90%;
    }
`;

const Footer = styled.div`
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;

    span {
        font-size: 14px;
        color: gray;
    }
`;

const StyledLink = styled(props => <Link { ...props } />)`
    font-size: 14px;
    padding-left: 20px;
    color: gray;
`;

const story = ({ title, story, action, storyLinkSlug, storyLinkLabel }) => (
    <Story>
        <Container>
            <h2>
                {title}
            </h2>
            <p>{story}</p>
            <Footer>
                <span>
                    {action}
                </span>
                <StyledLink to={storyLinkSlug}>{storyLinkLabel}</StyledLink>
            </Footer>
        </Container>
    </Story>
);

export default story;