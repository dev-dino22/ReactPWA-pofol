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

const Container = styled.div<IContainerProps>`
     display: flex;
    width: 100%;
    border-bottom: 1px solid #ffffff;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    height: ${props => props.height}px; // 스타일 컴포넌트에서 높이 동적 설정
`

const Logo = styled.span`
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 900;
    cursor: pointer;
    
`

const SignIn = styled.span`
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`




///////////////////////////     스타일컴포넌트 정의 끝 /
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
    const { menuHeight, setMenuHeight } = useContext(NavMenuContext);

    return (
        <>
            <Container height={menuHeight}>
                <HamburgerSVG />
                <Logo onClick={() => navigate('/')}>Nayoung</Logo>
                <SignIn onClick={() => navigate('/sign')}>Sign in</SignIn>
            </Container>
        </>
    );
}

export default NavMenu;