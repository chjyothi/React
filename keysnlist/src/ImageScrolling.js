import React, { Component } from 'react';
import './App.css';

export default class ImageScrolling extends Component {
    //scrolling images 
      constructor() {
           super()
       this.state= {
            index :0,
             cImages : [
                'https://www.heartuk.org.uk/images/cholesterol/a.jpg',
                'https://etc.usf.edu/presentations/extras/letters/theme_alphabets/26/12/B-400.png',
                'https://etc.usf.edu/presentations/extras/letters/fridge_magnets/orange/13/C-400.png',
               'https://etc.usf.edu/presentations/extras/letters/varsity_letters/37/16/D-400.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2gt09kCgRV4kHYoDl6l0IfJAefoJtwX7xTg&usqp=CAU'
            ],
            visiblePrev :false,
            visibleNext :false
        }
        this.nextImage=this.nextImage.bind(this);
        this.previousImage=this.previousImage.bind(this);
      }
        
    
   
    nextImage() {
        console.log("nextimage")
      if(this.state.index +1 === this.state.cImages.length)
      {
       this.setState({
          // index:0
          visibleNext: true,
          visiblePrev: false

       })
      } else {
          this.setState({
              index:this.state.index+1,
              visiblePrev: false
          })
      }
    }
     previousImage(){
        if(this.state.index -1 === -1)
        {
         this.setState({
            // index: this.state.cImages.length-1
            visiblePrev: true,
            visibleNext: false

         })
        } else {
            this.setState({
                index:this.state.index-1,
                visibleNext: false
            })
        }
   
    }
    render() {
        return (
            <div>
            <img src={this.state.cImages[this.state.index]} alt='' className="imageDiv"/>
            <br></br>
            <div id="container">
            <button onClick={this.previousImage} disabled={this.state.visiblePrev}>previous</button>
            <button onClick={this.nextImage} disabled={this.state.visibleNext}>next</button>
            </div>
            </div>
        )
    }
    
}
