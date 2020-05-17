import React from 'react'
import { Link } from 'gatsby'
import LogoImage from './LogoImage'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import * as styles from 'styles/styles'

const HeaderWrapper = styled.div`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: var(--clr-primary-1);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`
const ImageWrapper = styled.div`
width: 130px;
`

const NavbarHeader = ({toggleMenuOpen}) => {
  return (
    <HeaderWrapper>
      <Link to='/' className='logo'>
        <ImageWrapper>
        <LogoImage/>
        </ImageWrapper>
      </Link>
      <FaAlignRight className='toggle-icon' onClick={toggleMenuOpen}/>
    </HeaderWrapper>
  )
}

export default NavbarHeader
