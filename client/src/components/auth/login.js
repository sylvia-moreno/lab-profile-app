import React, { Component } from 'react';
import AuthService from './auth-service';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: '',
            campus: '',
            course: '',
        };
        this.service = new AuthService();
    }
    

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
    
        this.service
        .login(username, password)
        .then( res => {
          // reset form
          this.setState({
            username: "", 
            password: "",
          });
          
          this.props.getUser(res)
          this.props.history.push('/profil');
        })
        .catch( error => console.log(error) )
    }
    

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="profil-form">
                <div className="profil-container">
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                </div>
                <div className="profil-container">
                        <div className="profil-content">
                            <div>
                                <button  className="submit-btn" type="submit">Login</button>
                            </div>
                        </div>
                    </div>
            </form>    
        )
    }
}

export default Login;