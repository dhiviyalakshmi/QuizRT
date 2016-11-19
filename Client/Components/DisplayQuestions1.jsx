import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FriendRequest from './FriendRequest';
import Paper from 'material-ui/Paper';

const styles = {
  paper:{
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
  padding: '10px 10px 10px 10px',
  textAlign: 'center',
   color:'#C62828',
},
};
var questions=[
 'Which country does sachin belongs to ?','Which country does sachin belongs to ?1','Which country does sachin belongs to ?2','Which country does sachin belongs to ?3'
  ];
export default class DisplayQuestions extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose = (event) => {
    alert('clicked');
  };
  handleToggle = () => {
    sendFriendRequest();
  };
  render() {
    var displayQues=[];
    for(let ques in questions)
    {
      displayQues.push(
       <Card key={questions[ques]}>
        <CardTitle>
          <b>{questions[ques]}</b>
          <IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>
        </CardTitle>
      </Card>  
    );

    }
    
    return (
      <Grid>
      <Paper style={styles.paper} zDepth={3} rounded={false} >
        <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
          <h2>Your Questions</h2>
         </Col>
         </Row> 
      <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
           <div>
       {displayQues}
           </div>
       </Col>
         </Row> 
         <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
           <div>
           <RaisedButton label="Send Friend Request" primary={true} onTouchTap={this.handleToggle}/>
           </div>
       </Col>
         </Row> 
        </Paper>
          <div id='friends'></div>
        </Grid>
        );
}
}
function sendFriendRequest()
{
  ReactDOM.render(<MuiThemeProvider><FriendRequest open={true}/></MuiThemeProvider>,document.getElementById('name'));
}