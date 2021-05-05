import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Import material-ui
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
// Import components
import Icon from './icon';


class ActivityList extends Component {
  parseTime = (timeStr) => {
    let timeObj = new Date(timeStr);
		return `${timeObj.getMonth() + 1}/${timeObj.getDate()}/${timeObj.getUTCFullYear()}`;
  };

  render() {
    const { title, list } = this.props;
    return (
      <div>
        
      </div>
    )
  }
}

ActivityList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default connect(null, null)(ActivityList);
