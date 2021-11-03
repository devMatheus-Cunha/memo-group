import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors : {
      cyan50: string,
      cyan100: string,
      cyan200: string,
      cyan300: string,
      cyan400: string,
      cyan500: string,
      cyan600: string,
      cyan700: string,
      cyan800: string,
      cyan900: string,

      error: string,
      sucess: string,
      warn: string,

      background: string,
      white: string,
      black: string,
      gray400: string,
      gray600: string,
      grayhover: string,
    }
  }
}
