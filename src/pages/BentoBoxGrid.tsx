import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
import Hello from './main-comp/Hello';
import Contact from './main-comp/Contact';
import PortfolioBanner from './main-comp/PortfolioBanner';
import LinkSNS from './main-comp/LinkSNS';
import InfoTXT from './main-comp/InfoTXT';
import PhotoNayoung from './main-comp/PhotoNayoung';
import Ticket from './main-comp/Ticket';




// 스타일 컴포넌트를 사용하여 카드 스타일을 정의합니다.
const Card = styled.div`
`;

const TicketCard = styled(Ticket)`
  //ticket  
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

const LinkSNSCard = styled(LinkSNS)`
//LinkSNS Comp
`;

const InfoTXTCard = styled(InfoTXT)`
    //InfoTXT
`;

const PhotoNayoungCard = styled(PhotoNayoung)`
    //nayoung
`;

// 메인 컴포넌트
const BentoBoxGrid = () => {
    const [isSelected, setIsSelected] = useState<string>('Go to...');
    const handleMouseEnter = (cardName: string) => {
        setIsSelected(cardName);
    };

    const handleMouseLeave = () => {
        setIsSelected('Go to...');
    };
    // 그리드 레이아웃 설정
    const layout = [
        { i: 'ticket', x: 0, y: 0, w: 2, h: 14 },
        { i: 'hello', x: 2, y: 0, w: 6, h: 10, static: true },
        { i: 'portfolio', x: 2, y: 0, w: 6, h: 4 },
        { i: 'sns', x: 8, y: 0, w: 2, h: 3 },
        { i: 'info', x: 8, y: 0, w: 2, h: 3 },
        { i: 'photo', x: 8, y: 0, w: 2, h: 4 },
        { i: 'contact', x: 8, y: 0, w: 2, h: 4 },
    ];

    return (
        <Container>
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <Card key="ticket" onMouseEnter={() => handleMouseEnter('Playground')} onMouseLeave={handleMouseLeave}>
                    <TicketCard />
                </Card>
                <Card key="hello" data-grid={layout.find(item => item.i === 'hello')}>
                    <HelloCard isSelected={isSelected} />
                </Card>
                <Card key="portfolio" onMouseEnter={() => handleMouseEnter('Portfolio')} onMouseLeave={handleMouseLeave}>
                    <PortfolioCard />
                </Card>
                <Card key="sns" onMouseEnter={() => handleMouseEnter('SNS Links')} onMouseLeave={handleMouseLeave}>
                    <LinkSNSCard />
                </Card>
                <Card key="info" onMouseEnter={() => handleMouseEnter('Information')} onMouseLeave={handleMouseLeave}>
                    <InfoTXTCard />
                </Card>
                <Card key="photo" onMouseEnter={() => handleMouseEnter('Personal Statement')} onMouseLeave={handleMouseLeave}>
                    <PhotoNayoungCard />
                </Card>
                <Card key="contact" onMouseEnter={() => handleMouseEnter('Contact')} onMouseLeave={handleMouseLeave}>
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
