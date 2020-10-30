import React from 'react'

export default function Table(props) {
    return (
        <div>
            <p>This is table component</p>
            {console.log((props.data))}
            <table >
          <tr>
                    <th>fname</th>
                    <th>sname</th>
                    <th>age</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>email</th>
          </tr>
          {props.data.map((item) => (
            <tr>
                    <td>{item.fname}</td>
                    <td>{item.fname}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
            </tr>
          ))}
        </table>

        </div>
    )
}
