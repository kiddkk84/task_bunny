import React from 'react';
import { Link } from 'react-router-dom';


class taskCreate extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.fetchAll()
    }


    render(){
        const { categories } = this.props
    return (
    <div>   
        
            {
                categories.map(category => <Link>{category.category_name}</Link>)
            }
    </div>

    )

}


}

export default taskCreate;