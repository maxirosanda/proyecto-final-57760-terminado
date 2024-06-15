import React from "react"
import './Error.css'

const Error = ({message, textButton, onRetry}) => {

  return (
    <div className="container" >
      <span className="errorMessage">{message}</span>
      <button className="button" onPress={onRetry}>{textButton}</button>
    </div>
  )
}



export default Error