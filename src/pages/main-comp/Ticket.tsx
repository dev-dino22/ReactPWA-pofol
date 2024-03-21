import React, { useState } from "react";
import styled, { css } from "styled-components";

interface WrapProps {
    isHovered: boolean;
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

const Ticket = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <TopContainer>
                <TopWrap>
                    <ImgWrap>
                        <img src="./image/main/ticket-top-woman.png" />
                        <TextWrap>
                            <LeftText>Front</LeftText>
                            <RightText>Playground</RightText>
                            <LeftBottomText>2024.05~</LeftBottomText>
                        </TextWrap>
                    </ImgWrap>
                </TopWrap>
            </TopContainer>

            <BottomContainer isHovered={isHovered}>
                <BottomWrap>
                    <BarcodeWrap>
                        <p style={{ color: '#000000', fontWeight: '400', fontSize: '16px', position: 'relative', bottom: '2px' }}>Nayoung Playground</p>
                        <StyledBarcodeSVG />
                        <p>10 7885 15555669 789651</p>
                    </BarcodeWrap>
                </BottomWrap>
            </BottomContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    border-radius: 15px;

`;

const BottomContainer = styled.div<WrapProps>`
        display: flex;
        width: 100%;
        height: 28%;
        transform-origin: top left; // 회전의 중심점을 상단 왼쪽으로 설정
        transition: transform 0.3s ease; // transform 속성에 대한 부드러운 전환 효과 적용
            ${(props) =>
        props.isHovered
            ? css`
                        transform: rotate(6deg);
                    `
            : css`
                        transform: rotate(0deg);
                    `}
`;

const TopContainer = styled.div`
    display: flex;
    height: 72%;
    background-color: #ffffff;
    border-bottom: 1px dashed #888888;
    overflow: hidden;
    border-radius: 15px 15px 10px 10px;
`;

const TopWrap = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    border: 4px solid #ffffff;
    overflow: hidden;
    border-radius: 15px 15px 10px 10px;
`;

const ImgWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative; // 여기에 추가
    border-radius: 15px;
    overflow: hidden;
    img {
        display: flex;
        width: 180%;
        object-fit: cover;
        position: relative;
        right: 40px;
        top: 0px;
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
    font-size: 16px;
`;

const LeftText = styled.p`
    position: absolute; // 절대 위치 사용
    left: 20px;
    top: 94px;
    transform: translate(-50%, -50%) rotate(90deg); // 위치 조정 및 회전
    font-size: 62px;
    font-weight: 700;
    color: #001AFF;
`;

const RightText = styled.p`
    position: absolute; // 절대 위치 사용
    right: 20px;
    bottom: 122px;
    transform: translate(50%, -50%) rotate(-90deg); // 위치 조정 및 회전
    font-size: 56px;
    font-weight: 200;
    color: #001AFF;
`;

const LeftBottomText = styled.p`
    position: absolute;
    left: 14px;
    bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
`

const BottomWrap = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border: 4px solid #ffffff;
        overflow: hidden;
        border-radius: 10px 10px 15px 15px;
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
`;

const StyledBarcodeSVG = styled(BarcodeSVG)`
    max-width: 100%;
    height: auto; // 높이를 자동 조정합니다.
    display: block; // SVG를 블록 레벨 요소로 만듭니다.
`;

export default Ticket;