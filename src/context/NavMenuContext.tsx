import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 타입 정의: 네비게이션 메뉴 컨텍스트의 상태 타입
interface NavMenuContextType {
    menuHeight: number;
    setMenuHeight: (height: number) => void;
    isChecked: boolean; // 추가된 상태
    setIsChecked: (checked: boolean) => void; // 상태를 변경하는 함수
}

// 기본 컨텍스트 값 설정
const defaultState: NavMenuContextType = {
    menuHeight: 80,
    setMenuHeight: () => { },
    isChecked: false, // 기본값 설정
    setIsChecked: () => { } // 기본 함수 설정
};

// 컨텍스트 생성
export const NavMenuContext = createContext<NavMenuContextType>(defaultState);

// Props 타입 정의: 컴포넌트의 자식 요소 타입
interface NavMenuProviderProps {
    children: ReactNode;
}

// Provider 컴포넌트
export const NavMenuProvider: React.FC<NavMenuProviderProps> = ({ children }) => {
    const [menuHeight, setMenuHeight] = useState<number>(defaultState.menuHeight);
    const [isChecked, setIsChecked] = useState<boolean>(defaultState.isChecked); // 상태 관리 추가

    useEffect(() => {
        const updateMenuHeight = () => {
            // 여기에 높이를 업데이트하는 로직을 구현
            let height = 80; // 기본값
            if (window.matchMedia('(min-width: 3840px)').matches) height = 120;
            else if (window.matchMedia('(min-width: 1701px) and (max-width: 3839px)').matches) height = 80;
            else if (window.matchMedia('(min-width: 800px) and (max-width: 1700px)').matches) height = 60;
            else if (window.matchMedia('(max-width: 799px)').matches) height = 42;
            setMenuHeight(height);
            //console.log(menuHeight);
        };

        window.addEventListener('resize', updateMenuHeight);
        updateMenuHeight();//초기값 적절하게 세팅위한 마운팅 함수

        return () => {
            window.removeEventListener('resize', updateMenuHeight);
        };
    }, []);

    return (
        <NavMenuContext.Provider value={{ menuHeight, setMenuHeight, isChecked, setIsChecked }}>
            {children}
        </NavMenuContext.Provider>
    );
};

// Custom Hook
export const useNavMenu = () => useContext(NavMenuContext);
