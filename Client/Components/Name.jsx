import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateQuestion from './CreateQuestion';
const NextButton = () =>(
		<RaisedButton label="Next" primary={true} style={{marginRight: 12}} />
		);
export default class Name extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    return(
				<div>
				<h1>
					Do you want to add an category?
    			</h1>
   			<small>
     				Try to have it as descriptive as you can.
    		</small><br/>
      		<TextField ref='name'
				hintText="My Awesome Name"
      			floatingLabelText="Name" value={this.state.value} onChange={this.handleChange} /><br/>
      			<RaisedButton label="Next" primary={true} style={{marginRight: 12}} onTouchTap={topic} /> 
      			<div id="name"></div>
      			</div>
	);
}
}
	function topic()
	{ 
		ReactDOM.render(<MuiThemeProvider><CreateQuestion open={true}/></MuiThemeProvider>,document.getElementById('name'));
	}