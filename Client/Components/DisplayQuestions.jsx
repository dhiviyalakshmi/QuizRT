import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton'
import {blue300, indigo900} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
const styles = {
  chip: {
    marginLeft:50,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    align:'center',
  },
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
function handleRequestDelete(e) {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

export default class DisplayQuestions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var display=[];
    for(var iter in this.props.queSelected)
      {
       display.push(this.props.queSelected[iter]);
      }
      let chips = [];
      for( let item in display)
      {
        chips.push(
        <Chip
          key={item}
          backgroundColor='#C62828'
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}>
          {display[item]}
        </Chip>
        );
      }
    return (
       <Grid>
        <Paper style={styles.paper} zDepth={3} rounded={false} >
        <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
      <div style={styles.wrapper}>
       {chips}
    </div>
        </Col>
         </Row>
          </Paper>  
        </Grid>
        );
}
}