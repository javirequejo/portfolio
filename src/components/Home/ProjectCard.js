import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    position: relative;
    width: 30vw;
    height: 30vh;
    padding: 1rem;
    background-image: ${props => props.imageUrl ? `url(${props.imageUrl});` : ''}
    background-size: cover;
    background-clip: content-box;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0,0,0,0.22) 0px 15px 12px, rgba(0,0,0,0.3) 0px 19px 38px;

    &:hover {
        background: none;
        transition: all 0.4s ease 0s;
    }

    &:hover .card-inner {
        opacity: 1;
    }

    ::-webkit-scrollbar {
        width: 0.3rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 50px;
    }
`

const CardInner = styled.div`
    background-color: ${props => props.theme.colors.primary}
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    padding: 2rem 1.3rem 2rem 2rem;
    transition: all 0.4s ease 0s;

    & p {
        overflow-y: scroll;
        height: 87%;
        padding-right: 1rem;
        margin-top: 1.5rem;
    }
`

const ProjectCard = project => {
    return (
        <CardDiv imageUrl={project.image}>
            <CardInner className='card-inner'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </CardInner>
        </CardDiv>  
    )
}

export default ProjectCard