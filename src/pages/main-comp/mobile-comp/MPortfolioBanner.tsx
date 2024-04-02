import React, { useState } from "react";
import styled, { css } from "styled-components";


const MPortfolioBanner = () => {
    const marqueeContent = Array(60).fill("Click Me! ").join("");

    return (
        <Container
        >
            <ImgWrap>
                <img src="./image/main/keyboard-glass.png" alt="Keyboard and Glass" />
            </ImgWrap>
            <TextWrap>
                <Marquee>
                    <MarqueeTop>{marqueeContent}</MarqueeTop>
                    <MarqueeBottom>{marqueeContent}</MarqueeBottom>
                </Marquee>
                <Title>Portfolio</Title>
                <DetailText>
                    <p>Motion graphic</p>
                    <p>UI/UX design</p>
                    <p>Web/App design</p>
                    <p>Front-end development</p>
                </DetailText>
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
    width: 100%;
    overflow: hidden;
`;

const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    left:10px;
    transform: scale(1.5);
    transition: transform 0.5s ease; // transform 속성에 대한 부드러운 전환 효과 적용
    
    img {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        object-fit: cover;
        animation: float 5s ease-in-out infinite;
    }
    @keyframes float {
        0%, 100% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(5px);
        }
    }
`;

const TextWrap = styled.div`

`;

const Marquee = styled.div`
    position: absolute;
    color: #ffffff;
    font-size: 11rem;
    font-weight: 100;
    line-height: 1;
    white-space: nowrap;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
`

const MarqueeTop = styled.div`
    @keyframes marquee {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(-20%);
        }
    }
    animation: marquee 480s linear infinite;
`;

const MarqueeBottom = styled.div`
    @keyframes marquee2 {
        0% {
            transform: translateX(-20%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    animation: marquee2 480s linear infinite;
`;


const Title = styled.div`
    position: absolute;
    color: #ffffff;
    font-weight: 900;
    font-size: 8rem;
    line-height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    left: 0px;
    top: 28%;
`
const DetailText = styled.div`
    position: absolute;
    color: #ffffff;
    font-weight: 300;
    font-size: 3.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 3.6rem;
    width: 100%;
    left: 10px;
    bottom: 84px;
    p {
            margin-bottom: 4px; // p 태그 사이의 간격
            &:not(:last-child) {
                margin-bottom: 4px; // 마지막 p 태그를 제외한 모든 p 태그에 하단 마진 적용
            }

            &:hover{
                font-weight: 300;
            }
        }
    
`
export default MPortfolioBanner;
