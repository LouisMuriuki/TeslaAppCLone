import { Text, View, ImageBackground  } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../styledbutton/Index'

export default function CarItem({name,tagline,image}) {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles} >
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}</Text>

            </View>
            <View style={styles.buttonContainer}>
                <StyledButton text='Custom Order' type='primary'/>
                <StyledButton text='Existing Inventoty' type='secondary'/>
            </View>
        </View>
    )
}

