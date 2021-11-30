import React, { Fragment } from "react";
import {Link, withRouter} from "react-router-dom";
import {signout, isAuthenticated} from "../auth"

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({history}) => (
    <div>
       <nav className="navbar navbar-expand-lg bg-primary h2-nav"> 
       <a className="navbar-brand text-white" href="/">TechLad's Shop</a> 
       <ul className="nav nav-tabs">
            <li className="nave-item">
                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
            </li>

    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nave-item">
                        <Link 
                        className="nav-link" 
                        style={isActive(history, "/user/dashboard")} 
                        to="/user/dashboard">Dashboard</Link>
                    </li>
                    
    )}

{isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nave-item">
                        <Link 
                        className="nav-link" 
                        style={isActive(history, "/admin/dashboard")} 
                        to="/admin/dashboard">Dashboard</Link>
                    </li>
                    
    )}

            {!isAuthenticated() && (
                <Fragment>
                <li className="nave-item">
                    <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Sign In</Link>
                </li>
                <li className="nave-item">
                    <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
                </li>
            </Fragment>
            )}
            
            {isAuthenticated() && (
                    <li className="nave-item">
                        <span className="nav-link" style={{cursor: "pointer", color: "#ffffff"}} onClick={() => signout(() => {
                                history.push("/");
                            })
                        }
                        >Signout</span>
                    </li>
            )}             
        </ul>
        </nav>
    </div>
)

export default withRouter(Menu);