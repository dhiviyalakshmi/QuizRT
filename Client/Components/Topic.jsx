import React from 'react';
import { Link, hashHistory } from "react-router";
import {Grid, Row, Col} from 'react-flexbox-grid';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
import QuestionPoolDrawer from './QuestionPool1';

var category=[];
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  rootDesktop: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingRight: '20px',
  },
  gridList: {
     width: '100%',
     height:'100%',
    overflowY: 'auto',
    margin: 'auto',
    padding: '10px 10px 10px 10px',
  },
  paper:{
  width: '100%',
  margin: 'auto',
  marginTop: '10px',
  padding: '10px 10px 10px 10px',
  textAlign: 'center',
   color:'#C62828',
},
};

const tilesData = [
  {
    img: '../img/sports.png',
    title: 'Sports',
  },
  {
    img: '../img/politics.jpg',
    title: 'Politics',
  },
  {
    img: '../img/sports.png',
    title: 'Sports2',
  },
  {
    img: '../img/sports.png',
    title: 'Sports3',
  },
  {
    img: '../img/sports.png',
    title: 'Sports4',
  },
  {
    img: '../img/sports.png',
    title: 'Sports5',
  },
  {
    img: '../img/sports.png',
    title: 'Sports6',
  },
  {
    img: '../img/sports.png',
    title: 'Sports7',
  },
  {
    img: '../img/sports.png',
    title: 'Sports8',
  },
];



class ChooseCategory extends React.Component{
 constructor(props) {
    super(props);
    this.state={limit: 6,showMore: true};
    }
  render(){
     if(window.innerWidth < 768)
    {
    return(    
  <div style={styles.root}>
    <GridList 
    cols={1}
      cellHeight={300}
      style={styles.gridList}>
      {tilesData.map((tile) => ( 
        <GridTileInternal
          key={tile.title}
          title={tile.title}
          img={tile.img} >
        </GridTileInternal>
      ))}
    </GridList>
  </div>
  
);
  }
  else if(window.innerWidth > 768&& window.innerWidth < 1024)
    {
    return(    
  <div style={styles.root}>
    <GridList 
    cols={2}
      cellHeight={300}
      style={styles.gridList}>
      {tilesData.map((tile) => (
        <GridTileInternal
          key={tile.title}
          title={tile.title}
          img={tile.img} >
        </GridTileInternal>
      ))}
    </GridList>
  </div>
  
);
  }
  else
  {
    return(
      <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
  <div style={styles.rootDesktop}>
    <GridList 
    cols={3}
      cellHeight={300}
      style={styles.gridList}>
      {tilesData.map((tile) => (
        <GridTileInternal
          key={tile.title}
          title={tile.title}
          img={tile.img} >
        </GridTileInternal>
      ))}
    </GridList>
  </div>
  </Col>
  </Row>
  </Grid>
);  
  }
}
}

class GridTileInternal extends React.Component {
  constructor(props){
    super(props);
      this.state={isSelected: false};
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(e) {
    e.preventDefault();
    category.push(this.props.title);
   
    alert(category);
    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));
    
  }
  showMore() {
    this.setState({
      showMore: false, 
    });
  }
  render(){
    return (
          <GridTile
          title={this.props.title}
          actionIcon={<IconButton tooltip="Choose" 
          touch={true} 
          tooltipPosition="top-left" 
          onClick={this.handleClick}>
          {this.state.isSelected ? <StarBorder color="green"/>:<StarBorder color="white"/>}
          </IconButton>}>

          <img src={this.props.img} />
        </GridTile>


    );
  }
}

export default class Topic extends React.Component{
  render(){
    return(
      <div>
      <Grid>
       <Paper style={styles.paper} zDepth={3} rounded={false} >
        <Row>
         <Col xs={12} sm={12} md={12} lg={12}>
        <div>
          <h1>
          Choose The Category
          </h1>
          </div>
          </Col>
        </Row>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div>
          <ChooseCategory />
           </div>
           </Col>
           </Row>
           <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
            <div>
           <Link to={{pathname:'/questionpool/', query:{categories: category}}}>  <RaisedButton label="Click" onClick={this.showMore} fullWidth={true} /></Link>
             </div>
           </Col>
           </Row>
         </Paper>
        </Grid>

        </div>
  );
}
}