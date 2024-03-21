import React from "react";
import Hello from "./main-comp/Hello";
import PortfolioBanner from "./main-comp/PortfolioBanner";
import LinkSNS from "./main-comp/LinkSNS";


function Test() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', }}>
            <LinkSNS />
        </div>);
}

export default Test;