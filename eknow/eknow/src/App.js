import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import ProblemInput from './ProblemInput'
import ProblemPage from './ProblemPage'
import ProblemList from './ProblemList'
import Header from './Header'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// const Prob = ({ problem }) => <div className="prob">{problem.text}</div>;

function App() {

  const [problem, setProblem] = useState('');
  const [problemList, setProblemList] = useState([])

  function handleChange(newProblem) {
    setProblem(newProblem);
  }

  return (
    <div>
      <Route render={({ location }) => (
        <div>
          <Route exact path="/" render={() => (
            <Redirect to="/" />
          )} />
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
                      {/* <ProblemList problem={problem} /> */}
                    </section>
                  </Route>
                  <Route path={'/' + problem} exact>
                    <ProblemPage problem={problem} onChange={handleChange} />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </main>
        </div>
      )} />
    </div>
  )
}

export default App;
