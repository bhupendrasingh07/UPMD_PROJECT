import React from 'react'

const Button = ({className,type,buttonText}) => {
  return (
                     <button
                        className={className}
                        type={type}
                      >
                        {buttonText}
                      </button>
  )
}

export default Button