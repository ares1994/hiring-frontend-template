import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal: 15,
        marginTop:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection: "row",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:15,

    },
    title:{
        fontWeight:"700",
        fontSize:18
    },
    subTitle:{ color: "#bbb", fontWeight:"500",marginTop: 2 },
    date:{ color: "#999", fontWeight:"700", fontSize: 15, marginTop: 2 }
});

export default styles
