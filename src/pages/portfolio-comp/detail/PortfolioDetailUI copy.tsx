import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Wrap = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (max-width: 1400px) {
        width: 70%;
    };
`
const PriContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const PriWrap = styled.div`
    color: white;
    font-size: 2.4rem;
    display: flex;
    line-height: 2.4rem;
`
const PriTitle = styled.span`
    font-weight: 600;
    width: 200px;
`
const PriSub = styled.span`
    font-weight: 300;
`
const ProjectDesc = styled.p`
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3rem;
    color: white;
    margin-top: 80px;
`
const ImageWrap = styled.div`
    margin-top: 60px;
    width: 100%;
    height: 100%;
    overflow: hidden; /* 추가 */
    img {
        width: 100%;
    }
`

const StyledImage = styled.img<{ clipPercentage: string }>`
    width: 100%;
    clip-path: inset(0 ${props => props.clipPercentage} 0 ${props => props.clipPercentage});
    transition: clip-path 0.5s ease-out;
`;

const PortfolioDetailUI = () => {
    const [clipPercentage, setClipPercentage] = useState("50%"); // 이미지 클리핑 초기값

    useEffect(() => {
        const handleScroll = () => {
            const newClip = Math.max(0, 50 - window.scrollY / 12); // 스크롤에 따른 클리핑값 조정
            setClipPercentage(`${newClip}%`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container>
            <Wrap>
                <PriContainer>
                    <PriWrap>
                        <PriTitle>Client</PriTitle>
                        <PriSub>KB금융그룹</PriSub>
                    </PriWrap>
                    <PriWrap>
                        <PriTitle>Date</PriTitle>
                        <PriSub>November 2023</PriSub>
                    </PriWrap>
                    <PriWrap>
                        <PriTitle>Service</PriTitle>
                        <PriSub>UX/UI</PriSub>
                    </PriWrap>
                    <PriWrap>
                        <PriTitle>Skills</PriTitle>
                        <PriSub>Figma</PriSub>
                    </PriWrap>
                </PriContainer>
                <ProjectDesc>
                    큰그림컴퍼니는 옥외광고를 주 비지니스로 하는 광고 에이젼시입니다.
                    옥외광고가 가진 입체적인 특징을 잘 살리기 위해 3D오브젝트를 적극적으로 활용하여 아이덴티티가 자연스럽게 웹사이트에 스며 들도록 연출하였습니다. 크리에이티브가 중요한 비지니스인만큼 타 사이트와 차별화된 구성과 인터랙션으로 재미를 주어 웹사이트 방문자가 강한 인상을 받을 수 있도록 개발하였습니다.
                </ProjectDesc>
            </Wrap>
            <ImageWrap>
                <StyledImage
                    src="https://nayoung40.mycafe24.com/images/portfolio/kb/kb-title-image.png"
                    clipPercentage={clipPercentage}
                />
            </ImageWrap>
        </Container>
    )
}

export default PortfolioDetailUI;