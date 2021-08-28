import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar/Sidebar';
import Post from '../components/post/Post';

class InUniversity extends Component {
  state = {
    posts: null
  }
  componentDidMount(){
    axios.get('/posts')
      .then(res => {
        console.log(res.data)
        this.setState({
          posts: res.data
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentPostsMarkup = this.state.posts ? (
      this.state.posts.map((post) => <Post post={post} />)
    ) : <p>Loading...</p>
    return (
      <div>
      <Sidebar />
        {recentPostsMarkup}
      </div>
    );
  }
}

export default InUniversity;