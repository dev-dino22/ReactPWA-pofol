import React, { useState } from "react";
import styled, { css } from "styled-components";

// ImgWrapProps 인터페이스 정의
interface ImgWrapProps {
    isHovered: boolean;
}

const PortfolioBanner = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ImgWrap isHovered={isHovered}>
                <img src="./image/main/keyboard-glass.png" alt="Keyboard and Glass" />
            </ImgWrap>
            <TextWrap>
                <p>Motion graphic</p>
                <p>UI/UX design</p>
                <p>Web/App design</p>
                <p>Front-end development</p>
            </TextWrap>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: #5200FF;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
`;

const ImgWrap = styled.div<ImgWrapProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    left: -112px;
    position: relative;
    top: 10px;
    transition: transform 0.5s ease; // transform 속성에 대한 부드러운 전환 효과 적용
    ${(props) =>
        props.isHovered
            ? css`
                  transform: scale(1.0); // 호버 시 확대
              `
            : css`
                  transform: scale(0.8); // 호버 해제 시 원래 크기
              `}
    img {
        display: flex;
        justify-content: flex-start;
        width: 650px;
        object-fit: cover;
        animation: float 5s ease-in-out infinite;
    }
    @keyframes float {
        0%, 100% {
            transform: translateY(-30px); // 애니메이션과 스케일 조합
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;

const TextWrap = styled.div`
    position: absolute;
    top: 22%;
    right: 0;
    color: #ffffff;
    font-weight: 100;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 10px;
    
`;

export default PortfolioBanner;
