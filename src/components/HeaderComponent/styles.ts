import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cyan500};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  height: 40px;
`;

export const Logo = styled.img`
  height: 21px;
`;

export const Exit = styled.div``;
