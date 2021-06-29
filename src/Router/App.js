import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NotFound } from "../Pages/NotFound";
import { Home } from "../Pages/Home";
import { Paypal } from "../Pages/Paypal";
import { Profile } from "../Pages/Profile";
import { Login } from "../Pages/Login"
import { makeStyles } from "@material-ui/core";


function App() {
  const user = 'josi'
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <BrowserRouter>
       {
         !user ? (<Login/>) :(
           <Switch>
             <Route path='/profile' component={Profile}/>
               
             <Route path='/chckout' component={Paypal}/>

             <Route path='/'  component={Home}/>

             <Route component={NotFound}/>

           </Switch>
         )
       }
      </BrowserRouter>
    </div>
  );
}
const useStyles = makeStyles(()=>({
  root:{
   minHeight: "100vh",
  //  background: "#111"
  },
}))

export default App;
