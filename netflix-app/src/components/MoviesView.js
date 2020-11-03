import React, { Component } from 'react'

export default class MoviesView extends Component {
    state={
       data:[]
      }
      componentDidMount() {
        fetch('Components/data/Movies.json')
        .then((res) => res.json())
        .then((data) =>{
          this.setState({
            data
          })
          console.log(data)
        } )
      }
    render() {
        return (
            <div>
                <p>Nothing to say</p>

            </div>
        )
    }
}
