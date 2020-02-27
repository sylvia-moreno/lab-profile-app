import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <>
                
                <div className="profil-container">
                    <h1>Welcome to iron profil</h1>
                    <Link to="/signup"><button className="button">Signup</button></Link>
                    <Link to="/login"><button className="button">Login</button></Link>
                    <Link to="/profil"><button className="button">Profil</button></Link>
                </div>
                <div className="profil-container"></div>
            </>
        )
    }
}

export default Home;