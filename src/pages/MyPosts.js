import React, { Component } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar'

export class MyPosts extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2>MyPosts Page</h2>
            </div>
        )
    }
}

export default MyPosts
