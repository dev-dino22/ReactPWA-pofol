import React, { useState } from "react";
import styled from "styled-components";

interface TabProps { isSelected: boolean; }


const InstagramSVG = ({ fill = "none" }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M34.5417 6H13.4583C9.34579 6 6 9.34579 6 13.4583V34.5409C6 38.6534 9.34579 41.9992 13.4583 41.9992H34.5409C38.6534 41.9992 41.9992 38.6534 41.9992 34.5409V13.4583C41.9992 9.34579 38.6534 6 34.5409 6H34.5417ZM34.5851 40.3599H13.4969C10.2618 40.3599 7.64009 37.7374 7.64009 34.5031V13.4149C7.64009 10.1798 10.2626 7.55809 13.4969 7.55809H34.5851C37.8202 7.55809 40.4419 10.1806 40.4419 13.4149V34.5031C40.4419 37.7382 37.8194 40.3599 34.5851 40.3599Z" />
            <path d="M31.8158 9.36218H16.2661C12.4529 9.36218 9.36218 12.4529 9.36218 16.2661V31.8158C9.36218 35.6291 12.4529 38.7198 16.2661 38.7198H31.8158C35.6291 38.7198 38.7198 35.6291 38.7198 31.8158V16.2661C38.7198 12.4529 35.6291 9.36218 31.8158 9.36218ZM31.7773 37.0797H16.2227C13.2943 37.0797 10.9203 34.7057 10.9203 31.7773V16.2227C10.9203 13.2943 13.2943 10.9203 16.2227 10.9203H31.7781C34.7065 10.9203 37.0805 13.2943 37.0805 16.2227V31.7781C37.0805 34.7065 34.7065 37.0805 31.7781 37.0805L31.7773 37.0797Z" />
            <path d="M24 14.3218C18.6639 14.3218 14.3218 18.6631 14.3218 24C14.3218 29.3369 18.6631 33.6782 24 33.6782C29.3368 33.6782 33.6782 29.3369 33.6782 24C33.6782 18.6631 29.3368 14.3218 24 14.3218ZM24 32.0758C19.5471 32.0758 15.9242 28.4528 15.9242 24C15.9242 19.5472 19.5471 15.9242 24 15.9242C28.4528 15.9242 32.0758 19.5472 32.0758 24C32.0758 28.4528 28.4528 32.0758 24 32.0758Z" />
            <path d="M24 17.096C20.1934 17.096 17.096 20.1934 17.096 24C17.096 27.8067 20.1934 30.904 24 30.904C27.8067 30.904 30.904 27.8067 30.904 24C30.904 20.1934 27.8067 17.096 24 17.096ZM24 29.3024C21.0765 29.3024 18.6976 26.9243 18.6976 24C18.6976 21.0757 21.0757 18.6976 24 18.6976C26.9243 18.6976 29.3024 21.0757 29.3024 24C29.3024 26.9243 26.9243 29.3024 24 29.3024Z" />
            <path d="M32.877 12.1028C31.5173 12.1028 30.4119 13.209 30.4119 14.5678C30.4119 15.9267 31.5182 17.0329 32.877 17.0329C34.2358 17.0329 35.342 15.9267 35.342 14.5678C35.342 13.209 34.2358 12.1028 32.877 12.1028ZM32.877 15.4322C32.4005 15.4322 32.0135 15.0451 32.0135 14.5687C32.0135 14.0922 32.4005 13.7052 32.877 13.7052C33.3534 13.7052 33.7405 14.0922 33.7405 14.5687C33.7405 15.0451 33.3534 15.4322 32.877 15.4322Z" />
        </svg>
    );
}

const MailSVG = ({ fill = "none" }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M41.08 18.18L25.08 8.3C24.42 7.9 23.58 7.9 22.92 8.3L6.92 18.18C6.34 18.54 6 19.14 6 19.8V38.08C6 39.14 6.9 40 8 40H40C41.1 40 42 39.14 42 38.08V19.8C42 19.14 41.66 18.54 41.08 18.18ZM7.54 20.6L20.4 29.42L7.54 37.5V20.6ZM23.74 29.08C23.9 28.98 24.1 28.98 24.26 29.08L39.26 38.54H8.74L23.76 29.08H23.74ZM27.6 29.42L40.46 20.6V37.5L27.6 29.42ZM23.74 9.56C23.9 9.46 24.1 9.46 24.24 9.56L39.86 19.2L26.22 28.56L25.1 27.86C24.44 27.44 23.56 27.44 22.9 27.86L21.78 28.56L8.14 19.2L23.76 9.56H23.74Z" />
        </svg>

    );
}


