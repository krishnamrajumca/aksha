import React,{useState} from 'react';
import {StyleSheet,Image} from 'react-native'
import {View,Card,Item,Label} from 'native-base'
import {Text,TextInput} from '../../styledComponents'

const Login = () =>{
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const onUsernameChange = (username) =>{
    setUsername(username)
    console.log(username)
  }
  const onPasswordChange = (password)=>{
    setPassword(password)
  }
  return(

    <View style={styles.login_content}>

      <Card style={styles.card}>
        <Image source={require('../../images/logo.png')}/>
        <TextInput label="Username" onChange={onUsernameChange} value={username}/>
        <TextInput label="Password" onChange={onPasswordChange} value={password} />
      </Card>
    </View>

  )
}

const styles = StyleSheet.create({
  login_content:{
    display:'flex',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  item:{
    marginBottom:10
  },
  card:{
    padding:20,
    width:'80%',
    maxWidth:400,
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
})
export default Login;
