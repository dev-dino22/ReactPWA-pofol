import React, { useState } from "react";
import styled, { css } from "styled-components";

interface WrapProps {
    isPressed: boolean;
}

const BarcodeSVG = () => {
    return (
        <svg viewBox="0 0 259 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="94" fill="black" />
            <rect x="12" width="8" height="94" fill="black" />
            <rect x="24" width="27" height="94" fill="black" />
            <rect x="55" width="4" height="94" fill="black" />
            <rect x="63" width="11" height="94" fill="black" />
            <rect x="78" width="21" height="94" fill="black" />
            <rect x="103" width="7" height="94" fill="black" />
            <rect x="114" width="6" height="94" fill="black" />
            <rect x="124" width="17" height="94" fill="black" />
            <rect x="145" width="4" height="94" fill="black" />
            <rect x="153" width="11" height="94" fill="black" />
            <rect x="168" width="21" height="94" fill="black" />
            <rect x="193" width="7" height="94" fill="black" />
            <rect x="204" width="4" height="94" fill="black" />
            <rect x="212" width="11" height="94" fill="black" />
            <rect x="227" width="21" height="94" fill="black" />
            <rect x="252" width="7" height="94" fill="black" />
        </svg>
    );

}

const MTicket = () => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const handlePressStart = () => {
        setIsPressed(true);
    };

    const handlePressEnd = () => {
        setIsPressed(false);
    };

    return (
        <Container
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd} // 마우스가 요소를 벗어났을 때도 처리
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd} // 터치가 갑자기 중단되었을 때도 처리
        >
            <LeftContainer>
                <TopWrap>
                    <ImgWrap>
                        <img src="./image/main/ticket-top-woman.png" />
                        <TextWrap>
                            <LeftText>Front</LeftText>
                            <RightText>Playground</RightText>
                            <LeftBottomText>2025~</LeftBottomText>
                        </TextWrap>
                    </ImgWrap>
                </TopWrap>
            </LeftContainer>

            <RightContainer isPressed={isPressed}>
                <BottomWrap>
                    <BarcodeWrap>
                        <p style={{ bottom: '1rem' }}>Nayoung Playground</p>
                        <StyledBarcodeSVG />
                        <p style={{ top: '1rem' }}>10 7885 1556 789651</p>
                    </BarcodeWrap>
                </BottomWrap>
            </RightContainer>
        </Container>
    );
}

const Container = styled.div`
        display: flex;
    flex-direction: row;
    height: 100%;
    border-radius: 30px;
    align-items: center;
    @media only screen and (max-width: 991px) {
            border-radius: 15px;
    }

`;

const RightContainer = styled.div<WrapProps>`
        display: flex;
        height: 100%;
        width: 32%;
        transform-origin: bottom left; // 회전의 중심점을 하단 왼쪽으로 설정
        transition: transform 0.3s ease; // transform 속성에 대한 부드러운 전환 효과 적용
            ${(props) =>
        props.isPressed
            ? css`
                        transform: rotate(6deg);
                    `
            : css`
                        transform: rotate(0deg);
                    `}
`;

const LeftContainer = styled.div`
    display: flex;
    Width: 68%;
    height: 100%;
    background-color: #ffffff;
    border-right: 1px dashed #888888;
    overflow: hidden;
    border-radius: 30px 15px 15px 30px;
    @media only screen and (max-width: 991px) {
        border-radius: 15px 10px 10px 15px;
    }
`;

const TopWrap = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    border: 4px solid #ffffff;
    overflow: hidden;
    border-radius: 30px 15px 15px 30px;
    @media only screen and (max-width: 991px) {
        border-radius: 15px 10px 10px 15px;
    }
`;

const ImgWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative; // 여기에 추가
    border-radius: 15px;
    @media only screen and (max-width: 991px) {
        border-radius: 10px;
    }
    overflow: hidden;
    img {
        display: flex;
        width: 180%;
        object-fit: cover;
        position: relative;
        right: 92px;
        top: 64px;
        transform: rotate(-90deg) scale(0.7);
    }
`;

const TextWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; // ImgWrap와 동일한 너비
    height: 100%; // ImgWrap와 동일한 높이
    display: flex;
    justify-content: center; // 가운데 정렬
    align-items: center; // 세로 방향 가운데 정렬
    font-weight: 400;
    font-size: 1.6rem;
`;

const LeftText = styled.p`
        position: absolute;
    left: 18rem;
    top: 7rem;
    transform: translate(-50%, -50%);
    font-size: 12rem;
    font-weight: 900;
    color: #001AFF;
`;

const RightText = styled.p`
    position: absolute;
    right: 29rem;
    bottom: 6.5rem;
    transform: translate(50%, -50%);
    font-size: 11rem;
    font-weight: 200;
    color: #001AFF;
`;

const LeftBottomText = styled.p`
    position: absolute;
    left: 3.4rem;
    bottom: 4rem;
    font-size: 4rem;
    font-weight: 300;
    color: #e8e9ff;
`

const BottomWrap = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border: 4px solid #ffffff;
        overflow: hidden;
        border-radius: 15px 30px 30px 15px;
        @media only screen and (max-width: 991px) {
            border-radius: 10px 10px 15px 15px;
        }
`;

const BarcodeWrap = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 8px;
        background-color: #D7D8FF ;

        p {
            color: #000000;
            font-weight: 400;
            font-size: 3rem;
            position: relative;
        }
`;

const StyledBarcodeSVG = styled(BarcodeSVG)`
    max-width: 100%;
    height: auto; // 높이를 자동 조정합니다.
    display: block; // SVG를 블록 레벨 요소로 만듭니다.
`;

export default MTicket;