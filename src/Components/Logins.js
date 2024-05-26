import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
    state = {
        ime: '',
        prezime: '',
        mail: '',
        password: '',
    }

    onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="login-container">
                <h1>Dobrodošao/Dobrodošla, {this.state.ime}!</h1>
                <form>
                    <input placeholder="ime" value={this.state.ime} onChange={e => this.setState({ ime: e.target.value })} />

                    <input placeholder="prezime" value={this.state.prezime} onChange={e => this.setState({ prezime: e.target.value })} />

                    <input placeholder="mail" value={this.state.mail} onChange={e => this.setState({ mail: e.target.value })} />

                    <input placeholder="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                    
                    <button type="button" onClick={() => this.onSubmit()}>Potvrdi</button>
                </form>
            </div>
        );
    }
}

export default Login;
