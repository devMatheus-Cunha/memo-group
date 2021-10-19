import styled from "styled-components";

export const Container = styled.div`
  .CancelAndButton {
      background-color: transparent !important;
      color: var(--gray-400) !important;
      text-decoration: underline;
      font-weight: 400;
      
      &:hover {
        color: var(--gray-hover) !important;
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
