import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ImageDehaze from 'material-ui/svg-icons/image/dehaze';
import FlatButton from 'material-ui/FlatButton';

export default class Titlebar extends React.Component
{
 constructor(props) {
  super(props);
  this.state = {open: false};
}

handleToggle = () => this.setState({open: !this.state.open});

handleClose = () => this.setState({open: false});

render(){  

  return(
    <div>
   <Drawer
        docked={false}
        width={250}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onTouchTap={this.handleClose} style={{margin:"auto"}}><Avatar size={200} src="../img/sports.png" /></MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>


    <AppBar title="QUIZRT" onLeftIconButtonTouchTap={this.handleToggle} 
      titleStyle={{textAlign: "center"}}
      iconElementLeft={<span></span>}
      iconElementRight={
        <span>
        <Badge badgeContent={10}  secondary={true} badgeStyle={{top: 12, right: 12}} > <IconButton tooltip="Notifications">   <NotificationsIcon /> </IconButton> </Badge>
        <FlatButton onTouchTap={this.handleToggle}>
        <ImageDehaze />
        </FlatButton>
      </span>}
 style={{
    backgroundColor: '#C62828  ',
    width: window.innerWidth,
  }}/>
  </div>
  );
}
}