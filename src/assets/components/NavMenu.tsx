import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useNavMenu, NavMenuContext } from "../../context/NavMenuContext";

interface IHam {
    isChecked: boolean;
}
interface IContainerProps {
    height: number;  // height 프로퍼티를 명시적으로 정의
}

interface IBotProps {
    height: number;
    isChecked: boolean;
}


const Container = styled.div<IContainerProps>`
    display: flex;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #ffffff;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    height: ${props => props.height}px; // 스타일 컴포넌트에서 높이 동적 설정
    z-index: 99; 
`

const Logo = styled.span`
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 900;
    cursor: pointer;
    z-index: 99;
    
`

const SignIn = styled.span`
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    z-index: 99; 
`
const BotContainer = styled.div<IBotProps>`
    position: absolute; 
    bottom: 0;             
    left: 0;      
    width: ${props => props.isChecked ? '100%' : '0%'};  
    height: ${props => props.height}px; // 메뉴 높이 제외한 바텀 높이
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    background: rgba(0, 0, 0, 0.852);
    transition: width 0.5s ease-in-out;
    z-index: 10;
    overflow: hidden;
`
const BotMenuListWrap = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-top: 2%;
    padding-bottom: 2%;
    p {
        color: white;
        font-size: 10rem;
        font-weight: 300;
        line-height: 10rem;
        cursor: pointer;
        &:hover {
            border-bottom: 1px solid white;
        }
    }
    border-bottom: 1px solid white;
`
const BotInfoWrap = styled.div`
    width: 100%;
    height: 40%;
    background: rgba(0, 0, 0, 0.93);
    display: flex;
    padding: 2%;
    align-items: center;
    justify-content: center;
    p{
        color: white;
        font-size: 3rem;
        line-height: 3rem;
        font-weight: 300;
        padding: 2%;
        border: 1px solid white;
    }
`




///////////////////////////     컴포넌트 정의 시작      ////////////////////////
const HamburgerSVG = () => {
    const { isChecked, setIsChecked } = useContext(NavMenuContext);
    // `pathRefs`의 타입을 명시적으로 `SVGPathElement[] | null[]`로 설정
    const pathRefs = useRef<(SVGPathElement | null)[]>([]);


    useEffect(() => {
        // `path` 요소들의 총 길이를 계산하고 로그로 출력
        pathRefs.current.forEach((path, index) => {
            if (path) {
                // 여기서 `path`는 `SVGPathElement`이므로 `getTotalLength` 메서드를 사용할 수 있습니다.
                const totalLength = path.getTotalLength();
            }
        });
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    // `path` 요소에 대한 ref를 설정하는 함수. 파라미터의 타입을 명시적으로 선언합니다.
    const setPathRef = (element: SVGPathElement | null, index: number) => {
        pathRefs.current[index] = element;
    };

    return (
        <HamContainer onClick={() => setIsChecked(!isChecked)} isChecked={isChecked}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path ref={el => setPathRef(el, 0)} className='line1' d="M0 40h62c13 0 6 28-4 18L35 35" />
                <path ref={el => setPathRef(el, 1)} className='line2' d="M0 50h70" />
                <path ref={el => setPathRef(el, 2)} className='line3' d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
        </HamContainer>

    );
}

const HamContainer = styled.span<IHam>`
    z-index: 99; // Ensure it's on top of other content
    background-color: none;
    cursor: pointer;
    position: relative;
    width: 5vw;
    height: 5vw;
    max-width: 150px;
    max-height: 150px;
    top: 0;
    left: 0;
    svg {
        transform: scale(1.2);
        width: 100%;
        height: 100%;
        @media only screen and (min-width:3840px){
            transform: scale(1.2);
        }
        @media only screen and (max-width: 3839px) {
            transform: scale(1.3);
        }
        @media only screen and (max-width: 1700px) {
            transform: scale(1.8);
        }
        @media only screen and (max-width: 799px) {
            transform: scale(2.5);
        }
        
            path {
                fill: none;
                stroke: #ffffff;
                stroke-width: 3;
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: stroke-dasharray .8s cubic-bezier(.645, .045, .355, 1), stroke-dashoffset .8s cubic-bezier(.645, .045, .355, 1);
            }

            .line1, .line3 {
                stroke-dasharray: ${props => props.isChecked ? `22.627416998, 126.64183044433594` : `24, 126.64183044433594`};
                stroke-dashoffset: ${props => props.isChecked ? `-94.1149185097` : `-38`};
            }

            .line2 {
                stroke-dasharray: ${props => props.isChecked ? `0, 70` : `24, 70`};
                stroke-dashoffset: ${props => props.isChecked ? `-50` : `-38`};
            }
        }
`;


const NavMenu = () => {
    const navigate = useNavigate();
    const { menuHeight, setMenuHeight, isChecked, setIsChecked } = useContext(NavMenuContext);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // 브라우저 창의 크기 변화를 감지해 상태를 업데이트할 수 있게 resize 이벤트 추가
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getHeight = (menuHeight: number): number => {
        const baseHeight = windowSize.height;
        let calHeight = baseHeight - menuHeight;

        return calHeight;
    };

    // rowHeight 상태 관리
    const [Height, setHeight] = useState(getHeight(menuHeight));

    // 화면 크기가 변경될 때마다 rowHeight 업데이트
    useEffect(() => {
        setHeight(getHeight(menuHeight));
    }, [windowSize, menuHeight]);

    const handlerNavigate = (url: string): void => {
        setIsChecked(false)
        navigate(url);
    }

    return (
        <>
            <Container height={menuHeight}>
                <HamburgerSVG />
                <Logo onClick={() => handlerNavigate('/')}>Nayoung</Logo>
                <SignIn onClick={() => handlerNavigate('/sign')}>Sign in</SignIn>
            </Container>
            <BotContainer isChecked={isChecked} height={Height}>
                <BotMenuListWrap>
                    <p onClick={() => handlerNavigate('/')}>Home</p>
                    <p onClick={() => handlerNavigate('/portfolio')}>Works</p>
                    <p>Contact</p>
                    <p>Playground</p>
                </BotMenuListWrap>
                <BotInfoWrap>
                    <p>포트폴리오 PDF 다운로드</p>
                </BotInfoWrap>
            </BotContainer >
        </>
    );
}

export default NavMenu;