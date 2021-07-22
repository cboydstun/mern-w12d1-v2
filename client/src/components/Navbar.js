//import dependencies
import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap'

//import context
import { useStateValue } from '../context/StateProvider'

export default function NavbarComponent() {
    const [state, dispatch] = useStateValue();
    const { authenticated, user} = state;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand  className="text-capitalize">
                    {user?.name ? user.name + "'s" : "The"} Todo List
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {!authenticated && (
                        <>
                            <Link  to="/login">
                                <Button className="mr-md-3 mt-2 mt-sm-0">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button className="mr-md-3 mt-2 mt-sm-0" >
                                    Register
                                </Button>
                            </Link>
                        </>
                    )}

                    {authenticated && (
                        <>
                            <Link className="mr-md-3 mt-2 mt-sm-0">
                                <Button
                                    variant="danger"
                                    onClick={()=>{dispatch({type: "LOGOUT"})}}
                                >
                                    Logout
                                </Button>
                            </Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
