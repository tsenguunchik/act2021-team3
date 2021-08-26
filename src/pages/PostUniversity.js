import React, { Component } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Post from '../components/post/Post';
import Profile from '../components/profile/Profile';
import PostSkeleton from '../util/PostSkeleton';

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

//Should include conditional statement so that it will show only Pre-Univ posts

class PostUniversity extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    <Sidebar />
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Post key={scream.screamId} scream={scream} />)
    ) : (
      <PostSkeleton />
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

PostUniversity.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getScreams }
)(PostUniversity);
