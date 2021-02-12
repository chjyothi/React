import React, { Component } from 'react';
import styled from 'styled-components';



const QAStyle = styled.p`
background-color: ${props=>props.alt ? 'rgb(121, 236, 68)': 'rgb(203, 189, 241)'};
width: 20%;
line-height: 180px;
text-align: center;`;

class FlashCards extends Component {
   state = {
     Quiz:[
       {id:"1", Question:"What is my Name?", ANS:"My Name is JYOTHI!", clc: false},
       {id:"2", Question:"Can You guess my age?", ANS:"I am 19 years OLD", clc: false},
       {id:"3", Question:"What do you think about me?", ANS:"I Don't care!!", clc: false},
       {id:"4", Question:"guess What now?", ANS:"Do your business!!", clc: false}
     ]
   }
   answerFlash=(id)=>{
     debugger;
    console.log(id);
    const ind = this.state.Quiz.findIndex((Q)=>{
      return Q.id === id
    })
    const NQuiz = [...this.state.Quiz]
    const dupQ = {...NQuiz[ind]};
    const dupClick = dupQ.clc;
    dupQ.clc = !dupClick;
    NQuiz[ind] = dupQ;
    console.log(NQuiz);
    this.setState({Quiz:NQuiz})
   }
  render() {
    return (
      <div>
        <h4>FLASH CARDS</h4>
        <div className="container">
         
          {console.log(this.state.Quiz)}
        {this.state.Quiz.map((Q)=>{
          return (  <QAStyle alt={Q.clc}><p className="AStyle" key={Q.id} onClick={()=>{this.answerFlash(Q.id)}}>
          { Q.clc ? Q.ANS : Q.Question }</p>  </QAStyle>
             );
        })}
         
       
        </div>
      </div>
    
    );
  }
}

export default FlashCards;
