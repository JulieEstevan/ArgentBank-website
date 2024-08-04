import React from "react"
import "../style/components/button.css"

function Button({ content, event, onClick, style, className }) {
   return (
      <button event={event} onClick={onClick} style={style} className={className}>
         {content}
      </button>
   )
}

export default Button