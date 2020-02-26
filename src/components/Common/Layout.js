import React from 'react'
import Footer from './Footer'
import '../../styles/index.css'

const Layout = props => {
    return (
        <div>
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout