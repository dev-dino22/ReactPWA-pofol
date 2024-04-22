import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    ;
`

const Wrap = styled.div`
    width: 1200px;
    @media only screen and (max-width: 1400px) {
        width: 90%;
    }
`
const Text = styled.p`
    color: white;
    font-size: 2.4rem;
`

const PortfolioDetailUI = () => {
    return (
        <Container>
            <Wrap>
                <Text>HHIHIHIhIHIHI</Text>
            </Wrap>
        </Container>
    )
}

export default PortfolioDetailUI;