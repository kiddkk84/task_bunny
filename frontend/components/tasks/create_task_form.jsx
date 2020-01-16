import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexItem from '../needhelp/needHelp_index_container'


class taskCreate extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.match.params.category_name,
            location: "",
            duration: "",
            detail: ""
        };
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newTask(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    componentDidMount() {
        this.props.fetchAll()

    }


    render(){
        const { categories } = this.props

    return (
    <div>   
            <p>Book Your Next Task</p>  

        <header>
            {
                categories.map(category => <CategoryIndexItem key={category.id} category={category}/>)
            }

        </header>

            <form onSubmit={this.handleSubmit}>
                <header>{this.props.match.params.category_name}</header>

                <div>
                    <label >location:
                        <br />
                        <input type="text"
                            value={this.state.location}
                            onChange={this.update('location')}
                        />
                    </label>
                    <br />


                    <label >duration:
                        <br />
                        <input type="text"
                            value={this.state.duration}
                            onChange={this.update('duration')}
                        />
                    </label>
                    <br />

                    <label >detail:
                        <br />
                        <input type="text"
                            value={this.state.detail}
                            onChange={this.update('detail')}
                        />
                    </label>
                
                    <br />

                    <br />


                    <div>
                        <input className="signup-submit" type="submit" value="Create Task" />

                        <br />
                    </div>

                </div>
            </form>




    </div>

    )

}


}

export default taskCreate;