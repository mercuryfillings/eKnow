import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from "react-router-dom";
import renderer from 'react-test-renderer'
import App from './App';
import ProblemPage from './ProblemPage'
import ProblemInput from './ProblemInput'
import ProblemList from './ProblemList'
import Header from './Header'
import Footer from './Footer'

describe("Page render checks", () => {
  it("renders", () => {
    shallow(<Router><App /></Router>)
  });

  it('Homepage render snapshot', () => {
    const component = renderer.create(<Router><App /></Router>).toJSON()
    expect(component).toMatchSnapshot()
  })

  describe("Problem page renders", () => {
    it("renders", () => {
      shallow(<Router><ProblemPage /></Router>)
    })
  })

  describe("Input component renders", () => {
    it("renders", () => {
      shallow(<Router><ProblemInput /></Router>)
    })
  })

  describe("List component renders", () => {
    it("renders", () => {
      shallow(<Router><ProblemList /></Router>)
    })
  })

  it('Header render snapshot', () => {
    const component = renderer.create(<Router><Header /></Router>).toJSON()
    expect(component).toMatchSnapshot()
  })

  describe("Header component renders", () => {
    it("renders", () => {
      shallow(<Router><Header /></Router>)
    })
  })

  describe("Footer component renders", () => {
    it("renders", () => {
      shallow(<Router><Footer /></Router>)
    })
  })

  it('Footer snapshot', () => {
    const component = renderer.create(<Footer />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('check headline title', () => {
    const AppComponent = mount(<Router><App /></Router>);
    expect(AppComponent.find('h2').text()).toEqual('ASK ENO WHAT HE KNOW')
  });

  it('check page title', () => {
    const HeadComponent = mount(<Router><Header /></Router>);
    expect(HeadComponent.find('h1').text()).toEqual('eKnow')
  });

  it('check button', () => {
    const ButtonComponent = mount(<Router><ProblemInput /></Router>);
    expect(ButtonComponent.find('input.button').text()).toEqual('')
  });
});


