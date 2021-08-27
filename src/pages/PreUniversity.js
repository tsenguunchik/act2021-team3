import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import PropTypes from 'prop-types';

import Post from '../components/post/Post';
import PostSkeleton from '../util/PostSkeleton';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';

class PreUniversity extends Component {
  componentDidMount() {
    this.props.getPosts('pre-university');
  }
  render() {
    <Sidebar />
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <PostSkeleton />
    );
    return (
      <div>
        {recentPostsMarkup}
      </div>
    );
  }
}

PreUniversity.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PreUniversity);
