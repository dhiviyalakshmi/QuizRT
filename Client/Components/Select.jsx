import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Topic from './Topic';

const styles = {
 paper:{
  width: '100%',
   height:'50%',
  margin: 'auto',
  marginTop: '10px',
  padding: '10px',
  textAlign: 'center',
  display: 'inline-block',
   color:'#C62828',
},
};

export default class SelectChoice extends React.Component{
   constructor(props) {
    super(props);
  }

  handleToggle = () => {
    {topic}
  }
  render(){
    return(
      <Grid>
        <Paper style={styles.paper} zDepth={3} rounded={false} >
        <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
         <div>
          <Card>
          <CardMedia
            overlay={<CardTitle title="Create Classic Challenge" subtitle="Give a Tough Challenge" />}>
            <img src="img/classic.png"/>
          </CardMedia>
          <CardActions>
            <RaisedButton label="Choose from QuestionPool" primary={true} onTouchTap={this.handleToggle}/>
            <RaisedButton label="Add to QuestionPool" secondary={true} onTouchTap={this.handleToggle}/>
          </CardActions>
        </Card>
        </div>
        </Col>
         </Row>
          </Paper>  
          <div id="topic"></div>
         <Topic/>  
        </Grid>
      );
  }
}
function topic()
  { 
    ReactDOM.render(<MuiThemeProvider><Topic/></MuiThemeProvider>,document.getElementById('topic'));
  }