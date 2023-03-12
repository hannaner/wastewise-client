import { Component } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignupForm extends Component {
    state = {
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({
            // this refers to our state object, which the target name will be either name, email, password, or cofirm
            [event.target.name]: event.target.value,
            error: ''
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // alert(JSON.stringify(this.state))

        // try something if successful
        try {

            // taking the state and making a copy of the state and assigning it to formData var
            const formData = {...this.state}
            // deleting the properties we don't want
            delete formData.error
            delete formData.confirm
            console.log(formData)

            // we have 'await' because this is an async function
            // wait for a response back from the server
            const user = await signUp(formData)
            // now logging the token
            this.props.setUser(user)

        } catch (error) {
            console.error(error)
            // if it doesn't error handle
            this.setState({
                error: 'Sign up failed - try again later!'
            })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm

        return (
            <>
                <div className='form-container'>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Email</label>
                        <input
							type="text"
							name="email"
							value={this.state.email} 
							onChange={this.handleChange} 
							required></input>
                        <label>Password</label>
                        <input type="password" 
							name="password"
							value={this.state.password} 
							onChange={this.handleChange} 
							required></input>
                        <label>Confirm password</label>
                        <input
							type="password" 
							name="confirm" 
							value={this.state.confirm} 
							onChange={this.handleChange} 
							required></input>
						<button type="submit" disabled={disable}>Sign up</button>
                    </form>
                </div>
				<p>Error message: {this.state.error}</p>
            </>
        );
    }

}