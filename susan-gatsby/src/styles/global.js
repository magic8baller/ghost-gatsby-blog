import "typeface-aleo";
import "typeface-clear-sans";
import "typeface-open-sans";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --styled-font: "Aleo";
  --main-font: "Open Sans";
  --bold-font: "Clear Sans";
  /* dark shades of primary color*/
  /* --clr-primary-1: hsl(43, 86%, 17%); */
  --clr-primary-1: hsl(184, 91%, 17%);
  --clr-primary-2: hsl(185, 84%, 25%);
  --clr-primary-3: hsl(185, 81%, 29%);
  --clr-primary-4: hsl(184, 77%, 34%);
  --clr-primary-5: #2caeba;
  /* lighter shades of primary color */
  --clr-primary-6: hsl(185, 57%, 50%);
  --clr-primary-7: hsl(184, 65%, 59%);
  --clr-primary-8: hsl(184, 80%, 74%);
  --clr-primary-9: hsl(185, 94%, 87%);
  --clr-primary-10: hsl(186, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-white: #fff;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}
*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1,
h2,
h3,
h4 {
    font-family: var(--styled-font), serif;
}
body {
    font-family: "Open Sans", sans-serif;
}
ul {
    list-style-type: none;
}
ul.nav-links {
    display: flex;
}
a {
    text-decoration: none;
}
/*
=============== 
Navbar
===============
*/

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);
}
.nav-center {
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header img {
  margin-bottom: 0.375rem;
}
.toggle-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
}
.toggle-btn:hover {
  color: var(--clr-primary-2);
}
.nav-links {
  display: none;
}
@media screen and (min-width: 768px) {
  .toggle-btn {
    display: none;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }
  .nav-links li {
    margin-right: 2rem;
  }
  .nav-links a {
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}

@media screen and (min-width: 992px) {
  .navbar {
    background: transparent;
  }
}
`

export default GlobalStyle;