import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      question:'',
      answer:''
    }
  }
  klikGet(){
    var url='https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    axios.get(url).then((x)=>{
      console.log(x.data)
      this.setState({
        question:x.data.punchline,
        answer:x.data.setup
      })
    })
  }
  
  render() {
    return (
      <div >
      <center>
      
<div class="jumbotron" style={{backgroundColor:"pink"}}>
  <h1 class="display-4">What a jokes</h1>
  <p class="lead">{this.state.answer}</p>
  <hr class="my-4"/>
  <p>{this.state.question}</p>
  <button onClick={()=>{this.klikGet()}} class="btn btn-primary btn-lg"  role="button">Reload</button>
</div>
        </center>
      </div>
    );
  }
}

export default App;
