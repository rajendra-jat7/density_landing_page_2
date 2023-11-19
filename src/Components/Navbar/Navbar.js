import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Density_Logo from "../../images/density-logo.png";

const NavbarContainer = styled.nav`
  display: flex;
  padding: 24px 216px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  background: rgba(42, 93, 50, 0.2);
  backdrop-filter: blur(20px);
  background-color: #000000;

  @media (min-width: 641px) and (max-width: 1007px) {
    padding: 24px 10px;
    gap: 10px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    padding: 24px 50px;
  }
`;

const Logo = styled.img`
  width: 99.953px;
  height: 24px;
`;
const Navbody = styled.div`
  min-width: 300px;
  width : 90%;
  display: flex;
  justify-content:  space-between;
  align-items: center;
  gap: 56px;
  color: #fcfcfc;
  margin : 0px 0px;

  @media (min-width: 641px) and (max-width: 1007px) {
    justify-content: center
    gap: 25px; 
    margin : 0px 100px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    gap: 15px; 
    justify-content: center;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  @media (min-width: 200px) and (max-width: 640px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 90%;
    background: #000;
    padding: 20px;
    gap: 20px;
    flex-direction: column;
  }
`;

const NavLink = styled.li`
  margin-right: 20px;
  color: #fcfcfc;
  font-family: Neurial Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 18px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 200px) and (max-width: 640px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 3px;
  }
`;

const Button = styled.button`
  display: flex;
  height: 48px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Neurial Grotesk;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  margin: -10px 50px;

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 16px;
    padding: 0 55px;
    height: 54px;
    margin: -10px 30px;
  }

  @media (min-width: 200px) and (max-width: 640px) {
    font-size: 16px;
  }
`;
 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer> 
        <Hamburger open={open} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger> 

      <Navbody>
        <Logo src={Density_Logo} alt="Logo" />
        <NavLinks open={open}>
          <Link>
            <NavLink>Career</NavLink>
          </Link>
          <Link>
            <NavLink>Blogs</NavLink>
          </Link>
          <Link>
            <NavLink>Leaderboard</NavLink>
          </Link>
          <Link>
            <NavLink>Fees</NavLink>
          </Link>
          <Link>
            <Button>Trade Now</Button>
          </Link>
        </NavLinks>
      </Navbody>
    </NavbarContainer>
  );
};

export default Navbar;
