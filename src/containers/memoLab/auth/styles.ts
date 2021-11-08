import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  height: calc(100vh - 40px);
`;

export const ContentPrimary = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.cyan500};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentSecundary = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentForm = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.cyan700};
  margin-top: 3rem;

  align-self: center;
`;
