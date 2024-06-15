import React from "react"
import './EmptyItems.css'

const EmptyItems = ({message}) => {

  return (
    <div className="emptyItemsContainer" >
      <span className="errorMessage">{message}</span>
    </div>
  )
}
export default EmptyItems
