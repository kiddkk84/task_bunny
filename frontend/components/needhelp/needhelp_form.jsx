import React from 'react';
// import {categories} from './needhelp_container'
import { Link } from 'react-router-dom';
import CategoryIndexItem from './needHelp_index_container'

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

                    
                    <form>
                        <input type="text" className='gethelp-input'/>
                        <button type="submit" className='gethelp-button'>Get Help Today!</button>
                    </form>
                </h1>
                
                {/* {
                    categories.map(category => <ul className="catgory">{category.category_name}</ul> )
                }
                 */}
            </div>  
        )
    }
}



export default NeedHelpForm