import React from 'react';
import styles from './MHello.module.css';
import Lottie from "lottie-react";
import aniSmile from "../../../assets/lottie/aniSmile.json";


type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const CornerSquare: React.FC<{ position: CornerPosition }> = ({ position }) => (
    <div className={`${styles['corner-square']} ${styles[position]}`} />
);




const MHello = () => {
    // 컴포넌트 로직
    return (
        <div className={styles.container}>
            <CornerSquare position="top-left" />
            <CornerSquare position="top-right" />
            <CornerSquare position="bottom-left" />
            <CornerSquare position="bottom-right" />
            <div className={styles.wrap}>
                <div className={styles.title}>
                    <div className={styles.hello}>Hello! </div>
                    <Lottie animationData={aniSmile} className={styles.smileSVG} />
                </div>

                <div className={styles.sub}>
                    <div className={styles.subBox}>
                        <p className={styles.subText}>안녕하세요, 디자이너 나영 포트폴리오 사이트입니다. 편하게 둘러보세요!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MHello;
