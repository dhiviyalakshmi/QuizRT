import React from 'react';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
var tiles=[
	{ques:'1'},
	{ques:'2'},
	{ques:'3'},
	{ques:'4'},
	{ques:'5'},
	{ques:'6'},

];

export default class Example extends React.Component{
	constructor(props) {
    super(props);
    this.state={limit: 6,showMore: true,display:[]};
    }
    showMore() {
    this.setState({
       showMore: false, 
      
    });
  }
	render(){
		tiles.map((tile)=>(
			this.setState.display.push(<Chip key={tile.ques}>{tile.ques}</Chip>)
			))
		return(
			<div>
			{display}
			<RaisedButton label="Show More" onClick={this.showMore} fullWidth={true} />
			</div>
			);
	}
}