import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/Applicant.css'
import Header from './Header'
import axios from 'axios'

class Applicant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user_email : "",
            user_password : ""
        }
        localStorage.setItem("logged_msg","false");
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        const data = this.state
        console.log(this.state);
        axios
        .post('http://localhost:5000/login/userlogin',this.state)
        .then(response => {
            const res = response;
            // console.log(res.data.message);
            if( res.data.message === "Login Successfully"){
                localStorage.setItem("logged_msg",true);
                console.log(localStorage.logged_msg);
                this.props.history.push('/');
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { user_email, user_password } = this.state
        return (
            <div>
                <Header/>
                <h1>Applicant</h1>
                 <div className="login-form-applicant">
                <Form onSubmit={this.submitHandler}>
                    <FormGroup row>
                        <Label for="user_email" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input type="user_email" name="user_email" id="user_email" 
                        value = {user_email}
                        onChange = {this.changeHandler}
                        placeholder="Enter email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="user_password" sm={2}>Password</Label>
                        <Col sm={10}>
                        <Input type="password" name="user_password" id="user_password" 
                        value = {user_password}
                        onChange = {this.changeHandler}
                        placeholder="Enter password" />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Login</Button>
                        </Col>
                    </FormGroup>
                    <span><a href="/ApplicantRegistration">Not a registered user, Click here to Sign-up</a></span>
                </Form> 
                </div>
            </div>
        )
    }
}

export default Applicant
