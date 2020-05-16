import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components";
import * as styles from "styles/styles";
import RouteLinks from 'constants/RouteLinks';


const LinkWrapper = styled.ul`
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }

  height: ${props => (props.open ? '155px' : '0px')};
  overflow: hidden;
  ${styles.transObject({ time: '1s' })};

  @media (min-width: 768px) {
  
    height: auto;
    
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`

const NavbarLinks = ({isOpen}) => {
  return (
    <LinkWrapper open={isOpen}>
     {RouteLinks.map(link => (
       <li key={link.id}>
         <Link to={link.path}  className="nav-link">{link.name}</Link>
         </li>
     ))}
    </LinkWrapper>
  )
}

export default NavbarLinks
