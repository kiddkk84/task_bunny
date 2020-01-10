import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
        this.props.history.push('/')

    }

    renderErrors() {
        return (
            <ul className='loginerrors'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="loginFormContainer">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div>
                        <br />
                        <label>Username:
                            <br/>
                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <br/>
                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                
                        <button className="session-submit"><Link to="/signup" style={{ textDecoration: 'none', color: 'darkolivegreen' }}>Sign up</Link></button>

                    </div>
                
                    

                </form>
            </div>
        );
    }
}

export default SessionForm;
