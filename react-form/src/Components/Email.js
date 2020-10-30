import React, { Component } from 'react'

export default class Email extends Component {

    constructor (props) {
        super(props)
     
        this.state = {
          email: '',
          valid: true
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
      }
      
      validateEmail (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      }
      
      handleEmailChange(e) {
          const email = this.email.value
          const emailValid = this.validateEmail(email) 
    
          this.setState({
            email: e.target.value,
            valid: emailValid
          })
      }
      
      render() {
        let fieldContainerClass = 'field-container'
        const { email, valid } = this.state
        
        if (!valid) {
          fieldContainerClass += ' error'
        }
        
        return <div>
          <h1>Simple React form validation</h1>
          <div className={fieldContainerClass}>
            <span>Invalid e-mail address</span>
             email:
               <input
              ref={(mailInput) => this.email =           mailInput}
              onKeyUp={this.keyPressed}
              type='email' 
            /><br/>
          </div>
          <input type="submit" value="submit" onClick={this.handleEmailChange}/>
        </div>
      }
}
