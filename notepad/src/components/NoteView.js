
export default function NoteView(props) {
    return(
        <div className="container">
            {/* <p>This is notesView page</p> */}
            {/* {console.log(props.content)} */}
          <p className="contentView">{props.content}</p>
          {/* <input type="text" onChange={props.inputHandle} value={props.content} /> */}
          <div className="btn">
          <button onClick={props.handleEdit}>Edit</button>
          <button onClick={props.deleteHandler}>Delete</button>
          </div>
         
        </div>
       
    );
    
}