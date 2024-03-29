import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  };

  :root {
  --primary-color: #fffcf4;
  --secondary-color: #5532c8;
  --olive-color: olive;
};


/* .header__heading {
    color: olive;
    font-family: 'dancing script';
    font-style: inherit;
    font-weight: bolder;
    padding-bottom: 20px;
      
  }

  .header {
    background: #140523;
    color: #ffffff;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    padding: 10px;
  } */