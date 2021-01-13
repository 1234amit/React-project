import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Blogcard from './Blogcard';

class App extends Component {

  state  = {
    showBlogs: true
  }

   blogArr = [
    {
      id: 1,
      title : 'Blog Title 1',
      description : 'Hello everyone my name is Amit goswami . i am a Software engineer.',
    },
    {
      id: 2,
      title : 'Blog Title 1',
      description : 'Hello everyone my name is Amit goswami . i am a Software engineer.',
    },
    {
      id: 3,
      title : 'Blog Title 1',
      description : 'Hello everyone my name is Amit goswami . i am a Software engineer.',
    }

  ]


    blogCards = this.blogArr.map((item, pos) =>{
    console.log(item);

    return(
      <Blogcard key={pos} title={item.title} description={item.description} id={item.id} />
    )
  })
 
  onHideBtn = () =>{
    this.setState({showBlogs: false})

   console.log(this.showBlogs)
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.onHideBtn} className="button">Hide Items</button>
        { 
        this.state.showBlogs ? this.blogCards : null
        }
      </div>
    );
  }

  
}

export default App;
