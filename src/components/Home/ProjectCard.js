import React, { useState } from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    position: relative;
    width: 24vw;
    height: 50vh;
    border-radius: 20px;
    overflow: hidden;
    background-color: #d8f2fe;
    color: #141e30;
    box-shadow: rgba(0,0,0,0.22) 0px 15px 12px, rgba(0,0,0,0.3) 0px 19px 38px;
    ::-webkit-scrollbar {
        width: 0.3rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #d8f2fe;
        border-radius: 50px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const CardFront = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const CardImg = styled.img`
    max-width: 100%;
    height: 50%;
`;

const CardTagsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

const CardStackTag = styled.span`
    background: ${(props) => (props.black ? '#141e30' : props.red ? '#d64045' : '#f8c630')};
    padding: 4px 10px;
    color: ${(props) => (props.black ? '#f2f2f2' : props.red ? '#f2f2f2' : '#141e30;')};
    font-size: 0.9rem;
    margin: 0 10px 10px 0;
    border-radius: 10px;
`;

const CardInner = styled.div`
    color: #1d3354;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1.3rem 2rem 2rem;
    font-size: 0.9rem;
    & p {
        overflow-y: scroll;
        padding-right: 1rem;
        margin-top: 1.5rem;
    }
`;

const ProjectCard = ({
  image, title, description, frontStack, backStack, githubUrl, liveUrl,
}) => {
  const [inHover, setHover] = useState(false);

  return (
    <CardDiv
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!inHover && (
        <CardFront>
          <CardImg src={image} alt={title} />
          <h3>{title}</h3>
          <CardTagsContainer>
            {frontStack.length > 0
            && frontStack.map((stack) => <CardStackTag key={stack}>{stack}</CardStackTag>)}
            {backStack.length > 0
            && backStack.map((stack) => <CardStackTag key={stack}>{stack}</CardStackTag>)}
          </CardTagsContainer>
        </CardFront>
      )}
      {inHover
            && (
            <CardInner className="card-inner">
              <h3>{title}</h3>
              <p>{description}</p>
              {githubUrl && (<a target="_blank" rel="noreferrer" href={githubUrl}><CardStackTag black>Github</CardStackTag></a>)}
              {liveUrl && (<a target="_blank" rel="noreferrer" href={liveUrl}><CardStackTag red>Live demo</CardStackTag></a>)}
            </CardInner>
            )}
    </CardDiv>
  );
};

export default ProjectCard;
