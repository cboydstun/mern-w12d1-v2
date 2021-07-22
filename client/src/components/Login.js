///import dependencies
import React, {useState, useEffect} from 'react'
import {Form, Button, Container, Alert} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

//import context
import {loadUser, login} from '../context/actions'
import { useStateValue } from '../context/StateProvider'

export default function Login() {
    const [state, dispatch] = useStateValue();
    const {error, token, authenticated} = state;
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        if(email && password){
            login(dispatch, {email, password})
        }else{
            dispatch({
                type:"SET_ERROR",
                payload: "Credentials not valid."
            })
        }
    }   

    const setError = () => {
        dispatch({
            type: "CLEAR_ERROR",
        });
    }

    useEffect(()=>{})
 
    return (
        <Container className="mt-4">
            <h3 className="text-center">Login</h3>
            {authenticated && <Redirect to={"/"} />}

            {error && (
                <Alert variant="danger" onClose={()=>{ setError()}} dismissible>
                    <Alert.Heading>You've got an error!</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            )}

            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </Form.Group>

                <Button type="submit" variant="danger">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
