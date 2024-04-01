import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  };
`;

export const Heading = styled.h1`
  color: olive;
  font-style: inherit;
  font-weight: bolder;
  padding-bottom: 20px;
`;
