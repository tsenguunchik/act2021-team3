import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles/withStyles';

import { Button } from '@material-ui/core/Button';

class Profile extends Component {
  render() {
      const { 
        classes, 
        user: {
          credentials: {firstName, lastName, email, createdAt, bio, location, category, contactInfo}
        }
      } = this.props;
    return (
      <div>
        <p>{firstName}</p>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   user: state.user
// })

// Profile.PropTypes = {
//   user: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired
// }

// export default connect(mapStateToProps)(withStyles(styles)(Profile))

export default Profile;