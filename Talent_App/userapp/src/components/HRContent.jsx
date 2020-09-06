import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import HeaderForLoggedIn from './HeaderForLoggedIn'
import { Col, Table,Form,FormGroup, InputGroup, InputGroupAddon,
    Input,Jumbotron,Button, Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'
import TableScrollbar from 'react-table-scrollbar';
import './../css/HRContent.css'

class HRContent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            posts : [],
            postsforId:[],
            backdrop_showdetails:"false",
            update_userid:"",
            update_username:"",
            update_uemail:"",
            update_uphonenum:0,
            update_utype:""
        }
        this.toggle_showdetails=this.toggle_showdetails.bind(this);
        this.showSelectedDetails=this.showSelectedDetails.bind(this);
        this.updateDetailtHandler=this.updateDetailtHandler.bind(this);
        // this.getData=this.getData.bind(this);
    }
    
    getData(){
        const $ = window.$;        
        axios.get('http://localhost:5000/login/')
        .then(response => {
            console.log(response.data);
            this.setState({posts : response.data})
        })
        .catch(error =>{
            console.log(error);
        })
        $(document).ready(function () {
            $('#myTable').DataTable();
         });
    }
    componentDidMount(){
        const $ = window.$;        
        axios.get('http://localhost:5000/login/')
        .then(response => {
            console.log(response.data);
            this.setState({posts : response.data})
        })
        .catch(error =>{
            console.log(error);
        })
        $(document).ready(function () {
            $('#myTable').DataTable();
         });
    }

    toggle_showdetails()
    {
        this.setState({
            modal_showdetails:!this.state.modal_showdetails,
            fade_showdetails:!this.state.fade_showdetails
        })
    }

    showSelectedDetails(index)
        {        
        console.log(index);
        axios.get('http://localhost:5000/login/getdetailforId/'+index)
        .then(response => {
            // console.log(response);
            console.log(response);
            this.setState({postsforId : response.data})
            console.log(this.state.postsforId)
            this.state.update_userid=this.state.postsforId[0].user_id;
            this.state.update_username=this.state.postsforId[0].user_name;
            this.state.update_uemail=this.state.postsforId[0].user_email;
            this.state.update_uphonenum=this.state.postsforId[0].user_phonenumber;
            this.state.update_utype=this.state.postsforId[0].user_type;
            console.log("UpdateID" + this.state.update_userid);
            this.toggle_showdetails();
        })
        .catch(error =>{
            console.log(error);
        })  
        }

        changeHandler = e => {
            this.setState({ [e.target.name] : e.target.value })
        }

        updateDetailstHandler = e => {
            e.preventDefault();
            const data = this.state
            console.log(this.state);
            axios
            .put('http://localhost:5000/login/updateappldetails',this.state)
            .then(response => {
                const res = response;
                // console.log(res.data.message);
                if( res.data.message === "Details updated successfully"){
                    localStorage.setItem("registered_msg",true);
                    console.log(localStorage.registered_msg);
                    this.props.history.push('/Applicant');
                }
            })
            .catch(error => {
                console.log(error)
            })      
           
        }

        updateDetailtHandler(event){
            // event.preventDefault();
           // const data = this.stateconsole.log("Username" + event.target.user_name.value);
            console.info(JSON.stringify({
                "user_id":this.state.update_userid,
                "user_name":this.state.update_username,
                "user_email":this.state.update_uemail,
                "user_phonenumber":Number(this.state.update_uphonenum),
                "user_type":this.state.update_utype
            }));
            fetch('http://localhost:5000/login/updateappldetails',{
                method:'PATCH',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    "user_id":this.state.update_userid,
                    "user_name":this.state.update_username,
                    "user_email":this.state.update_uemail,
                    "user_phonenumber":Number(this.state.update_uphonenum),
                    "user_type":this.state.update_utype
                })
            })
            // .then(res=> res.json())
            .then((result) => {
                console.log(result.status);
                if(result.status === 200)
                {
                    const $ = window.$;        
                    axios.get('http://localhost:5000/login/')
                    .then(response => {
                        console.log(response.data);
                        this.setState({posts : response.data})
                    })
                    .catch(error =>{
                        console.log(error);
                    })
                    $(document).ready(function () {
                        $('#myTable').DataTable();
                     });
                }
            },
            (error)=>{
                // console.log(error);
            })
        }

        

    render() {

        // const { posts } = this.state;
        const { posts, update_username, update_uemail, update_uphonenum,update_utype } = this.state;
        
        let detailModalClose = () => this.setState({detailModalShow:false})
        
        
        const renderPost = (posts, index) =>
        {
            // onClick={() =>this.showSelectedDetails(index+1)}
            return(                
                <tr key={index+1} onClick={() =>this.showSelectedDetails(posts.user_id)}>
                    <td>{posts.user_id}</td>
                    <td>{posts.user_name}</td>
                    <td>{posts.user_email}</td>
                    <td>{posts.user_phonenumber}</td>
                    <td>{posts.user_type}</td> 
                </tr>
            )   
        }

        return (
            <div>

            <div className="table-content">
                <HeaderForLoggedIn/>
            {/* <div className="jumbotron">
                <h1>Applicant Details for New Hires</h1>      
                <p>The Applicant details shown as per skill wise here, 
                    This can be forwarded to the concerned teams
                </p>
            </div> */}
           
                <h4 id="noofentry">Total number of applications : {posts.length}</h4>

                <Table hover id="myTable">
                    <thead className="tbl-header">
                        <tr>
                            <th>RegisterID</th>
                            <th>UserName</th>
                            <th>UserEmail</th>
                            <th>UserPhoneNumber</th>
                            <th>UserType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(renderPost)}
                    </tbody>
                    
                </Table>          
            </div>
            <Modal isOpen={this.state.modal_showdetails}
                fade={this.state.fade_showdetails}
                toggle={this.state.toggle_showdetails}
                backdrop={this.state.backdrop_showdetails}>

               <ModalHeader toggle={this.state.toggle_showdetails}>
                    Applicant Details
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Col sm={12}>                            
                            <FormGroup row>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">UserID</InputGroupAddon>
                                <Input type="text" name="update_userid" id="update_userid" 
                                disabled
                                value={this.state.update_userid}></Input>
                                </InputGroup>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">UserName</InputGroupAddon>
                                <Input type="text" name="update_username" id="uname" 
                                onChange = {this.changeHandler}
                                value={update_username}></Input>
                                </InputGroup>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">UserEmail</InputGroupAddon>
                                <Input type="text" name="update_uemail" id="uemail" 
                                onChange = {this.changeHandler}
                                value={update_uemail}></Input>
                                </InputGroup>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">UserPhoneNumber</InputGroupAddon>
                                <Input type="text" name="update_uphonenum" id="uphone" 
                                onChange = {this.changeHandler}
                                value={update_uphonenum}></Input>
                                </InputGroup>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">UserType</InputGroupAddon>
                                <Input type="text" name="update_utype" id="utype" 
                                onChange = {this.changeHandler}
                                value={update_utype}></Input>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary" onClick={this.updateDetailtHandler}>Update</Button>
                    <Button type="submit" color="secondary" onClick={this.toggle_showdetails}>Close</Button>
                </ModalFooter>
            </Modal>



           
            </div>
        )   
    }
}

export default HRContent