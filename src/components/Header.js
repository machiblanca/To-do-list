import React from 'react'
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Routes from './Routes'
import VisibilityFilter from "./VisibilityFilter";
import {
  BrowserRouter as Router, Route,
  Switch,
  Link
} from "react-router-dom";//router link

//practicando uso de bootstrap
export default function Header(){
    return(
      <Router>
<Navbar bg="light" expand="lg">
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav fill className="navbar navbar-expand-lg navbar-light bg-light navbar-nav mr-auto">
    
    <Navbar.Brand >
    < Link to="/" > TO DO lIST </Link>
     < Link to="/list" > ADD </Link>
      <Link to="/routes"> ROUTES</Link>
      </Navbar.Brand>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
{/*switch */}
<Switch>
<Route exact path="/">
    hi
  </Route>
<Route path="/list">
  <AddTodo />
  <TodoList />
  <VisibilityFilter />
</Route>
<Route path="/routes">
  <Routes />
</Route>

</Switch>
</Router>
   )
}


