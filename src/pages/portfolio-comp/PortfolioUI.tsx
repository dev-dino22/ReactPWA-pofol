import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavMenu } from "../../context/NavMenuContext";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { ReactComponent as KeySVG } from "./key-fill.svg";
import PortfolioLayout from "./PortfolioLayout";
import mouseSVG from "./mouseSVG.svg";
import { useNavigate, useLocation } from "react-router-dom";

/* 
/*  스타일 컴포넌트 (CSS in JS) 로 작성된 페이지입니당. svg는 inline으로 작성.
*/

////////////////////////////   인터페이스 정의 시작   //////////////////////////////

// 메뉴를 제외한 높이를 구하기위한 인터페이스
interface IHeight {
    height: number;
}

// HandWrap(손 오브젝트) 위치를 구하기 위한 인터페이스 
interface Position {
    x: number;
    y: number;
}

// 키보드 1번 2번 3번 구분 위한 인터페이스
interface IKeyRef {
    keyRef1: React.RefObject<SVGPathElement>;
    keyRef2: React.RefObject<SVGPathElement>;
    keyRef3: React.RefObject<SVGPathElement>;
    keyRef4: React.RefObject<SVGPathElement>;
}
////////////////////////////   인터페이스 정의 끝   ////////////////////////////////


////////////////////////////   GSAP Draggable 플러그인 권한 생성   /////////////////
gsap.registerPlugin(Draggable);
////////////////////////////   GSAP Draggable 플러그인 권한 생성 끝   ///////////////


////////////////////////////   스타일 컴포넌트 생성   ///////////////////////////////

const KeyboardSVG = styled.svg`
    width: 100%;
    height: auto;
    transform: scale(1.2);
    cursor: pointer;
    position: relative;
    bottom: 100px;
`
const Container = styled.div<IHeight>`
        width: 100%;
        flex-grow: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: ${props => props.height}px;
        overflow: hidden;
        
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
`
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
const HandDragInfo = styled.div`
    position: absolute;
    z-index: 7;
    left: 10%;
    bottom: 20%;
    width: 10%;
    animation: drag 3s ease-in-out infinite;
    pointer-events: none;
    @keyframes drag {
        0% {
            left: 20%;
            opacity: 0;
        }
        30%{
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            left: 50%;
            opacity: 0;
        }
    }
`
const HandWrap = styled.div<{ firstHand: boolean }>`
    position: absolute;
    bottom: 10%;
    left: -50%;
    width: 100%;
    cursor: pointer;  // 마우스 포인터 변경
    img {
        width: 100%;
        filter: ${props => props.firstHand ? 'blur(4px) contrast(150%) brightness(0.5)' : 'none'};
        animation: ${props => props.firstHand ? 'fade 2s ease infinite' : 'none'};
    };
    @keyframes fade {
        0%, 100% {
            filter: blur(4px) contrast(150%) brightness(0.3);
        }
        50% {
            filter: blur(2px) contrast(150%) brightness(0.8);
        }
    }
`
const HandPoint = styled.div`
    width: 5%;
    height: 16%;
    position: absolute;
    right: 0;
    top: 40%;
`
const KeyboardWrap = styled.div`
    position: absolute;
    bottom: 0;
    right: -1%;
    width: 8%;
`
const KeyTitleWrap = styled.div`
    display: flex;
    position: absolute;
    right: 10%;
    bottom: 11%;
    color: white;
    font-size: 4.2rem;
    font-weight: 600;
    flex-direction: column;
    align-items: flex-end;
    line-height: 3.2rem;
    height: 32%;
    justify-content: space-between;
`
const LayoutWrap = styled.div`
    height: 100%; /* 전체 뷰포트 높이 */
    width: 50%; /* 전체 너비 */
    @media only screen and (max-width: 991px) {
        width: 100%;
    }
    position: relative;
    background-color: #000000;
`
////////////////////////////   스타일 컴포넌트 생성 끝   /////////////////////////////


////////////////////////////   키보드 눌리는 GSAP 애니메이션   ///////////////////////

const animatePath = (ref: React.RefObject<SVGPathElement>) => {
    if (ref.current) {
        gsap.to(ref.current, { x: 20, duration: 0.3, ease: "power1.inOut", })
            .then(() => gsap.to(ref.current, { x: 0, duration: 0.2, ease: "power1.inOut" }));
    }
}

////////////////////////////   키보드 눌리는 GSAP 애니메이션 끝   /////////////////////


