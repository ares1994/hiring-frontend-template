import React, {useState} from "react";
import {Switch, Text, View} from "react-native";
import styles from "../constants/styles";
import {AntDesign} from '@expo/vector-icons';

function DeviceInfo({
                        name,
                        model_number,

                    }) {

    const [switchState, setSwitchState] = useState(false)

    const colors = {
        green: "#27AE60",
        red: "#EB5757"
    }


    return (
        <View style={{
            flexDirection: "column",
            flex: 1,
            alignItems: "stretch",
            justifyContent: "space-between",
            height: 100,
            marginStart: 10
        }}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{model_number}</Text>

            </View>

            <View style={{flexDirection: "row"}}>
                <Switch

                    trackColor={{false: colors.red, true: colors.green}}
                    thumbColor={'#f4f3f4'}
                    ios_backgroundColor={colors.red}
                    onValueChange={setSwitchState}
                    value={switchState}
                />

                <View style={{
                    flex: 1,
                    marginStart: 15,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "row"
                }}>

                    <AntDesign name={switchState ? "lock1" : "unlock"} size={25}
                               color={switchState ? colors.green : colors.red}/>
                    <Text>{switchState ? "Locked" : "Unlocked"}</Text>

                </View>
            </View>
        </View>)
}


function DeviceCard({item: {attributes}}) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    borderRadius: 50,
                    width: 100,
                    height: 100,
                    backgroundColor: "#eee",
                    borderWidth: 1,
                    borderColor: "#ccc"
                }}
            />
            <DeviceInfo {...attributes} />
        </View>
    );
}


export default DeviceCard
