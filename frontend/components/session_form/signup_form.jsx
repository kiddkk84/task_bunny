import React from 'react';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }


    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        return (
            <div className="loginFormContainer">
                <form onSubmit={this.handleSubmit} className="signupForm">


                    <div className="signuperrors">
                        {this.props.errors}
                    </div>

                    <div className="loginHeadersignup">
                        <div className="iconlogin"></div>
                        <p className="logoPart1login" >Task<span className="logoPart2login">bunny</span></p>
                    </div>


                    <div className="signupContainer">
                        <label >First Name:
                    <input type="text"
                                value={this.state.firstname}
                                onChange={this.update('firstname')}
                                className="signup-input"
                            />
                        </label>
                        <br />


                        <label >Last Name:
                    <input type="text"
                                value={this.state.lastname}
                                onChange={this.update('lastname')}
                                className="signup-input"
                            />
                        </label>
                        <br />

                        <label >Email:
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>
                        <br />

                        <label >Username:
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                            />
                        </label>
                        <br />


                        <label >Password:
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>
                        <br />
            

                        <div>
                            <input className="signup-submit" type="submit" value="Create Account" />

                            <br />
                        </div>

                    </div>
                </form>
            </div>
        );
    }


}


export default SignUpForm