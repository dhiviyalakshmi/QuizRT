import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import DisplayQuestions from './DisplayQuestions';
import Name from './Name';
const questions = [
{
 sports:[ {
    "question":'which country does sachin belong to?',
    "right":'argentina',
    "wrong":'argentina',
     "wrong":'argentina',
     "wrong":'argentina',
  },
 {
    "question":'which is the capital of Ameri?1',
    "right":'argentina',
    "wrong":'argentina',
     "wrong":'argentina',
     "wrong":'argentina',
  }]
},
  {
  sports1:[  {
    "question":'which country does sachin belong to?2',
    "right":'argentina',
    "wrong":'argentina',
     "wrong":'argentina',
     "wrong":'argentina',
  },
  {
    "question":'which country does sachin belong to?3',
    "right":'argentina',
    "wrong":'argentina',
     "wrong":'argentina',
     "wrong":'argentina',
  }]
},
];
 var queSelected=[];
 var categorySelected=[];
export default class QuestionPoolDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.state= {checked:false};
    this.handleClose=this.handleClose.bind(this);
    this.handleQuestions=this.handleQuestions.bind(this); 
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
    categorySelected=this.props.category;
  }
 
  handleQuestions(e){  
    this.setState(prevState => ({
     checked: !prevState.checked
   })); 
    if(e.target.checked)
   queSelected.push(e.target.value);
  }
    handleClose() {
     this.setState(({open: false}));
    displayquestions();
   }
  render() {
    var display = [];
       for(let index1 in questions) 
           {  
            if(questions[index1]['sports'])
            {
           for(let index2 in questions[index1])
           {
            for(let index3 in questions[index1][index2])
            {
              display.push(<MenuItem  key={questions[index1][index2][index3].question}> {<Checkbox key={questions[index1][index2][index3].question} label={questions[index1][index2][index3].question} value={questions[index1][index2][index3].question} onCheck={this.handleQuestions} />}<li>{questions[index1][index2][index3].right} </li><li>{questions[index1][index2][index3].wrong} </li><li>{questions[index1][index2][index3].wrong} </li><li>{questions[index1][index2][index3].wrong}</li></MenuItem>);
            } 
           }
         }
          
         }
    return (
      <div >
      <div style={ {textAlign: 'center'}}>
        <RaisedButton 
          label="Choose"
          primary={true}
          onTouchTap={this.handleToggle}/> 

          <RaisedButton 
          label="Add"
          primary={true}
          onTouchTap={name}/> 
        </div>
        <Drawer
          docked={false}
          width={600}
          openSecondary={true} 
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
         {display}
           <RaisedButton 
          label="Done"
          primary={true}
          onTouchTap={this.handleClose}/>
        </Drawer>
         <div id="displayque"></div>
       <div id="name"></div>
      </div>
    );
  }
}


function name()
  { 
    ReactDOM.render(<MuiThemeProvider><div style={ {textAlign: 'center', color:'#C62828'}}><Name/></div></MuiThemeProvider>,document.getElementById('name'));
  }


  function displayquestions()
  { 

    ReactDOM.render(<MuiThemeProvider><DisplayQuestions queSelected={queSelected}/></MuiThemeProvider>,document.getElementById('displayque'));
  }
