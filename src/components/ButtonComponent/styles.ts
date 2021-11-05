import styled from "styled-components";

interface IContainerProps {
  access?: boolean;
}

export const Container = styled.div<IContainerProps>`
  .CancelAndButton {
      background-color: transparent !important;
      color: ${({ theme, access }) => (access ? theme.colors.white : theme.colors.gray400)};
      text-decoration: underline;
      font-weight: 400;

      transition: 0.3s;
      
      &:hover {
        color: ${({ theme, access }) => (access ? theme.colors.cyan200 : theme.colors.grayhover)};
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
