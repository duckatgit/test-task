import React from 'react'
import Header from '../Header/Header'
import Tabs from '../Tabs/Tabs'

const Layout = ({children}) => {
  return (
    <>
     <Header />
     <Tabs />
     <main>{children}</main>
    </>
  )
}

export default Layout