import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import { Nav, NavItem, Navbar } from "reactstrap";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar colro="dark" dark expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>

            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </Router>
  );
};

export default App;
