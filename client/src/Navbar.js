import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component{
    render(){
        return(
            <>
            <div className="navbar p-3">
                <NavLink className="navbar-brand col-sm-4" to="/">Home</NavLink>
                <NavLink className="nav-link col-sm-4"  to="/animationMovies"> Animation Movies</NavLink>
                <NavLink className="nav-link col-sm-4"  to="/disneyMovies"> Walt Disney Movies</NavLink>
            </div>
           
            </>
        )
    }
} 