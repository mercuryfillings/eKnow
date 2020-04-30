import React, { useState } from 'react'

export default function ProblemList(props) {

  return (
    <div>
      <ul>
      {
            props.problems.map((problem, i) => {
              return <li key={i} className='probList'>{props.problems[i]}</li>
            })
          }
      </ul>
    </div>
  )
}
