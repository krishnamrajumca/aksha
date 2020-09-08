import React from 'react'
import styled from 'styled-components/native'



// const SText = styled.Text`
//   color: #7782aa;
//   fontSize:26px;
//   fontWeight:bold;
// `
const Text = styled.Text(props => ({
  color: props.color || "#7782aa",
  fontSize:props.size || 16
}));
export { Text }
