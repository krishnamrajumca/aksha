import React from 'react'

import { Router, Scene,Stack } from 'react-native-router-flux'
import Login from '../login'
const Routes = () => {
  console.log("routes")
  return(

      <Router >
          <Stack key = "root">
             <Scene key = "login" component = {Login} title = "Home" initial = {true} hideNavBar={true}/>
          </Stack>
      </Router>

 )
}


export default Routes
