import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%'
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
        fontSize: 40,
        fontWeight: '600',

    },
    subTitle: {
        fontSize: 18,
        color: 'grey',
    }
})
export default styles