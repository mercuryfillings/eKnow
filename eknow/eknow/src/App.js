import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import ProblemInput from './ProblemInput'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="card">
        <Route path='/'>
          <h2>Ask Eno What He Know</h2>
          <div className='logocontainer'>
            <img className='enopic' src={require('./Eno.jpg')} alt='Brian Eno' title='Brian Eno' /></div>
          <ProblemInput />
        </Route>
      </main>
    </div>
  );
}

export default App;
