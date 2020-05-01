# PROJECT 2 README 

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

### Overview

![Space Cat Image](http://4.bp.blogspot.com/-2c3o1AUjgHc/UoxauxKPLUI/AAAAAAAAV_c/MlEYkfSuIsI/s400/spacecat25.jpg)

**Project Title** e-Know

<br>

### Wireframes

Home View: (https://wireframe.cc/J4MU3r)

Problem View: (https://wireframe.cc/0CX71V)

Tablet Views: (https://wireframe.cc/iCCLnf)


<br>

### MVP

Test 

> The Brian Eno Cognitive Freezeup Override System (henseforth referred to as e-Know) helps its users bypass mental blocks by generating calming grayscale images overlaid with Brian Eno's Oblique Strategies, randomly delivering the exact piece of advice a user needs in overcome any creative hurdle. It will allow a user to input a particular problem they're encountering, then deliver a guiding-light strategy that locks at the top of the problem page, and draw a new card if the approach doesnt work. The user can then add timestampped notes detailing how they implemented the vaguely-worded wisdom of the ambient songsmith, and track the results of experimentation. It should also track how many cards it took to get to completion.

I will create reusable styled elements in Storybook for cards, input fields, and buttons, and set up testing in jest to check that the elements are taking user input correctly.

Update: I did not end up using Storybook, however  used enzyme and jest for testing.
<br>

#### Goals

- Allow user to input problem to a running list of problems saved to localstorage
- Use Draw functionality or pull full list of quotes from Oblique Strategies API and assign random strategy to problem
- Allow user to add 2 kinds of updates: (Parent) Attempt logs and (Child) Result logs. It keeps track of how they use the advice and how it works out.
- Allow users to add custom interpretations of strategies and show / hide these at will
- Allow user to switch to another card, and switch back to continue working in previous card workspace if desired
- Inlcude optional outcomes text / finished product link when user completes project
- Allow user to build list of favorite strategies


<br>

#### Results
This changed an awful lot as I went on! As the product started working, I began using it to help talk myself through roadblocks, which gave me insight into what was fun and what wasn't. So for that reason, I simplified it down to a sort of one-way twitter conversation with yourself, instead of the overcomplicated attempt - results system I had originally planned. 

The final version is still buggy, and I couldn't get localstorage working, but the app itself is operational and feels good to use. There were a ton of issues that I didnt expect, including CORS trouble, testing being a nightmare, trimming a lot of planned components, and having to refactor state into parent props more than I thought I would need to. Still, I'm happy with the result, and am excited to keep polishing it moving forward.

As a side note, I hate my tests and I desperately need to understand this aspect more, but I stayed awake until 4 in the morning figuring out how to get 12 passing tests and damnit, these pass. I'm happy to refactor after a review session, but hopefully this is sufficient for now. Oh, and my 3rd breakpoint is hard to spot, but it's a rendering on ProblemPage.css at 525px just to fix some minor form styling.

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Building & Linking multiple pages_ |
| Axios | _Pulling API data_ |
| Enzyme |   Testing   |
|

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Oblique Strategies API |      yes      | _http://brianeno.needsyourhelp.org/_ | _http://brianeno.needsyourhelp.org/draw_ |

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
|__ components/
      |__ Header.jsx
      |__ ProblemInput.jsx
      |__ ProblemList.jsx
      |__ ProblemPage.jsx
      |__ Footer.jss
      |__ App.js 
```

<br>

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logo with a link to home._               |
|   ProblemInput    |   functional    |   n   |   y   | _Will take user input as a prompt_   |
| ProblemList | functional |   n   |   y   | _Will log open problems user is working on._                _ |
|    ProblemPage    | functional |   y   |   y   | _Will act as a container for current problem prompt_               |    |
|    Footer    | functional |   n   |   n   | _Will act as a container for current problem prompt_               |    |
user-entered, timestamped progress notes._                 |
|    App    | functional |   Y   |   n   | _Will contain full app_ |

<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Header    |    L     |     1 hr    |   1hr   |
| Add Problem Input |    H     |     1 hr      |  4hr  | 
| Implement current problem list    |    M     |     3 hrs  |    4hrs   |
| Add Problem page    |    H     |     4 hrs      |   4 hrs   |
| Add Problem Input |    H     |     1 hrs      |   4 hrs  | 
| Implement StrategyCard logic    |    H     |     4 hrs      |  1 hr   |
| Implement note input |    H     |     1 hrs      |   4hrs     |
| Build note list    |    L     |     3 hrs      |   4hrs   |
| Build app component |    H     |     3 hrs      |   4 hrs    |
| Styling    |    M     |     7 hrs      |   6 hrs   |
| Bug Hunting |    M     |     3 hrs      |   n/a (persistent)    |
| TOTAL               |          |     35 hrs   |   36 hrs    |


<br>

#### Helper Functions

#### Swot Analysis

Strengths: _I actually feel like this could grow into a weird but useful workspace for organizing thoughts around difficult problems. I want this to be like a conversation with yourself a la rubber duck programming, but with a prompt guiding the mediation. APIs seem reliable and quick._

Weaknesses: _There are a lot of different ways to organize the UI, and I hope the one I'm going with is intuitive & usable. Not a ton of visual flare._

Opportunities: _This could become a decent portfolio piece if I get it right, and it's a chance to put the pieces togetehr on React._

Threats: _There are a number of things that I'm not sure how to implement yet, and I'm using two APIs, which means there are two opportunities for failure._ 


|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| n/a | _ _ |

<br>

### Post-MVP

- _Add user account._
- _Add social sharing._
- _Add collaboration._
- _Add favorite strategies list_
- _Add spotify playlists for ambient Brian Eno and Glam Brian Eno_
- _Add Grouping to organize multiple small problems around a single topic_
- _Fix loading bugs_

<br>

***

## Project Delivery

### Code Showcase
```
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

  function handleChange(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
              return <li key={i} className='musings'><i>Card No. {strat.cardnumber}:</i> | {musing} | <i>{now[i]}</i></li>
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
        <p className='log' onClick={() => handleAdd()}>Log Another Thought</p>
      </section>
    </div >
  )
}
```

### Code Issues & Resolutions

Despite being able to access my API from postman, I couldn't get it to work within the browser because of its CORS settings. Luckily, I found an API on Heroku called CORS Anywhere that help me get around this.

I had a ton of trouble testing, and a lot of it came from the fact that jest and enzyme don't seem very friendly for testing when using withRouter. I had to wrap every test in a Router tag in the end, but it made it extremely hard to figure out if I was building tests incorrectly or encountering this weird withRouter complexity.