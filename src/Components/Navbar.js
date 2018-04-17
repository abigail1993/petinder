import React, { Component } from 'react';
import { Nav, Button } from 'reactstrap';
import {Link, Switch, Route} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return(
            <nav className = 'App-container-fluid align-bottom'>
                <div className = 'row justify-content-start'>
                    <div className = 'col-3 text-center '><Link to='/Profile'><i className="fas fa-user"></i></ Link></div>
                    <div className = 'col-3 text-center'><Link to='/Favorites'><i className="fas fa-heart"></i></ Link></div>
                    <div className = 'col-3 text-center'><Link to='/Options'><i className="fas fa-paw"></i></ Link></div>
                    <div className = 'col-3 text-center'><Link to='/Matches'><i className="fas fa-sign-out-alt"></i></ Link></div>
                </div>
            </nav>
        )
    }
};

export default Navbar;