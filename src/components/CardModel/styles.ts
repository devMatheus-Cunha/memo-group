import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  max-width: 240px;
  height: 290px;

  margin: 4rem auto;

  background-color: ${({ theme }) => theme.colors.cyan600};
  border-radius: 10px;

  /* transition: transform .6s;

  &:hover{
    transform: translate(.5%, -.6%);
  } */
`;

export const Content = styled.div`
  padding: 1rem 0.6rem 0rem 0.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.7rem 0;

  position: relative;
`;

export const Logo = styled.img`
  height: 18vh;
  width: 80%;
  margin: 0 auto;
`;

export const ContentTileAndSubtitle = styled.div``;

export const Title = styled.div`
  display: flex;
  gap: 0.2rem;

  h3 {
    color: ${({ theme }) => theme.colors.white};
  }

  > button {
    background-color: transparent;
    border: none;
    outline: none;

    align-self: flex-start;

    svg {
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.cyan300};
      }
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.cyan100};
`;

export const ContentButton = styled.div`
  position: absolute;
  bottom: -2.4rem;
  right: 1rem;
`;
