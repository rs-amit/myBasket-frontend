import React from 'react'
import { useLocation } from "react-router-dom";

function Success() {
    const location = useLocation()
    console.log(location.state)
  return (
    <div>
      success
    </div>
  )
}

export default Success
