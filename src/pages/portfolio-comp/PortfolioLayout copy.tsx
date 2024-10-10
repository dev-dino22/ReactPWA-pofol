import React, { useEffect, useRef, useState } from "react";
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";


interface PortfolioLayoutProps {
    selectedKeys: string[]; // 선택된 키 배열
    toggleKeySelection: (keyName: string) => void;
}

interface Project {
    id: string;
    name: string;
    category: string;
    icon?: string;
    iconColor?: string;
}

const CircleMask = styled.div<{ iconColor: string }>`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  background-color: ${props => props.iconColor || '#f0b733'};
  border-radius: 30px;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  z-index: 999;
`;

const Container = styled.div`
    width: 100%;
    height: 100%; /* 전체 뷰포트 높이 */
    background-image: url('/image/portfolio/layout-bg2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    //backdrop-filter: blur(10px);
    animation: float 8s ease infinite;
    @keyframes float {
        0%, 100% {
            background-size: 150%; // 애니메이션과 스케일 조합
        }
        50% {
            background-size: 100%;
        }
    }
    @media only screen and (max-width: 991px){
        @keyframes float {
        0%, 100% {
            background-size: 200%; // 애니메이션과 스케일 조합
        }
        50% {
            background-size: 150%;
        }
    }
    }
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
    z-index: 999;

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



const projects: Project[] = [
    { id: 'kb', name: 'KB금융그룹', category: 'keyRef1', icon: './image/portfolio/kb/kb-icon.png', iconColor: '#f0b733' },
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
    { id: 'keyRef3', label: 'Dev' }
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

    const circleRef = useRef(null); // 원형 마스크용 ref

    const handleIconClick = (e: React.MouseEvent<HTMLDivElement>, projectId: string, projectColor: string) => {
        if (!circleRef.current) return;

        // Get the bounding rect of the icon
        const iconRef = e.currentTarget;
        const rect = iconRef.getBoundingClientRect();

        // 화면 중앙으로 이동하기 위한 계산
        const centerX = window.innerWidth / 2 - iconRef.offsetWidth / 2;
        const centerY = window.innerHeight / 2 - iconRef.offsetHeight / 2;

        const offsetX = centerX - rect.left;
        const offsetY = centerY - rect.top;

        gsap.to(iconRef, {
            x: offsetX,
            y: offsetY,
            scale: 3,
            duration: 0.1,
            ease: "power2.out",  // 부드러운 애니메이션 효과
            onComplete: () => {
                gsap.to(circleRef.current, {
                    left: rect.left + rect.width / 2,
                    top: rect.top + rect.height / 2,
                    scale: 40, // 충분히 크게 확장하여 화면을 덮도록 설정
                    backgroundColor: projectColor,
                    duration: 1,
                    ease: "power3.out",
                    onComplete: () => navigate(`/portfolio/${projectId}`)
                });
            }
        });


    };


    return (
        <Container>
            <CircleMask ref={circleRef} iconColor="#f0b733" />
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
                    {projects.map(project => (
                        <DirectUI key={project.id} onClick={e => handleIconClick(e, project.id, project.iconColor || '#f0b733')}>
                            <DirectIcon icon={project.icon || './icons/mstile-310x310.png'} />
                            <DirectText>{project.name}</DirectText>
                        </DirectUI>

                    ))}
                </ResponsiveGridLayout>
            </Wrap>

        </Container>
    );
}

export default PortfolioLayout;