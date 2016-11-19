import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DisplayQuestions from './DisplayQuestions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const styles = {
 paper:{
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
  padding: '10px',
  textAlign: 'center',
  display: 'inline-block',
   color:'#C62828',
},
};
const questions = [
{
 sports:[ {
    "question":'Which country does Sachin belong to?',
    "img":'../img/sports.png',
    "right":'Argentina',
    "wrong1":'Argentina',
     "wrong2":'Argentina',
     "wrong3":'Argentina',
  },
 {
    "question":'Which is the capital of America?',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  }]
},
  {
  sports1:[  {
    "question":'which country does sachin belong to?2',
    "right":'argentina',
    "wrong1":'argentina',
     "wrong2":'argentina',
     "wrong3":'argentina',
  },
  {
    "question":'which country does sachin belong to?3',
    "right":'argentina',
    "wrong1":'argentina',
     "wrong2":'argentina',
     "wrong3":'argentina',
  }]
},
];
var queSelected=[];
export default class QuestionPoolDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {checked:false};
    this.handleQuestions=this.handleQuestions.bind(this); 
  }
 
 handleToggle = () => {
    {displayquestions}
  }
  handleQuestions(e){  
    this.setState(prevState => ({
     checked: !prevState.checked
   })); 
    if(e.target.checked)
   queSelected.push(e.target.value);
  }
  render(){
     var display = [];
       for(let index1 in questions) 
           {  
            if(questions[index1]['sports'])
            {
           for(let index2 in questions[index1])
           {
            for(let index3 in questions[index1][index2])
            {
              display.push(
                <Card key={questions[index1][index2][index3].question}>
            <CardMedia
              overlay={<CardTitle title={questions[index1][index2][index3].question}/>}>
              <img src={questions[index1][index2][index3].img} />
            </CardMedia>
            <CardTitle title="Options"/>
            <CardText>
             <li>{questions[index1][index2][index3].right} </li><li>{questions[index1][index2][index3].wrong1} </li><li>{questions[index1][index2][index3].wrong2} </li><li>{questions[index1][index2][index3].wrong3}</li>
            </CardText>
            <CardActions>
            <Checkbox key={questions[index1][index2][index3].question} value={questions[index1][index2][index3].question} onCheck={this.handleQuestions} />
            </CardActions>
          </Card>
  );
                //<MenuItem  key={questions[index1][index2][index3].question}> {<Checkbox key={questions[index1][index2][index3].question} label={questions[index1][index2][index3].question} value={questions[index1][index2][index3].question} onCheck={this.handleQuestions} />}<li>{questions[index1][index2][index3].right} </li><li>{questions[index1][index2][index3].wrong} </li><li>{questions[index1][index2][index3].wrong} </li><li>{questions[index1][index2][index3].wrong}</li></MenuItem>);
            } 
           }
         }
          
         }
    return(
      <Grid>
        <Paper style={styles.paper} zDepth={3} rounded={false} >
        <h2>Select your questions </h2>
        <Row>
         <Col xs={12} sm={6} md={6} lg={6}>
         <div id='displayque'>
         {display}
         </div>
         </Col>
         </Row>
         <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
         <div>
         <RaisedButton label="Done" primary={true} onTouchTap={this.handleToggle}/>
         </div>
         </Col>
         </Row>
        </Paper>
        <div id='displayque'></div> 
        <DisplayQuestions />
      </Grid>

      );
  }
  }
  function displayquestions()
  { 

    ReactDOM.render(<MuiThemeProvider><DisplayQuestions queSelected={queSelected}/></MuiThemeProvider>,document.getElementById('displayque'));
  }