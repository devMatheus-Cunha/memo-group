import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme }) => theme.colors.cyan600};
    margin-bottom: 5px;
  }

  > input {
    color: ${({ theme }) => theme.colors.cyan600};
    border: 1px solid ${({ theme }) => theme.colors.cyan400};
    border-radius: 5px;
    padding: 5px;

    &:focus-visible {
      outline:${({ theme }) => theme.colors.grayhover} auto 1px;
    }
  }
`;
