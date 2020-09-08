import {Input,Item,Label} from 'native-base'
import React from 'react'
import {StyleSheet} from 'react-native'
const TextInput = props=>{
  console.log(props.label + " is rendering with value "+ props.value)
  return(
    <Item  regular  fixedLabel style={styles.item}>

      <Input
        {...props}
        onChangeText={val => props.onChange(val)}
        placeholder={props.label}
        />
    </Item>
  )
}
const styles = StyleSheet.create({

  item:{
    marginBottom:10,
    marginTop:10,
    borderRadius:10,
    width:'100%',
    paddingLeft:5,
    height:50
  }
})
export default TextInput;
