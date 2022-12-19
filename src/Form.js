import React, { Component } from 'react'

export class Form extends Component {

    
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         email:'',
         password:''
      }
    }

    handleUsernameChange=(event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmailChange =(event) => {
        this.setState({
            email:event.target.value
        })
    }

    handlePasswordChange =(event)=>{
       this.setState({
        password:event.target.value
       })
    }

    submitHandler= (event) =>{
      // alert(`${this.state.username} ${this.state.email} `)
      event.preventDefault();
      if(`${this.state.username}`===''||`${this.state.email}`===''||`${this.state.password}`==='' ){
        alert('All fields are mandatory!')
      }
      else{
        alert('Form submitted successfully!')
      }
    }
    
  render() {
    return (
      <form className='container' onSubmit={this.submitHandler} >
       <div className='head'>
        <h1>Registration Form</h1>
       </div>
        <div>
            <input type='text' placeholder=' Enter username' value={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
            <input type='email' placeholder='Enter email' value={this.state.email} onChange={this.handleEmailChange}></input>
        </div>
        <div>
            <input type='password' placeholder='Enter password' value={this.state.password} onChange={this.handlePasswordChange}></input>
        </div>
        <div>
          <button  className='button'type='submit'>Submit</button>
          </div>
      </form>
    )
  }
}

export default Form
