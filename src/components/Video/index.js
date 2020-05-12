import React from 'react';
import styled from 'styled-components';

const Video = styled.div`
    height: 120vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and ${props => props.theme.devices.sm} {
        height: 160vh;
    }
`;

const Container = styled.div`
    height: 100vh;
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
        height: 140vh;
    }
`;

const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media all and ${props => props.theme.devices.sm} {
        height: 60vh;
        flex-direction: column;
    }
`;

const Item = styled.div`
    height: 20vh;
    width: 33.3%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    i {
        font-size: 64px;
        width: 30%;
        color: ${props => props.theme.colors.blue};
    }

    div {
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    div h5, div p {
        text-align: left;
        padding: 0 10px;
        color: ${props => props.theme.colors.blue};
    }

    @media all and ${props => props.theme.devices.sm} {
        width: 100%;

        div {
            justify-content: center;
        }

        div h5 {
            padding: 0 10px 10px;
        }
    }
`;

const video = ({ videoTitle, videoCre, videoCreText, videoEnt, videoEntText, videoSuc, videoSucText }) => (
    <Video>
        <Container>
            <h1>{videoTitle}</h1>
            <video width="480" height="360" controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Items>
                <Item>
                    <i className="far fa-lightbulb"></i>
                    <div>
                        <h5>{videoCre}</h5>
                        <p>{videoCreText}</p>
                    </div>
                </Item>
                <Item>
                <i className="fab fa-black-tie"></i>
                    <div>
                        <h5>{videoEnt}</h5>
                        <p>{videoEntText}</p>
                    </div>
                </Item>
                <Item>
                    <i className="fas fa-medal"></i>
                    <div>
                        <h5>{videoSuc}</h5>
                        <p>{videoSucText}</p>
                    </div>
                </Item>
            </Items>
        </Container>
    </Video>
);

export default video;