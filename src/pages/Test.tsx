import React, { useState, useEffect } from "react";
import BentoBoxGrid2 from "./BentoBoxGrid";
import MBentoBoxGrid from "./MBentoBoxGrid";

function Test() {
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
            {isMobile ? <MBentoBoxGrid /> : <BentoBoxGrid2 />}
        </>
    );
}

export default Test;