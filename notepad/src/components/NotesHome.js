import React, { Component } from 'react';
import NoteView from './NoteView';
import NoteEdit from './NoteEdit';


class NotesHome extends Component {
  state={
    Notes:[
      {id:"asd", content:"Text content 1", show: false},
      {id:"wse", content:"text content 2", show: false}
    ],
      }
 
   inputHandle= (event, id) => {
     console.log("coming here");
     const indexval = this.state.Notes.findIndex((p)=>{
       return p.id === id ;
     })

     const dupNote = {
         ...this.state.Notes[indexval]
     }
      
     dupNote.content = event.target.value;

     const Notes =[
       ...this.state.Notes
    ];

     Notes[indexval] = dupNote;

     this.setState({ 
       Notes: Notes
     })
      
    }

    NoteEditPage(event, id) {
      console.log("coming here");
      const indexval = this.state.Notes.findIndex((p)=>{
        return p.id === id ;
      })
 
      const dupNote = {
          ...this.state.Notes[indexval]
      }
       
      dupNote.content = event.target.value;
 
      const Notes =[
        ...this.state.Notes
     ];
 
      Notes[indexval] = dupNote;
 
      this.setState({ 
        Notes: Notes
      })
       
     }



     saveHandle=(id) => {
      console.log("calling save handle");
      const Noteindex = this.state.Notes.findIndex((note)=>{
        return note.id === id;
      })
      const dupNotes = [...this.state.Notes];
      // const showNotepad = this.state.show;
      const eNote={...dupNotes[Noteindex]}
      eNote.show = false;
      dupNotes[Noteindex] = eNote;
      this.setState({Notes: dupNotes})
       
     }
     
     


    
    deleteHandler =(id)=>{
      console.log("delete", id);
      const Notes =[...this.state.Notes];
      Notes.splice(id, 1);
      
      this.setState({
        Notes: Notes
      })
    }
    handleEdit=(id) => {
      console.log("calling handle edit", id);
      const Noteindex = this.state.Notes.findIndex((note)=>{
        return note.id === id;
      })
      const dupNotes = [...this.state.Notes];
      const showNotepad = !this.state.showNotepad;
      const eNote={...dupNotes[Noteindex]}
      eNote.show = showNotepad;
      dupNotes[Noteindex] = eNote;
      this.setState({Notes: dupNotes})
    }
    

  render() {
    return (
      <div className="App">
        <h4>Welcome! this is my note taking app</h4>
        {this.state.Notes.map((note)=>{
          // console.log(note.content);
          return  <NoteView content={note.content}
                   inputHandle={(event)=>{this.inputHandle(event, note.id)}}
                   key={this.state.key}
                   deleteHandler={()=>{this.deleteHandler(note.id)}}
                   handleEdit={()=>{this.handleEdit(note.id)}}
                  />
        }) }
        {this.state.Notes.map((note)=>{
            return <NoteEdit note={note} 
                            handleEdit={(event)=>{this.NoteEditPage(event,note.id)}}
                            saveHandle={()=>{this.saveHandle(note.id)}}></NoteEdit>
      })}
         
      
      </div>
    );
  }
}

export default NotesHome;
