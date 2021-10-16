import styled from 'styled-components';

export const Container = styled.div`
   button {
    &:focus{
      border: none !important;
      background-color: none !important;
      box-shadow: none !important;
    }
    &:focus-visible{
      outline: none !important;
    }
    span{
      svg {
        width: 18px;
        height: 18px;
      }
    }
   }
`;
