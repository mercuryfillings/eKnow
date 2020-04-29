import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import ProblemInput from './ProblemInput'
import ProblemPage from './ProblemPage'
import Header from './Header'

function App() {

  const [problem, setProblem] = useState('');

  function handleChange(newProblem) {
    setProblem(newProblem);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <section className="card">
              <h2>ASK ENO WHAT HE KNOW</h2>
              <div className='logocontainer'>
                <img className='enopic' src={require('./Eno.jpg')} alt='Brian Eno' title='Brian Eno' /></div>
              <ProblemInput problem={problem} onChange={handleChange} />
              {/* <ul>
              <li>{problem}</li>
            </ul> */}
            </section>
          </Route>
          <Route path="/problem/" exact>
            <ProblemPage problem={problem} onChange={handleChange} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
