//마우스 따라 움직이는 눈알
import React, { useEffect, useRef, useState } from "react";
import { useRafState } from "react-use";
import styled from "styled-components";

const EyelineSVG = () => {

    return (
        <svg width="97" height="68" viewBox="0 0 97 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 26.5L9.5 12M49.5 17V3M78 26.5L89.5 17" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <mask id="path-2-outside-1_137_673" maskUnits="userSpaceOnUse" x="0" y="15" width="97" height="53" fill="black">
                <rect fill="white" y="15" width="97" height="53" />
                <path d="M7 43.2826C19.1869 25.9109 56.8276 3.31232 92 43.2826C76.8306 61.4229 36.4646 76.6424 7 43.2826Z" />
            </mask>
            <path d="M7 43.2826L2.9068 40.4111L0.642929 43.6381L3.25245 46.5926L7 43.2826ZM92 43.2826L95.8356 46.4901C97.4187 44.597 97.3838 41.8321 95.7536 39.9795L92 43.2826ZM11.0932 46.1541C16.5461 38.3814 27.9266 29.2505 41.7865 26.6966C55.2149 24.2222 71.7007 27.783 88.2464 46.5857L95.7536 39.9795C77.1269 18.8119 57.2062 13.6869 39.9744 16.8621C23.1742 19.9579 9.64083 30.8121 2.9068 40.4111L11.0932 46.1541ZM88.1644 40.0751C81.3993 48.1652 68.6738 55.8815 54.2581 57.6316C40.1213 59.3478 24.3254 55.3454 10.7475 39.9726L3.25245 46.5926C19.1392 64.5796 38.2586 69.6474 55.4633 67.5587C72.3891 65.5039 87.4313 56.5404 95.8356 46.4901L88.1644 40.0751Z" fill="white" mask="url(#path-2-outside-1_137_673)" />
        </svg>
    );
}


const IrisSVG = () => {
    return (
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '40px', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <circle cx="20" cy="20" r="20" fill="white" />
            <circle cx="27" cy="9" r="4" fill="black" />
        </svg>
    );
}

const EyelineCloseSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="68" viewBox="0 0 97 68" fill='#ffffff' style={{ transform: 'scale(0.8)', top: '16px', position: 'relative' }}>
            <path d="M95.93,19.65c1.13-1.18,1.09-3.05-.1-4.18-1.18-1.13-3.05-1.09-4.18.1-14.33,14.99-29.29,22.28-44.46,21.64C23.46,36.2,6.85,15.95,6.69,15.75c-1.02-1.27-2.88-1.47-4.16-.45-1.27,1.02-1.48,2.89-.45,4.16.38.47,5.19,6.35,13.32,12.13l-10.25,13.59c-.98,1.3-.72,3.16.58,4.14.53.4,1.16.6,1.78.6.9,0,1.78-.41,2.36-1.18l10.49-13.92c7.17,4.25,16.17,7.84,26.52,8.28.21,0,.42,0,.64.01v18.04c0,1.63,1.32,2.96,2.96,2.96s2.96-1.32,2.96-2.96v-18.23c8.15-.72,16.18-3.46,24.03-8.19l11.56,14.09c.58.71,1.43,1.08,2.29,1.08.66,0,1.32-.22,1.87-.67,1.26-1.04,1.45-2.9.41-4.16l-11.16-13.61c4.56-3.27,9.06-7.2,13.48-11.83Z" />
        </svg>
    );
}


const Eye = () => {
    const [showEye, setShowEye] = useState(true);
    const [transform, setTransform] = useState('');
    const originRef = useRef<HTMLButtonElement>(null);

    const handleMouseEnter = () => setShowEye(false);
    const handleMouseLeave = () => setShowEye(true);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!originRef.current) return;

            const { left, top, width, height } = originRef.current.getBoundingClientRect();
            //현재 eye(Button) 기준 중심점 구하기
            const x1 = left + width / 2;
            const y1 = top + height / 2;
            //사용자의 현재 마우스 위치
            const x2 = e.clientX;
            const y2 = e.clientY;
            //현재 스크린 중심점과 사용자 마우스 위치 거리
            const dx = x2 - x1;
            const dy = y2 - y1;

            //dy/dx의 아크탄젠트. 두 점 사이 상대적인 각도를 라디안 단위로 반환(마우스 포인터와 화면 중심점 사이의 방향)
            const angle = Math.atan2(dy, dx);

            const maxDistanceX = 14; // X축 최대 이동 거리를 조정
            const maxDistanceY = 7; // Y축 최대 이동 거리를 조정

            //두 값(절댓값 dx,dy 와 위에서 설정한 최댓값 maxDistanceX,Y)중에 작은 값을 선택
            const distanceX = Math.min(Math.abs(dx), maxDistanceX);
            const distanceY = Math.min(Math.abs(dy), maxDistanceY);

            // 각 축의 실제 이동 거리 계산
            const translateX = distanceX * Math.cos(angle);
            const translateY = distanceY * Math.sin(angle);

            setTransform(`translate(${translateX}px, ${translateY}px)`);
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };

    }, []);

    return (
        <Container>
            <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={originRef}>
                {showEye ? (
                    <>
                        <EyelineSVG />
                        <Iris style={{ transform }}>{<IrisSVG />}</Iris>
                    </>
                ) : (
                    <EyelineCloseSVG />
                )}
            </Button>
        </Container>

    );
}



const Iris = styled.div`
  position: relative;
  bottom: 70px;
  transition: transform 100ms linear;
`;

const Button = styled.button`
  position: relative;
  background: none;
  border: none;
  left: 38px;
`;

const Container = styled.div`
    transform: scale(1);
    @media only screen and (max-width: 1400px) {
        transform: scale(0.9);
    }
    @media only screen and (max-width: 1200px) {
        transform: scale(0.8);
    }
    @media only screen and (max-width: 991px) {
        transform: scale(0.7);
    }
    @media only screen and (max-width: 767px) {
        transform: scale(0.6);
    }
`
export default Eye;
