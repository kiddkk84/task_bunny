import React from 'react';
// import {categories} from './needhelp_container'

class NeedHelpForm extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {

        this.props.fetchAll()
    }

    render(){
        const {categories} = this.props
        return (
            
            <div className='gethelp'>
                <h1 className='gethelp-header'>
                    Help around the home, at your fingertips
                    <p>
                    You don't always have to DIY. 
                    Get help from thousands of trusted Taskers for everything from home repairs to cleaning.
                    </p>
                    <br/>
                    <form>
                        <input type="text" className='gethelp-input'/>
                        <button type="submit" className='gethelp-button'>Get Help Today!</button>
                    </form>
                </h1>
                {
                    categories.map(category => category.category_name )
                }
            </div>  
        )
    }
}



export default NeedHelpForm