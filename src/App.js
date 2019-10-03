import React, { Component } from 'react'
import DisplayList from './Components/DisplayList';
import img1  from './Assets/Images/1.png'
import img2  from './Assets/Images/2.png'
import img3  from './Assets/Images/3.png'
import img4  from './Assets/Images/4.png'
import img5  from './Assets/Images/5.png'
import img6  from './Assets/Images/6.png'
import img7  from './Assets/Images/7.png'
import img8  from './Assets/Images/8.png'
import img9  from './Assets/Images/9.png'

import MoveButton from './Components/MoveButton';
import './App.css'
import {Button} from './Components/style'
class App extends Component {
    state = {
      OriginalList:[
        {
          Name:'Elizabeth Fisher ',
          ImageUrl:img1
        },
        {
          Name:'Andreea Lucas',
          ImageUrl:img2
        },
        {
          Name:'Jonathan Carpenter',
          ImageUrl:img3
        },
        {
          Name:'Kelly Young',
          ImageUrl:img4
        },
        {
          Name:'Doris Patel',
          ImageUrl:img5
        },
        {
          Name:'Harry Palmer',
          ImageUrl:img6
        },
        {
          Name:'Jonathan Gibson',
          ImageUrl:img7
        },
        {
          Name:'Elizabeth Fisher',
          ImageUrl:img8
        },
        {
          Name:'Elizabeth Fisher',
          ImageUrl:img9
        },
      ],
      MovedList:[] ,

      
    }



 DataExchangeHandler = (TypeOfList) =>{
   console.log(TypeOfList)
   if(TypeOfList==='LeftToRight'){
     if(this.state.OriginalList.length){
       console.log(this.state.OriginalList.length,"val")
      let temp = this.state.OriginalList.pop()
      let val = this.state.MovedList
       this.setState({MovedList:[...val,temp]})
     }
     else{
       window.alert("No Person Left");
     }
   }
   if(TypeOfList==='RightToLeft'){
    if(this.state.MovedList.length){
      let temp = this.state.MovedList.pop()
     let val = this.state.OriginalList
      this.setState({OriginalList:[...val,temp]})
    }
    else{
      window.alert("No Person Left");
    }
  }
 }

  render() {
    return (
      
      <div className='MainContent'>
        <DisplayList List={this.state.OriginalList}  TypeOfList={'LeftToRight'}/>
        <div className="Move">
          <MoveButton button={'Assign >>'}  DataExchangeHandler={this.DataExchangeHandler} TypeOfList={'LeftToRight'}/>
         
          <MoveButton button={'<< Revoke'}  DataExchangeHandler={this.DataExchangeHandler} TypeOfList={'RightToLeft'}/>

        </div>
        <DisplayList List={this.state.MovedList} DataHandler={this.DataHandler} TypeOfList={'RightToLeft'} />
      </div>
     
    )
  }
}

export default App
