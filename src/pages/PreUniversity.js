// import React, { Component } from 'react';
// import axios from 'axios';
// import Sidebar from '../components/sidebar/Sidebar';
// import Post from '../components/post/Post';

// class PreUniversity extends Component {
//   state = {
//     posts: null
//   }
//   componentDidMount(){
//     axios.get('/posts/pre-university')
//       .then(res => {
//         console.log(res.data)
//         this.setState({
//           posts: res.data
//         })
//       })
//       .catch(err => console.log(err));
//   }
//   render() {
//     let recentPostsMarkup = this.state.posts ? (
//       this.state.posts.map((post) => <Post post={post} />)
//     ) : <p>Loading...</p>
//     return (
//       <div>
//       <Sidebar />
//         {recentPostsMarkup}
//       </div>
//     );
//   }
// }

// export default PreUniversity;

import PreUniv from "../images/pre-univ.png"
import Sidebar from '../components/sidebar/Sidebar'

import React from 'react'

const PreUniversity = () => {
  return (
    <div>
    <Sidebar />
      <img className="photo" src={PreUniv} />
    </div>
  )
}

export default PreUniversity


