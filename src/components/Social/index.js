import React from 'react';
import styled from 'styled-components';

const Social = styled.div`
    height: 55vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.gray};

    @media all and ${props => props.theme.devices.sm} {
        height: 125vh;
    }
`;

const Container = styled.div`
    height: 35vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 39px;
    }

    @media all and ${props => props.theme.devices.sm} {
        height: 105vh;
    }
`;

const Items = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media all and ${props => props.theme.devices.sm} {
        height: 90vh;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

const Item = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    a {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        background-color: ${props => props.theme.colors.blue};

        &:hover {
            text-decoration: none;
        }
    }

    a i {
        font-size: 32px;
    }
`;

const social = () => (
    <Social>
        <Container>
            <h1>SOCIAL</h1>
            <Items>
                <Item>
                    <h3>Instagram</h3>
                    <a href='https://www.google.com'>
                        <i className="fab fa-instagram"></i>
                    </a>
                </Item>
                <Item>
                    <h3>Facebook</h3>
                    <a href='https://www.google.com'>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </Item>
                <Item>
                    <h3>You Tube</h3>
                    <a href='https://www.google.com'>
                        <i className="fab fa-youtube"></i>
                    </a>
                </Item>
                <Item>
                    <h3>LinkedIn</h3>
                    <a href='https://www.google.com'>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </Item>
            </Items>
        </Container>
    </Social>
);

export default social;
