import React from "react";
import styled from "styled-components";
import nav from "./nav.css";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
height: 70px;
position: fixed;
top: 0;
left: 0;
`;



const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;



const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;

`;

const Navbar = () => {
  return (
    <Section>
      <Container>
      <Links>
      <Logo src="./img/logo.jpg" />
      <button className="button-two ">Contact</button>
      <button className="button-three">Help</button>
      
        </Links>
        <Icons>
        
          <Button>Sign up</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
