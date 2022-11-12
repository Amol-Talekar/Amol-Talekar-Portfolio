import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  position: sticky;
  left: 5vw;
  top: 0px;
  border: 1px solid violet;
  z-index: 5;
  background-color: black;
  padding: 4px;

  @media (max-width: 640px) {
    flex-direction: row;
    left: 0px;
    width: 100%;
    position: sticky;
    height: 5vh;
  }
`;