////////////////////////////   키보드 컴포넌트   ///////////////////////////////////
/* 각 키의 현재 상태를 추적하고 click EventLinstner 생성 
/* 키보드의 SVG 렌더링. inline SVG.
/* SVG 옆에 텍스트가 출력되고 해당 텍스트가 이미지처럼 반응형으로 되도록 relative로 감싸줌 */

const KeyboardComp: React.FC<IKeyRef> = ({ keyRef1, keyRef2, keyRef3, keyRef4 }) => {

    const [selectedKey, setSelectedKey] = useState<string | null>(null);

    return (
        <div style={{ position: 'relative' }}>
            <KeyboardSVG viewBox="0 0 104 728" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={keyRef4} d="M6.81552 562.209L73 534V702L6.07686 668.159C2.41031 666.305 0.250926 662.397 0.632635 658.306L4.06591 621.511C4.68707 614.854 4.63902 608.151 3.92247 601.504L0.793996 572.48C0.322337 568.104 2.76689 563.935 6.81552 562.209Z" fill="url(#paint1_linear_469_495)" stroke="white" />
                <path ref={keyRef3} d="M6.81552 394.209L73 366V534L6.07686 500.159C2.41031 498.305 0.250926 494.397 0.632635 490.306L4.06591 453.511C4.68707 446.854 4.63902 440.151 3.92247 433.504L0.793996 404.48C0.322337 400.104 2.76689 395.935 6.81552 394.209Z" fill="url(#paint0_linear_469_495)" stroke="white" />
                <path ref={keyRef2} d="M6.81552 226.209L73 198V366L6.07686 332.159C2.41031 330.305 0.250926 326.397 0.632635 322.306L4.06591 285.511C4.68707 278.854 4.63902 272.151 3.92247 265.504L0.793996 236.48C0.322337 232.104 2.76689 227.935 6.81552 226.209Z" fill="url(#paint2_linear_469_495)" stroke="white" />
                <path ref={keyRef1} d="M6.81552 59.209L73 31V199L6.07686 165.159C2.41031 163.305 0.250926 159.397 0.632635 155.306L4.06591 118.511C4.68707 111.854 4.63902 105.151 3.92247 98.5035L0.793996 69.48C0.322337 65.1043 2.76689 60.9346 6.81552 59.209Z" fill="url(#paint3_linear_469_495)" stroke="white" />
                <rect x="46.5" y="0.5" width="57" height="727" rx="9.5" fill="black" stroke="white" />
                <defs>
                    <linearGradient id="paint0_linear_469_495" x1="46.5" y1="450" x2="-54.5" y2="450" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopColor="#6E6E6E" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_469_495" x1="46.5" y1="618" x2="-54.5" y2="618" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopColor="#6E6E6E" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_469_495" x1="46.5" y1="282" x2="-54.5" y2="282" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopColor="#6E6E6E" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_469_495" x1="46.5" y1="115" x2="-54.5" y2="115" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopColor="#6E6E6E" />
                    </linearGradient>
                </defs>
            </KeyboardSVG>
            <p style={{ fontWeight: '600', fontSize: '4.6rem', position: 'absolute', top: '-15%', left: '-100%', transform: 'translate(-50%, -50%)', color: '#ffffffa6' }}>
                UX/UI
            </p>
            <p style={{ fontWeight: '600', fontSize: '4.6rem', position: 'absolute', top: '12%', left: '-100%', transform: 'translate(-50%, -50%)', color: '#ffffffa6' }}>
                Video
            </p>
            <p style={{ fontWeight: '600', fontSize: '4.6rem', position: 'absolute', top: '40%', left: '-100%', transform: 'translate(-50%, -50%)', color: '#ffffffa6' }}>
                Dev
            </p>
            <p style={{ fontWeight: '600', fontSize: '4.6rem', position: 'absolute', top: '67%', left: '-120%', transform: 'translate(-50%, -50%)', color: '#ffffffa6' }}>
                Graphic
            </p>
        </div>
    )
}

////////////////////////////   키보드 컴포넌트 끝   /////////////////////////////////


////////////////////////////   현재 페이지 메인 컴포넌트   ////////////////////////////

