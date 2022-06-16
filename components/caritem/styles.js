import { StyleSheet,Dimensions } from 'react-native'
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    titles: {
        marginTop: '30%',
        alignItems: 'center',
        width: '100%',

    },
    title: {
        fontSize: 30,
        fontWeight: '600',

    },
    subTitle: {
        fontSize: 14,
        color: 'whitesmoke',
    },
    buttonContainer:{
        bottom:30,
        width:'100%',
        position:'absolute'
    }

})
export default styles