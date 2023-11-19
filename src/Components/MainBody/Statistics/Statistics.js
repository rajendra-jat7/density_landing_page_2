import React from "react";
import styled from "styled-components";

const OutermostContainer = styled.div`
  display: flex; 
  padding: 0px 216px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background-color: #000;
  padding : 50px;
  margin : auto;
`;

const StatisticsContainer = styled.div`
  width : 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border: 1.5px solid rgba(50, 216, 117, 0.96);
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.20);
  backdrop-filter: blur(26.25px);   
  padding : 0px 0px;
  margin : 100px 0px;
  gap : 20px;

  @media (min-width: 641px) and (max-width: 1007px) {
    gap: 10px;
    border: none;
    padding : 30px 30px; 
  }

  @media (min-width: 200px) and (max-width: 640px) {
    flex-direction: column;
    align-items: space-evenly;
    justify-content: center;
    min-height : 600px;
    gap: 5px;
    border: none;
    box-shadow: none;
    backdrop-filter: none; 
    padding : 20px 20px;
  }
`;

const SingleData = styled.div`
  width : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 4px;
  flex: 1 0 0;
  padding : 5%;

  @media (min-width: 641px) and (max-width: 1007px) {
    gap: 8px;
    width : 80%; 
    padding : 5%;
  }

  @media (min-width: 300px) and (max-width: 640px) {
    gap: 4px;
    width : 100%; 
    padding : 5%;
  }
`;

const StatisticData = styled.div`
  color: var(--electric-green-primary, #ebff25);
  font-family: "Neurial Grotesk";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 28px;
  }

  @media (min-width: 300px) and (max-width: 640px) {
    font-size: 28px;
  }
`;

const StatisticText = styled.div`
  color: #a9a9a9;
  font-family: "Neurial Grotesk";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media (min-width: 300px) and (max-width: 640px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Data = [
  {
    data: "00%",
    text: "Conversion Fee",
  },
  {
    data: "500 Mn+",
    text: "Lifetime Volume Traded",
  },
  {
    data: "250+",
    text: "Total Tradable Pairs",
  },
  {
    data: "15,000+",
    text: "Traders",
  },
];

const Statistics = () => {
  return (
    <OutermostContainer>
      <StatisticsContainer>
        {Data.map((stat, index) => (
          <SingleData key={index}>
            <StatisticData>{stat.data}</StatisticData>
            <StatisticText>{stat.text}</StatisticText>
          </SingleData>
        ))}
      </StatisticsContainer>
    </OutermostContainer>
  );
};

export default Statistics;
