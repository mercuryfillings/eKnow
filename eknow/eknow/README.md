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

> The Brian Eno Cognitive Freezeup Override System (henseforth referred to as e-Know) helps its users bypass mental blocks by generating calming grayscale images overlaid with Brian Eno's Oblique Strategies, randomly delivering the exact piece of advice a user needs in overcome any creative hurdle. It will allow a user to input a particular problem they're encountering, then deliver a guiding-light strategy that locks at the top of the problem page, and draw a new card if the approach doesnt work. The user can then add timestampped notes detailing how they implemented the vaguely-worded wisdom of the ambient songsmith, and track the results of experimentation. It should also track how many cards it took to get to completion.

I will create reusable styled elements in Storybook for cards, input fields, and buttons, and set up testing in jest to check that the elements are taking user input correctly.

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

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Building & Linking multiple pages_ |
| Axios | _Pulling API data_ |
| Enzyme |   |    |

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
      |__ CurrentProblemList.jsx
      |__ HistoricalProblemList.jsx
      |__ ProblemPage.jsx
      |__ StrategyCard.jsx
      |__ DrawButton.jsx
      |__ CompleteButton.jsx
      |__ BackButton.jsx
      |__ NoteInput.jsx
      |__ NoteList.jsx
      |__ App.js 
```

<br>

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logo with a link to home._               |
|   ProblemInput    |   functional    |   y   |   n   | _Will take user input as a prompt_   |
| CurrentProblemList | functional |   y   |   n   | _Will log open problems user is working on._ 
|    HistoricalProblemList    | functional |   n   |   n   | __Will archive projects listed as complete._                 _ |
|    ProblemPage    | functional |   n   |   n   | _Will act as a container for current problem prompt_               |
|   StrategyCard    |   functional    |   y   |   n   | _Will display current strategy overlaid on grayscale img from https://picsum.photos/?ref=public-apis_      |
| DrawButton | functional |   n   |   y   | _Will draw new strategy image / text for user_                 |
|    BackButton    | functional |   n   |   n   | _Will return home to problem list_ |
|   NoteInput    |   functional    |   y   |   n   | _Will allow user to add to running note list_      |
| NoteList | functional |   n   |   y   | _Will contain user-entered, timestamped progress notes._                 |
|    App    | functional |   n   |   n   | _Will contain full app_ |

<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Header    |    L     |     1 hr    |      |
| Add Problem Input |    H     |     1 hr      |    | 
| Implement current problem list    |    M     |     3 hrs  |       |
| Implement Historical Problem List |    L     |     3 hrs  | | 
| Add Problem page    |    H     |     4 hrs      |      |
| Add Problem Input |    H     |     1 hrs      |     | 
| Implement StrategyCard logic    |    H     |     4 hrs      |     |
| Implement random draw button |    M     |     3 hrs      |         |
| Add back button    |    L     |     1 hrs      |      |
| Implement note input |    H     |     1 hrs      |        |
| Build note list    |    L     |     3 hrs      |      |
| Build app component |    H     |     3 hrs      |       |
| Styling    |    M     |     7 hrs      |      |
| Bug Hunting |    M     |     3 hrs      |       |
| TOTAL               |          |     38 hrs   |       |


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

<br>

***

## Project Delivery

### Code Showcase

TBD

### Code Issues & Resolutions

TBD
