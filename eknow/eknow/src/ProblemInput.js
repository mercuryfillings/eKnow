import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import './ProblemInput.css'

function ProblemInput() {

  const [problem, setProblem] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    let problemText = e.target.value
    setProblem(problemText)
    console.log(problem)
  }

  return (
    <div className='input'>
      <input maxLength='255' className='field' type="text" placeholder="Enter a problem."></input>
      <button className='button' onClick={handleClick}>Start</button>
    </div>
  )
}

export default withRouter(ProblemInput)