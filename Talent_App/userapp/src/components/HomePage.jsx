import React, { Component } from 'react'
import Header from './Header'
import '../css/HomePage.css'
import axios from 'axios'
import Carosels from './Carosel'

class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
        }
    }
    
    componentDidMount(){
     
    }

    render() {
        return (
            <div className="home-page">
                <Header/>
                <Carosels/>
                <div className="quotations">
                <h1 className="quotes">“Great vision without great people is irrelevant.”</h1>
                <h4 className="quoteAuth">– Jim Collins, Good to Great</h4>
                </div>
                <marquee className="home-marquee"> 
                    Register to get job opening notifications on your email   -------    Connect with our HR Team for any assitance
                </marquee>
            </div>
        )
    }
}

export default HomePage