const initialState={
     qBank : [ 
        { 
          question: 
            "how to build the app ?", 
          answers: ["Iknow", "try once", "learn", "itsok"], 
          correct: "Iknow", 
          questionId: "099099"
        }, 
        {
            question:"What is my Name?",
        answers:["JYOTHI","SWATHI","SAHITHI", "None of the Above"], 
        correct:"JYOTHI",
        questionId:"1"
        },
          {
              
           question:"Can You guess my age?",
           answers:["24","23", "22", "None of the Above"], 
           correct:"23",
           questionId:"2"
        },
          {
            
           question:"What do you think about me?",
           answers:["COOL!","Worst", "Not BAD", "None of the Above"],
           correct:"COOL",
           questionId:"3"
        },
          {
          question:"guess What now?",
          answers:["MOVIE","Cleaning", "Shoping","None of the Above"], 
          correct:"Cleaning",
          questionId:"4"
        },
        
      ]

}


const reducer=(store=initialState, action)=>{
    return store;

}

export default reducer;