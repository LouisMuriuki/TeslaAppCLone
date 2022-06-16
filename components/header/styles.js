import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        top: 35,
        position: "absolute",
        flexDirection:'row',
        justifyContent:"space-between",
        width:'100%',
        paddingHorizontal:20,
        alignItems:'center',
    },
    logo: {
        width: 100,
        height: 20,
        tintColor:'black'
    },
    menu: {
        width: 25,
        height: 25,
        tintColor:'black'
    }
})

export default styles