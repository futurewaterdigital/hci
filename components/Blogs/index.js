import React from 'react'
import Banner from './Banner'
import BlogComponenet from './BlogComponenet'
import Header from '../Header/page'
import Footer from '../Footer/page'
const index = () => {
  return (
    <div>
        <Header/>
        <Banner />
        <BlogComponenet />
        <Footer />
    </div>
  )
}

export default index