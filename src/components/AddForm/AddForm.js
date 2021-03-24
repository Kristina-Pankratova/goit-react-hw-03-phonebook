import { Component } from "react";
import PropTypes from 'prop-types';
import s from './AddForm.module.css'


class AddForm extends Component {

    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);
        this.props.onSubmit(this.state);
        this.props.onSubmits(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {

      return (
          <form className={s.contactForm} onSubmit={this.handleSubmit }>
              <label >
                  Name <input
                      
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange }/>
              </label>
              
            <label>
                  Number <input
                      
                      type="text"
                      name="number"
                      value={this.state.number}
                      onChange={this.handleChange }/>
            </label>
        
            <button className={s.addContBut} type="submit" >Add contact</button>
    </form>
    )  
    }    
}


export default AddForm;

AddForm.propTypes = {
    onSubmit: PropTypes.func,
    onSubmits: PropTypes.func,
    onChange: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.number
}