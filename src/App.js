import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import ProblemInput from './ProblemInput'
import ProblemPage from './ProblemPage'
import ProblemList from './ProblemList'
import Footer from './Footer'
import Header from './Header'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {

  const [problem, setProblem] = useState('');
  const [list, setList] = useState([]);
  const [musings, setMusings] = useState([]);

  function handleChange(newProblem) {
    setProblem(newProblem);
    console.log(newProblem)
  }

  return (
    <div>
      <Route render={({ location }) => (
        <div>
          <header>
            <Header />
          </header>
          <main>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='fade'
              >
                <Switch>
                  <Route exact path='/'>
                    <section className="card">
                      <h2>ASK ENO WHAT HE KNOW</h2>
                      <div className='logocontainer'>
                        <img className='enopic' src={require('./Eno.jpg')} alt='Brian Eno' title='Brian Eno' /></div>
                      <ProblemInput problem={problem} onChange={handleChange} />
                      <ProblemList problem={problem} list={list} setList={setList} />
                    </section>
                  </Route>
                  <Route path={'/' + problem} exact>
                    <ProblemPage problem={problem} onChange={handleChange} musings={musings} setMusings={setMusings} />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>
        </div>
      )} />
      <section className="foot">
        <Footer />
      </section>
    </div>
  )
}

export default App;
