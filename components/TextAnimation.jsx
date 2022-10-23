import React from 'react'

export default function TextAnimation(props) {
    const textContent = props.text.split("");
    
  return (
    <div className="flex">
        {textContent.map((letter) =>
            <h1 key={Math.random()} className="hover:text-red-500 hover:-translate-y-2 duration-200 cursor-default">{letter}</h1>
        )}
    </div>
  )
}