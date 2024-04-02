import React from "react";
import styled from "styled-components";
import MTicket from "./mobile-comp/MTicket";

const Test2 = () => {
    return (
        <Container>
            <MTicket />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 900px;
    height: 250px;
    align-items: center;
    justify-content: center;
`;

const TestTxt = styled.div`
    font-size: 10rem;
    color: #ffffff;
`;

export default Test2;