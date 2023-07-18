import React, { Component } from 'react'
import axios from 'axios'

class PostData extends Component {
    constructor (props){
        super(props)
        this.state = {
            userId : "",
            title: "",
            body: ""
        }
    }
    changeInput = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
    })
    }
    submitData = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response =>{
            console.log(   )
        })
        .catch(error => {
            console.log(error);
        })
        this.setState({
            userId : "",
            title: "",
            body: ""      
        })
    }
  render() {
    return (
      <div>
        <form>
            <input type="text"  placeholder='User Id' value={this.state.userId}  name='userId' onChange={this.changeInput} />
            <input type="text"  placeholder='Title' value={this.state.title}  name='title' onChange={this.changeInput} />
            <input type="text"  placeholder='Body' value={this.state.body}  name='body' onChange={this.changeInput} />
            <input type="submit" onClick={this.submitData} />
        </form>
      </div>
    )
  }
}

export default PostData