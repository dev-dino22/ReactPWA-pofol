//Main Page Component
import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles["Main"]}>
            <div className={styles["container"]}>
                <div className={styles["left"]}>
                    <div className={styles["left-image1"]}>
                        <img src="./image/main/ticket-top.png" />
                    </div>
                    <div className={styles["left-image2"]}>
                        <img src="./image/main/ticket-bottom.png" />
                    </div>
                </div>

                <div className={styles["right"]}>
                    <div className={styles["right-top"]}>
                        <div className={styles["right-top-left"]}>
                            <div className={styles["Title-box"]}>

                                <div className={styles["Hello"]}>
                                    <span>Hello!</span>
                                    <i>
                                        <img src="./image/main/temporary/title-svg-gif.png" />
                                    </i>
                                </div>
                                <div className={styles["subtitle"]}>
                                    <span>Portfolio</span>
                                    <i>
                                        <img src='./image/main/temporary/eye-svg.png' />
                                    </i>

                                </div>

                            </div>


                        </div>
                        <div className={styles["right-top-right"]}>
                            <div className={styles["sns-icon"]}>
                                <img src='./image/main/temporary/link-comp.png' />
                            </div>
                            <div className={styles["info"]}>
                                <p>Team: designnozzle.com</p>
                                <p>Instagram : @design_nozzle</p>
                                <p>Youtube: designnozzle</p>
                            </div>
                            <div className={styles["myphoto"]}>
                                <img src='./image/main/temporary/whoiam-comp.png' />
                            </div>
                        </div>
                    </div>
                    <div className={styles["right-bottom"]}>
                        <div className={styles["portfolio-img"]}>
                            <img src='./image/main/temporary/portfolio-comp.png' />
                        </div>
                        <div className={styles["contact-wrap"]}>
                            <p>Contact</p>
                            <p>Meee🤭</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}




export default Main;
