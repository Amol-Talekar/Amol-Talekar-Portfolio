import styled from "styled-components";

export const Homewrapper = styled.div`
  text-align: center;
  font-size: 40px;
  border: 1px solid yellow;
  //background-color: blue;
  height: 700px;

  width: 70vw;

  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-clip: border-box;
  @media (max-width: 640px) {
    width: 90%;
    margin: auto;
  }
`;
