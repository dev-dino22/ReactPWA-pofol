import React, { useEffect, useRef, useState } from "react";
import styles from "./PortfolioDetailUI.module.css";
import { gsap } from "gsap/gsap-core";



const KBDetailUI = () => {
    const imageWrapRef = useRef(null);  // imageWrap div에 대한 참조

    useEffect(() => {
        const handleScroll = () => {
            const windowWidth = window.innerWidth;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;

            // 목표 너비 계산
            const newWidth = Math.min(windowWidth, 1100 + (scrolled / scrollHeight) * (windowWidth - 1100));

            // GSAP 애니메이션 적용
            gsap.to(imageWrapRef.current, {
                width: `${newWidth}px`,
                duration: 1,  // 애니메이션 지속 시간
                ease: "power2.out"  // 애니메이션 가속도 곡선
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.priContainer}>
                    <div className={styles.priWrap}>
                        <div className={styles.priTitle}>Client</div>
                        <div className={styles.priSub}>KB금융그룹</div>
                    </div>
                    <div className={styles.priWrap}>
                        <div className={styles.priTitle}>Date</div>
                        <div className={styles.priSub}>November 2023</div>
                    </div>
                    <div className={styles.priWrap}>
                        <div className={styles.priTitle}>Service</div>
                        <div className={styles.priSub}>UX/UI</div>
                    </div>
                    <div className={styles.priWrap}>
                        <div className={styles.priTitle}>Skills</div>
                        <div className={styles.priSub}>Figma</div>
                    </div>
                    <div className={styles.priWrap}>
                        <div className={styles.priTitle}>Detail</div>
                        <div className={styles.priSub}>대외비 프로젝트</div>
                    </div>
                </div>
                <div className={styles.projectDesc}>
                    KB 금융그룹 CIB 플랫폼부 내부 전산망 업무시스템 UX/UI 피그마 디자인 및 프로토타입을 진행하였습니다.
                </div>
            </div>
            <div ref={imageWrapRef} className={styles.imageWrap}>
                <img
                    src="https://nayoung40.mycafe24.com/images/portfolio/kb/kb-title-image.png"

                />
            </div>
        </div>
    )
}

export default KBDetailUI;