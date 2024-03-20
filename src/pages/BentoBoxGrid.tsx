import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
import Hello from './main-comp/Hello';
import Contact from './main-comp/Contact';
import PortfolioBanner from './main-comp/PortfolioBanner';

// 스타일 컴포넌트를 사용하여 카드 스타일을 정의합니다.
const Card = styled.div`
  background: #ffffff16;
`;

// Hello 컴포넌트를 감싸는 스타일 컴포넌트
const HelloCard = styled(Hello)`
  // Hello 컴포넌트에 대한 추가적인 스타일링을 여기에 적용할 수 있습니다.
`;

const ContactCard = styled(Contact)`
    //contact 
`;

const PortfolioCard = styled(PortfolioBanner)`
//portfolio
`;

// 메인 컴포넌트
const BentoBoxGrid = () => {
    // 그리드 레이아웃 설정
    const layout = [
        { i: 'a', x: 0, y: 0, w: 2, h: 14 },
        { i: 'hello', x: 2, y: 0, w: 6, h: 10 }, // 여기에서 w와 h는 Hello 컴포넌트의 크기를 결정합니다.
        { i: 'b', x: 2, y: 0, w: 6, h: 4 },
        { i: 'c', x: 8, y: 0, w: 2, h: 3 },
        { i: 'd', x: 8, y: 0, w: 2, h: 3 },
        { i: 'e', x: 8, y: 0, w: 2, h: 4 },
        { i: 'contact', x: 8, y: 0, w: 2, h: 4 },
    ];

    return (
        <Container>
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <Card key="a">
                    <p>I'm nev, a developer and product designer from Ireland...</p>
                </Card>
                <Card key="hello" data-grid={layout.find(item => item.i === 'hello')}>
                    <HelloCard />
                </Card>
                <Card key="b">
                    <PortfolioCard />
                </Card>
                <Card key="c">
                    <div>안녕</div>
                </Card>
                <Card key="d">
                    <div>안녕</div>
                </Card>
                <Card key="e">
                    <div>안녕</div>
                </Card>
                <Card key="contact">
                    <ContactCard />
                </Card>

            </GridLayout>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    
`;

export default BentoBoxGrid;