const PortfolioUI = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { menuHeight } = useNavMenu();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [Height, setHeight] = useState(80); // 초기 높이 설정
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handRef = useRef<HTMLDivElement>(null);
    const handPoint = useRef<HTMLDivElement>(null);
    const [firstHand, setFirstHand] = useState<boolean>(true);

    const keyRef1 = useRef<SVGPathElement>(null); // `<path>`에 대한 참조
    const keyRef2 = useRef<SVGPathElement>(null);
    const keyRef3 = useRef<SVGPathElement>(null);
    const keyRef4 = useRef<SVGPathElement>(null);

    const [initialPos, setInitialPos] = useState<Position>({ x: 0, y: 0 });

    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    // 페이지 로드 시 전달된 상태를 기반으로 필터 설정
    useEffect(() => {
        if (location.state?.filterKey) {
            setSelectedKeys([location.state.filterKey]);
        }
    }, [location.state]);

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
        if (windowSize.width < 991) {
            setIsMobile(true);
        } else if (windowSize.width >= 991) {
            setIsMobile(false);
        }
    }, [windowSize])

    // 어떤 키를 선택했는지 상태 배열에 추가하는 함수
    const toggleKeySelection = (keyName: string) => {
        setSelectedKeys(prevKeys => {
            const index = prevKeys.indexOf(keyName);
            if (index > -1) {
                // 이미 존재하면 제거
                return prevKeys.filter(k => k !== keyName);
            } else {
                // 존재하지 않으면 추가
                return [...prevKeys, keyName];
            }
        });
    };

    // 각 키에 대한 클릭 이벤트 핸들러를 설정합니다.
    useEffect(() => {
        const refs = [keyRef1, keyRef2, keyRef3, keyRef4];
        const handlers = refs.map((ref, idx) => {
            return () => {
                const keyName = `keyRef${idx + 1}`;
                toggleKeySelection(keyName);
                animatePath(ref);
            };
        });

        refs.forEach((ref, idx) => {
            ref.current?.addEventListener('click', handlers[idx]);
        });

        return () => {
            refs.forEach((ref, idx) => {
                ref.current?.removeEventListener('click', handlers[idx]);
            });
        };
    }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 이벤트 리스너를 설정

    useEffect(() => {
        console.log(selectedKeys);
    }, [selectedKeys]);

    useEffect(() => {
        if (handRef.current && handPoint.current) {
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
                    setFirstHand(false);
                    [keyRef1, keyRef2, keyRef3, keyRef4].forEach((ref, idx) => {
                        const keyName = `keyRef${idx + 1}`;
                        if (ref.current && handPoint.current) {
                            const keyRect = ref.current.getBoundingClientRect();
                            const handPointRect = handPoint.current.getBoundingClientRect();

                            // handPointRect와 keyRect를 사용한 충돌 검사
                            if (handPointRect.right > keyRect.left &&
                                handPointRect.left < keyRect.right &&
                                handPointRect.bottom > keyRect.top &&
                                handPointRect.top < keyRect.bottom) {
                                animatePath(ref);
                                toggleKeySelection(keyName);
                                this.endDrag(); // 충돌이 일어나면 드래그 종료
                            }
                        }
                    });
                },
            });

            return () => {
                // 클린업 함수로 인스턴스 제거
                draggable[0].kill();
            };
        }
    }, []);

    return (
        <Container height={Height} className=".container">
            <Wrap>
                {!isMobile && <Background>
                    {firstHand && <HandDragInfo>
                        <img src={mouseSVG}></img>
                    </HandDragInfo>}
                    <TitleWrap>
                        <Title>Works.</Title>
                        <SubWrap>
                            <Sub>You can't use up creativity.</Sub>
                            <Sub>The more you use,</Sub>
                            <Sub>the more you have</Sub>
                        </SubWrap>
                    </TitleWrap>
                    <HandWrap
                        ref={handRef}
                        className="flair2"
                        firstHand={firstHand}
                    >
                        <HandPoint ref={handPoint} />
                        <img src="/image/portfolio/hand2.png" />
                    </HandWrap>
                    <KeyboardWrap>
                        <KeyboardComp keyRef1={keyRef1} keyRef2={keyRef2} keyRef3={keyRef3} keyRef4={keyRef4} />
                    </KeyboardWrap>
                </Background>}
                <LayoutWrap>
                    <PortfolioLayout selectedKeys={selectedKeys} toggleKeySelection={toggleKeySelection} />
                </LayoutWrap>
            </Wrap>
        </Container>
    )
};

////////////////////////////   현재 페이지 메인 컴포넌트 끝   //////////////////////////

export default PortfolioUI;