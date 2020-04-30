import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import './ProblemInput.css'

function ProblemInput(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/' + props.problem)
  }

  function handleChange(e) {
    props.onChange(e.target.value)
  }

  return (
    <>
      <form
        className='input'
        onSubmit={handleSubmit}>

        <input
          maxLength='255'
          className='field'
          type="text"
          value={props.value}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Enter a problem."
        />
        <input
          type='submit'
          value='START'
          className='button' />
      </form>
    </>
  )
}

export default withRouter(ProblemInput)