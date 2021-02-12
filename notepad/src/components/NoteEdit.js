import React from 'react'

export default function NoteEdit(props) {
    return (
        <div>
             {/* <p>Thsi is NoteEdit</p> */}
            
            {  props.note.show ?
            <div className="noteEdit">
               <textarea type="text" className="textBox" rows="15" cols="44" onChange={props.handleEdit} value={props.note.content} > </textarea>
                               <button onChange={props.saveHandle}>save</button>
            </div>
            : null }
             
        </div>
    )
}
