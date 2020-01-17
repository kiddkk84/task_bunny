import React from 'react'

class Footer extends React.Component {

    render() {

        return <div className="footerbottom">
            <div className="footertext">Follow me on Linkedin and Github </div>
                <div className="icons">
                    <a href="https://www.linkedin.com" className="linkedin" >
                        <i className="fa fa-linkedin"></i>

                    </a>
                    <a href="https://github.com" className="linkedin">
                        <i className="fa fa-github-square"></i>
                    </a>
                </div>
        </div>;
    }
}

export default Footer; 