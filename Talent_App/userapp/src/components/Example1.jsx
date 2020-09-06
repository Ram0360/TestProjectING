import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';
import axios from 'axios'

class Example1 extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
            posts :[],
            update_userid:null,
            update_username:null,
            update_uemail:null,
            update_uphonenum:null,
            update_utype:null,
            datafortbl :{}
        }
    }

   
    
    componentDidMount(){
        const $ = window.$;        
        axios.get('http://localhost:5000/login/')
        .then(response => {
            console.log(response);
            this.setState({posts : response.data})
            })
            .catch(error =>{
                console.log(error);
            })              
            $(document).ready(function () {
                $('#myTable').DataTable();
             });
        }

        render() {
            const { posts } = this.state

        const renderPost = (posts, index) =>
        {
            return(                
                <tr key={index}>
                    <td>{posts.user_id}</td>
                    <td>{posts.user_name}</td>
                    <td>{posts.user_email}</td>
                    <td>{posts.user_phonenumber}</td>
                    <td>{posts.user_type}</td> 
                </tr>
            )   
        }

        console.log("this.state.posts" + posts);
        return (
            <div>
                
                <table   id="myTable">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>UserName</th>
                            <th>UserEmail</th>
                            <th>UserPhoneNumber</th>
                            <th>UserType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(renderPost)}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Example1