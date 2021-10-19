import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 455px) {
    flex-direction: column;
  }
`;
