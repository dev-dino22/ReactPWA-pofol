import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavMenu } from "../../context/NavMenuContext";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { ReactComponent as KeySVG } from "./key-fill.svg";


interface IHeight {
    height: number;
}
interface Position {
    x: number;
    y: number;
}

interface KeyboardCompProps {
    keyRef1: React.RefObject<SVGPathElement>;
    keyRef2: React.RefObject<SVGPathElement>;
    keyRef3: React.RefObject<SVGPathElement>;
}


gsap.registerPlugin(Draggable);

const KeyboardSVG = styled.svg`
    width: 100%;
    height: auto;
    transform: scale(0.9);
    cursor: pointer;
`

const animatePath = (ref: React.RefObject<SVGPathElement>) => {
    gsap.to(ref.current, { x: 20, duration: 0.3, ease: "power1.inOut" })
        .then(() => gsap.to(ref.current, { x: 0, duration: 0.2, ease: "power1.inOut" }));
};

const KeyboardComp: React.FC<KeyboardCompProps> = ({ keyRef1, keyRef2, keyRef3 }) => {

    const [selectedKey, setSelectedKey] = useState<string | null>(null);


    useEffect(() => {
        const key1 = keyRef1.current;
        const key2 = keyRef2.current;
        const key3 = keyRef3.current;

        const clickHandler1 = () => { setSelectedKey('key1'); animatePath(keyRef1); };
        const clickHandler2 = () => { setSelectedKey('key2'); animatePath(keyRef2); };
        const clickHandler3 = () => { setSelectedKey('key3'); animatePath(keyRef3); };

        if (key1) key1.addEventListener('click', clickHandler1);
        if (key2) key2.addEventListener('click', clickHandler2);
        if (key3) key3.addEventListener('click', clickHandler3);

        return () => {
            if (key1) key1.removeEventListener('click', clickHandler1);
            if (key2) key2.removeEventListener('click', clickHandler2);
            if (key3) key3.removeEventListener('click', clickHandler3);
        };
    }, []);



    return (
        <KeyboardSVG viewBox="0 0 73 558" fill="none" xmlns="http://www.w3.org/2000/svg">

            <path ref={keyRef3} d="M6.81552 394.209L73 366V534L6.07686 500.159C2.41031 498.305 0.250926 494.397 0.632635 490.306L4.06591 453.511C4.68707 446.854 4.63902 440.151 3.92247 433.504L0.793996 404.48C0.322337 400.104 2.76689 395.935 6.81552 394.209Z" fill="url(#paint0_linear_378_410)" stroke="white" />
            <path ref={keyRef2} d="M6.81552 226.209L73 198V366L6.07686 332.159C2.41031 330.305 0.250926 326.397 0.632635 322.306L4.06591 285.511C4.68707 278.854 4.63902 272.151 3.92247 265.504L0.793996 236.48C0.322337 232.104 2.76689 227.935 6.81552 226.209Z" fill="url(#paint1_linear_378_410)" stroke="white" />
            <path ref={keyRef1} d="M6.81552 59.209L73 31V199L6.07686 165.159C2.41031 163.305 0.250926 159.397 0.632635 155.306L4.06591 118.511C4.68707 111.854 4.63902 105.151 3.92247 98.5035L0.793996 69.48C0.322337 65.1043 2.76689 60.9346 6.81552 59.209Z" fill="url(#paint2_linear_378_410)" stroke="white" />
            <rect x="46.5" y="0.5" width="57" height="557" rx="9.5" fill="black" stroke="white" />
            <defs>
                <linearGradient id="paint0_linear_378_410" x1="46.5" y1="450" x2="-54.5" y2="450" gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="1" stop-color="#6E6E6E" />
                </linearGradient>
                <linearGradient id="paint1_linear_378_410" x1="46.5" y1="282" x2="-54.5" y2="282" gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="1" stop-color="#6E6E6E" />
                </linearGradient>
                <linearGradient id="paint2_linear_378_410" x1="46.5" y1="115" x2="-54.5" y2="115" gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="1" stop-color="#6E6E6E" />
                </linearGradient>
            </defs>
        </KeyboardSVG>
    )
}

