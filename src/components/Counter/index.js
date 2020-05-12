import React, { useEffect } from 'react';
import styled from 'styled-components';

const CounterDiv = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media all and ${props => props.theme.devices.md} {
        height: 180vh;
    }
`;

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Items = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media all and ${props => props.theme.devices.md} {
        height: 160vh;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const Item = styled.div`
    height: 40vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-family: ${props => props.theme.fonts.montserratBold};
        color: ${props => props.theme.colors.darkBlue}
    }

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div h5 {
        text-align: center;
        padding: 0 10px;
        color: ${props => props.theme.colors.blue}
    }

    div p {
        font-size: 14px;
        text-align: center;
        padding: 0 10px;
        color: ${props => props.theme.colors.lightBlue}
    }

    @media all and ${props => props.theme.devices.md} {
        height: 30vh;
        width: 100%;
    }
`;

const Bottom = styled.div`
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const Counter = ({ counter1, counter1Text, counter2, counter2Text, counter3, counter3Text, counter4, counter4Text }) => {
    useEffect(() => {
        const nodes = document.querySelectorAll(".counter");
        const onces = [false, false, false, false];
        const amounts = [59, 312, 48, 24];
        const rates = [100, 20, 100, 200];


        let scroll = window.requestAnimationFrame || (callback => window.setTimeout(callback, 1000));

        const inViewport = node => {
            var rect = node.getBoundingClientRect();
            return (
                (rect.top <= 0 && rect.bottom >= 0) ||
                (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
                (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
        };

        const counting = (node, index, amount, rate) => {
            if (!onces[index] && inViewport(node)) {
                let count = 0;
                const frame = () => {
                    if (count >= amount) {
                        clearInterval(interval);
                    } else {
                        count++;
                        node.innerHTML = count;
                    };
                };
                const interval = setInterval(frame, rate);
                onces[index] = true;
            };
        };

        const loop = () => {

            nodes.forEach((node, i) => counting(node, i, amounts[i], rates[i]));
        
            scroll(loop);
        };

        loop();
    }, []);
    
    return (
        <CounterDiv>
            <Container>
                <Items>
                    <Item>
                        <h1 className='counter'>0</h1>
                        <Bottom>
                            <h5>{counter1}</h5>
                            <p>{counter1Text}</p>
                        </Bottom>
                    </Item>
                    <Item>
                        <h1 className='counter'>0</h1>
                        <Bottom>
                            <h5>{counter2}</h5>
                            <p>{counter2Text}</p>
                        </Bottom>
                    </Item>
                    <Item>
                        <h1 className='counter'>0</h1>
                        <Bottom>
                            <h5>{counter3}</h5>
                            <p>{counter3Text}</p>
                        </Bottom>
                    </Item>
                    <Item>
                        <h1 className='counter'>0</h1>
                        <Bottom>
                            <h5>{counter4}</h5>
                            <p>{counter4Text}</p>
                        </Bottom>
                    </Item>
                </Items>
            </Container>
        </CounterDiv>
    );
};

export default Counter;