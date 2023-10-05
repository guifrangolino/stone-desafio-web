import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  /* Sharon Sans Fonts */

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951258/fonts/site-stone/SharonSans/SharonSans-Light.otf')
      format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951258/fonts/site-stone/SharonSans/SharonSans-LightItalic.otf')
      format('opentype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951258/fonts/site-stone/SharonSans/SharonSans-Regular.otf')
      format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951258/fonts/site-stone/SharonSans/SharonSans-Italic.otf')
      format('opentype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951258/fonts/site-stone/SharonSans/SharonSans-Medium.otf')
      format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951258/fonts/site-stone/SharonSans/SharonSans-MediumItalic.otf')
      format('opentype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951257/fonts/site-stone/SharonSans/SharonSans-Bold.otf')
      format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951257/fonts/site-stone/SharonSans/SharonSans-BoldItalic.otf')
      format('opentype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951257/fonts/site-stone/SharonSans/SharonSans-Bold.otf')
      format('opentype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951257/fonts/site-stone/SharonSans/SharonSans-BoldItalic.otf')
      format('opentype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951257/fonts/site-stone/SharonSans/SharonSans-Black.otf')
      format('opentype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Sharon Sans';
    src: url('https://res.cloudinary.com/dunz5zfpt/raw/upload/v1672951257/fonts/site-stone/SharonSans/SharonSans-BlackItalic.otf')
      format('opentype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  /* input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
`
