import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import PostDialog from './PostDialog';
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Redux
import { connect } from 'react-redux';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class Post extends Component {
  render() {
    const {
      classes,
      post: {
        title,
        description,
        contactInfo,
        board,
        userId,
        createdAt
      }
    } = this.props;


    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body2">{contactInfo}</Typography>           
          <Typography variant="body1">{board}</Typography>
          <Typography variant="h10">{userId}</Typography>
          <Typography variant="body2">{createdAt}</Typography>
        </CardContent>
      </Card>
    );
  }
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Post));