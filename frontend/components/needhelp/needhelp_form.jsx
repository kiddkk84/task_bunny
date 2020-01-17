import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexItem from './needHelp_index_container'
import Footer from '../footer/footer'
import { login } from '../../actions/session_actions';


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
                    <br />
                        {
                            categories.map(category => <CategoryIndexItem key={category.id} category={category} />)
                        }
                        <br />
                        <br/>

                    You don't always have to DIY. 
                    Get help from thousands of trusted Taskers for everything from home repairs to cleaning.
                    </p>

                    
                        <button type="submit" className='gethelp-button'>Get Help Today!</button>
                </h1>
                <br/>
                <Footer />

            </div>  
        )
    }
}



export default NeedHelpForm