import React, { useState, useEffect } from 'react'

export default function ProblemList(props) {
  // const [list, setList] = useState([]);

  useEffect(() => {
    props.setList(props.list.concat(props.problem));
  }, [])


  console.log(props.list)

  return (
    <div>
      <ul>
        {
          props.list.map((li, i) => {
            return <li key={i} className='probList'>{li}</li>
          })
        }
      </ul>
    </div>
  )
}
