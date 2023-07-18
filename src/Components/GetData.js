import axios from 'axios'
import React, { Component } from 'react'

class GetData extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            errorMessage: ""
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            console.log(response)
            this.setState({posts:response.data})
        }).catch((error) => {
            console.log(error);
            this.setState({errorMessage:"Some error occured"})
        })
    }
  render() {
    const { posts, errorMessage} = this.state
    return (
      <div>
        <h1>Dummy Datas</h1>
        {
            posts.length ? 
            (
                posts.map(post => <p>{post.title}</p>)
            )
            :
            <h1>{errorMessage}</h1>
        }
      </div>
    )
  }
}

export default GetData