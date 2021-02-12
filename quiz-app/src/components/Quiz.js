import React, { Component } from 'react'

export default class Quiz extends Component {
    state = {
        Quiz:[
          {id:"1", Question:"What is my Name?",A:"JYOTHI",B:"SWATHI", C:"SAHITHI", D:"None of the Above", ANS:"A"},
          {id:"2", Question:"Can You guess my age?",A:"24",B:"23", C:"22", D:"None of the Above", ANS:"B"},
          {id:"3", Question:"What do you think about me?",A:"COOL!",B:"Worst", C:"Not BAD", D:"None of the Above", ANS:"C"},
          {id:"4", Question:"guess What now?",A:"MOVIE",B:"Cleaning", C:"Shoping", D:"None of the Above", ANS:"D"}
        ]
      }

    render() {
        return (
            <div>
               <p>START YOUR QUIZ</p>
               {console.log(this.state.Quiz)}
                 {this.state.Quiz.map((Q)=>{
                    return( <div className="Question" key={Q.id}> 
                        <p>{Q.Question}</p>
                        <p>{Q.A}</p>
                        <p>{Q.B}</p>
                        <p>{Q.C}</p>
                        <p>{Q.D}</p>
                    </div>); 
                 })}
            </div>
        )
    }
}
