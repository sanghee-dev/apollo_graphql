import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI"...;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default globalStyles;