const PortfolioUI = () => {
    const { menuHeight } = useNavMenu();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [Height, setHeight] = useState(80); // 초기 높이 설정

    const handRef = useRef<HTMLDivElement>(null);
    const [initialPos, setInitialPos] = useState<Position>({ x: 0, y: 0 });

    const keyRef1 = useRef<SVGPathElement>(null); // `<path>`에 대한 참조
    const keyRef2 = useRef<SVGPathElement>(null);
    const keyRef3 = useRef<SVGPathElement>(null);


    // useEffect를 사용하여 창 크기가 변경될 때마다 windowSize 상태를 업데이트
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        //console.log('빈배열의 useEffect', '실행되었습니다');

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // menuHeight가 변경될 때마다 높이를 계산하고 업데이트
    useEffect(() => {
        const newHeight = windowSize.height - menuHeight;
        setHeight(newHeight);
    }, [windowSize, menuHeight]);



    useEffect(() => {
        if (handRef.current) {
            // 초기 위치를 저장합니다.
            const { left, top } = handRef.current.getBoundingClientRect();
            setInitialPos({ x: left, y: top });

            // Draggable 인스턴스를 생성합니다.
            const draggable = Draggable.create(handRef.current, {
                type: "x,y",
                inertia: true,
                dragResistance: 0.35,
                onRelease: function () {
                    // 드래그가 끝나면 요소를 초기 위치로 애니메이션합니다.
                    gsap.to(handRef.current, {
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "power1.outIn"
                    });
                },
                onDrag: function () {
                    // 드래그하는 동안 keyRef3와의 충돌 검사
                    if (keyRef3.current && this.hitTest(keyRef3.current, "50%")) {
                        animatePath(keyRef3);
                    }
                },

            });

            return () => {
                // 클린업 함수로 인스턴스 제거
                draggable[0].kill();
            };
        }
    }, [handRef]); // 의존성 배열에서 initialPos를 제거






    return (
        <Container height={Height} className=".container">
            <Wrap>
                <Background>
                    <TitleWrap>
                        <Title>Works.</Title>
                        <SubWrap>
                            <Sub>You can’t use up creativity.</Sub>
                            <Sub>The more you use,</Sub>
                            <Sub>the more you have</Sub>
                        </SubWrap>
                    </TitleWrap>
                    <HandWrap
                        ref={handRef}
                        className="flair2"
                    >
                        <img src="/image/portfolio/hand2.png" />
                    </HandWrap>
                    <KeyboardWrap>
                        <KeyboardComp keyRef1={keyRef1} keyRef2={keyRef2} keyRef3={keyRef3} />
                    </KeyboardWrap>
                    <KeyTitleWrap>
                        <p>Video</p>
                        <p>Video</p>
                        <p>Video</p>
                    </KeyTitleWrap>
                </Background>
                <LayoutWrap></LayoutWrap>
            </Wrap>
        </Container>
    )
};

const Container = styled.div<IHeight>`
        width: 100%;
        flex-grow: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: ${props => props.height}px;
        overflow-y: hidden;
        
`;

const Wrap = styled.div`
    display: flex;
    width: 92%;
    height: 100%;
    border-left: 1px solid #999999;
    border-right: 1px solid #999999;
    background-image: url('/image/portfolio/port-bg-img.jpg');
    background-size: cover;
    background-repeat: no-repeat; /* 이미지 반복 없음 */
    background-attachment: fixed; /* 스크롤 시 이미지 고정 */
`

const Background = styled.div`
    height: 100%; /* 전체 뷰포트 높이 */
    width: 50%; /* 전체 너비 */
    position: relative;
    overflow: hidden;
`;

const TitleWrap = styled.div`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    position: relative;
    height: 100%;
    margin-left: 6%;
    margin-top: 10%;
`

const Title = styled.p`
    font-size: 12.8rem;
    line-height: 12.8rem;
    font-weight: 900;
`
const SubWrap = styled.div`
    display: flex;
    color: #ffffff;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 16px;
`
const Sub = styled.p`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 300;
`

const HandWrap = styled.div`
    position: absolute;
    bottom: 10%;
    left: -50%;
    width: 100%;
    cursor: pointer;  // 마우스 포인터 변경
    img {
        width: 100%;
    }
`;

const KeyboardWrap = styled.div`
    position: absolute;
    bottom: 0;
    right: -1%;
    width: 8%;
`

const KeyTitleWrap = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    color: white;
    font-size: 3.2rem;
    font-weight: 600;
    flex-direction: column;
    align-items: flex-end;
    line-height: 3.2rem;
`

const LayoutWrap = styled.div`
    height: 100%; /* 전체 뷰포트 높이 */
    width: 50%; /* 전체 너비 */
    position: relative;
    background-color: #000000;
`

/*const FilterContainer = styled.div`
    display: flex;
    width: 100%;
`*/

export default PortfolioUI;