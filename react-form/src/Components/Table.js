import React from 'react'

export default function Table(props) {
 
    return (
        <div>
            <p>This is table component</p>
            {/* {console.log((props.data))} */}
            {/* {console.log(JSON.stringify(props.data))} */}
            <table>
              <tr>
                <th>name</th>
                <th>age</th>
                <th>email</th>
                <th>DOB</th>
                <th>state</th>
                <th>postal code</th>
              </tr>
              <tr>
              <td>{props.data.name}</td>
              <td>{props.data.age}</td>
              <td>{props.data.Dob}</td>
              <td>{props.data.email}</td>
              <td>{props.data.stat}</td>
              <td>{props.data.pc}</td>
              </tr>
             
            </table>
          
        </div>
    )
}
