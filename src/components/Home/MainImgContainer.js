import React from 'react'
import styled from 'styled-components'

const ProfileImgContainer = styled.div`
  margin: 0;
  height: 30vh;
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