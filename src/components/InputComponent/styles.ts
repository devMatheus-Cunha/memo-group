import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: var(--gray-600);
    margin-bottom: 5px;
  }

  > input {
    color: var(--gray-600);
    border: 1px solid var(--gray-400);
    border-radius: 5px;
    padding: 5px;

    &:focus-visible {
      outline: var(--gray-hover) auto 1px;
    }
  }
`;
