import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProblemList.css'

export default function ProblemList(props) {

  useEffect(() => {
    props.setList(props.list.concat(props.problem));
  }, [])

  return (
    <div>
      <ul>
        {
          props.list.map((li, i) => {
            return <li key={i} className={li === "" ? 'emptyprob' : 'problist'}><Link to={'/' + props.problem}>{li}</Link></li>
          })
        }
      </ul>
    </div>
  )
}
