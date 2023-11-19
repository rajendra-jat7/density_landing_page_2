import React from "react";
import styled from "styled-components";
import mobile from "../../../../images/mobile.png";

const OuterContainer = styled.div`
  display: flex;
  padding: 160px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #000;
  margin-top: -120px;

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 100px 0;
  }

  @media (min-width: 641px) and (max-width: 1007px) { 
     padding : 200px 
  }
`;

const GetStartedContainer = styled.div`
  position: relative;
  background-color: #000;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width : 55%;
  margin-top : 100px;

  @media (min-width: 641px) and (max-width: 1007px) {
    width : 100%;
    
  }

  @media (min-width: 200px) and (max-width: 640px) {
    width : 100%; 
  }
`;

const Heading1 = styled.h2`
  text-align: center;
  z-index: 1;
  margin-bottom : 620px;
  font-family: Neurial Grotesk;
  font-size: 132.195px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -2.783px;
  background: linear-gradient(
    177deg,
    #fff 2.77%,
    rgba(255, 255, 255, 0) 139.85%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 64px;
    word-wrap: break-word;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 64px;
    word-wrap: break-word;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  width: 80%;
  padding: 11.132px 33.397px;
  justify-content: center;
  align-items: center;
  gap: 6.958px;
  flex-shrink: 0;
  background: linear-gradient(
    269deg,
    #d4f938 38.89%,
    rgba(50, 216, 117, 0.96) 103.19%
  );
  color: #000;
  font-family: Neurial Grotesk;
  font-size: 38.267px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top : 450px ;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 24px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 24px;
  }
`;

const GetStartedNow = () => {
  return (
    <OuterContainer>
      <GetStartedContainer>
      <Heading1>Get Started Now</Heading1>
        <Image
        src={mobile}
        alt="mobile"
        />
        <Button>Start Trading!</Button>
      </GetStartedContainer>
    </OuterContainer>
  );
};

export default GetStartedNow;
