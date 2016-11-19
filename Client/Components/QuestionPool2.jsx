import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";
import {Grid, Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import DisplayQuestions from './DisplayQuestions';
const styles = {
 paper:{
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
  padding: '10px',
  textAlign: 'center',
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
  },
  {
    "question":'Which is the capital of America?1',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?2',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?3',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?4',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?5',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?6',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?7',
    "img":'../img/sports.png',
    "right":'Africa',
    "wrong1":'Africa',
     "wrong2":'Africa',
     "wrong3":'Africa',
  },
  {
    "question":'Which is the capital of America?8',
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
,
}
];
var queSelected=[];
export default class QuestionPoolDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {checked:false,
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '100%',};
    this.handleQuestions=this.handleQuestions.bind(this); 
  }
 
 // handleToggle = () => {
 //    {displayquestions}
 //  }
  handleQuestions(e){  
    this.setState(prevState => ({
     checked: !prevState.checked
   })); 
    if(e.target.checked)
   queSelected.push(e.target.value);
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };
  _onRowSelection(key) {
  console.log(key);
};

  render(){
    console.log(this.props.location.query.categories);
     var display = [];
     var count=0
       for(let index1 in questions) 
           {  
              if(questions[index1]['sports'])
              {
             for(let index2 in questions[index1])
             {
              for(let index3 in questions[index1][index2])
              { 
                display.push(
                <TableRow key={questions[index1][index2][index3].question} value={questions[index1][index2][index3].question} selected={index3.selected}>
                  <TableRowColumn><h3>{questions[index1][index2][index3].question}</h3></TableRowColumn>
                </TableRow>);
              } 
             } 
             }      
         }
    return(
      <Grid>
        <Paper style={styles.paper} zDepth={3} rounded={false} >
         <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
        <h2>Select your questions </h2>
        </Col>
         </Row>
        <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
         <div id='displayque'>
         <Table
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this._onRowSelection}>
         <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}>
          
         {display}
         
         </TableBody>
        </Table>
        </div>
         </Col>
         </Row>
         <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
         <div>
         <Link to="displayquestions/"><RaisedButton label="Done" primary={true} onTouchTap={this.handleToggle}/></Link>
         </div>
         </Col>
         </Row>
        </Paper>
        <div id='displayque'></div> 
      </Grid>

      );
  }
  }
  function displayquestions()
  { 

    ReactDOM.render(<MuiThemeProvider><DisplayQuestions queSelected={queSelected}/></MuiThemeProvider>,document.getElementById('displayque'));
  }