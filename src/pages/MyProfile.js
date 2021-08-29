// import React from 'react'
// import Profile from '../components/profile/Profile';

// const MyProfile = () => {
//     return (
//         <div>
//             <Profile />
//         </div>
//     )
// }

// export default MyProfile

import myprof from '../images/my_profile.png'
import Sidebar from '../components/sidebar/Sidebar'

import React from 'react'

const MyProfile = () => {
  return (
    <div>
    <Sidebar />
      <img className="photo" src={myprof} />
    </div>
  )
}

export default MyProfile