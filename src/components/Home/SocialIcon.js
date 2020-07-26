import React from 'react'
import styled from 'styled-components'


const IconDiv = styled.div`
    max-width: 8vw;
    padding: 0 1.5vw;
`

const IconImg = styled.img`
    width: 100%;
`

const SocialIcon = props => {
    return (
        <IconDiv>
            <a target="_blank" href={props.socialLink}><IconImg src={props.iconLink} /></a>
        </IconDiv>
    )
}

export default SocialIcon