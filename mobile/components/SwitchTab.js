import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

const SwitchTab = ({options,active,color,setActive}) => {

    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                {options.map((data,i)=>(
                    <TouchableWithoutFeedback key={i}  onPress={()=>setActive(data.id)}>
                        <View style={[styles.tab,active===data.id&&[{...styles[color]},styles.active]]}>
                            <Text style={[styles.text,active===data.id&&{color: "black"}]}>{data.title}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex:1,
        paddingHorizontal:25,

        // paddingVertical: 5
    },

    bg:{
        padding: 25,
        height:200
    },

    bar:{
        backgroundColor:"#ccc",
        marginTop:25,
        flexDirection:"row",
        borderRadius:10,
    },

    secondary:{
        backgroundColor:"#fff",
    },

    primary:{
        backgroundColor:"#fff",
    },

    tab:{
        flex:1,
        padding:5,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:10,
        borderRadius:10,
    },
    active:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation:2,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin:2
    },
    text:{
        fontSize:12,
        fontWeight:"700",
        color:"#000"
    }
});


export default SwitchTab;
