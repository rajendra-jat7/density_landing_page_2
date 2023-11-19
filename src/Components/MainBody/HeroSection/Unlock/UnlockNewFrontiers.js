import React from "react";
import styled from "styled-components";
import graphical_data from "../../../../images/graphical_data.png";

const OuterBox = styled.div`
  display: flex;
  padding: 150px 0px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  background-color: #000; 

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 200px 0;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 260px 30px;
    gap: 30px;
  }
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
 

const FlexBox = styled.div`
  display: flex;
  width:  80%;
  padding : 50px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px);
  gap : 50px;


  @media (min-width: 641px) and (max-width: 1007px) { 
    align-items: center;
    justify-content: center; 
    gap : 40px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
    margin : auto;
    gap : 40px;
  }
`;

const FlexItem = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 24px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 18px;
  }
`;

const Title = styled.h2`
  color: var(--electric-green-primary, #ebff25);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 76.882px; /* 106.78% */
  letter-spacing: -2.097px;

  span {
    color: var(--White, #fff);
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 50px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 22.366px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px;
  margin-top: -50px;
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
  flex-shrink: 0;

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 60%;
    height: 50%;
 
  }

  @media (min-width: 200px) and (max-width: 640px) {
    width: 100%;
    height: 100%; 
  }
`;

const UnlockNewFrontiers = () => {
  return (
    <OuterBox>
      <FirstSection>
        <Title>
          {" "}
          <span>Unlock</span> New Frontiers.
        </Title>
        <Description>
          Are you a stock trader looking for new opportunities to make <br />
          money? We got you covered!
        </Description>
      </FirstSection> 
        <FlexBox>
          <FlexItem>
            Same <br /> Strategies
          </FlexItem>
          <FlexItem>
            Same <br />
            Indicators
          </FlexItem>
          <FlexItem>
            {" "}
            Better <br />
            Leverage
          </FlexItem>
          <FlexItem>
            {" "}
            24x7 <br />
            Trading
          </FlexItem>
        </FlexBox> 

      <Image src={graphical_data} alt="Description" />
    </OuterBox>
  );
};

export default UnlockNewFrontiers;
