import React from 'react'
import styled from "styled-components"

const AnnouncementContainer = styled.div`
   display:flex;
   justify-content:center;
   color:${(props)=>props.textColor};
   padding:10px;
   // margin:0 0 20px 0;
   background-color:${(props)=>props.bgColor}
`

function Announcement({offerMessage, bgColor, textColor}) {
  return (
    <AnnouncementContainer bgColor={bgColor} textColor={textColor}> {offerMessage} </AnnouncementContainer>
  )
}

export default Announcement
