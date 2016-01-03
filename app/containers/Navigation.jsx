import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Navigation extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <nav role="navigation">
          <Link to="/about">About</Link>
          <Link to="/">Dashboardt</Link>
      </nav>
    );
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(Navigation);
