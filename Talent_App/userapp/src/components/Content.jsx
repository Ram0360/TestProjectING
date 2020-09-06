import React, { Component } from 'react';
import '../css/Content.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApplicantPage from './Applicant';
import HRPage from './HRPage'
import HRContent from './HRContent'
import HomePage from './HomePage'
import ApplicantRegistration from './ApplicantRegistration'
// import test1 from '../Subcomponents/test1'
import Example1 from './Example1'
import Example from './Example'

class Content extends Component {

   
    render() {
        return (
            <Router>
                <div className="contentt">
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/HrTeam" exact component={HRPage}/>
                    <Route path="/Applicant" exact component={ApplicantPage}/>
                    <Route path="/ApplicantRegistration" exact component={ApplicantRegistration}/>
                    <Route path = "/ApplicantDetails" exact component={HRContent}/>
                </div>
            </Router>
        )
    }
}
export default Content