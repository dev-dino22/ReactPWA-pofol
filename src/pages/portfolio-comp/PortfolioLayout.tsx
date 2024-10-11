import React, { useEffect, useState } from "react";
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%; /* 전체 뷰포트 높이 */
    background-image: url('/image/portfolio/layout-bg2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    backdrop-filter: blur(10px);
`
const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%; /* 전체 뷰포트 높이 */
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-track {
        
    }
    &::-webkit-scrollbar-thumb {
        background: #ffffff27; /* 스크롤바 썸의 배경색 */
        border-radius: 30px;
        border: 1px solid #bcbcbc;
        padding-right: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #ffffff61; /* 스크롤바 썸의 호버 배경색 */
    }
`

const FilterTitleBox = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    width: 50%;
    height: 50px;
    @media only screen and (min-width: 2000px) {
            height: 80px;
            border-radius: 40px;
        };
    padding: 10px 20px 10px 20px;
    //border: 1px solid #ffffffc5;
    border-radius: 30px;
    transform: translateX(50%);
    z-index: 1;
    gap: 10px;
    background-color: #0000006b;
`

const FilterTitle = styled.button<{ isActive: boolean }>`
    padding: 4px 8px;
    color: ${props => props.isActive ? 'black' : '#ffffffa3'};
    background-color: ${props => props.isActive ? 'white' : 'transparent'};
    border-radius : 30px ;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 300;
    border: 1px solid white;
    border: ${props => props.isActive ? '1px solid white;' : '1px solid #ffffffa3'};
    transition: all 0.5s ease;
`

const DirectUI = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    //background-color: #ffffff1d;
    //border: 1px solid white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const DirectIcon = styled.div<{ icon: string }>`
    width: 100px;
    height: 100px;
    border: 1px solid white;
    border-radius: 26%;
    background-image: url(${props => props.icon});
    background-size: cover;
    background-position: center;
    margin-bottom: 16px;
    background-color: ${props => props.icon ? 'transparent' : '#fff'};
    cursor: pointer;

    @media only screen and (min-width: 3840px) {
        width: 120px;
        height: 120px;
    }
    @media only screen and (max-width: 3839px) {
        width: 120px;
        height: 120px;
    }
    @media only screen and (max-width: 1920px) {
        width: 100px;
        height: 100px;
    }
    @media only screen and (max-width: 1199px) {
        width: 80px;
        height: 80px;
    }
    @media only screen and (max-width: 767px) {
        width: 60px;
        height: 60px;
    }
`

const DirectText = styled.p`
    color: white;
    bottom: 18%;
    left: 50%;
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 2.4rem;
`

//////////  ResponsiveGridLayout 정의 /////////////
const ResponsiveGridLayout = WidthProvider(Responsive);

interface PortfolioLayoutProps {
    selectedKeys: string[]; // 선택된 키 배열
    toggleKeySelection: (keyName: string) => void;
}

interface Project {
    id: string;
    name: string;
    category: string;
    icon?: string;
}

const projects: Project[] = [
    { id: 'kb', name: 'KB금융그룹', category: 'keyRef1', icon: './image/portfolio/kb/kb-icon.png' },
    { id: 'thezero', name: '잔반 관리 플랫폼', category: 'keyRef2', icon: './image/portfolio/thezero/thezero-icon.png' },
    { id: 'nhncrossent', name: 'NHN Crossent', category: 'keyRef2', icon: './image/portfolio/NHNcrossent/NHNcrossent-icon.png' },
    { id: 'paju', name: '파주시', category: 'keyRef2', icon: './image/portfolio/paju/paju-icon.png' },
    { id: 'pron', name: '프로앤솔루션', category: 'keyRef2', icon: './image/portfolio/pron/pron-icon.png' },
    { id: 'jin7star', name: '진세븐스타', category: 'keyRef2', icon: './image/portfolio/jin7star/jin7star-icon.png' },
    { id: 'zarang', name: '자랑질(가제)', category: 'keyRef3' },
    { id: 'personal', name: '개인 프로젝트', category: 'keyRef3' },
    { id: 'student', name: '학생 과제', category: 'keyRef2' },

];

const filters = [
    { id: 'keyRef1', label: 'UX/UI' },
    { id: 'keyRef2', label: 'Video' },
    { id: 'keyRef3', label: 'Dev' },
    { id: 'keyRef4', label: 'Graphic' },
];


const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ selectedKeys, toggleKeySelection }) => {
    const navigate = useNavigate();
    const filteredProjects = selectedKeys.length > 0
        ? projects.filter(project => selectedKeys.includes(project.category))
        : projects;


    // 그리드 레이아웃 설정
    const layouts = {
        fhd: filteredProjects.map((project, index) => ({
            i: project.id,
            x: index % 2 * 2,
            y: Math.floor(index / 2),
            w: 1,
            h: 1,
            isResizable: false,
        })),
    };


    return (
        <Container>
            <FilterTitleBox>
                {filters.map(filter => (
                    <FilterTitle
                        key={filter.id}
                        isActive={selectedKeys.includes(filter.id)}
                        onClick={() => toggleKeySelection(filter.id)}
                    >
                        {filter.label}
                    </FilterTitle>
                ))}
            </FilterTitleBox>
            <Wrap>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{ fhd: 1200 }}
                    cols={{ fhd: 2 }}
                    rowHeight={200}
                    margin={[0, 0]}
                    style={{ width: '100%', height: '100%', marginTop: '60px' }}
                    isDraggable={false}
                >
                    {filteredProjects.map(project => (
                        <DirectUI key={project.id}>
                            <DirectIcon onClick={() => navigate(`/portfolio/${project.id}`)} icon={project.icon || './icons/mstile-310x310.png'} />
                            <DirectText>{project.name}</DirectText>
                        </DirectUI>
                    ))}
                </ResponsiveGridLayout>
            </Wrap>

        </Container>
    );
}

export default PortfolioLayout;