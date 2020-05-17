import React from 'react'
import Layout from 'components/shared/Layout'
import SEO from 'components/SEO'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  margin: 0 auto;
  padding 2rem;
`

const About = () => {
  return (
    <Layout>
      <SEO title='about page'/>
      <AboutWrapper>

      <h2>About Susan</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio. </p>
      </AboutWrapper>
    </Layout>
  )
}

export default About
