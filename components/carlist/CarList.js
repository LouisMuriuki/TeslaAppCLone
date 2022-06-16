import { View,FlatList,Dimensions } from 'react-native'
import React from 'react'
import CarItem from '../caritem/index';
import styles from './style'
import Cars from './Cars'
const CarList = () => {
  return (
    <View style={styles.carlist}>
      <FlatList 
      data={Cars}
      renderItem={({item})=> <CarItem
      name={item.name}
      tagline={item.tagline} 
      image={item.Image}/>}
      showsVerticalScrollIndicator={false}
      snapToAlignment='start'
      decelerationRate='fast'
      snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarList