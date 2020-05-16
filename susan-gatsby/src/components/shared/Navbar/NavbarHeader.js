import React from 'react'
import { Link } from 'gatsby'
// import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import * as styles from 'styles/styles'

const HeaderWrapper = styled.div`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-family: var(--styled-font);
  }
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`

const NavbarHeader = ({toggleMenuOpen}) => {
  return (
    <HeaderWrapper>
      <Link to='/' className='logo'>Yoga with Susan</Link>
      <FaAlignRight className='toggle-icon' onClick={toggleMenuOpen}/>
    </HeaderWrapper>
  )
}

export default NavbarHeader
