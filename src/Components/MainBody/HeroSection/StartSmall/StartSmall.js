import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 91px;
  align-self: stretch;
  background: var(--White, #fff);
  margin-top: -120px;
  padding: 0px;
  maring: 0px;
`;

const FirstSection = styled.div`
  h2 {
    color: var(--Black, #0e0e0f);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 76.882px; /* 106.78% */
    letter-spacing: -2.097px;
  }
  div {
    color: var(--neutrals-grey-8, #32333a);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 22.366px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.849px;
    word-wrap: break-word;
    max-width: 510px;
    margin: auto;
    margin-top: -50px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    h2 {
      font-size: 50px;
    }
    div {
      max-width: 450px;
      font-size: 20px;
      padding : 10px
    }
  }

  @media (min-width: 200px) and (max-width: 640px) {
    h2 {
      font-size: 40px;
    }
    div {
      max-width: 290px;
      font-size: 20px;
      padding : 20px
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  align-self: stretch;
  margin: 50px;
  margin-top: -50px;

  @media (min-width: 200px) and (max-width: 640px) {
    flex-direction: column;
  }
`;

const InnerDiv = styled.div`
  padding: 50px;
  background: #d1cfcd;
  max-width : 350px;
`;

const Image = styled.img`
  width: 50%;
`;

const BlockTitle = styled.h1`
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-weight: 700;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 30px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.p`
  font-family: Neurial Grotesk;
  font-size: 16px;
  word-wrap: break-word;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 18px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 19px;
  }
`;

const StartSmall = () => {
  return (
    <OuterBox>
      <FirstSection>
        <h2>Start Small. Earn Big.</h2>
        <div>
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </div>
      </FirstSection>
      <FlexBox>
        <InnerDiv>
          <Image
            src="https://framerusercontent.com/images/R4hvKhiUXqebLLVic3lE8sXqo.png"
            alt="Description 1"
          />
          <BlockTitle>
            Deposit <br /> Bonus
          </BlockTitle>
          <Paragraph>
            Our assets liquidity is unmatched in the market , with a  
            small bid-ask spread and a well balanced order book
          </Paragraph>
        </InnerDiv>
        <InnerDiv>
          <Image
            src="https://framerusercontent.com/images/K2BTdQ9Ra17goKGfOTRxtAx13Y.png"
            alt="Description 2"
          />
          <BlockTitle>
            Dedicated <br /> Relationship Manager
          </BlockTitle>
          <Paragraph>
            Our assets liquidity is unmatched in the market , with a   
            small bid-ask spread and a well balanced order book
          </Paragraph>
        </InnerDiv>
      </FlexBox>
    </OuterBox>
  );
};

export default StartSmall;
