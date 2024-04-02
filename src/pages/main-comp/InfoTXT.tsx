import React from "react";
import styled from "styled-components";

const InfoTXT = () => {
  return (
    <Container>
      <TextWrap>
        <p>Team: designnozzle.com</p>
        <p>Instagram : @design_nozzle</p>
      </TextWrap>
    </Container>

  );
}


const TextWrap = styled.div`
        display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    
  p {
    font-size: 2.4rem;
    color: #ffffff;
    text-align: right;
    line-height: 3.5rem;

    @media only screen and (max-width: 1270px) {
      font-size: 2.2rem;
    }
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
export default InfoTXT;