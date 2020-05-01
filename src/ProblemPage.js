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

  const [fields, setFields] = useState([{ value: '' }]);

  const [now, setNow] = useState([])

  const [show, setShow] = useState(false)

  function handleChange(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    setShow(!show)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(!show)
    handleRemove(0);
  }

  function handleRemove(i) {
    props.setMusings(props.musings.concat(fields[i].value))
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
    setNow(now.concat(new Date().toLocaleTimeString()))
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
            props.musings.map((musing, i) => {
              return <li key={i} className='musings'><i>Card No. {strat.cardnumber}:</i> | <i>{now[i]}</i> <br/><span className='musing-content'>{musing}</span>  </li>
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
                  onChange={e => handleChange(i, e)}
                  onSubmit={handleSubmit}
                  placeholder="Add Musings"
                />
                <input
                  type='submit'
                  value='+'
                  className='prob-button' />
              </form>
            </div>
          );
        })}
        <p className={show ? 'log' : 'loghide'} onClick={() => handleAdd()}>Log Another Thought</p>
      </section>
    </div >
  )
}
