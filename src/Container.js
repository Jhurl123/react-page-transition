import React from "react"
import styled from "styled-components"
import { Switch, Route, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Home from "./Home"
import First from "./First"
import Second from "./Second"
import Third from "./Third"

import "./App.css"

const Container = ({location}) => {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition 
          key={location.key} 
          timeout={{enter: 1000, exit: 1000}}
          classNames={'fade'}
        >
          {/* Switch allows for one route to be rendered at a time instead of putting in multiple 
          Routes instead */}
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}
// Fade enter is the one entering the page
// When enter is done, the enter-done class stays applied
const Wrapper = styled.div`
    .fade-enter div {
      transform: translate(-100%, 100%);
      border-radius: 100%;
      z-index: 1;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }

    .fade-enter.fade-enter-active div {
        transform: translate(0) scale(2);
        transition: all 1000ms ease-in;
        border-radius: 100%;
        z-index: 1;
    }
    
    .fade-enter-done div {
      transform: translate(0) scale(1);
      border-radius: 0;
    }

    .fade-enter div span,
    .fade-enter div p {
      opacity: 0; 
    }

    .fade-enter-done div span,
    .fade-enter-done div p {
      transition: opacity 300ms linear;
      opacity: 1;
    }

    .fade-exit div {
    }
      
    .fade-exit.fade-exit-active {

      transition: all 1000ms linear;

    }
    
    div.transition-group {
      position: relative;
    }
    
    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;

    }
`;


export default withRouter(Container)