import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
  display: flex;
  padding: 150px 0px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  background-color: #000;
  

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 100px 0;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 80px 0;
  }
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media (min-width: 641px) and (max-width: 1007px) {
    gap: 16px;

    span {
      display: block;
    }
  }

  @media (min-width: 200px) and (max-width: 640px) {
    gap: 12px;

    span {
      display: block;
    }
  }
`;

const SecondSection = styled.div`
  margin: auto;

  @media (min-width: 641px) and (max-width: 1007px) {
    margin: 0 auto;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    margin: 0 auto;
  }
`;

const FlexBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  background: rgba(16, 16, 16, 0.4);
  backdrop-filter: blur(26.25px); 

  @media (min-width: 641px) and (max-width: 1007px) {
    margin: 42px;
    flex-direction: column;
    width: 90%;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    margin: 12px;
    padding: 10px;
    flex-direction: column;
    width: 90%;
  }
`;

const FlexItem = styled.div`
  display : flex; 
  flex-direction : column;
  justify-content : space-evenly;
  align-items :  center;
  gap : 10px;  
  color: var(--White, #fff);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  min-width : 300px;
  margin : auto;

  div {
    color: var(--White, #fff);
    font-family: Neurial Grotesk;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
    letter-spacing: -1px;
    margin : 20px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 28px;
    flex-direction : row;
    gap : 20px;
    padding : 20px;
    width : 100%;

    div {
      font-size: 28px;
    }
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 24px;
    flex-direction : row;
    gap : 20px;
    padding : 20px;

    div {
      font-size: 24px;
    }
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
    font-size: 36px;
  }
`;

const Description = styled.p`
  color: var(--neutrals-grey-4, #e7e7ea);
  text-align: center;
  font-family: Neurial Grotesk;
  font-size: 22.366px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.849px;
  margin-top: -50px;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 18px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 16px;
  }
`;

const HeroImage = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 160px;
    height: 160px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    width: 120px;
    height: 120px;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 130px;
  flex-shrink: 0; 
`;

const CenteralImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;

  @media (min-width: 641px) and (max-width: 1007px) {
    height: 40px;
    width: 40px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    height: 30px;
    width: 30px;
  }
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

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 16px;
    padding: 20px 40px;
    height: 40px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 14px;
    padding: 16px 32px;
    height: 32px;
  }
`;

const Referrels = () => {
  return (
    <>
      <OuterBox>
        <CenteralImage>
          <HeroImage
            src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
            alt="image1"
          />
        </CenteralImage>
        <FirstSection>
          <Title>
            {" "}
            Earn Money. <span> The Easy Way.</span>
          </Title>
          <Description>
            No Complexity of Trading Fee, generate volume and win
          </Description>
        </FirstSection>
        <SecondSection>
          <FlexBox>
            <FlexItem>
              <Image
                src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
                alt="image1"
              />
              <div>
                Share your <br /> referrel link
              </div>
            </FlexItem>
            <FlexItem>
              <Image
                src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
                alt="image1"
              />
              <div>
                Invite Friends to <br /> Trade on
              </div>
            </FlexItem>
            <FlexItem>
              {" "}
              <Image
                src="https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512"
                alt="image1"
              />
              <div>
                Trade    
                <br /> and Earn
              </div>
            </FlexItem>
          </FlexBox>
        </SecondSection>
        <Button>start earning now</Button>
      </OuterBox>
    </>
  );
};

export default Referrels;
