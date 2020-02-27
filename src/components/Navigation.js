import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'><button className="navbtn">Etusivu</button></NavLink>
                <NavLink to='/topics'><button className="navbtn">Aiheet</button></NavLink>
                <NavLink to='/add'><button className="navbtn">Lisää aihe</button></NavLink>
            </div>
        )
    }
}
