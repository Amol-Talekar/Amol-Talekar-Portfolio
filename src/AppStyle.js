import styled from "styled-components";
import square from "./assets/square.jpg";

export const AppWrapper = styled.div`
  border: 1px solid green;
  display: grid;
  grid-template-columns: auto auto;
  background-image: url(${square});
  background-repeat: repeat-y;
  background-position: center;
  background-size: contain;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10px 0px;
  margin-bottom: 20px;
`;
