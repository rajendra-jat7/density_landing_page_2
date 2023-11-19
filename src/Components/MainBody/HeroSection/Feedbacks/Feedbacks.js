import React from "react";
import styled from "styled-components";
import prakash from "../../../../images/prakash_jamatia.png";
import arjun_naik from "../../../../images/arjun_naik.png";
import Shambhavi_Nayak from "../../../../images/Shambhavi_Nayak.png";

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  align-self: stretch;
  background: var(--White, #fff);
  margin-top: -120px;

  @media (min-width: 641px) and (max-width: 1007px) {
    gap: 32px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    gap: 20px;
    margin-top: -15px;
    word-wrap: break-word;
  }
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
  p {
    color: var(--neutrals-grey-8, #32333a);
    text-align: center;
    font-family: Neurial Grotesk;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.849px;
    margin-top: -35px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    h2 {
      font-size: 72px;
    }
    p {
      font-size: 34px;
      margin-top: -20px;
    }
  }

  @media (min-width: 200px) and (max-width: 640px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 19px;
      margin-top: -20;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: stretch;
  margin: auto;
  gap: 20px;
  align-self: stretch;
  padding: 20px;
  padding-top: 20px;

  @media (min-width: 641px) and (max-width: 1007px) {
    gap: 16px;
    flex-wrap : wrap;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    gap: 12px;
    padding: 10px;
    flex-direction: column;
  }
`;

const Flexy = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-between;
  align-self: stretch; 
`;

const Founder = styled.div`
  display: flex;
  flex-direction: column;   
  align-self: flex-start;  
  margin : auto; 
`;

const InnerDiv = styled.div`
  background: #d1cfcd;
  padding: 20px;
  min-width : 300px;
  max-width : 500px;


  @media (min-width: 641px) and (max-width: 1007px) {
    height: auto;
    padding: 40px; 
  }

  @media (min-width: 200px) and (max-width: 640px) {
    display : flex;
    flex-direction: column;
    align-items: space-evenly;
    height: auto;
    padding: 40px 20px;  
    gap : 20px 10px;
  }
`;

const Image = styled.img`
  width: 50%;

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 40%;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    width: 30%;
  }
`;

const BlockTitle = styled.h1`
  font-family: Neurial Grotesk;
  font-size: 32px;
  font-weight: 700;
  margin-top: -40px;
  text-align: left;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 24px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-family: Neurial Grotesk;
  font-size: 20px; 
  margin-top: -10px;
  word-wrap : break-word;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 18px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 18px; 
  }
`;

const Feedbacks = () => {
  return (
    <OuterBox>
      <FirstSection>
        <h2>Don’t take our word for it.</h2>
        <p>
          Hear it from our expert community of traders who have made <br />{" "}
          insane amounts in a short amount of time
        </p>
      </FirstSection>

      <FlexBox>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <Founder>
              <BlockTitle>
                Prakash <br />
                Jamtiya
              </BlockTitle>
              <Paragraph>Founder, Tradeshala</Paragraph>
            </Founder>
            <Image src={prakash} alt="Description 1" />
          </Flexy>
        </InnerDiv>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <Founder>
              <BlockTitle>
                Shambhavi <br />
                Nayak
              </BlockTitle>
              <Paragraph>Commodity Trader</Paragraph>
            </Founder>
            <Image src={Shambhavi_Nayak} alt="Description 1" />
          </Flexy>
        </InnerDiv>
        <InnerDiv>
          <Paragraph>
            As someone who's always looking for the next big thing, I was really
            excited to try out Density's crypto futures trading platform. And I
            have to say, it definitely lived up to my expectations.
          </Paragraph>
          <Flexy>
            <Founder>
              <BlockTitle>
                Arjun <br />
                Naik
              </BlockTitle>
              <Paragraph>Equity Trader</Paragraph>
            </Founder>
            <Image src={arjun_naik} alt="Description 1" />
          </Flexy>
        </InnerDiv>
      </FlexBox>
    </OuterBox>
  );
};

export default Feedbacks;
