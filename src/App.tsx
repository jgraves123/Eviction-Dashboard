import React from 'react';
import Body from './Body';
import Header from './Header';
import './css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";

library.add(faAngleRight)
library.add(faAngleDown)

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='App-img'></div>
        <Router>
        <Switch>
            <Route path="/" exact component={() => <Body />} />
            <Route path="/dashboard" exact component={() => <Dashboard />} />
        </Switch>
        </Router>
      {/* <Header
        logo="Human.pvd"
        mainText="Evicted in Providence:"
        subText="a roadmap to reforming the Rhode Island eviction system"
      /> */}

      {/*<Body*/}
      {/*  // title="Providence's Street to Home Journey"*/}
      {/*  // subtitle="Click to explore a specific point*/}
      {/*  // Scroll down to start at the beginning"*/}
      {/*/>*/}
    </div>
  );
}

export default App;
