import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer'



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);

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


    handleDemo() {
        return (e) => {
            e.preventDefault();
            this.props.demoLogin();
        };
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
                
                        <Link className="session-submit" to="/signup"  style={{textDecoration: 'none'}}>Sign up</Link>
                        <button className="session-submit" onClick={this.handleDemo()}>Demo</button>

                    </div>


                </form>


            </div>
        );
    }
}

export default SessionForm;
