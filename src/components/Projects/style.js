import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  border: 1px solid red;
  text-align: center;
  font-size: 40px;
  background-color: blue;
  height: 700px;

  width: 70vw;
  @media (max-width: 640px) {
    width: 90%;
    margin: auto;
  }
`;
