// import React, { Component } from 'react'
// import Sidebar from '../components/sidebar/Sidebar'

// export class MyPosts extends Component {
//     render() {
//         return (
//             <div>
//                 <Sidebar />
//                 <h2>MyPosts Page</h2>
//             </div>
//         )
//     }
// }

// export default MyPosts


import myposts from '../images/my_posts.png'
import Sidebar from '../components/sidebar/Sidebar'

import React from 'react'

const MyPosts = () => {
  return (
    <div>
    <Sidebar />
      <img className="photo" src={myposts} />
    </div>
  )
}

export default MyPosts