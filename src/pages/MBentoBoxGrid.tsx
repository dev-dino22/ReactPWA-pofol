import React, { useEffect, useState } from 'react';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
import MHello from './main-comp/mobile-comp/MHello';
import Contact from './main-comp/Contact';
import MPortfolioBanner from './main-comp/mobile-comp/MPortfolioBanner';
import LinkSNS from './main-comp/LinkSNS';
import InfoTXT from './main-comp/InfoTXT';
import PhotoNayoung from './main-comp/PhotoNayoung';
import MTicket from './main-comp/mobile-comp/MTicket';
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

const TicketCard = styled(MTicket)`
    // Ticket
`;

const HelloCard = styled(MHello)`
  // Hello
`;

const ContactCard = styled(Contact)`
    //contact 
`;

const PortfolioCard = styled(MPortfolioBanner)`
//portfolio
`;

const LinkSNSCard = styled(LinkSNS)`
//LinkSNS Comp
`;

const PhotoNayoungCard = styled(PhotoNayoung)`
    //nayoung
`;
//////////  Style 컴포넌트들 시작 끝 ///////////

//////////  ResponsiveGridLayout 정의 /////////////
const ResponsiveGridLayout = WidthProvider(Responsive);

////////// 메인 컴포넌트 작성 시작 ///////////
const MBentoBoxGrid = () => {
    const navigate = useNavigate();
    const [isSelected, setIsSelected] = useState<string>('Go to...');
    // 각 카드 마우스 호버 시 카드 이름 저장 핸들러
    const handleMouseEnter = (cardName: string) => { setIsSelected(cardName); };
    const handleMouseLeave = () => { setIsSelected('Go to...'); };

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // 브라우저 창의 크기 변화를 감지해 상태를 업데이트할 수 있게 resize 이벤트 추가
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
        // 예: 전체 화면 높이를 12로 나누어 각 항목의 높이를 결정
        return baseHeight / 40 - 10;
    };

    // rowHeight 상태 관리
    const [rowHeight, setRowHeight] = useState(getRowHeight());

    // 화면 크기가 변경될 때마다 rowHeight 업데이트
    useEffect(() => {
        setRowHeight(getRowHeight());
    }, [windowSize]);

    // Playground 티켓 클릭 시 알람
    const onClick = () => { alert('아직 입장이 불가합니다.'); };

    // 그리드 레이아웃 설정
    const layouts = {
        fhd: [
            { i: 'hello', x: 2, y: 0, w: 6, h: 7 },
            { i: 'ticket', x: 0, y: 1, w: 6, h: 4 },
            { i: 'portfolio', x: 0, y: 2, w: 3, h: 13 },
            { i: 'sns', x: 12, y: 3, w: 3, h: 3 },
            { i: 'photo', x: 12, y: 5, w: 3, h: 7 },
            { i: 'contact', x: 12, y: 4, w: 3, h: 3 },
        ],

        // 추가 브레이크포인트 정의 가능...
    };


    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ fhd: 1200 }}
            cols={{ fhd: 6 }}
            rowHeight={rowHeight} // 동적으로 계산된 rowHeight 적용
            style={{ width: '100%', height: '100%', }}
            margin={[15, 20]}
            isDraggable={false}
            isResizable={false}
        >
            <Card key="ticket" style={{ cursor: 'no-drop' }} onClick={onClick} onMouseEnter={() => handleMouseEnter('Playground')} onMouseLeave={handleMouseLeave}>
                <TicketCard />
            </Card>
            <Card key="hello" >
                <HelloCard />
            </Card>
            <Card key="portfolio" style={{ cursor: 'pointer' }} onMouseEnter={() => handleMouseEnter('Portfolio')} onMouseLeave={handleMouseLeave} onClick={() => navigate('/portfolio')}>
                <PortfolioCard />
            </Card>
            <Card key="sns" style={{ cursor: 'pointer' }} onMouseEnter={() => handleMouseEnter('SNS Links')} onMouseLeave={handleMouseLeave}>
                <LinkSNSCard />
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

export default MBentoBoxGrid;
