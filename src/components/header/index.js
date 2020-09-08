import React from 'react'
import {StyleSheet,Image} from 'react-native'
import {View,Text,Header,Left,Right,Body,Title} from 'native-base'

const Head = ()=>(
  <Header style={styles.header}>

    <Body>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
      <Image source={require('../../images/logo.png')} style={{width:160,height:45,marginRight:10}}/>
      <Title style={{color:'white'}}>Header</Title>
      </View>
    </Body>
  </Header>
)


const styles = StyleSheet.create({
  header:{
    height:50,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'#39345a',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

export default Head
