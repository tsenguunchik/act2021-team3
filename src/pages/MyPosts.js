import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'

export class MyPosts extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <h2>MyPosts Page</h2>
            </div>
        )
    }
}

export default MyPosts
