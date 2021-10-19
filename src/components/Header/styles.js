import styled from "styled-components";

export const H1 = styled.h1`
  cursor: pointer;
  color: blueviolet;
  font-family: "Merienda", cursive;
  margin: 0;
  font-size: 25px;
  @media (max-width: 417px) {
    font-size: 20px;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 10px;
  img {
    width: 25px;
    height: 25px;
  }
  p {
    margin: 0;
  }

  span {
    cursor: pointer;
    border-radius: 100%;
    position: relative;
    top: 10px;
    left: 25px;
    background-color: blueviolet;
    color: white;
    font-size: 8px;
    padding: 0 3px;
    font-family: "Merienda", cursive;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid blueviolet;
`;
