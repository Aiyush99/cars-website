import Grid from "./components/Grid";
import './App.css';
import Navbar from "./components/Navbar";
import React,{Component,Fragment} from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home"

class App extends Component {
 




  render(){

  
  return (

    <Router>
    <div className="App">
    <Navbar/>
    </div>
    <Switch>
    <Route exact path= "/"component={Grid}/>
      <Route path= "/home"component={Home}/>
     

    </Switch>
    </Router>
  );
  }
}

export default App;
