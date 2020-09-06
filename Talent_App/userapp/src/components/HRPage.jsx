import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/HRPage.css'
import axios from 'axios'
import Header from './Header'

class HRPage extends Component {
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
                this.props.history.push('/ApplicantDetails');
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
                <div className="login-form">
                <Form onSubmit={this.submitHandler}>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" 
                         name ="user_email"
                         value = {user_email}
                         onChange = {this.changeHandler}
                        placeholder="Enter email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>                            
                        <Input type="password" name="user_password" id="examplePassword" 
                         name="user_password"
                         value = {user_password}
                         onChange = {this.changeHandler}
                        placeholder="Enter password" />
                        </Col>
                    </FormGroup>
            
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button type="submit" >Login</Button>
                        </Col>
                    </FormGroup>
                </Form> 
                </div>
            </div>
        )
    }
}

export default HRPage