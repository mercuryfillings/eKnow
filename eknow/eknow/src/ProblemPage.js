import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment';
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

  const [fields, setFields] = useState([{ value: '' }]);

  const [display, setDisplay] = useState(false)

  const [musings, setMusings] = useState([])

  const [now, setNow] = useState([])

  function handleChange(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
    console.log(values)
    console.log(display)
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    setDisplay(!display)
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRemove(0)
    console.log(display)
    console.log(now)
  }

  function handleRemove(i) {
    setMusings(musings.concat(fields[i].value))
    console.log(musings)
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    setNow(now.concat(new Date().toLocaleTimeString()))
  }

  function handleClick(e) {
    setDisplay(!display)
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
        <ul className='musing-box'>
          {
            musings.map((musing, i) => {
              return <li key={i} className='musings'><i>Card No. {strat.cardnumber}:</i> | {musings[i]} | <i>{now[i]}</i></li>
            })
          }
        </ul>
        {fields.map((field, i) => {
          return (
            <div className='attempts' key={`${field}-${i}`}>


              <form
                className='attempt'
                onSubmit={handleSubmit}>
                <input
                  maxLength='255'
                  className='field'
                  type="text"
                  value={field.value || ""}
                  onChange={e => handleChange(i, e)}
                  onSubmit={handleSubmit}
                  placeholder="Add Musings"
                />
                <input
                  type='submit'
                  value='+'
                  className='prob-button'
                  onClick={handleClick} />
              </form>
            </div>
          );
        })}
        <p className='log' onClick={() => handleAdd()}>Log Another Thought</p>
      </section>
    </div >
  )
}
