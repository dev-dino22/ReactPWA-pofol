import React from "react";
import styled from "styled-components";

const HamburgerSVG = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 10H4V14H44V10Z" fill="#ffffff" />
            <path d="M44 22H4V26H44V22Z" fill="#ffffff" />
            <path d="M44 34H4V38H44V34Z" fill="#ffffff" />
        </svg>
    );
}

const NavMenu = () => {
    return (
        <Container>
            <HamburgerSVG />
            <Logo>Nayoung</Logo>
            <SignIn>Sign in</SignIn>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #ffffff;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;


    @media only screen and (min-width:3840px){
        height: 100px;
    }
    @media only screen and (max-width: 3839px) {
        height: 80px;
    }
    @media only screen and (max-width: 1700px) {
        height: 60px;
    }
    @media only screen and (max-width: 799px) {
        height: 42px;
    }

`

const Logo = styled.div`
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 900;
    cursor: pointer;
    
`

const SignIn = styled.div`
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export default NavMenu;