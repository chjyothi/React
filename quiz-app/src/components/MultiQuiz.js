import React, { Component } from 'react'
import { connect } from 'react-redux';
import Modal from './Modal';

 class MultiQuiz extends Component {
     constructor(props){
         super(props);
         this.state={
            count: 0,
            modal: false
           
        }
     }
   

     handleModal=()=>{
         console.log("clicked!!!!")
         this.setState({modal:!this.state.modal})
     }

   
    answersE=(option,correct)=>{
       if(option === correct) {
           console.log("both are equal");
           const counting = this.state.count + 1;
          this.setState({count: counting});
       }
       console.log(option,correct,this.state.count);
    }

    finish=()=>{
       console.log("final",this.state.count)
    }
 
    render() {
        return (
            <div>
              <h2 className="heading">Take Quiz</h2> 
            {this.props.qBank.map((q)=>{
                return (<div className="Card" key={q.questionId}>
                    <p>{q.question}</p>
                    {q.answers.map((option, index)=>{
                        return (<button className="option" key={index} onClick={()=>this.answersE(option, q.correct)}>{option}</button>);
                    })}
                    </div>);
                    
                       
            }
            )}
            <button onClick={this.handleModal} className="btn">Finish</button>
            {this.state.modal ? 
            <div className="modalContainer">           
            <Modal handleModal={this.handleModal}>
             <h2>Youre score is: {this.state.count}!!</h2>
            </Modal> 
             </div> : null}

             <footer>@copyright reserved</footer>
      </div>
        )
    }
    
}


const mapStateToProps = state =>{
    return {
        qBank : state.qBank
    }

}

const mapDispatchToProps = reducer =>{
    return {
        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MultiQuiz);