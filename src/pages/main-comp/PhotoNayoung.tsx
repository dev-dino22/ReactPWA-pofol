import React, { useState } from "react";
import styled, { css } from "styled-components";


interface WrapProps {
    isHovered: boolean;
}


const PhotoNayoung = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <ImgWrap isHovered={isHovered}>
                <img src="./image/main/PhotoNayoung.jpeg" />
            </ImgWrap>
            <TextWrap isHovered={isHovered}>
                <p>
                    안녕하세요!
                </p>
            </TextWrap>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 30px;
    @media only screen and (max-width: 991px) {
            border-radius: 15px;
    }
`;

const ImgWrap = styled.div<WrapProps>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    top: 0px;
    transition: transform 0.5s ease; // transform 속성에 대한 부드러운 전환 효과 적용
    ${(props) =>
        props.isHovered
            ? css`
                  transform: scale(1.2); // 호버 시 확대
              `
            : css`
                  transform: scale(1.0); // 호버 해제 시 원래 크기
              `}
    img {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        object-fit: cover;
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


const TextWrap = styled.div<WrapProps>`
    position: absolute;
    top: 22%;
    left: 10px;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 10px;
    p {
        display: inline-block;
        transform: rotate(-30deg);
        transition: opacity 0.5s ease; // transform 속성에 대한 부드러운 전환 효과 적용
            ${(props) =>
        props.isHovered
            ? css`
                        opacity: 1;
                    `
            : css`
                        opacity: 0;
                    `}
}   
`;

export default PhotoNayoung;

