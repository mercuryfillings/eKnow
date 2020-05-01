import React, { useEffect } from 'react'
import './ProblemList.css'

export default function ProblemList(props) {

  useEffect(() => {
    props.setList(props.list.concat(props.problem));
  }, [])


  console.log(props.list.length)
  console.log(props.list)

  return (
    <div>
      <ul>
        {
          props.list.map((li, i) => {
            return <li key={i} className={li === "" ? 'emptyprob' : 'problist'}>{li}</li>
          })
        }
      </ul>
    </div>
  )
}
