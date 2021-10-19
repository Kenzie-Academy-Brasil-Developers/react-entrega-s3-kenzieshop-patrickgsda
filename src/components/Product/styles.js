import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #fff;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    margin: 0;
  }
`;

export const ContainerSale = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #fff;

  @media (max-width: 360px) {
    width: 132px;
    height: 340px;
    flex-direction: column;
  }

  img {
    width: 200px;
    height: 200px;
  }

  p {
    margin: 0;
  }
`;
