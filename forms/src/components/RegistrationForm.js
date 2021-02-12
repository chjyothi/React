import React, { Component } from 'react';
import InputEle from './InputEle';
export default class RegistrationForm extends Component {

    state={
        orderForm :{
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your Name'
                },
                value:''
            },
            Street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value:''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP CODE'
                },
                value:''
            },
            Country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value:''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'your email'
                },
                value:''
            },
            delivaryMethod: {
                elementType: 'select',
                elementConfig: {
                   options: [
                       {value: "family", displayValue:"family"},
                       {value: "relative", displayValue:"relative"},
                       {value: "friend", displayValue:"friend"}

                   ]
                   
                },
                value:'dummy value'
            }
        }

    }
    changeHendler =(event, inputId)=>{
      console.log(event.target.value)
      const updatedOrderForm ={
          ...this.state.orderForm
      }
     const updatedFormElement = 
     {...updatedOrderForm[inputId]};
     updatedFormElement.value = event.target.value;
     updatedOrderForm[inputId] = updatedFormElement;
     this.setState({orderForm: updatedOrderForm});
     console.log(this.state.orderForm)
    }

    handleSubmit =(event) =>{
        // event.preventDefault();
        // const formData = {};
        // for(let formElementIdentifier in this.state.orderForm){
        //     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier];
        // }
    }
    render() {
       
        console.log(this.state.orderForm);
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                setup: this.state.orderForm[key]
            });
        }
        console.log(formElementsArray);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {console.log(formElementsArray)}
                   {formElementsArray.map(formElement =>(
                       <InputEle key={formElement.id}
                                 elementType={formElement.setup.elementType}
                                  elementConfig={formElement.setup.elementConfig}
                                   value={formElement.setup.value}
                                   changeHendler={(event)=>{this.changeHendler(event, formElement.id)}}/>
                   )
                   )}

                    <button btntype="success" >Submit</button>
                </form>
            </div>
        )
    }
}
