import React, { Component } from 'react'
import Email from './Email';
import Table from './Table';


export default class Form extends Component {
    constructor() {
        super();
        this.state={
            users:[{ 
            fname:'a',
            sname:'',
            age:'',
            address:'',
            phone:'',
            email:''}],
            fnameError:'First Name is Empty',
            snameError:'',
            ageError:'',
            addressError:'',
            phoneError:'',
            emailError:''
        }
        // this.validate=this.validate.bind(this);
    }
    validate=()=>{
       let fnameError="";
       let snameError="";
       let ageError="";
       let addressError="";
       let phoneError="";
       let emailError="";
       
       if(!this.state.email.includes("@")) {
           emailError="invalid email adress";
       }
       if(emailError){
           this.setState({emailError});
           return false;
       }
       return true
    }

    submitfun=()=> {
        const isvalid = this.validate();
        if(isvalid) {
            const { users } = this.state //destructring
            const tempUsers = Object.assign([], users)
            const adding = {
             fname: this.fname.value,
             sname:this.sname.value,
             age:this.age.value,
             address:this.address.value,
             phone:this.phone.value,
             email:this.email.value
         }
         tempUsers.push(adding)
         this.setState({ users: tempUsers })
        }
       
  }


    
    keyPressed(){

    }
    render() {
        return (
        <div className="formclass">
            First Name:
        <input
         ref={(nameInput) => this.fname = nameInput}
        //   onKeyUp={this.keyPressed}
          type='text' required
        /><br/>
        <div style={{fontSize:12, color: "red"}}>{this.state.fnameError}</div>
         Second Name:
        <input 
           ref={(snameInput)=>this.sname = snameInput}
           onKeyDown={this.keyPressed}
           type="text"/>
           <br></br>
           <div style={{fontSize:12, color: "red"}}>{this.state.snameError}</div>
          age:
          <input
          ref={(ageInput) => this.age = ageInput}
          onKeyUp={this.keyPressed}
          type='text'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.ageError}</div>
          Address:
          <input
          ref={(addInput) => this.address = addInput}
          onKeyUp={this.keyPressed}
          type='text'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.addressError}</div>
           Phone:
           <input
          ref={(phoneInput) => this.phone = phoneInput}
          onKeyUp={this.keyPressed}
          type='text'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.phoneError}</div>
           email:
           <input
          ref={(mailInput) => this.email = mailInput}
          onKeyUp={this.keyPressed}
          type='text'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.emailError}</div>
         <input type='submit' value='Submit' onClick={this.submitfun} />
         {/* <p>{this.state.fname}</p> */}
         {/* <p>{this.state.fname}-{this.state.sname}</p> */}
         {/* {console.log(this.state.users)} */}
         <Table data={this.state.users}></Table>
       
        </div>
        )
    }
}
