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
  span {
    background: #ff2626;
    color: white;
    width: 1.3rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    cursor: none;
  }
`;
