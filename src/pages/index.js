import * as React from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainBody from "../Components/MainBody/MainBody";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0px;
  margin: 0px;
`;

const IndexPage = () => {
  return (
    <StyledMain>
      <Navbar />
      <MainBody />
      <Footer />
    </StyledMain>
  );
};

export default IndexPage;

export const Head = () => <title>Density exchange</title>;
