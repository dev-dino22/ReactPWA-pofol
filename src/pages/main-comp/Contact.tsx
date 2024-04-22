import React, { useState } from 'react';
import styles from './Contact.module.css';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Container>
            <p>Contact</p>
            <p>Meee🤭</p>
        </Container>
    );

};

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    @media only screen and (max-width: 991px) {
            border-radius: 15px;
    }
    border: solid 1px #fff;
    font-size: 9.4rem;
    font-weight: 100;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: #ffffff;
    transition: background-color 0.5s ease, color 0.5s ease;
    &:hover {
        background-color: #ffffff;
        color: #000000;
    }
`;

export default Contact;


