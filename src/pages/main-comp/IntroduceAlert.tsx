import React, { useState } from "react";
import styled from "styled-components";
import ArrowToggleBtn from "../../assets/svg/arrow-toggle-btn.svg";

const Container = styled.div`
    width: 700px;
    height: 900px;
    border-radius: 15px;
    box-shadow: 4px 16px 28.8px 0 rgba(0, 0, 0, 0.7);
    background-color: #1d1d1b;
    overflow: hidden;
    z-index: 5;
    position: absolute;
    margin-top: 20px;
`

const Header = styled.div`
    width: 100%;
    height: 60px;
    padding: 21px 667px 21px 15px;
    background-color: #302f2f;
`
const CloseBtn = styled.div`
    width: 18px;
    height: 18px;
    background-color: #eb6051;
    border-radius: 20px;
    &:hover {

    }
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const BreakLine = styled.div`
    width: 590px;
    height: 2px;
    border-radius: 3px;
    background-color: #302f2f;
`
const ListContainer = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    padding: 10px 0;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`
const ListTitle = styled.div`
    display: flex;
    width: 648px;
    height: 36px;
    border-radius: 15px;
    justify-content: space-between;
    //padding: 0px 20px;
    span {
        color: white;
    }
`
const List = styled.div`
    display: flex;
    width: 648px;
    height: 36px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`
const ContentSubWrap = styled.div`
    display: flex;
    width: 190px;
    align-items: center;
    flex-direction: row;
`
const ContentTitle = styled.span`
    display: flex;
    width: 438px;
    color: white;
    align-items: center;
`
const ContentSub = styled.div`
    display: flex;
    width: 100%;
    color: white;
    align-items: center;
    justify-content: center;
`
const ToggleIcon = styled.div<{ isToggle: boolean }>`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    cursor: pointer;
    img {
        transform: ${props => props.isToggle ? 'rotate(90deg)' : 'rotate(0deg)'};
        transition: transform 0.5s ease;
    }
`


interface IonClose {
    onClose: () => void;
}



const IntroduceAlert: React.FC<IonClose> = ({ onClose }) => {
    ///// 상태정의
    const [isToggle, setIsToggle] = useState<boolean>(false);

    return (
        <Container>
            <Header>
                <CloseBtn onClick={onClose} />
            </Header>
            <Wrap>
                <img src="https://nayoung40.mycafe24.com/images/main/intro/helloGIF.gif" />
                <BreakLine />
                <ListContainer>
                    <ListTitle>
                        <ContentTitle style={{ paddingLeft: '28px' }}>목차</ContentTitle>
                        <ContentSubWrap>
                            <ContentSub>용량</ContentSub>
                            <ContentSub>작성날짜</ContentSub>
                        </ContentSubWrap>
                    </ListTitle>
                    <List style={{ backgroundColor: 'none' }}>
                        <ToggleIcon isToggle={isToggle} onClick={() => setIsToggle(!isToggle)}>
                            <img src={ArrowToggleBtn} />
                        </ToggleIcon>
                        <ContentTitle>Who_Am_I_?</ContentTitle>
                        <ContentSubWrap>
                            <ContentSub>1342kb</ContentSub>
                            <ContentSub>may, 2024</ContentSub>
                        </ContentSubWrap>
                    </List>
                    <List style={{ backgroundColor: '#302f2f' }}>
                        <ToggleIcon isToggle={isToggle} onClick={() => setIsToggle(!isToggle)}>
                            <img src={ArrowToggleBtn} />
                        </ToggleIcon>
                        <ContentTitle>Who_Am_I_?</ContentTitle>
                        <ContentSubWrap>
                            <ContentSub>1342kb</ContentSub>
                            <ContentSub>may, 2024</ContentSub>
                        </ContentSubWrap>
                    </List>
                </ListContainer>
            </Wrap>
        </Container>
    )
};

export default IntroduceAlert;