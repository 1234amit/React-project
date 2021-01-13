import React, {Component} from 'react'

class Blogcard extends Component  {
    state = {
        likeCount:0
    }

    onClickButton = () =>{
        this.setState((prevState, prevProp) => {
          return  {likeCount: prevState.likeCount + 1}
        });
    }
    render() {  
        return (
            <div>
                <div className="BlogCard">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <p>Like Count : <span>{this.state.likeCount}</span></p>
                    <button onClick={this.onClickButton}>Like</button>
                </div>
            </div>
        )
    }

}

export default Blogcard
