import React, { useEffect, useState } from 'react';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
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
import { useNavigate } from 'react-router-dom';

//////////////  Style 컴포넌트들 시작 /////////////////////
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`;
const Card = styled.div`
    //Card
`;

const TicketCard = styled(Ticket)`
    // Ticket
`;

const HelloCard = styled(Hello)`
  // Hello
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
//////////  Style 컴포넌트들 시작 끝 ///////////

//////////  ResponsiveGridLayout 정의 /////////////
const ResponsiveGridLayout = WidthProvider(Responsive);

////////// 메인 컴포넌트 작성 시작 ///////////
const BentoBoxGrid = () => {
    const navigate = useNavigate();
    const [isSelected, setIsSelected] = useState<string>('Go to...');
    // 각 카드 마우스 호버 시 카드 이름 저장 핸들러
    const handleMouseEnter = (cardName: string) => { setIsSelected(cardName); };
    const handleMouseLeave = () => { setIsSelected('Go to...'); };

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 화면 높이를 기반으로 rowHeight 동적 계산
    const getRowHeight = () => {
        const baseHeight = windowSize.height;
        // 여기에서 적절한 계산식 적용
        // 예: 전체 화면 높이를 12로 나누어 각 항목의 높이를 결정
        return baseHeight / 12 - 18; // 20px은 마진을 고려한 값
    };

    // rowHeight 상태 관리
    const [rowHeight, setRowHeight] = useState(getRowHeight());

    // 화면 크기가 변경될 때마다 rowHeight 업데이트
    useEffect(() => {
        setRowHeight(getRowHeight());
    }, [windowSize]);

    // Playground 티켓 클릭 시 알람
    const onClick = () => { alert('5월 오픈 예정! 아직 입장이 불가합니다.'); };

    // 그리드 레이아웃 설정
    const layouts = {
        /*fk: [
            { i: 'ticket', x: 0, y: 0, w: 2, h: 14 },
            { i: 'hello', x: 2, y: 0, w: 10, h: 10, },
            { i: 'portfolio', x: 2, y: 0, w: 9, h: 4 },
            { i: 'sns', x: 12, y: 0, w: 2, h: 2 },
            { i: 'info', x: 12, y: 1, w: 2, h: 2 },
            { i: 'photo', x: 12, y: 2, w: 2, h: 6 },
            { i: 'contact', x: 12, y: 3, w: 3, h: 4 },
        ],*/
        fhd: [
            { i: 'ticket', x: 0, y: 0, w: 2, h: 10 },
            { i: 'hello', x: 2, y: 0, w: 8, h: 7, },
            { i: 'portfolio', x: 2, y: 0, w: 7, h: 3 },
            { i: 'sns', x: 12, y: 0, w: 2, h: 2 },
            { i: 'info', x: 12, y: 1, w: 2, h: 1 },
            { i: 'photo', x: 12, y: 2, w: 2, h: 4 },
            { i: 'contact', x: 12, y: 3, w: 3, h: 3 },
        ],
        /* lg: [
         *   { i: 'ticket', x: 0, y: 0, w: 2, h: 7 },
            { i: 'hello', x: 2, y: 0, w: 8, h: 5, },
            { i: 'portfolio', x: 2, y: 0, w: 7, h: 2 },
            { i: 'sns', x: 12, y: 0, w: 2, h: 1 },
            { i: 'info', x: 12, y: 1, w: 2, h: 1 },
            { i: 'photo', x: 12, y: 2, w: 2, h: 3 },
            { i: 'contact', x: 12, y: 3, w: 3, h: 2 },
        ],
        md: [
            { i: 'ticket', x: 0, y: 0, w: 2, h: 14 },
            { i: 'hello', x: 2, y: 0, w: 6, h: 10, static: true },
            { i: 'portfolio', x: 2, y: 0, w: 6, h: 4 },
            { i: 'sns', x: 8, y: 0, w: 2, h: 3 },
            { i: 'info', x: 8, y: 0, w: 2, h: 3 },
            { i: 'photo', x: 8, y: 0, w: 2, h: 4 },
            { i: 'contact', x: 8, y: 0, w: 2, h: 4 },
        ],
        // 추가 브레이크포인트 정의 가능...
        */
    };


    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ fhd: 1200 }}
            cols={{ fhd: 12 }}
            rowHeight={rowHeight} // 동적으로 계산된 rowHeight 적용
            style={{ width: '100%', height: '100%', }}
            margin={[15, 20]}
        >
            <Card key="ticket" style={{ cursor: 'no-drop' }} onClick={onClick} onMouseEnter={() => handleMouseEnter('Playground')} onMouseLeave={handleMouseLeave}>
                <TicketCard />
            </Card>
            <Card key="hello" >
                <HelloCard isSelected={isSelected} />
            </Card>
            <Card key="portfolio" style={{ cursor: 'pointer' }} onMouseEnter={() => handleMouseEnter('Portfolio')} onMouseLeave={handleMouseLeave} onClick={() => navigate('/portfolio')}>
                <PortfolioCard />
            </Card>
            <Card key="sns" style={{ cursor: 'pointer' }} onMouseEnter={() => handleMouseEnter('SNS Links')} onMouseLeave={handleMouseLeave}>
                <LinkSNSCard />
            </Card>
            <Card key="info" onMouseEnter={() => handleMouseEnter('Information')} onMouseLeave={handleMouseLeave}>
                <InfoTXTCard />
            </Card>
            <Card key="photo" style={{ cursor: 'pointer' }} onMouseEnter={() => handleMouseEnter('Personal Statement')} onMouseLeave={handleMouseLeave}>
                <PhotoNayoungCard />
            </Card>
            <Card key="contact" style={{ cursor: 'pointer' }} onMouseEnter={() => handleMouseEnter('Contact')} onMouseLeave={handleMouseLeave}>
                <ContactCard />
            </Card>

        </ResponsiveGridLayout>
    );
};

export default BentoBoxGrid;
