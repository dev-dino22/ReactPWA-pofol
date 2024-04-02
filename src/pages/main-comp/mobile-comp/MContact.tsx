import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { Container } from 'react-dom';

interface ContainerProps {
    isPressed: boolean;
}

const MContact = () => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const handlePressStart = () => { setIsPressed(true) };
    const handlePressEnd = () => { setIsPressed(false) };

    return (
        <Container
            isPressed={isPressed}
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd} // 마우스가 요소를 벗어났을 때도 처리
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd} // 터치가 갑자기 중단되었을 때도 처리
        >
            <Wrap>
                <TextWrap>
                    <p>Contact</p>
                    <p>Meee</p>
                </TextWrap>
                <EmojiWrap>
                    <p>🤭</p>
                </EmojiWrap>
            </Wrap>


        </Container>
    );

};

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const TextWrap = styled.div`
    
`;

const EmojiWrap = styled.div`
    
`;


const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: solid 1px #fff;
    font-size: 9.4rem;
    font-weight: 100;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: #ffffff;
    transition: background-color 0.5s ease, color 0.5s ease;
    ${(props) =>
        props.isPressed
            ? css`
                        background-color: #000000;
                        color: #ffffff;
                    `
            : css`
                        background-color: #ffffff;
                        color: #000000;
                    `}
`;


export default MContact;


