import React from "react";
import styled from "styled-components";

const InfoTXT = () => {
    return (
        <Container>
            <TextWrap>
                <p>Team: designnozzle.com</p>
                <p>Instagram : @design_nozzle</p>
                <p>Youtube: designnozzle</p>
            </TextWrap>
        </Container>

    );
}


const TextWrap = styled.div`
        display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;

  p {
    font-size: 16px; /* 뷰포트 너비의 2%로 폰트 사이즈를 설정 */
    color: #ffffff;
    text-align: right;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
export default InfoTXT;