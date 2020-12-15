import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
        }
    }

    handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const formContent = {
            item: this.state.item,
        }
        this.props.handleSubmit(formContent)
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                <input name="item" value={this.state.item} onChange={this.handleChange}/>
            </form>
        )
    
    }
}

export default Form;
