import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavMenu } from "../context/NavMenuContext";

interface InputType {
    label?: string;
    type: string;
    placeholder: string;
    style?: React.CSSProperties;
}

interface IInfoLink {
    info: string;
    link: string;
    style?: React.CSSProperties;
}

interface IHeight {
    height: number;
}

const Container = styled.div<IHeight>`
        width: 100%;
        flex-grow: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        height: ${props => props.height}px;
        @media only screen and (max-height: 668px) {
            height: 100%;
        }
`;

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-grow: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding-bottom: 80px;
    @media only screen and (max-height: 668px) {
        padding-bottom: 0px;
        padding-top: 10px;
    }
`;

const LogoSVG = styled.div`
    width: 60px;
    height: 60px;

    @media only screen and (max-width: 991px)
    {
       transform: scale(0.8);
    }
`

const Title = styled.div`
    color: white;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.19;
`

//input과 함께 쓰일 label 의 스타일 컴포넌트
const Label = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.88;
    text-align: left;
    color: #fff;

    
`
// input 의 스타일 컴포넌트
const Input = styled.input`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 15px;
    color: #fff; // 입력 텍스트도 흰색으로 설정
    font-size: 16px; // 폰트 크기는 적절하게 조정하세요.
    padding: 10px 10px 10px 20px; // 패딩은 입력 경험에 따라 조정하세요.
    margin-bottom: 10px; // 다음 입력 창과의 간격
    width: 100%; // 인풋 박스의 너비
    height: 60px;

    &::placeholder { // 플레이스홀더 스타일
        color: rgba(255, 255, 255, 0.7); // 플레이스홀더는 조금 더 옅은 색으로
    }
  
    &:focus { // 포커스됐을 때 스타일
        outline: none;
        border: 1px solid #3CADFF; // 예시로 파란색 테두리를 사용했습니다.
    }
`
// input과 라벨을 감싸는 컨테이너 스타일 컴포넌트
const InputContainer = styled.div`
    display: flex;
    flex-direction: column; // 레이블과 인풋을 세로로 정렬합니다
    gap: 6px;
    width: 380px;
    @media only screen and (max-width: 575px) {
        width: 80%;
    }
`;

const Button = styled.div`
    display: flex;
    cursor: pointer;
    background: #5200ff;
    border-radius: 15px;
    width: 380px;
    height: 60px;
    align-items: center;
    justify-content: center;
    p {
        color: #fff;
        font-size: 24px; 
        font-weight: 600;
    }
    &:hover {
        background: #3a00b8;
        p {
            color: #c7c7c7;
        }
    }

    @media only screen and (max-width: 575px) {
        width: 80%;
    }
`

// input 의 라벨, 타입, 플레이스홀더, css를 프로퍼티로 설정할 수 있게 정의하는 컴포넌트
const InputField: React.FC<InputType> = ({ label, type, placeholder, style }) => {
    return (
        <InputContainer style={style}>
            <Label>{label}</Label>
            <Input type={type} placeholder={placeholder} />
        </InputContainer>
    );
};

const InfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 380px;
    font-size: 16px;

    .info {
        color: #5e5e5e;
    }
    .link {
        color: #a8a8a8;
        text-decoration: underline;
        cursor: pointer;
    }

    @media only screen and (max-width: 575px) {
        width: 80%;
    }
