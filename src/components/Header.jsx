import React from "react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Container, Modal, Nav, Figure, Ratio, Button, Image, Offcanvas, Form, FormControl, FloatingLabel, NavLink } from 'react-bootstrap'
import './Header.css'
import FancyText from "@carefully-coded/react-text-gradient"
import axios from "axios"

function ModalSignin(props) {
    const [validated, setValidated] = useState(false)
    const [data,setData] = useState();
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [user, setuser] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const [userValidation, setuserValidation] = useState('username cannot be empty');
    const [passValidation, setpassValidation] = useState("password cannot be empty")

    const handleChangeEmail = (event) => {
        const emailValue = event.currentTarget.value;
        setemail(emailValue);
        setData(prevData => ({...prevData, email: emailValue}));
    };
    
    const handleChangeUser = (event) => {
        const userValue = event.target.value;
        setuser(userValue);
        setData(prevData => ({...prevData, user: userValue}));
        if (userValue !== '') {
            setuserValidation('username already taken');
        } else {
            setuserValidation('username cannot be empty');
        }
    };
    
    const handleChangePass = (event) => {
        const passValue = event.target.value;
        setpass(passValue);
        setData(prevData => ({...prevData, pass: passValue}));
    };
    
    const handleChangeConfirmPass = (event) => {
        const confirmPassValue = event.target.value;
        setconfirmPass(confirmPassValue);
        setData(prevData => ({...prevData, confirmPass: confirmPassValue}));
    };
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        }

        if (pass != confirmPass) {
            setValidated(false);
        }
        
        else{
            axios.post("http://localhost:8888/api/test/insert/", data);           
        }
        setValidated(true);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ backdropFilter: 'blur(5px)' }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quill
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <FloatingLabel
                            label="Username"
                        >
                            <FormControl
                                required
                                type="text"
                                value={user}
                                onChange={(event) =>handleChangeUser(event)}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">{userValidation}</Form.Control.Feedback>
                        </FloatingLabel><br />
                        <FloatingLabel
                            label="Email"
                        >
                            <FormControl
                                required
                                type="email"
                                value={email}
                                onChange={(event) => handleChangeEmail(event)}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">Enter valid Email Address</Form.Control.Feedback>
                        </FloatingLabel><br />
                        <FloatingLabel
                            label="Password"
                        >
                            <FormControl
                                required
                                id = "pass"
                                type="password"
                                value={pass}
                                onChange={handleChangePass}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">Password can not be empty</Form.Control.Feedback>
                        </FloatingLabel><br />
                        <FloatingLabel
                            label="Confirm Password"
                        >
                            <FormControl
                                required
                                type="password"
                                value={confirmPass}
                                onChange={handleChangeConfirmPass}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">Password can not be empty</Form.Control.Feedback>
                        </FloatingLabel><br />
                    </Form.Group>
                    <Button size="lg" type="submit">
                        Sign up
                    </Button><br />
                </Form>
            </Modal.Body>
        </Modal>
    );
}
function ModalLogin(props) {
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [user, setuser] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const [userValidation, setuserValidation] = useState('username cannot be empty');

    const handleChangeEmail = (event) => {
        setemail(event.target.value);
    };
    const handleChangeUser = (event) => {
        setuser(event.target.value);
        if (event.target.value != null)
            setuserValidation('username already taken');
        if (event.target.value == '')
            setuserValidation('username cannot be empty');
    };
    const handleChangePass = (event) => {
        setpass(event.target.value);
    };
    const handleChangeConrirmPass = (event) => {
        setconfirmPass(event.target.value);
    };
    const handleSubmitLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            navigate('/home');
        }

        if (form.checkValidity() === true) {
            <NavLink to="/Language" ></NavLink>
            navigate('/Language')
        }

        setValidated(true);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ backdropFilter: 'blur(5px)' }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quill
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmitLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <FloatingLabel
                            label="Username"
                        >
                            <FormControl
                                required
                                type="text"
                                value={user}
                                onChange={handleChangeUser}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">{userValidation}</Form.Control.Feedback>
                        </FloatingLabel><br />
                        <FloatingLabel
                            label="Email"
                        >
                            <FormControl
                                required
                                type="email"
                                value={email}
                                onChange={handleChangeEmail}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">Enter valid Email Address</Form.Control.Feedback>
                        </FloatingLabel><br />
                        <FloatingLabel
                            label="Password"
                        >
                            <FormControl
                                required
                                type="password"
                                value={pass}
                                onChange={handleChangePass}
                                placeholder="Enter email"
                                style={{ backdropFilter: 'blur(5px)', background: '#ffffff97', borderRadius: '0.5rem' }}
                            />
                            <Form.Control.Feedback type="invalid">Password can not be empty</Form.Control.Feedback>
                        </FloatingLabel><br />
                    </Form.Group>
                    <Button size="lg" type="submit">
                        Log in
                    </Button><br />
                </Form>
            </Modal.Body>
        </Modal>
    );
}

function header() {
    const [modalShowSignin, setmodalShowSignin] = useState(false);
    const [modalShowLogin, setmodalShowLogin] = useState(false);

    return (
        <Container className='main' fluid>
            <Container className="submain">
                <div className='text'>
                    <h1 style={{ fontWeight: 'bolder' }}>
                        <FancyText
                            gradient={{ from: '#17acff', to: '#ff68f0', type: 'linear' }}
                            animate
                            animateDuration={2000}
                        >
                            The best place to build, test, and discover front-end code
                        </FancyText>
                        {/* <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                            The best place to build, test, and discover front-end code
                        </LinearGradient> */}
                    </h1>
                    <p style={{ fontWeight: 'bold' }}>Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
                    <Button variant="light" className="button" onClick={() => setmodalShowSignin(true)}>Signup for free</Button>{' '}
                    <ModalSignin show={modalShowSignin} onHide={() => setmodalShowSignin(false)} />
                    <Button variant="outline-light" className="button" onClick={() => setmodalShowLogin(true)}>Login</Button>
                    <ModalLogin show={modalShowLogin} onHide={() => setmodalShowLogin(false)} />
                </div>
            </Container>
        </Container >
    );
}

export default header;