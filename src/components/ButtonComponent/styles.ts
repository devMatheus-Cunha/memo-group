import styled from "styled-components";

export const Container = styled.div`
  .CancelAndButton {
      background-color: transparent !important;
      color: ${({ theme }) => theme.colors.gray400};
      text-decoration: underline;
      font-weight: 400;
      
      &:hover {
        color: ${({ theme }) => theme.colors.grayhover};
      }
  }

  button {
    border: none;
    border-radius: 5px;

    &:focus {
      border: none !important;
      background-color: none !important;
      box-shadow: none !important;
    }

    &:focus-visible {
      outline: none !important;
    }
    
    span {
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
