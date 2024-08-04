import React from "react"

function Field({ label, type, content, value, onChange, placeholder, readOnly }) {
   return (
      <div className="input-wrapper">
         <label htmlFor={content}>{label}</label>
         <input type={type} id={content} name={content} value={value} placeholder={placeholder} onChange={onChange} readOnly={readOnly} />
      </div>
   )
}

export default Field