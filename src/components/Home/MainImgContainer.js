import React from 'react'
import styled from 'styled-components'

const ProfileImgContainer = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: start;
  height: 15em;
`

const ProfileImg = styled.img`
  height: 100%;
`

const MainImgContainer = () => {
    return (
      <ProfileImgContainer>
        <ProfileImg 
          src="https://res.cloudinary.com/dls511fr9/image/upload/v1595451582/portfolio/profile.png"
          alt="javi-requejo-profile" 
        />
      </ProfileImgContainer>
    )
}

export default MainImgContainer