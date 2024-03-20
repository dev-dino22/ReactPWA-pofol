import React from "react";
import Hello from "./main-comp/Hello";
import PortfolioBanner from "./main-comp/PortfolioBanner";


function Test() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', }}>
            <PortfolioBanner />
        </div>);
}

export default Test;