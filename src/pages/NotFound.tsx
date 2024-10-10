import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    background: #131313;
    color: #fff;
    font-size: 4rem;
    font-weight: 300;
    line-height: 5rem;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

div{
  animation: glitch 1s linear infinite;
}

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-4px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(20deg); 
  }
}

div:before,
div:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

div:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(4px,-4px);
  }
  4%,60%{
    transform: translate(-4px,4px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

div:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
`

function NotFound() {
    return (
        <Container>
            <Title>
                <p style={{ color: 'white', fontSize: '4rem', lineHeight: '8rem', fontWeight: 800 }}>:-/</p>
                <div style={{ color: 'white', fontSize: '8rem', lineHeight: '8rem', fontWeight: 800 }}>404</div>
                <div style={{ color: 'white' }}>존재하지 않는 페이지입니다</div>
            </Title>
        </Container>
    );

}

export default NotFound;