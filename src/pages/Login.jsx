import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.auth);
    currentUser && navigate("/")
    const [info, setInfo] = useState({});
    const { login } = useAuth();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(info)
    };
    useEffect(() => {
        currentUser && navigate("/")
    }, [])
    

    return (
        <div className="login-style">
           
            <Form onSubmit={handleSubmit}>
            <h2>Stock App</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Login