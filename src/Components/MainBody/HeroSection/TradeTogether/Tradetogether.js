import React from "react";
import styled from "styled-components";
import codingNinja from "../../../../images/coding_ninja.jpg"
// OuterBox component
const OuterBox = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 82px;
  align-self: stretch;
  background: #000;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.40) 25%, rgba(42, 93, 50, 0.40) 92.71%), url(${codingNinja}), lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(26.25px);

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 100px 0;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 80px 0;
  }
`;
const TopContents = styled.div`
  span {
    font-family: "Neurial Grotesk", sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.882px;
    letter-spacing: -2.097px;
  }

  span:nth-child(1) {
    color: var(--White, #fff);
    text-align: center;
  }

  span:nth-child(2) {
    color: var(--electric-green-primary, #ebff25);
  }

  div {
    color: var(--neutrals-grey-4, #e7e7ea);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.849px; /* 136.873% */
    margin-top: 20px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    span {
      font-size: 50px;
      margin: auto;
      text-align: center;
      display: block;
    }
    div {
      font-size: 20px;
      line-height: 28px;
      margin-top: 10px;
    }
  }

  @media (min-width: 200px) and (max-width: 640px) {
    span {
      font-size: 40px;
      line-height: 50px;
      margin: auto;
      display: block;
      text-align: center;
    }
    div {
      font-size: 18px;
      line-height: 26px;
      margin-top: 5px;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
  width : 70%;
   

  @media (min-width: 641px) and (max-width: 1007px) {
    margin: 42px;
    padding: 20px;
    flex-direction: column;
    width : 60%;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    margin: 22px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 50%;
  }
`;

const DuoBox = styled.div`
   display : flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding : 20px;
`;

const Heading3 = styled.h2`
  color: var(--White, #fff);
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin : 5px;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 36px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 30px;
  }
`;

const SubParagraph = styled.p`
  color: #a9a9a9;
  font-family: Neurial Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  margin : 5px;
`;

const Button = styled.button`
  display: flex;
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

const TradeTogether = () => {
  return (
    <OuterBox>
      <TopContents>
        <span>Trade Together. </span>
        <span>Thrive Together.</span>
        <div> Join the fun-filled community on our platform.</div>
      </TopContents>
      <FlexBox>
        <DuoBox>
          <Heading3>10,000+</Heading3>
          <SubParagraph>Traders</SubParagraph>
        </DuoBox>
        <DuoBox>
          <Heading3>100Mn</Heading3>
          <SubParagraph>Daily Volume Traded</SubParagraph>
        </DuoBox>
        <DuoBox>
          <Heading3>Daily</Heading3>
          <SubParagraph>Trade Analysis</SubParagraph>
        </DuoBox>
        <DuoBox>
          <Heading3>Live</Heading3>
          <SubParagraph>Signals</SubParagraph>
        </DuoBox>
      </FlexBox>
      <Button>Join community</Button>
    </OuterBox>
  );
};

export default TradeTogether;
