import React from 'react';
import { Button , Nav  } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Mounting from './Mounting';
  import Updating from './Updating';
  import UnMounting from './UnMounting';

function Navbar() {
    return (
      
            <Router>
            
            <Nav className="justify-content-center nav ">
                <div claassname="container heading">
                <h1 className="eleven ">Component Life Cycle</h1>
                 </div> <br />
            </Nav><Nav className="justify-content-center " >
              <ul className="list ">
                <li>
                  <Link to="/">
                  <Button variant="secondary" className=" mx-5"> Mounting</Button>
                      </Link>
                </li>
                <li>
                  <Link to="/Updating">
                  <Button  variant="secondary" className=" mx-5">Updating</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/UnMounting">
                  <Button  variant="secondary" className=" mx-5">UnMounting</Button>
                      </Link>
                </li>
              </ul>
              
              <hr style={{ color: "black" }}></hr>
      
              <Switch>
                <Route exact path="/">
                  <Mounting />
                </Route>
                <Route path="/Updating">
                  <Updating />
                </Route>
                <Route path="/UnMounting">
                  <UnMounting />
                </Route>
              </Switch>
              
            </Nav>
            
          </Router>
        
    )
}

export default Navbar