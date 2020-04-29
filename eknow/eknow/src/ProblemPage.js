import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProblemPage.css'

const stratURL = "https://cors-anywhere.herokuapp.com/http://brianeno.needsyourhelp.org/draw"
const imgURL = "https://picsum.photos/800/300?grayscale"

export default function ProblemPage(props) {
  const [strat, setStrat] = useState({});
  useEffect(() => {
    axios(stratURL)
      .then((res) => setStrat(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <section className='headerBox'>
        <img className="image" src={imgURL} />
        <div className='darker'>
          <h3 className='text'>{strat.strategy}</h3>
          <p className='cardno'>Card No. {strat.cardnumber}</p>
        </div>
      </section>
      <section className='card'>
        <p className='prob'>Problem:</p>
        <h2 className='current-problem'>{props.problem}</h2>
      </section>
    </div>
  )
}
