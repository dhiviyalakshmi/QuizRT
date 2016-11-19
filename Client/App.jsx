import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import Topic from './Components/Topic';
import QuestionPoolDrawer from './Components/QuestionPool2';
import DisplayQuestions from './Components/DisplayQuestions1';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(<MuiThemeProvider>
			  <div style={{width: window.innerWidth}}>
			  <Router history={hashHistory}>
			  	<Route path='/' component={Topic}></Route>
			  		<Route path="/questionpool"  component={QuestionPoolDrawer}></Route>
			  		<Route path="/displayquestions" component={DisplayQuestions}></Route>
			  				  	
			  </Router>
			  </div>              
  </MuiThemeProvider>,document.getElementById('container'));