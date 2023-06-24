import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
    height: 100%;
   
  } 
  
  body {
      position:relative;
      min-height: 100%;
      color: var(--background4-main);
      margin: 0;
      padding: 0;
      max-width: 100vw;
      height: 100%;
      overflow-wrap: break-word;
      background: var(--background1-main);
      font-family: 'Open Sans', sans-serif;
    
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: inherit;
        }
        &:active {
        color: inherit;
        }

      }
  }
   :root{
     margin: 0 auto;
     
     --background0-main: #162740; 
     --background1-main: #0C0D0F; 
     --background2-main: #14171A; 
     --background3-main: #21272B; 
     --background4-main: #F0F3F8; 
     --background5-main: #38ADFF; 
     
     --background-secondary1: #43ADFF; 
     --background-secondary2: #6696F2; 
     --background-secondary3: #837DDE;
     --background-secondary4: #9A62C2;
     --background-secondary5: #A943A0;
     --background-secondary6: #AE1D78;
     
     --success1: #00bc8c; 
     --success2: #6FCD84; 
     --success3: #AADC81; 
     --success4: #104002;

     --info1: #00A8D0;
     --info2: #00C5D5;
     --info3: #3AE1CD;
   
     --danger1: #930100;
     --danger2: #D14648;
     --danger3: #e76f51;
     --warning1: #ca6702;
     --warning2: #ee9b00; 
     --warning3: #FFE73B;
     
     
     --gold1: #8E793E;
     --gold2: #AD974F;


     --boxShadowColor: black;
     
     --boxShadowSmall: inset -5px 5px 10px #675123,
     inset 5px -5px 10px #957533;
     
     
     --background-blur0: rgba(60, 59, 61, 0.10);
     --background-blur1: rgba(60, 59, 61, 0.65);
     --background-blur2: rgba( 200, 198, 198, 0.25 );
     --background-blur3: rgba( 200, 198, 198, 0.45 );

    


    --border-radius0: 4px;
    --border-radius1: 8px;
    --border-radius2: 16px;
    --border-radius3: 24px;

    --padding-verySmall: 6px 4px 6px 6px;
    --padding-small: 6px 6px 6px 8px;
    --padding-small-sides: 0px 6px 0px 10px;;
    --padding-medium: 8px 8px 8px 12px;
    --padding-medium-large: 12px 16px;
    --padding-big: 12px 12px 12px 20px;
    --padding-big-sides: 0px 12px 0px 20px;
    --padding-top-sides: 16px 16px 0px;


    --gap-verySmall: 4px;
    --gap-small: 6px;
    --gap-medium: 8px;
    --gap-big: 12px;
    --gap-big-14: 14px;
    --gap-veryBig: 16px;
    --gap-huge: 20px;
    
    --font-size-verySmall: 0.7rem;
    --font-size-small: 0.8rem;
    --font-size-small-plus: 0.85rem;
    --font-size-medium: 1rem;
    --font-size-medium-plus: 1.1rem;
    --font-size-big: 1.2rem;
    --font-size-bigger: 1.4rem;

    --transition-one: 0.1s;
    --transition-two: 0.2s;
    --transition-three: 0.3s;

    --background-gradient0: linear-gradient(
    120deg,
    var(--background-blur1) 0%,
    transparent 30%,
    transparent 70%,
    var(--background-blur1)
  );

    --background-gradient1: linear-gradient(
      120deg,
      var(--background-blur3) 0%,
      transparent 30%,
      transparent 70%,
      var(--background-blur2)
    );
  --background-gradient3: linear-gradient(
      110deg,
      var(--background-blur0) 0%,
      var(--background3-main) 30%,
      var(--background3-main) 90%,
      var(--background-blur0)
    );
  --background-gradient4: linear-gradient(
      120deg,
      var(--background-blur1) 0%,
      transparent 20%,
      transparent 80%,
      var(--background-blur1)
    );

    
    --background-gradient2: linear-gradient(to bottom, #50abdf, #1f78aa);


    @media (max-width: 1220px) {
   
  } 
    @media (max-width: 1040px) {
    /* display: none; */
  }       
  @media (max-width: 1020px) {
    /* display: none; */
  }
  @media (max-width: 760px) {
    /* display: none; */
  }

  @media (max-width: 610px) {
 
  }
  @media (max-width: 360px) {
 
  }
  @media (max-width: 340px) {
 
  }
   
  @media screen and (max-width: 1300px) and (min-width: 1040px) {}
`

export { GlobalStyle }
