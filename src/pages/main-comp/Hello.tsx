import React from 'react';
import styles from './Hello.module.css';
import Lottie from "lottie-react";
import aniSmile from "../../assets/lottie/aniSmile.json";
import Eye from './Eye';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const CornerSquare: React.FC<{ position: CornerPosition }> = ({ position }) => (
    <div className={`${styles['corner-square']} ${styles[position]}`} />
);

const Hello = () => (
    <div className={styles.container}>
        <CornerSquare position="top-left" />
        <CornerSquare position="top-right" />
        <CornerSquare position="bottom-left" />
        <CornerSquare position="bottom-right" />
        <div className={styles.title}>
            <div className={styles.hello}>Hello </div>
            <Lottie animationData={aniSmile} style={{ position: 'relative', width: '300px', height: '300px', bottom: '50px' }} />
        </div>
        <div className={styles.sub}>
            <div className={styles.subBox}>
                <p className={styles.subText}>Portfolio</p>
                <Eye />
            </div>
        </div>

    </div>
);

export default Hello;
