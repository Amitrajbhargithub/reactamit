import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import './index.css';
const Layout = () =>
{
    return(
        <>
            <div className="box">
                <ul>
                    <li>
                        <Link to='/' style={{textDecoration:'none'}}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' style={{textDecoration:'none'}}>about</Link>
                    </li>
                    <li>
                        <Link to='/contact' style={{textDecoration:'none'}}>contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Layout;