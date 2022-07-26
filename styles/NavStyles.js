import styled from "styled-components";

export const NavStyles = styled.nav`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  align-items: center;
  a {
    font-size: 1.2rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;
