import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
  display: flex;
  padding: 120px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
  align-self: stretch;
  background: #000;

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 100px 0px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 80px 0px;
  }
`;

const FirstSection = styled.div`
  h2 {
    color: var(--White, #fff);
    text-align: center;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    font-family: Neurial Grotesk;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; /* 111.111% */
    letter-spacing: -1.512px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    h2{
      font-size: 50px;
    }
  }

  @media (min-width: 200px) and (max-width: 640px) {
    h2{
      font-size: 40px;
    }
  }

  span {
    color: var(--White, #ebff25);
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-self: stretch;
  margin-top : -80px;

  @media (min-width: 200px) and (max-width: 640px) {
    margin-top : -40px;
    gap : 0px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    margin : -170px;
    gap : 0px;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content:  space-evenly;
  align-items: center;
  padding: 0 200px;
  color: white;
  margin: 50px 0;
   
  

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 0px 90px;
    margin-bottom: 50px; 
    justify-content:  space-evenly;
    align-items: center;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px; 
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  start;
  justify-content: center;

  @media (min-width: 641px) and (max-width: 1007px) {
    align-items:   center;
    justify-content: center;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    align-items:   center;
    justify-content: center;
  }

`;

const Image = styled.img`
  width: 50%;

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 100%;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    width: 70%;
  }
`;

const RightImage= styled.img`
  width : 50%;

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 70%;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    width: 50%;
  }
`

const BlockTitle = styled.h2`
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
 

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.div  `
  color: #a9a9a9;
  font-family: Neurial Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; 
  text-align: left;
  word-wrap : wrap;
  margin-bottom : 20px;
  margin-top : -20px;
  max-width: 400px;
  
  
  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 24px;
    max-width: 450px;
    padding: 10px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 20px;
    max-width: 290px;
    padding: 20px;
  }
  
`;

const TradeNow = styled.button`
  display: flex;
  width: 216px;
  height: 48px;
  padding: 24px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  color: #000;
  font-family: Neurial Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
const Derivates = () => {
  return (
    <OuterBox>
      <FirstSection>
        <h2>
          Derivates made simple <br />
          in <span>3 Easy </span> Steps
        </h2>
      </FirstSection>
      <FlexBox>
        <InnerDiv>
 
          <Image
            src="https://framerusercontent.com/images/JOp5o95H8N6rcRdm2ihCJpcoawc.png?scale-down-to=1024"
            alt="Description 1"
          />
 
          <RightDiv>
            <RightImage src="https://framerusercontent.com/images/Eirp07s7Wsvd04ENgTUIQE6RGkc.png" />
            <BlockTitle>
              Create an Account
            </BlockTitle>
            <Paragraph>Register & Complete your   Verification in less than 2 minutes</Paragraph>
              
            <TradeNow>Trade Now</TradeNow>
          </RightDiv>
        </InnerDiv>
        <InnerDiv>
          <Image
            src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
            alt="Description 2"
          />
           <RightDiv>
            <RightImage src="https://framerusercontent.com/images/Eirp07s7Wsvd04ENgTUIQE6RGkc.png" />
            <BlockTitle>
            Deposit Funds
            </BlockTitle>
            <Paragraph> Add funds quickly using a variety  
             of payment methods</Paragraph>
              
            <TradeNow>Trade Now</TradeNow>
          </RightDiv>
        </InnerDiv>
        <InnerDiv>
          <Image
            src="https://framerusercontent.com/images/yT2IeAMzpz2zotDCFRXIz6bngLA.png?scale-down-to=1024"
            alt="Description 2"
          />
          <RightDiv>
            <RightImage src="https://framerusercontent.com/images/Eirp07s7Wsvd04ENgTUIQE6RGkc.png" />
            <BlockTitle>
            Become a Trader
            </BlockTitle>
            <Paragraph>Choose Your Trading Pair & Trade  
                Seamlessly</Paragraph>
              
            <TradeNow>Trade Now</TradeNow>
          </RightDiv>
        </InnerDiv>
      </FlexBox>
    </OuterBox>
  );
};

export default Derivates;
