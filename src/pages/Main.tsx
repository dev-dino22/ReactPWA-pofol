//Main Page Component
import React, { useEffect, useState } from 'react';
import MBentoBoxGrid from './MBentoBoxGrid';
import BentoBoxGrid from './BentoBoxGrid';

function Main() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 800);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? <MBentoBoxGrid /> : <BentoBoxGrid />}
        </>
    );
}

export default Main;
