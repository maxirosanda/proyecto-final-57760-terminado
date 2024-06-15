import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './LoadingSpinner.css'


const LoadingSpinner = () => {
  return (
    <div className="container" >
      <FontAwesomeIcon className="spinner" icon="fa-solid fa-spinner" />
    </div>
  )
}

export default LoadingSpinner

