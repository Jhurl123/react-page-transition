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
      transform: translateX(-100%);
      z-index: 0;
    }

    .fade-enter.fade-enter-active div {
        transform: translateX(0);
        padding-top: 200px;
        transition: all 1000ms linear;
    }
    
    .fade-enter-done div {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      // padding-top: 20px;
    }

    .fade-exit div {
        // // transform: translateX(0);
        // opacity: 0;
    }
      
    .fade-exit.fade-exit-active {
      transform: translateX(100%);
      transition: all 1000ms linear;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    
    div.transition-group {
      position: relative;
    }
    
    section.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
`;


export default withRouter(Container)