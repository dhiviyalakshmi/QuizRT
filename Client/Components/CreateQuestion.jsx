import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import {orange500, blue500,green500,red500} from 'material-ui/styles/colors';
import FriendRequest from './FriendRequest';

const styles = {
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
   floatingLabelStyleWrong: {
    color: red500,
  },
   floatingLabelFocusStyleWrong: {
    color: red500,
  },
  floatingLabelStyleRight: {
    color: green500,
  },
  floatingLabelFocusStyleRight: {
    color: green500,
  },
};
const tempArr=[];
const questions=[];
export default class CreateQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {question: '',rightans:'',wrongans1:'',wrongans2:'',wrongans3:'',open: this.props.open,timer:''};
    this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({question: this.refs.question.getValue()});
    this.setState({rightans: this.refs.rightans.getValue()});
    this.setState({wrongans1: this.refs.wrongans1.getValue()});
    this.setState({wrongans2: this.refs.wrongans2.getValue()});
    this.setState({wrongans3: this.refs.wrongans3.getValue()});
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({open: false});
    questions.push(this.state.question);
    questions.push(this.state.rightans);
    questions.push(this.state.wrongans1);
    questions.push(this.state.wrongans2);
    questions.push(this.state.wrongans3);
    sendFriendRequest();
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    this.setState({question:'',rightans:'',wrongans1:'',wrongans2:'',wrongans3:''});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}/>,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}/>,
    ];
    return (
      <div>
        
        <Dialog className="createQuestion"
          title="Add To The QuestionPool"
          titleStyle={{textAlign: "center",backgroundColor:'#C62828'}}
          actions={actions}
          modal={false}
          open={this.state.open}
           autoScrollBodyContent={true}
          onRequestClose={this.handleClose} >

          <TextField
          floatingLabelText="Question"
          multiLine={true}
          rows={2}
          rowsMax={5}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          value={this.state.question} 
          onChange={this.handleChange} 
          ref="question"/>
          <br/>
          <TextField
          floatingLabelText="RightAnswer"
           multiLine={true}
          rows={2}
          floatingLabelStyle={styles.floatingLabelStyleRight}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyleRight}
          value={this.state.rightans} 
          onChange={this.handleChange}
          ref="rightans"/>
          <br/>
          <TextField
          floatingLabelText="WrongAnswer"
           multiLine={true}
          rows={2}
          floatingLabelStyle={styles.floatingLabelStyleWrong}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyleWrong}
          value={this.state.wrongans1} 
          onChange={this.handleChange}
          ref="wrongans1"/>
           <br/>
          <TextField
          floatingLabelText="WrongAnswer"
           multiLine={true}
          rows={2}
          floatingLabelStyle={styles.floatingLabelStyleWrong}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyleWrong}
           value={this.state.wrongans2} 
          onChange={this.handleChange}
          ref="wrongans2"/>
           <br/>
          <TextField
          floatingLabelText="WrongAnswer"
           multiLine={true}
          rows={2}
          floatingLabelStyle={styles.floatingLabelStyleWrong}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyleWrong}
         value={this.state.wrongans3} 
          onChange={this.handleChange}
          ref="wrongans3"/>
          <br/>
          <TimePicker floatingLabelText="Set Timer" 
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
        </Dialog>
      <div id='friends'></div>
      </div>
    );
  }
}

function sendFriendRequest()
{
  ReactDOM.render(<MuiThemeProvider><FriendRequest open={true}/></MuiThemeProvider>,document.getElementById('name'));
}