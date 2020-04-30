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

  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const attempt = fields.value;
    console.log(attempt)
  }

  return (
    <div>
      <section className='headerBox'>
        <img className="image" src={imgURL} />
        <div className='darker'>
          <h3 className='text'>{strat.strategy}</h3>
          <p className='cardno'> Card No. {strat.cardnumber} </p>
        </div>
      </section>
      <section className='card'>
        <p className='prob'>Current Problem:</p>
        <h2 className='current-problem'>{props.problem}</h2>
        {fields.map((field, idx) => {
          return (
            <div className='attempts' key={`${field}-${idx}`}>
              <form 
                className='attempt'
                onSubmit={handleSubmit}>
                <input
                  maxLength='255'
                  className='field'
                  type="text"
                  value={field.value || ""}
                  onChange={e => handleChange(idx, e)}
                  onSubmit={handleSubmit}
                  placeholder="Add Attempt Details"
                />
                <input
                  type='submit'
                  value='+'
                  className='prob-button' />
              </form>
            </div>
          );
        })}
        <p className='prob' onClick={() => handleAdd()}>Log Another Attempt</p>
      </section>
    </div>
  )
}
