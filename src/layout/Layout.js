import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Meta from '../components/Meta'

export const Layout = ({children}) => {
  return (
    <>
      <Meta />
      <Container>
      <Header/>
      <main>{children}</main> 
      <Footer/>
      </Container>
    </>
  )
}
