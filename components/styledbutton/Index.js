import { View, Text ,Pressable} from 'react-native'
import React from 'react'
import styles  from './style'
const StyledButton = ({text,type}) => {
    const backgroundColor=type==='primary'? 'white': 'grey'
    const color=type==='primary'? 'black': 'white'
  return (
    <View style={styles.container}>
        <Pressable style={[styles.button,{backgroundColor:backgroundColor}]}onPress={()=>console.warn('preesed')}>
        <Text style={[styles.text,{color:color}]}>{text}</Text>
        </Pressable>
      
    </View> 
  )
}

export default StyledButton