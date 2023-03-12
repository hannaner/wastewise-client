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
            [event.target.name]: event.target.value,
            error: ''
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            console.log(formData)

            const user = await signUp(formData)
            this.props.setUser(user)

        } catch (error) {
            console.error(error)
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