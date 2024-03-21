import React from 'react';
import styles from './Hello.module.css';
import Lottie from "lottie-react";
import aniSmile from "../../assets/lottie/aniSmile.json";
import Eye from './Eye';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const CornerSquare: React.FC<{ position: CornerPosition }> = ({ position }) => (
    <div className={`${styles['corner-square']} ${styles[position]}`} />
);


interface HelloProps {
    isSelected: string; // 여기에 isSelected prop 추가
}

const Hello: React.FC<HelloProps> = ({ isSelected }) => {
    // 컴포넌트 로직
    return (
        <div className={styles.container}>
            <CornerSquare position="top-left" />
            <CornerSquare position="top-right" />
            <CornerSquare position="bottom-left" />
            <CornerSquare position="bottom-right" />
            <div className={styles.title}>
                <div className={styles.hello}>Hello </div>
                <Lottie animationData={aniSmile} style={{ position: 'relative', width: '300px', height: '300px', bottom: '40px', right: '48px', transform: 'scale(0.8)' }} />
            </div>

            <div className={styles.sub}>
                <div className={styles.subBox}>
                    <p className={styles.subText}>{isSelected}</p>
                    <Eye />
                </div>
            </div>

        </div>
    );
}


export default Hello;
