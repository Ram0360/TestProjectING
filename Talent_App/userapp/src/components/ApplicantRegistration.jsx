import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/ApplicantRegistration.css'
import Header from './Header'
import axios from 'axios'

class ApplicantRegistration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user_name:"",
            user_email : "",
            user_password : "",
            retype_password :"",
            user_phonenumber:0,
            user_type:""
        }

        localStorage.setItem("registered_msg","false");
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        const data = this.state
        console.log(this.state);
        axios
        .put('http://localhost:5000/login/adddetails',this.state)
        .then(response => {
            const res = response;
            // console.log(res.data.message);
            if( res.data.message === "Inserted successfully"){
                localStorage.setItem("registered_msg",true);
                console.log(localStorage.registered_msg);
                this.props.history.push('/Applicant');
            }
        })
        .catch(error => {
            console.log(error)
        })      
       
    }

    render() {
        const { user_name, user_password, retype_password,user_email, user_phonenumber,user_type } = this.state
        return (
            <div>
                <Header/>
                <div className="login-form-applicant">
                    <Form onSubmit={this.submitHandler}>
                        <FormGroup row>
                            <Label for="user_name" sm={2}>User Name</Label>
                            <Col sm={10}>
                            <Input type="text" name="user_name" id="user_name"
                             value = {user_name}
                             onChange = {this.changeHandler}
                            placeholder="Enter username" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="user_email" sm={2}>Email</Label>
                            <Col sm={10}>
                            <Input type="email" name="user_email" id="user_email"
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

                        <FormGroup row>
                            <Label for="retype_password" sm={2}>Confirm Password</Label>
                            <Col sm={10}>
                            <Input type="password" name="retype_password" 
                            id="retype_password" 
                            value = {retype_password}
                            onChange = {this.changeHandler}
                            placeholder="Retype password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="user_phonenumber" sm={2}>Phone Number</Label>
                            <Col sm={10}>
                            <Input type="number" name="user_phonenumber" id="user_phonenumber" 
                             value = {user_phonenumber}
                             onChange = {this.changeHandler}
                            placeholder="Enter phone number" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="user_type" sm={2}>User Type</Label>
                            <Col sm={10}>
                            <Input type="user_type" name="user_type" id="user_type" 
                             value = {user_type}
                             onChange = {this.changeHandler}
                            placeholder="Enter user_type" />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit">Register</Button>
                            </Col>
                        </FormGroup>
                        <span><a href="/Applicant">Click here to Login</a></span>
                    </Form> 
                </div>
               
            </div>
        )
    }
}

export default ApplicantRegistration
