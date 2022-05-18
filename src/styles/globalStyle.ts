import {createGlobalStyle} from "styled-components"
import "@fontsource/mulish";

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
       background: 'linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)';
   }
`