import React, { Component } from 'react';
import ReactPhoneInput from "react-phone-input-2";
const initialstate ={
   
}
export default class Form1 extends Component{
    constructor() {
        super();
        this.state = { name:'aa',
        nameErr:'',
        email:'bb',
        emailErr:'',
        age:'',
        ageErr:'',
        phone: ""}
        // this.ValidName=this.ValidName.bind(this);
        
    }
    ValidName(name){
        let nameErr="";
    if(name.length<=2)
       {
        nameErr="name should not less than 2 char";
       }
      this.setState({nameErr:nameErr})
      return nameErr;
    }
    validAge(age){
        let ageErr='';
        console.log("age>100 && age<1",(age>100 && age<1),age>100,age<1)
        if(age<1 || age>100)
        {
         ageErr="Invalid age"
        }
        this.setState({ageErr:ageErr})
    }
    validateEmail(email){
        let emailErr='';
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isvalid = re.test(email)
        if(isvalid){
            this.setState({name:this.name.value,
               email:this.email.value})
        }
        else {
            emailErr="invalid email";
             this.setState({emailErr:emailErr})
         }
      }
   //phone number field 
   handleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };


    submitfun=()=>{
       
        this.ValidName(this.name.value);
        this.validAge(parseInt(this.age.value));
       this.validateEmail(this.email.value);
    }
    render() {
        return (
            <div>
                name:
                 <input 
           ref={(snameInput)=>this.name = snameInput}
           onKeyDown={this.keyPressed}
           type="text"/>
           <br></br>
        <div style={{fontSize:12, color: "red"}}>{this.state.nameErr}</div>
           email:
           <input
          ref={(mailInput) => this.email = mailInput}
          onKeyUp={this.keyPressed}
          type='text'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.emailErr}</div>
          
         age:
           <input
          ref={(mailInput) => this.age = mailInput}
          onKeyUp={this.keyPressed}
          type='number'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.ageErr}</div>  
        {/* Phone number field */}
         <ReactPhoneInput 
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          defaultCountry={"us"}
          value={this.state.phone}
          onChange={this.handleOnChange}
        />

        <input type='submit' value='Submit' onClick={this.submitfun} />
        <br></br>
        <p>{this.state.email}{this.state.name}</p>
            </div>
        )
    }
}
