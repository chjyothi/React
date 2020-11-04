import React, { Component } from 'react';
import ReactPhoneInput from "react-phone-input-2";
import Table from "./Table";
const initialstate ={
   
}
export default class Form1 extends Component{
    constructor() {
        super();
        this.state = {
            users:{
        name:'',
        nameErr:'',
        email:'',
        emailErr:'',
        age:'',
        ageErr:'',
        phone: '',
        address:'',
        addressErr:'',
        stat:'',
        statErr:'',
        pc:'',
        pcErr:'',
        Dob:'',
        DobErr:'',
        AppStat:''
            }

        }
        // this.ValidName=this.ValidName.bind(this);
        
    }
    ValidName(name){
        let nameErr="";
        if(name.length==0)
        {
            nameErr="please enter your name ";
        }
     else if(name.length<=2)
       {
        nameErr="name should not less than 2 char";
        this.setState({nameErr:nameErr})
       }
       else {
           this.setState({name})
       }
     
     
    }
    validAge(age){
        let ageErr='';

        if(isNaN(age))
        {
            ageErr="age should not be empty";
        }
        // console.log("age>100 && age<1",(age>100 && age<1),age>100,age<1)
       else if(age<1 || age>100)
        {
         ageErr="Invalid age";
         this.setState({ageErr:ageErr})
        }
        else {
            this.setState({age})
        }
       
    }
    validateEmail(email){
        let emailErr='';
        if(email=='')
        {
            emailErr="please enter your email adress";
            this.setState({emailErr})
        }
        else
        {
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
        if(email!='') {
            this.setState({email})
        }
       
        
      }
      //validating State 
      validateState(stat) {
          let statErr='';
          if(stat=='')
          {
            statErr="State should not be empty"
            this.setState({statErr})
          }
          else {
              this.setState({stat})
          }
         
      }
      //validating Postalcode
      validatePstalCode(pc) {
          let pcErr='';
          if(pc=='')
          {
            pcErr="postal code should not be empty"
            this.setState({pcErr})
          }
         else {
             this.setState({pc})
         }

      }
   //phone number field 
   PhonehandleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };
  //Adress validation
   validateAdress(address) {
    let addressErr='';
    if(address=='')
    {
        console.log("emptyyyyyyyy")
        addressErr="please enter your address"
        this.setState({addressErr})
    }
   }
   //DOB validation
   validateDob(Dob) {
   let DobErr='';
   if(Dob=='') {
    DobErr="enter should not be empty"
    this.setState({DobErr})
   }
   else {
       this.setState({Dob})
   }
    }
 

    submitfun=()=>{
       
        this.ValidName(this.name.value);
        this.validAge(parseInt(this.age.value));
       this.validateEmail(this.email.value);
       this.validateState(this.stat.value);
       this.validatePstalCode(this.pc.value);
       this.validateAdress(this.address.value);
       this.validateDob(this.Dob.value);
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
          type='text'
        /><br/>
         <div style={{fontSize:12, color: "red"}}>{this.state.ageErr}</div>  
        <ReactPhoneInput
      inputStyle={{color:'green'}}
      containerStyle={{margin:'20px'}}
      buttonStyle={{}}
      dropdownStyle={{height:'50px'}}
      country={"us"}
      value=""
      onChange={this.PhonehandleOnChange}
      />
      
       address:
                 <input 
           ref={(snameInput)=>this.address = snameInput}
           onKeyDown={this.keyPressed}
           type="text"/>
           <br></br>
           <div style={{fontSize:12, color: "red"}}>{this.state.addressErr}</div>

           DOB:
                 <input 
           ref={(snameInput)=>this.Dob = snameInput}
           onKeyDown={this.keyPressed}
           type="date"/>
           <br></br>
        <div style={{fontSize:12, color: "red"}}>{this.state.DobErr}</div>

           State:
                 <input 
           ref={(snameInput)=>this.stat = snameInput}
           onKeyDown={this.keyPressed}
           type="text"/>
           <br></br>
        <div style={{fontSize:12, color: "red"}}>{this.state.statErr}</div>

        postal Code:
                 <input 
           ref={(pcInput)=>this.pc = pcInput}
           onKeyDown={this.keyPressed}
           type="text"/>
           <br></br>
        <div style={{fontSize:12, color: "red"}}>{this.state.pcErr}</div>

        <input type='submit' value='Submit' onClick={this.submitfun} />
        <br></br>
        <p>{this.state.email}{this.state.name}</p>
        <Table data={this.state}></Table>
        <br></br>
        {console.log(this.state.users)}
            </div>
        )
    }
}
