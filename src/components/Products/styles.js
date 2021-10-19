import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: "flex-start";
  align-items: "flex-start";
  flex-wrap: wrap;
  max-width: 1200px;
  @media (max-width: 599px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;
