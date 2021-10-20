import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div id='login' className="Login">
            <h1>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button block size="lg" type="submit" >
                    Login
                </Button>
            </Form>
            <p>New to Dental Clinic website?<Link to="/register">
                Create Account</Link></p>
            <br /><br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In </button>
        </div>
    );
};

export default Login;