`

const InfoLink: React.FC<IInfoLink> = ({ info, link, style }) => {
    return (
        <InfoWrap style={style}>
            <span className="info">{info}</span>
            <span className="link">{link}</span>
        </InfoWrap>
    )
}


const SignInUI = () => {
    const { menuHeight } = useNavMenu();
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
        console.log(calHeight);

        return calHeight;
    };

    // rowHeight 상태 관리
    const [Height, setHeight] = useState(getHeight(menuHeight));

    // 화면 크기가 변경될 때마다 rowHeight 업데이트
    useEffect(() => {
        setHeight(getHeight(menuHeight));
    }, [windowSize, menuHeight]);

    return (
        <Container height={Height} >
            <Wrap>
                <LogoSVG>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.498 16.3987C57.1869 15.7313 54.9826 3.05073 54.9826 3.05073C54.9826 -1.48759 51.1253 0.381133 51.1253 0.381133C47.2679 1.84941 42.3085 6.6547 42.3085 6.6547C38.8644 5.9873 32.6651 7.3221 32.6651 7.3221C26.6035 4.25206 19.5776 3.62603 19.5776 3.62603C17.6489 3.93437 17.6489 5.9873 17.6489 5.9873C17.0621 14.8637 18.8778 20.9264 19.4261 22.5201C17.0827 24.8387 14.2586 27.9848 12.126 31.454C11.6879 31.0869 11.2416 30.6998 10.7608 30.2807C8.80592 28.5788 5.60569 26.3457 4.90172 23.6721C4.37547 21.6752 5.71315 20.0094 7.04531 18.6612C8.06889 17.6254 9.21921 16.7191 10.3006 15.742C10.6519 15.4243 11.0129 15.0933 11.203 14.6662C11.535 13.916 11.2209 12.9683 10.5335 12.4958C8.87067 11.3545 6.96128 13.1859 5.66906 14.0522C4.48568 14.845 3.34638 15.7127 2.37653 16.7471C0.815678 18.4116 -0.133508 20.562 0.0152758 22.8058C0.118598 24.3542 0.643474 25.8465 1.46592 27.1786C2.88488 29.4785 4.72676 31.5127 6.70779 33.3827C7.71346 34.3318 8.75908 35.2408 9.83914 36.1111C9.0043 38.4403 8.65852 40.8122 9.10762 43.0961C9.21508 43.642 9.22197 44.2173 9.32116 44.7686C9.61872 46.4344 10.0885 48.0709 10.6395 49.674C11.028 50.8032 11.4606 51.9191 11.929 53.019C12.2073 53.6744 12.4952 54.3271 12.8024 54.9705C13.0132 55.4136 13.1978 56.1131 13.578 56.4374C13.7172 56.5562 13.8949 56.6216 14.0698 56.6844C15.7561 57.2917 18.6959 58.2327 19.995 56.4441C20.6081 55.6005 20.9249 54.5527 19.9923 53.7692C20.1906 52.5572 20.856 50.3027 22.4706 50.3027C22.4706 50.3027 23.435 50.1692 23.435 50.8366C23.435 50.8366 24.9504 55.108 26.4657 55.5084C27.8186 55.8661 30.2528 56.029 30.8604 54.4539C30.8852 54.7662 31.0408 55.0532 31.2007 55.3255C31.8344 56.4147 32.5617 57.4519 33.3732 58.4236C33.6363 58.7386 33.9118 59.0496 34.2535 59.2832C35.1076 59.8665 36.2276 59.8719 37.2236 59.972C38.239 60.0734 39.3989 59.9159 40.1773 59.2285C40.4721 58.9682 40.6705 58.6212 40.8413 58.2714C41.0686 57.8083 41.2615 57.2837 41.1086 56.7938C41.0121 56.4841 40.4349 55.8661 40.7104 55.5671C41.3868 56.5602 41.953 57.552 42.8099 58.4289C42.9711 58.5945 43.1419 58.7586 43.3541 58.8587C43.5635 58.9575 43.7991 58.9882 44.0305 59.0163C44.773 59.107 45.528 59.1911 46.265 59.0737C47.002 58.9562 47.7349 58.6091 48.1441 58.0018C48.4155 57.5987 48.5257 57.1115 48.5601 56.6323C48.5836 56.2959 48.5712 55.9502 48.4458 55.6365C48.297 55.2655 47.9636 55.2161 47.7666 54.9451C47.5765 54.6848 47.7046 54.3765 47.7281 54.0842C47.7873 53.3273 47.8548 52.5705 47.9223 51.8137C48.0422 50.4762 48.162 49.1387 48.2929 47.8026C48.2956 47.7759 48.2984 47.7505 48.3012 47.7238C48.618 44.6671 48.9734 41.5944 49.581 38.5751C52.5938 37.6181 55.2995 36.051 57.1993 33.587C61.2495 28.3345 60.8128 21.3255 56.498 16.3974V16.3987ZM34.0826 31.3485C31.4734 31.3485 29.3588 27.9715 29.3588 23.8069C29.3588 19.6423 31.4734 16.2653 34.0826 16.2653C36.6919 16.2653 38.8065 19.6423 38.8065 23.8069C38.8065 27.9715 36.6919 31.3485 34.0826 31.3485ZM51.4697 29.8802C48.9211 29.8802 46.8546 26.5032 46.8546 22.3386C46.8546 18.174 48.9211 14.797 51.4697 14.797C54.0183 14.797 56.0848 18.174 56.0848 22.3386C56.0848 26.5032 54.0183 29.8802 51.4697 29.8802Z" fill="white" />
                    </svg>
                </LogoSVG>
                <Title>Sign in to me</Title>
                <form style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <InputField label="이메일" type="email" placeholder="example@naver.com" />
                    <InputField label="비밀번호" type="password" placeholder="Password" style={{ marginBottom: '10px' }} />
                </form>
                <Button>
                    <p>Log in</p>
                </Button>
                <InfoLink style={{ marginTop: '30px' }} info="계정이 없으신가요?" link="이메일로 간편 가입하기" />
                <InfoLink info="비밀번호를 잃어버리셨나요?" link="비밀번호 찾기" />
            </Wrap>
        </Container >

    )
}



export default SignInUI;