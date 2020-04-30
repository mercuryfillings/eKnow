import React, { useState, useEffect } from 'react'

export default function ProblemList(props) {
  const [list, setList] = useState([]);

    useEffect(() => {
      setList(list.concat(props.problem));
    }, [])

  
  console.log(list)
  
  return (
    <div>
      <ul>
        {
          list.map((problem, i) => {
            return <li key={i} className='probList'>{list[i]}</li>
          })
        }
      </ul>
    </div>
  )
}
