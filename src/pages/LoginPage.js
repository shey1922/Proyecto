import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Card, FloatingLabel, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onSignIn }) {

    const [inputFields, setInputFields] = useState({
        username: '',
        password: ''
    });
    //const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const user = await Auth.signIn(inputFields.username, inputFields.password);
            //navigate('/');
            onSignIn();
        } catch (error) {
            console.log('error signing in', error)
        }
    }

    const handleInputChange = ({ target }) => {
        setInputFields({
            ...inputFields,
            [target.name]: target.value
        });
    }

    return (
        <Card>
            <Card.Body>
                <h3 className="text-center">Sign in</h3>
                <Form onSubmit={handleSignIn}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="username"
                            value={inputFields.username}
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={inputFields.password}
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">
                        Iniciar Sesion
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default LoginPage