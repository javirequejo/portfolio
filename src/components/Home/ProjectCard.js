import React, { useState } from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 30vh;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0,0,0,0.22) 0px 15px 12px, rgba(0,0,0,0.3) 0px 19px 38px;
    ::-webkit-scrollbar {
        width: 0.3rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 50px;
    }
`;

const CardImg = styled.img`
    width: 100%;
`;

const CardInner = styled.div`
    background-color: ${(props) => props.theme.colors.primary}
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1.3rem 2rem 2rem;
    & p {
        overflow-y: scroll;
        height: 87%;
        padding-right: 1rem;
        margin-top: 1.5rem;
    }
`;

const ProjectCard = (project) => {
  const [inHover, setHover] = useState(false);

  return (
    <CardDiv
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!inHover && (<CardImg src={project.image} alt={project.title} />) }
      {inHover
            && (
            <CardInner className="card-inner">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </CardInner>
            )}
    </CardDiv>
  );
};

export default ProjectCard;
