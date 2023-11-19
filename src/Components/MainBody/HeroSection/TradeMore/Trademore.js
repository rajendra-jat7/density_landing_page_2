import React from "react";
import styled from "styled-components";
import Density_logo from "../../../../images/density-logo.png";

const OuterContainer = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  align-items: center;
  gap: 82px;
  align-self: stretch;
  background-color: #000;

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 100px 0;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 60px 30px;
    gap: 30px;
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
      margin : auto;
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
      margin : auto;
    }
    div {
      font-size: 18px;
      line-height: 26px;
      margin-top: 5px;
    }
  }
`;

const Contents = styled.div`
  width : 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin: 0 60px;

  @media (min-width: 641px) and (max-width: 1007px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    flex-direction: column;
    font-size: 12px;
    gap: 40px; 
  }
`;

const InnerDiv = styled.div`
  height: 438px;
  background: var(--neutrals-grey-9, #19191d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex: 1 0 0;
  padding : 20px;
  width : 80%;
`;

const Item = styled.div`
  
  img {
    height: 30px;
    flex-shrink: 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    color: var(--White, #fff);
    font-family: Neurial Grotesk;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 50.625px; /* 158.203% */
    letter-spacing: -1.687px;
  }
  p {
    color: var(--White, #fff);
    font-family: Neurial Grotesk;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.687px;
    opacity: 0.5;
    margin-top: -10px;
  }
`;

const InnerDivMid = styled.div`
  width : 80%;
  height: 438px;
  background: rgb(227, 255, 107);
  background: linear-gradient(
    180deg,
    rgba(227, 255, 107, 1) 0%,
    rgba(208, 232, 131, 1) 1%,
    rgba(119, 170, 27, 0.9809173669467787) 81%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex: 1 0 0;
`;

const TradeMore = () => {
  return (
    <OuterContainer>
      <TopContents>
        <span>Trade More. </span>
        <span>Pay Less</span>
        <div>Our low Fees Supercharge Your Profits</div>
      </TopContents>
      <Contents>
        <InnerDiv>
          <Item>
            <div>
              <img
                src="https://framerusercontent.com/images/RGxoj1OWYnxPhEypnfPbyya0.png?scale-down-to=512"
                alt="CoinDCX"
              />
            </div>
            <div>
              <h2>0.025</h2>
              <p>Maker Fees</p>
            </div>
            <div>
              <h2>0.07</h2>
              <p>Taker Fees</p>
            </div>
          </Item>
        </InnerDiv>
        <InnerDivMid>
          <Item>
            <div>
              <img src={Density_logo} alt="density-logo" />
            </div>
            <div>
              <h2>0.025</h2>
              <p>Maker Fees</p>
            </div>
            <div>
              <h2>0.07</h2>
              <p>Taker Fees</p>
            </div>
          </Item>
        </InnerDivMid>
        <InnerDiv>
          <Item>
            <div>
              <img
                src="https://framerusercontent.com/images/DNTQzRQMOU1ny1X7Xz3w4iHCBM.png?scale-down-to=512"
                alt="Delta Exchange"
              />
            </div>
            <div>
              <h2>0.025</h2>
              <p>Maker Fees</p>
            </div>
            <div>
              <h2>0.07</h2>
              <p>Taker Fees</p>
            </div>
          </Item>
        </InnerDiv>
      </Contents>
    </OuterContainer>
  );
};

export default TradeMore;
