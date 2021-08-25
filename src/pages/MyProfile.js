import React, { Component } from 'react'
import Sidebar from '../components/sidebar/Sidebar'

export class MyProfile extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <h2>MyProfile Page</h2>
            </div>
        )
    }
}

export default MyProfile
