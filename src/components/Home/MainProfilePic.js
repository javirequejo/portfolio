import React, { Fragment } from 'react'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'
import { mainProfilePicQuery } from '../../queries/ImageQueries'

const MainProfilePic = () => {
    return (
        <StaticQuery query={mainProfilePicQuery} render={(data) => (
            <Fragment>
                {console.log(data)}
                <Img fluid={data.fileName} alt="" />
            </Fragment>
        )} />
    )
}

export default MainProfilePic