const HomeSVG = ({ fill = "none" }) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M41.16 20.26L38.62 18.06V11.16C38.62 9.92 37.72 8.89999 36.62 8.89999H34.16C33.06 8.89999 32.16 9.9 32.16 11.14V12.42L25.36 6.52C24.56 5.82 23.46 5.82 22.66 6.52L6.86 20.26C5.9 21.08 5.74 22.62 6.46 23.68C6.88 24.28 7.52 24.64 8.2 24.62H9.7V39.54C9.7 40.9 10.68 42 11.9 41.98H19.7C20.46 41.98 21.08 41.28 21.08 40.42V32.14C21.08 31.86 21.28 31.62 21.54 31.62H26.46C26.72 31.62 26.92 31.86 26.92 32.14V40.42C26.92 41.28 27.54 41.98 28.3 41.98H36.1C37.3 41.98 38.3 40.88 38.3 39.54V24.62H39.8C41 24.62 41.98 23.56 42 22.2C42 21.44 41.7 20.72 41.16 20.24V20.26ZM33.7 11.14C33.7 10.86 33.9 10.62 34.16 10.62H36.62C36.88 10.62 37.08 10.86 37.08 11.14V16.72L33.7 13.78V11.16V11.14ZM40.42 22.42C40.34 22.72 40.08 22.92 39.8 22.9H38.14C37.38 22.9 36.76 23.6 36.76 24.46V39.56C36.76 39.96 36.46 40.28 36.1 40.28H28.46V32.18C28.46 30.94 27.56 29.94 26.46 29.94H21.54C20.44 29.94 19.54 30.94 19.54 32.18V40.28H11.9C11.54 40.28 11.24 39.96 11.24 39.56V24.46C11.24 23.6 10.62 22.92 9.86 22.92H8.22C7.94 22.92 7.68 22.74 7.6 22.44C7.5 22.14 7.6 21.82 7.82 21.64L23.62 7.9C23.86 7.7 24.18 7.7 24.42 7.9L40.22 21.64C40.44 21.82 40.54 22.14 40.44 22.44L40.42 22.42Z" />
        </svg>

    );
}


//LinkSNS 컴포넌트 시작

const LinkSNS = () => {
    const [isSelected, setIsSelected] = useState<string>('');
    const [activeTab, setActiveTab] = useState<string>('');
    return (
        <Container>
            <Tab hoverStyle={1} isSelected={activeTab === '1'} onMouseEnter={() => setIsSelected('1')} onMouseLeave={() => setIsSelected('')} style={{ borderRight: isSelected === '1' ? '' : '1px dashed #343434' }}>
                <ResizeWrap>
                    <InstagramSVG fill={isSelected === '1' ? "#000000" : "#454545"} />
                </ResizeWrap>
            </Tab>
            <Tab hoverStyle={2} isSelected={activeTab === '2'} onMouseEnter={() => setIsSelected('2')} onMouseLeave={() => setIsSelected('')}>
                <ResizeWrap>
                    <MailSVG fill={isSelected === '2' ? "#000000" : "#454545"} />
                </ResizeWrap>
            </Tab>
            <Tab hoverStyle={3} isSelected={activeTab === '3'} onMouseEnter={() => setIsSelected('3')} onMouseLeave={() => setIsSelected('')} style={{ borderLeft: isSelected === '3' ? '' : '1px dashed #343434' }}>
                <ResizeWrap>
                    <HomeSVG fill={isSelected === '3' ? "#000000" : "#454545"} />
                </ResizeWrap>
            </Tab>
        </Container>
    );
}

const ResizeWrap = styled.div`
    transform: scale(1.4);
    @media only screen and (max-width: 1700px) {
        transform: scale(1);
    }
    @media only screen and (max-width: 1400px) {
        transform: scale(0.9);
    }
    @media only screen and (max-width: 1200px) {
        transform: scale(0.8);
    }
    @media only screen and (max-width: 991px) {
        transform: scale(0.5);
    }
    @media only screen and (max-width: 767px) {
        transform: scale(0.5);
    }
`



const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #7A7A7A;
    position: relative;
    border-radius: 30px;
    @media only screen and (max-width: 991px) {
            border-radius: 15px;
    };
    align-items: center;
    justify-content: center;
`;

const IconWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    font-size: 24px;
`;

const Tab = styled.div<TabProps & { hoverStyle: number }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ hoverStyle, isSelected }) => hoverStyle === 1 && `
      &:hover {
        border: 2px solid #3CADFF;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        @media only screen and (max-width: 991px) {
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
      }
    `}

    ${({ hoverStyle, isSelected }) => hoverStyle === 2 && `
      &:hover {
        border: 2px solid #3CADFF;
        border-radius: 0px;
      }
    `}

    ${({ hoverStyle, isSelected }) => hoverStyle === 3 && `
      &:hover {
        border: 2px solid #3CADFF;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        @media only screen and (max-width: 991px) {
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
      }
    `}
`;


export default LinkSNS;